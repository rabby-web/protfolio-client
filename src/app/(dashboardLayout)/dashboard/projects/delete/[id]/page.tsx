/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { use } from "react"; // Importing `use` from React
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteProject = ({ params }: any) => {
  // Unwrapping the params using `React.use()`
  const { id }: any = use(params);
  const [project, setMember] = useState<any | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchMember = async () => {
      const res = await fetch(`http://localhost:5000/api/v1/projects/${id}`);
      const data = await res.json();
      setMember(data);
    };
    fetchMember();
  }, [id]);

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/api/v1/projects/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      toast.success("Blog deleted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      router.push("/dashboard/projects"); // Redirect to blogs list after delete
    } else {
      toast.error("Failed to delete blog.", {
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

  console.log(project?.data);

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600">Delete Blog</h1>
      {project ? (
        <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
          <p className="text-lg font-semibold">
            Are you sure you want to delete the Blog?
          </p>
          <p className="mt-2">Name: {project?.data?.name}</p>
          <p className="mt-2">Category: {project?.data?.category}</p>
          <p className="mt-2">Title: {project?.data?.title}</p>

          <button
            onClick={handleDelete}
            className="bg-red-600 text-white p-2 mt-4 rounded hover:bg-red-700"
          >
            Delete Blog
          </button>
        </div>
      ) : (
        <p>Loading blog details...</p>
      )}
      <ToastContainer />
    </div>
  );
};

export default DeleteProject;
