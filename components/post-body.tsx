import Footer from "./footer";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-full md:max-w-4xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Footer />
    </div>
  );
};

export default PostBody;
