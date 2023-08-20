import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import type Author from "../interfaces/author";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  date: string;
  author: Author;
  excerpt: string;
};

const PostHeader = ({ title, excerpt, date, author }: Props) => {
  return (
    <div className="relative h-[230px] md:h-[500px] flex flex-col justify-center text-white">
      <div className="absolute w-full h-full left-0 right-0 after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[rgba(0,0,0,0.1)]">
        <img
          className="object-cover w-full h-full"
          title={title}
          src={"https://source.unsplash.com/random"}
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
