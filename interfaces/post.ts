import type Author from "./author";

export type Anchor = { id: string; title: string; level: number };

type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  anchors: Anchor[];
};

export default PostType;
