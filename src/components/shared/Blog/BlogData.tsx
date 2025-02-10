import React from "react";
import BlogPostCard from "./BlogPostCard";

interface Blog {
  _id: string;
  category: string;
  name: string;
  image: string;
  title: string;
  content: string;
  isPublished: boolean;
  views?: number;
  likes?: number;
}

const BlogData = async () => {
  const res = await fetch("http://localhost:5000/api/v1/blogs", {
    cache: "no-store",
  });

  const blogsData = await res.json();
  const blogs: Blog[] = blogsData.data; // Explicitly define the type
  return (
    <div>
      <h1 className="text-center text-3xl">Feature Project</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-1 gap-8 w-[90%] mx-auto my-6 container">
        {blogs.map((blog: Blog) => (
          <BlogPostCard blog={blog} key={blog._id} />
        ))}
      </div>
    </div>
  );
};

export default BlogData;
