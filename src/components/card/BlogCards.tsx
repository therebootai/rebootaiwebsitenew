import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsBoxArrowUpRight, BsChatLeftText } from "react-icons/bs";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { PiFolderSimpleUserThin } from "react-icons/pi";

interface Blog {
  img: string;
  createdAt: string;
  category: string;
  comments: number | string;
  viewsCount: number | string;
  heading: string;
  description: string;
  postedBy: string;
}


interface BlogCardsProps {
  blog: Blog;
}

const BlogCards :React.FC<BlogCardsProps> = ({ blog }) => {

  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short", // short month -> "Dec"
    year: "numeric",
  });
  return (
    <div className=" border border-[#F5F5F5] rounded-lg p-4 !h-full flex flex-col w-full gap-3">
      <div>
        <div className="relative min-h-[15rem] md:min-h-[15rem]">
          <Image
            fill
            src={blog.img}
            alt="blog cover"
            className="rounded-t-lg object-cover !h-[15rem]"
          />
        </div>
        <span className="relative bottom-4 left-4 px-6 py-0.5 bg-custom-darkblue text-white xl:text-sm text-xs rounded-full">
          {formattedDate}
        </span>
      </div>
      <div className="flex justify-between gap-4 h-[2.5rem]">
        <div className="flex items-center gap-1 text-[11px]">
          <span className="p-1 inline-flex items-center justify-center rounded-full bg-[rgba(67,_133,_245,_0.10)] text-primary">
            <PiFolderSimpleUserThin />
          </span>
          <span className="text-[#888] font-medium">
            {" "}
            {blog.category.split(" ").slice(0, 2).join(" ")}
          </span>
        </div>
        <div className="flex items-center gap-1 text-[11px]">
          <span className="p-1 inline-flex items-center justify-center rounded-full bg-[rgba(67,_133,_245,_0.10)] text-primary">
            <BsChatLeftText />
          </span>
          <span className="text-[#888] font-medium">
            {blog.comments} Min Read
          </span>
        </div>
        <div className="flex items-center gap-1 text-[11px]">
          <span className="p-1 inline-flex items-center justify-center rounded-full bg-[rgba(67,_133,_245,_0.10)] text-primary">
            <MdOutlineRemoveRedEye />
          </span>
          <span className="text-[#888] font-medium">
            {blog.viewsCount} Views
          </span>
        </div>
      </div>
      <h1 className="text-custom-black text-base font-semibold onelinelimit">
        {blog.heading}
      </h1>
      <p
        className="text-custom-textgray text-sm line-clamp-3"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      ></p>
      <div className="flex justify-between">
        <span className="font-medium text-custom-textgray text-sm">
          - By {blog.postedBy}
        </span>
        <div className="text-custom-darkblue text-sm inline-flex items-center gap-1">
          <span>Read More</span>
          <BsBoxArrowUpRight className="size-4" />
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
