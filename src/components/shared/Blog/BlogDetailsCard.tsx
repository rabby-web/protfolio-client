import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaEye, FaHeart } from "react-icons/fa";
import { Blog } from "@/types";

const BlogDetailsCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className="min-h-screen mx-auto  p-4">
      <div className="max-w-4xl mx-auto w-full rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        {/* Blog Image */}
        <div className="relative h-96 w-full">
          <Image
            src={blog.image || "/default-image.jpg"} // Provide a fallback image
            alt={blog.name}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-t-lg"
            priority
          />
        </div>

        {/* Blog Content */}
        <div className="p-6">
          {/* Blog Category */}
          <span
            className="inline-block bg-[#39B9B7] bg-opacity-20 text-[#39B9B7] dark:text-[#39B9B7] text-xs font-semibold px-2.5 py-0.5 rounded mb-4"
            style={{ backgroundColor: "rgba(57, 185, 183, 0.1)" }} // Custom background opacity
          >
            {blog.category}
          </span>

          {/* Blog Title */}
          <h2 className="mt-2 text-3xl font-bold text-gray-800 dark:text-gray-200 hover:text-[#39B9B7] transition-colors duration-300">
            {blog.title}
          </h2>

          {/* Blog Content */}
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {blog.content}
          </p>

          {/* Blog Stats (Views and Likes) */}
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <FaEye className="text-[#39B9B7]" />
              <span>{blog.views || 0} Views</span>
            </div>
            <div className="flex items-center gap-2">
              <FaHeart className="text-[#39B9B7]" />
              <span>{blog.likes || 0} Likes</span>
            </div>
          </div>

          {/* Link to Blog List Page */}
          <div className="mt-8">
            <Link
              href="/blogs" // Link to the blog list page
              className="flex items-center justify-center gap-2 bg-[#39B9B7] hover:bg-[#2F9E9C] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsCard;
