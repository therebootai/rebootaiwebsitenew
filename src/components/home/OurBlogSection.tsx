"use client";
import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCards from "../card/BlogCards";
import { useRouter } from "next/navigation";

export interface BlogItem {
  img: string; // non-null for Next/Image
  createdAt: string;
  category: string;
  comments: number | string;
  viewsCount: number | string;
  heading: string;
  description: string;
  postedBy: string;
  blogId: string; // used for key and view PATCH
}

const OurBlogSection = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [autoplay, setAutoplay] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 350) {
        setSlidesToShow(1);
        setAutoplay(true);
      } else if (window.innerWidth <= 460) {
        setSlidesToShow(1);
        setAutoplay(true);
      } else if (window.innerWidth <= 860) {
        setSlidesToShow(2);
        setAutoplay(true);
      } else if (window.innerWidth <= 1224) {
        setSlidesToShow(3);
        setAutoplay(true);
      } else if (window.innerWidth <= 1380) {
        setSlidesToShow(3);
        setAutoplay(true);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShow(3);
        setAutoplay(true);
      } else {
        setSlidesToShow(3);
        setAutoplay(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      try {
        const response = await fetch(
          `${backendUrl}/api/blogs/get?isdraft=false&active=true&limit=10`
        );
        const data = await response.json();

        if (response.ok) {
          // Map blogs into the `blogData` format
          const transformedBlogs = data.data.map(
            (blog: any): BlogItem => ({
              createdAt: new Date(blog.createdAt).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
              category: blog.category,
              comments: blog.comments || 0,
              viewsCount: blog.viewsCount || 0,
              heading: blog.blogTitle,
              description: blog.writeBlog || "",
              postedBy: blog.publisherName || "Unknown",
              blogId: blog.blogId,
              img: blog.blogThumbnails?.secure_url || null,
            })
          );
          setRelatedBlogs(transformedBlogs);
        }
      } catch (error) {
        console.error("Error fetching related blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedBlogs();
  }, []);

  const handleBlogClick = async (blog: BlogItem) => {
    try {
      await fetch(`${backendUrl}/api/blogs/${blog.blogId}/view`, {
        method: "PATCH",
      });

      router.push(`/blogs/${blog.heading.replace(/\s+/g, "-").toLowerCase()}`);
    } catch (error) {
      console.error("Error incrementing view count:", error);
    }
  };

  return (
    <div className="flex  justify-center items-center">
      <div className="w-full max-w-[1200px] lg:p-8 p-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h4>Latest Blogs</h4>
          <div className="flex justify-between items-center ">
            <h1 className="text-custom-black text-xl md:text-2xl lg:text-3xl font-semibold">
              Some of Our Latest Helpful
              <span className="bg-linear-to-r from-custom-darkblue to-custom-green bg-clip-text text-transparent">
                {" "} Blogs
              </span>{" "}
            </h1>
          </div>
        </div>
        <div className="w-full ">
          <Swiper
            spaceBetween={10}
            slidesPerView={slidesToShow}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay]}
            className="!h-auto"
          >
            {!loading &&
              relatedBlogs.map((blog: BlogItem) => (
                <SwiperSlide key={blog.blogId} className="!h-auto">
                  <div
                    onClick={() => handleBlogClick(blog)}
                    className=" cursor-pointer !h-full "
                  >
                    <BlogCards blog={blog} />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurBlogSection;
