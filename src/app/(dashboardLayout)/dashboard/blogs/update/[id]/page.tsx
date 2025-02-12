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
    <div>
      <h1 className="text-3xl font-bold text-blue-600">Update Blog</h1>
      <form
        onSubmit={handleSubmit}
        className="mt-6 p-4 bg-white shadow-md rounded-lg"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="p-2 mt-4 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="p-2 mt-4 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="p-2 mt-4 border border-gray-300 rounded w-full"
        />
        <input
          type="number"
          name="views"
          value={formData.views}
          onChange={handleChange}
          placeholder="Views"
          className="p-2 mt-4 border border-gray-300 rounded w-full"
        />
        <input
          type="number"
          name="likes"
          value={formData.likes}
          onChange={handleChange}
          placeholder="Likes"
          className="p-2 mt-4 border border-gray-300 rounded w-full"
        />
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Content"
          className="p-2 mt-4 border border-gray-300 rounded w-full"
          rows={5}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 mt-4 rounded hover:bg-blue-700"
        >
          Update Blog
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateBlogs;
