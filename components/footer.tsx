import twitterIcon from "../assets/images/twitter.svg";
import redditIcon from "../assets/images/reddit.svg";

// TODO: 分享地址
const PREFIX = "http://lit-forest.github.io";

const platforms = [
  {
    name: "Twitter",
    backgroundColor: "#55acee",
    sharerPrefix: "https://twitter.com/intent/tweet?text=",
    icon: twitterIcon.src,
  },
  {
    name: "Reddit",
    backgroundColor: "#0976b4",
    sharerPrefix: "https://www.reddit.com/submit?url=",
    icon: redditIcon.src,
  },
];

const Footer = () => {
  return (
    <footer className="max-w-4xl mx-auto pt-12 pb-30">
      {/* <Container> */}
      <div className="border-t-1 border-[#e9e1e1] dark:border-[#414141] pl-4 md:pl-0">
        <p className="mb-5">COMMENT ON:</p>
        <ul className="m-0 p-0">
          {platforms.map((platform) => (
            <li
              key={platform.name}
              className="inline-block h-9 w-12 mr-2 border-1 border-solid border-[#e9e1e1] dark:border-[#414141] rounded-[3px] cursor-pointer"
            >
              <a
                className="share inline-block h-full w-full flex items-center justify-center"
                target="_blank"
                // href={`https://twitter.com/intent/tweet?text=http://lit-forest.github.io${slug}`}
              >
                <img
                  src={platform.icon}
                  alt={platform.name}
                  className="h-5 w-5"
                />
                {/* <i className="icon-twitter"></i> */}
              </a>
            </li>
          ))}

          {/* <li style={{ display: "inline-block", marginRight: "0.5em" }}>
              <a
                style={{
                  padding: "8px 17px",
                  border: "1px solid #abb0b7",
                  borderRadius: 3,
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#333",
                  transition: "all .2s",
                  ":hover": {
                    backgroundColor: "#3b5998",
                    color: "#fff",
                  },
                }}
                target="_blank"
                // href={`https://www.facebook.com/sharer/sharer.php?u=http://lit-forest.github.io${slug}`}
              >
                <i className="icon-facebook"></i>
                <span style={{ display: "none" }} className="share">
                  Facebook
                </span>
              </a>
            </li>
            <li style={{ display: "inline-block", marginRight: "0.5em" }}>
              <a
                style={{
                  padding: "8px 17px",
                  border: "1px solid #abb0b7",
                  borderRadius: 3,
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#333",
                  transition: "all .2s",
                  ":hover": {
                    backgroundColor: "#dd4b39",
                    color: "#fff",
                  },
                }}
                target="_blank"
                // href={`https://plus.google.com/share?url=http://lit-forest.github.io${slug}`}
              >
                <i className="icon-google-plus"></i>
                <span style={{ display: "none" }} className="share">
                  Google+
                </span>
              </a>
            </li>
            <li style={{ display: "inline-block", marginRight: "0.5em" }}>
              <a
                style={{
                  padding: "8px 17px",
                  border: "1px solid #abb0b7",
                  borderRadius: 3,
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#333",
                  transition: "all .2s",
                  ":hover": {
                    backgroundColor: "#0976b4",
                    color: "#fff",
                  },
                }}
                target="_blank"
                // href={`https://www.reddit.com/submit?url=http://lit-forest.github.io${slug}`}
              >
                <i className="icon-reddit"></i>
                <span style={{ display: "none" }} className="share">
                  Reddit
                </span>
              </a>
            </li> */}
        </ul>
      </div>
      {/* </Container> */}
    </footer>
  );
};

export default Footer;
