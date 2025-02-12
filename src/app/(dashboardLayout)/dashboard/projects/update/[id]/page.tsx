/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { use } from "react"; // Importing `use` from React
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProjects = ({ params }: any) => {
  // Unwrapping the params here using `React.use()`
  const { id }: any = use(params);
  const [formData, setFormData] = useState<any>({
    name: "",
    category: "",
    title: "",
    image: "",
    content: "",
    technologies: [] as string[],
    liveDemoLink: "",
    repoLinkClient: "",
    repoLinkServer: "",
  });

  useEffect(() => {
    const fetchProject = async () => {
      const res = await fetch(`http://localhost:5000/api/v1/projects/${id}`);
      const data = await res.json();
      setFormData(data.data); // Assuming the API returns the project data in `data.data`
    };
    fetchProject();
  }, [id]);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTechnologiesChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setFormData({ ...formData, technologies: selectedOptions });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const dataToSend = {
        ...formData,
      };
      console.log(dataToSend);
      const res = await fetch(`http://localhost:5000/api/v1/projects/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
      if (res.ok) {
        toast.success("Project updated successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Redirect to the projects page after updating
        window.location.href = `/dashboard/projects`;
      } else {
        toast.error("Failed to update project.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error("Error updating project. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error("Error updating project:", error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600">Update Project</h1>
      <form
        onSubmit={handleSubmit}
        className="mt-6 p-4 bg-white shadow-md rounded-lg"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Project Name"
          required
          className="p-2 border border-gray-300 rounded w-full"
        />
        {/* Category */}
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          required
          className="p-2 mt-4 border border-gray-300 rounded w-full"
        />
        {/* Title */}
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="p-2 mt-4 border border-gray-300 rounded w-full"
        />
        {/* Image URL */}
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
          className="p-2 mt-4 border border-gray-300 rounded w-full"
        />
        {/* Live Demo Link */}
        <input
          type="url"
          name="liveDemoLink"
          value={formData.liveDemoLink}
          onChange={handleChange}
          placeholder="Live Demo Link"
          required
          className="p-2 mt-4 border border-gray-300 rounded w-full"
        />
        {/* Client Repo Link */}
        <input
          type="url"
          name="repoLinkClient"
          value={formData.repoLinkClient}
          onChange={handleChange}
          placeholder="Client Repository Link"
          required
          className="p-2 mt-4 border border-gray-300 rounded w-full"
        />
        {/* Server Repo Link */}
        <input
          type="url"
          name="repoLinkServer"
          value={formData.repoLinkServer}
          onChange={handleChange}
          placeholder="Server Repository Link"
          required
          className="p-2 mt-4 border border-gray-300 rounded w-full"
        />
        {/* Content */}
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Content"
          required
          rows={5}
          className="p-2 mt-4 border border-gray-300 rounded w-full"
        />
        {/* Technologies */}
        <select
          name="technologies"
          value={formData.technologies}
          onChange={handleTechnologiesChange}
          multiple
          required
          className="p-2 mt-4 border border-gray-300 rounded w-full"
        >
          <option value="React">React</option>
          <option value="Node.js">Node.js</option>
          <option value="MongoDB">MongoDB</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
        </select>
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 mt-4 rounded hover:bg-blue-700"
        >
          Update Project
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateProjects;
