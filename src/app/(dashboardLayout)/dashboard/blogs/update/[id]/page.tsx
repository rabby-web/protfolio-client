/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { use } from "react"; // Importing `use` from React
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateBlogs = ({ params }: any) => {
  // Unwrapping the params here using `React.use()`
  const { id }: any = use(params);
  const [formData, setFormData] = useState<any>({
    name: "",
    category: "",
    title: "",
    image: "",
    views: "",
    likes: "",
    content: "",
  });

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(`http://localhost:5000/api/v1/blogs/${id}`);
      const data = await res.json();
      setFormData(data.data); // Assuming the API returns the blog data in `data.data`
    };
    fetchBlogs();
  }, [id]);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      views: Number(formData.views), // Convert to number
      likes: Number(formData.likes), // Convert to number
    };
    console.log(dataToSend);
    const res = await fetch(`http://localhost:5000/api/v1/blogs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });
    if (res.ok) {
      toast.success("Blog updated successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // Optionally redirect after updating
      window.location.href = `/dashboard/blogs`;
    } else {
      toast.error("Failed to update blog.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#39B9B7] mb-6">Update Blog</h1>
        <form
          onSubmit={handleSubmit}
          className="p-6 bg-white rounded-lg shadow-md"
        >
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Author Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#39B9B7]"
            />
          </div>
          {/* Category */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#39B9B7]"
            />
          </div>
          {/* Title */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#39B9B7]"
            />
          </div>
          {/* Image URL */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#39B9B7]"
            />
          </div>
          {/* Views */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Views
            </label>
            <input
              type="number"
              name="views"
              value={formData.views}
              onChange={handleChange}
              placeholder="Views"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#39B9B7]"
            />
          </div>
          {/* Likes */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Likes
            </label>
            <input
              type="number"
              name="likes"
              value={formData.likes}
              onChange={handleChange}
              placeholder="Likes"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#39B9B7]"
            />
          </div>
          {/* Content */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Content
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Content"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#39B9B7]"
              rows={5}
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#39B9B7] text-white p-2 rounded hover:bg-[#2F9E9C] transition-colors"
          >
            Update Blog
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateBlogs;
