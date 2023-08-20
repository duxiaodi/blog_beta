import { remark } from "remark";
import html from "remark-html";
import prism from "remark-prism";
import { Anchor } from "../interfaces/post";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html, { sanitize: false })
    .use(prism)
    .process(markdown);

  const anchors: Anchor[] = [];

  const content = result
    .toString()
    .replace(/<\h(1|2|3|4)>(.+?)<\/\h(1|2|3|4)>/g, replacer(anchors));
  return {
    content,
    anchors,
  };
}

const replacer =
  (anchors: Anchor[]) => (match: string, p1: string, p2: string) => {
    const id = p2.replace(/\s+/g, "-").toLowerCase();
    anchors.push({ id, title: p2, level: Number(p1) });
    return `<h${p1} id="${id}" class="header-anchor"><a class='header-anchor-link' href='#${id}'>${p2}</a></h${p1}>`;
  };
