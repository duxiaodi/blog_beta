import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-[24px] md:text-[46px] font-bold tracking-tighter leading-tight md:leading-none mb-6 md:mb-12 text-center md:text-left">
      {children}
    </h1>
  );
};

export default PostTitle;
