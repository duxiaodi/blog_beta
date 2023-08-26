import Footer from "./footer";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
  slug: string;
};

const PostBody = ({ content, slug }: Props) => {
  return (
    <div className="post-body max-w-full md:max-w-4xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Footer slug={slug} />
    </div>
  );
};

export default PostBody;
