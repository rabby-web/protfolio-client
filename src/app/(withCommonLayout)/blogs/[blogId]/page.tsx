import Link from "next/link"; // Correct import for Link
import Image from "next/image";
import React from "react";
import { FaEye, FaHeart } from "react-icons/fa";

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

const BlogDetailsPage = async ({ params }: { params: { blogId: string } }) => {
  const { blogId } = params;

  try {
    // Fetch blog data from the API
    const res = await fetch(`http://localhost:5000/api/v1/blogs/${blogId}`); // Ensure the endpoint is correct

    // Handle non-OK responses
    if (!res.ok) {
      throw new Error(`Failed to fetch blog: ${res.statusText}`);
    }

    // Parse the response
    const blogsData = await res.json();

    // Check if the response contains valid data
    if (!blogsData || !blogsData.data) {
      throw new Error("Blog data is invalid or missing.");
    }

    const blog: Blog = blogsData.data;

    return (
      <div className="container mx-auto my-10">
        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          {/* Blog Image */}
          <div className="relative h-96 w-full">
            <Image
              src={blog.image || "/default-image.jpg"} // Provide a fallback image
              alt={blog.name}
              fill
              style={{ objectFit: "cover" }}
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
            <h2 className="mt-2 text-2xl font-bold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              {blog.title}
            </h2>

            {/* Blog Content */}
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
              {blog.content}
            </p>

            {/* Blog Stats (Views and Likes) */}
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <FaEye className="inline-block" />
                <span>{blog.views || 0} Views</span>
              </div>
              <div className="flex items-center gap-1">
                <FaHeart className="inline-block" />
                <span>{blog.likes || 0} Likes</span>
              </div>
            </div>

            {/* Link to Blog List Page */}
            <div className="mt-8">
              <Link
                href="/blogs" // Link to the blog list page
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Back to Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    // Handle errors (e.g., display an error message)
    console.error("Error fetching blog details:", error);
    return (
      <div className="container mx-auto my-10 text-center">
        <h1 className="text-2xl font-bold text-red-600">Error</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Failed to load blog details. Please try again later.
        </p>
        <Link
          href="/blogs" // Link to the blog list page
          className="mt-4 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }
};

export default BlogDetailsPage;
