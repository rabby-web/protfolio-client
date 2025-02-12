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
    <div className="flex flex-col items-center  min-h-screen px-4">
      <h1 className="text-3xl font-bold text-[#39B9B7] mb-6">Delete Project</h1>

      {project ? (
        <div className="w-full max-w-md bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 ">
          <p className="text-lg font-semibold text-gray-800 dark:text-white">
            Are you sure you want to delete this blog?
          </p>

          <div className="mt-4 text-gray-600 dark:text-gray-300">
            <p className="font-medium">
              <span className="font-semibold text-gray-900 dark:text-white">
                Name:
              </span>{" "}
              {project?.data?.name}
            </p>
            <p className="mt-2 font-medium">
              <span className="font-semibold text-gray-900 dark:text-white">
                Category:
              </span>{" "}
              {project?.data?.category}
            </p>
            <p className="mt-2 font-medium">
              <span className="font-semibold text-gray-900 dark:text-white">
                Title:
              </span>{" "}
              {project?.data?.title}
            </p>
          </div>

          <button
            onClick={handleDelete}
            className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition duration-300 shadow-md"
          >
            Delete Blog
          </button>
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-300">
          Loading blog details...
        </p>
      )}

      <ToastContainer />
    </div>
  );
};

export default DeleteProject;
