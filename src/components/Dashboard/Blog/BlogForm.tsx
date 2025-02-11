"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BlogForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    title: "",
    image: "",
    views: "",
    likes: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Convert views and likes to numbers
      const dataToSend = {
        ...formData,
        views: Number(formData.views), // Convert to number
        likes: Number(formData.likes), // Convert to number
      };
      console.log(dataToSend);
      const response = await fetch("http://localhost:5000/api/v1/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend), // Send the converted data
      });

      if (response.ok) {
        router.push("/blog"); // Redirect to the blog page
      } else {
        console.error("Failed to create blog");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Create Blog</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 bg-gray-50 rounded-lg shadow-md"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Author Name"
          required
          className="p-2 border border-gray-300 rounded"
        />
        {/* Category */}
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          required
          className="p-2 border border-gray-300 rounded"
        />
        {/* Title */}
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="p-2 border border-gray-300 rounded"
        />
        {/* Image URL */}
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
          className="p-2 border border-gray-300 rounded"
        />
        {/* Views */}
        <input
          type="number"
          name="views"
          value={formData.views}
          onChange={handleChange}
          placeholder="Views"
          required
          className="p-2 border border-gray-300 rounded"
        />
        {/* Likes */}
        <input
          type="number"
          name="likes"
          value={formData.likes}
          onChange={handleChange}
          placeholder="Likes"
          required
          className="p-2 border border-gray-300 rounded"
        />
        {/* Content */}
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Content"
          required
          rows={4}
          className="p-2 border border-gray-300 rounded"
        />
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
}
