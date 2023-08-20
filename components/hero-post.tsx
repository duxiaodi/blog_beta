import Link from "next/link";
import PostHeader from "./post-header";
import type { Props } from "./post-header";

const HeroPost = ({ slug, ...rest }: Props & { slug?: string }) => {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]" className="cursor-pointer">
      <PostHeader {...rest} />
    </Link>
  );
};

export default HeroPost;
