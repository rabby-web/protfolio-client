"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProjectForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    title: "",
    image: "",
    content: "",
    technologies: [] as string[], // Ensure technologies is an array of strings
    liveDemoLink: "",
    repoLinkClient: "",
    repoLinkServer: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTechnologiesChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setFormData({ ...formData, technologies: selectedOptions });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const dataToSend = {
        ...formData,
      };
      console.log(dataToSend);
      const response = await fetch("http://localhost:5000/api/v1/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        toast.success("Project created successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        router.push("/projects"); // Redirect to the projects page
      } else {
        toast.error("Failed to create project.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.error("Failed to create project");
      }
    } catch (error) {
      toast.error("Error submitting form. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="p-6 md:w-2/3 mx-auto">
      <h1 className="text-3xl font-bold text-[#39B9B7] mb-6">Create Project</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Project Name"
          required
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#39B9B7]"
        />
        {/* Category */}
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          required
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#39B9B7]"
        />
        {/* Title */}
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#39B9B7]"
        />
        {/* Image URL */}
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#39B9B7]"
        />
        {/* Technologies */}
        <select
          name="technologies"
          value={formData.technologies}
          onChange={handleTechnologiesChange}
          multiple
          required
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#39B9B7]"
        >
          <option value="React">React</option>
          <option value="Node.js">Node.js</option>
          <option value="MongoDB">MongoDB</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
        </select>
        {/* Live Demo Link */}
        <input
          type="url"
          name="liveDemoLink"
          value={formData.liveDemoLink}
          onChange={handleChange}
          placeholder="Live Demo Link"
          required
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#39B9B7]"
        />
        {/* Client Repo Link */}
        <input
          type="url"
          name="repoLinkClient"
          value={formData.repoLinkClient}
          onChange={handleChange}
          placeholder="Client Repository Link"
          required
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#39B9B7]"
        />
        {/* Server Repo Link */}
        <input
          type="url"
          name="repoLinkServer"
          value={formData.repoLinkServer}
          onChange={handleChange}
          placeholder="Server Repository Link"
          required
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#39B9B7]"
        />
        {/* Content */}
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Content"
          required
          rows={4}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#39B9B7]"
        />
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#39B9B7] text-white p-2 rounded hover:bg-[#2F9E9C] transition-colors"
        >
          Create Project
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
