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
    <div className="relative h-[230px] light:bg-[#252b33] md:h-[500px] flex flex-col justify-center text-white">
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
