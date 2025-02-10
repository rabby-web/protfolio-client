import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { FaEye, FaHeart } from "react-icons/fa"; // Import icons for views and likes

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

interface FeatureBlogCardProps {
  blog: Blog;
}

const BlogPostCard: React.FC<FeatureBlogCardProps> = ({ blog }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Blog Image */}
      <div className="relative h-48 w-full">
        <Image
          src={blog.image}
          alt={blog.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Blog Content */}
      <div className="p-6">
        {/* Blog Category */}
        <span className="inline-block bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded">
          {blog.category}
        </span>

        {/* Blog Title */}
        <h2 className="mt-2 text-xl font-bold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
          {blog.title}
        </h2>

        {/* Blog Content Snippet */}
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
          {blog.content}
        </p>

        {/* Blog Stats (Views and Likes) */}
        {/* <div className="mt-4 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <FaEye className="inline-block" />
            <span>{blog.views || 0} Views</span>
          </div>
          <div className="flex items-center gap-1">
            <FaHeart className="inline-block" />
            <span>{blog.likes || 0} Likes</span>
          </div>
        </div> */}

        {/* Link to Blog Details Page */}
        <div className="mt-6">
          <Link
            href={`/blogs/${blog._id}`} // Link to the blog details page
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
