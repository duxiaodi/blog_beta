import DateFormatter from "./date-formatter";
import Link from "next/link";

type Props = {
  title: string;
  date: number;
  excerpt: string;
  slug: string;
  content: string;
};

function formatExcerptFromContent(content: string) {
  return content.slice(0, 200).replace(/#/g, "").replace(/\*/g, "");
}

const PostPreview = ({ title, date, excerpt, slug, content }: Props) => {
  return (
    <div className="px-4 md:px-0">
      <h3 className="text-18 mb-3 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="mb-4 break-all line-3">
        {excerpt || formatExcerptFromContent(content)}
      </p>
    </div>
  );
};

export default PostPreview;
