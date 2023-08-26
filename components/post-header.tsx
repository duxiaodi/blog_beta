import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";

export type Props = {
  title: string;
  date: number;
  excerpt: string;
  coverImage?: string;
};

const PostHeader = ({ title, excerpt, date, coverImage }: Props) => {
  return (
    <div className="relative h-[230px] md:h-[500px] flex flex-col justify-center text-white">
      <div className="absolute w-full h-full left-0 right-0 after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[rgba(0,0,0,0.1)]">
        <img
          className="object-cover w-full h-full"
          title={title}
          src={coverImage || "https://source.unsplash.com/random"}
        />
      </div>
      <div className="relative md:w-[66%] mx-auto px-16">
        <PostTitle>{title}</PostTitle>
        <span className="hidden md:block mb-6">{excerpt}</span>
        <div className="text-center md:text-left">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
