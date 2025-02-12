import React from "react";
import BlogPostCard from "./BlogPostCard";
import { Blog } from "@/types";

const BlogData = async () => {
  const res = await fetch(
    "https://nextjs-blog-protfolio-server.vercel.app/api/v1/blogs",
    {
      cache: "no-store",
    }
  );

  const blogsData = await res.json();
  const blogs: Blog[] = blogsData.data; // Explicitly define the type
  return (
    <div className="py-12">
      <div className="grid lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-1 gap-8 w-[90%] mx-auto my-6 container">
        {blogs.map((blog: Blog) => (
          <BlogPostCard blog={blog} key={blog._id} />
        ))}
      </div>
    </div>
  );
};

export default BlogData;
