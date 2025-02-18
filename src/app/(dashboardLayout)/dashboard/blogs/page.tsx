import { Blog } from "@/types";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { IoEyeSharp } from "react-icons/io5";

const BlogPage = async () => {
  const res = await fetch(
    "https://nextjs-blog-protfolio-server.vercel.app/api/v1/blogs",
    {
      cache: "no-store",
    }
  ); // SSR
  const blogsData = await res.json();
  const blogs: Blog[] = blogsData.data;

  return (
    <div className="container mx-auto pt-10 min-h-screen">
      <h2 className="text-3xl font-bold text-[#39B9B7] dark:text-[#39B9B7] mb-6">
        Manage Blogs
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-700 shadow-md rounded-lg">
          <thead>
            <tr className="bg-[#39B9B7] dark:bg-[#2F9E9C] text-white">
              <th className="py-3 px-4 border border-gray-200 dark:border-gray-700">
                Title
              </th>
              <th className="py-3 px-4 border border-gray-200 dark:border-gray-700">
                Author
              </th>
              <th className="py-3 px-4 border border-gray-200 dark:border-gray-700">
                Category
              </th>
              <th className="py-3 px-4 border border-gray-200 dark:border-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr
                key={blog._id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">
                  {blog.title}
                </td>
                <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">
                  {blog.name}
                </td>
                <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">
                  {blog.category}
                </td>
                <td className="py-3 px-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex gap-4 justify-center">
                    {/* Details Button */}
                    <Link href={`/blogs/${blog._id}`}>
                      <button
                        className="p-2 bg-[#39B9B7] text-white rounded hover:bg-[#2F9E9C] dark:bg-[#39B9B7] dark:hover:bg-[#2F9E9C] transition duration-300"
                        title="View Details"
                      >
                        <IoEyeSharp size={18} />
                      </button>
                    </Link>
                    {/* Update Button */}
                    <Link href={`/dashboard/blogs/update/${blog._id}`}>
                      <button
                        className="p-2 bg-[#39B9B7] text-white rounded hover:bg-[#2F9E9C] dark:bg-[#39B9B7] dark:hover:bg-[#2F9E9C] transition duration-300"
                        title="Edit Blog"
                      >
                        <Pencil size={18} />
                      </button>
                    </Link>
                    {/* Delete Button */}
                    <Link href={`/dashboard/blogs/delete/${blog._id}`}>
                      <button
                        className="p-2 bg-red-600 text-white rounded hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 transition duration-300"
                        title="Delete Blog"
                      >
                        <Trash2 size={18} />
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogPage;
