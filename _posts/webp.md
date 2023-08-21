---
title: web image 加载优化方案-webp
categories: 性能优化
date: 2018-03-07
---

### what is webp

webp 是由 Google 收购 On2 Technologies 后发展出来的格式，以 BSD 授权条款发布。目前已经在不同厂商之间进行了尝试，如 Google、Facebook、ebay、百度、腾讯、淘宝等。

webp 支持有损压缩和无损压缩，可以使用于大多数的图片、半透明、透明都可以；并且有损压缩的程度是可以调节的，用户可以在文件大小和图像质量之间作出权衡，根据研究，webp 通常可以比 jpg 和 jpeg 图像在不损失图像质量的情况下，体积缩小 30%。

目前只有 Chrome、Opera 和最新版的 Edge 浏览器支持 webp,不过 Firefox 也在开发计划中自持 webp，不过现在已经支持 webp 的浏览器已经占到首场份额的 75%，这已经让我们有足够的动力，让我们去使用 webp 了。

### How can I detect browser support for WebP

在[google 开发者平台](https://developers.google.com/speed/webp/faq#how_can_i_detect_browser_support_for_webp)提供了关于检测浏览器是否支持 webp 的方法：

#### Request Header

浏览器在支持 webp 图片格式的情况下，会在请求的 http header accept 中携带 webp/image 的字段，后端接收到请求之后可以按照该形式来判断是否返回 webp 图片内容。

#### 前端代码检测是否支持 webp 格式的图片

```js
// check_webp_feature:
// 'feature' can be one of 'lossy', 'lossless', 'alpha' or 'animation'.
// 'callback(feature, result)' will be passed back the detection result (in an asynchronous way!)
function check_webp_feature(feature, callback) {
  var kTestImages = {
    lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
    lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
    alpha:
      "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
    animation:
      "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
  };
  var img = new Image();
  img.onload = function () {
    var result = img.width > 0 && img.height > 0;
    callback(feature, result);
  };
  img.onerror = function () {
    callback(feature, false);
  };
  img.src = "data:image/webp;base64," + kTestImages[feature];
}
```

当判断当前浏览器支持 webp 的时候，可以在 localStorage 中存储一个状态，方便后面 JS 使用；另外一方面可以给 body 元素添加一个`webpa`的 class,方便以后的 css 选择器使用。

### Using Webp In HTML

使用 HTML5 的新元素 picture，可以使用 source,使浏览器支持 webp 的时候，优先选择 webp 的图片加载 webp 图片。

```html
<picture>
  <source srcset="image.webp" type="image/webp" />
  <img src="image.jpg" type="image/jpeg" alt="image description" />
</picture>
```

### Using Webp In CSS

上面提到的我们可以在判断浏览器支持 webp 之后，给 body 元素添加一个`webpa`class，这个时候我们就可以配合 css 与处理器 less 或者 sass 和 css 选择器的权重使用了

```less
// webp兼容性方案
.webpbg(@url) {
  background-image: url(@url);
  .webpa & {
    background-image: url("@{url}.webp");
  }
}

.test {
  height: 500px;
  width: 100%;
  .webpbg("./bg.jpg");
}
```

编译之后的 css 文件为：

```css
.test {
  height: 500px;
  width: 100%;
  background-image: url("./bg.jpg");
}
.webpa .test {
  background-image: url("./bg.jpg.webp");
}
```

### Using Webp In Lazy Load

图片大量使用的时候我们会使用懒加载进行图片的延迟加载。这时就可以修改懒加载插件，在插件里动态兼容 webp 图片了:

```js
function getWebpSrc(imgsrc, webpimgsrc) {
  var needwebp = false,
    src = "";
  if (window.localStorage && typeof localStorage === "object") {
    needwebp = localStorage.getItem("webpsupport") === "true";
  }
  src = needwebp ? webpimgsrc : imgsrc;
  return src;
}

const imgSmall = document.querySelector(".img-small");
const loadImage = (() => {
  const img = new Image();
  img.src = imgSmall.src;
  img.addEventListener(
    "load",
    (e) => {
      imgSmall.classList.add("loaded");
    },
    false
  );
  const imgLarge = new Image();
  imgLarge.src = getWebpSrc(imgSmall.dataset.large, imgSmall.dataset.largewebp);

  imgLarge.addEventListener(
    "load",
    (e) => {
      imgLarge.classList.add("loaded");
    },
    false
  );
  imgSmall.parentNode.appendChild(imgLarge);
})();
```

### Generate Webp

上面介绍了 webp 的基本的使用的方法，那么如何生产 webp 的图片，主要有一下两种思路，第一是前端生成静态的 webp 的图片，托管在服务器上，第二种是服务端动态生成 webp 的图片。

#### 生成静态 webp 图片

使用[`imagemin`](https://github.com/imagemin/imagemin)可以生成 webp 的图片，简单的使用方法如下：

```js
var imagemin = require("imagemin"), // The imagemin module.
  webp = require("imagemin-webp"), // imagemin's WebP plugin.
  outputFolder = "./img", // Output folder
  PNGImages = "./img/*.png", // PNG images
  JPEGImages = "./img/*.jpg"; // JPEG images

imagemin([PNGImages], outputFolder, {
  plugins: [
    webp({
      lossless: true, // Losslessly encode images
    }),
  ],
});

imagemin([JPEGImages], outputFolder, {
  plugins: [
    webp({
      quality: 65, // Quality setting from 0 to 100
    }),
  ],
});
```

另外一种是在前端资源打包的时候，利用 webpack 的 loader，来生成 webp，不过这样会严重拖慢打包的速度，故不如直接用 node.js 生成图片

#### 服务端动态生成 webp

`nginx+lua+graphicsmagick`这套方案其实做的事情就是 nginx 对域名进行拦截，lua 脚本进行域名后缀规则的匹配，比如说 300x300.png/.webp 类似的后缀，匹配完成后再在 lua 里调用 graphicsmagick 的命令，进行一些图片转换、裁剪等工作。

```lua
if table.isLegal(size_list) and extend == "webp" then
        command = [[/usr/local/GraphicsMagick-1.3.25/bin/gm convert -quality 75 -density 72 +profile "*"  ]] .. ngx.var.image_root ..  originalUri  .. " -geometry " .. area .. " " .. ngx.var.file;
        os.execute(command);
end
```
