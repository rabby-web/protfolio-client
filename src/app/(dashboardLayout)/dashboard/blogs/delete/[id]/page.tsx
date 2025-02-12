/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { use } from "react"; // Importing `use` from React
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteBlog = ({ params }: any) => {
  // Unwrapping the params using `React.use()`
  const { id }: any = use(params);
  const [member, setMember] = useState<any | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchMember = async () => {
      const res = await fetch(`http://localhost:5000/api/v1/blogs/${id}`);
      const data = await res.json();
      setMember(data);
    };
    fetchMember();
  }, [id]);

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/api/v1/blogs/${id}`, {
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
      router.push("/dashboard/blogs"); // Redirect to blogs list after delete
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

  console.log(member?.data);

  return (
    <div>
      <div className="container mx-auto p-4">
        {" "}
        {/* Added container for centering */}
        <h1 className="text-3xl font-bold text-[#39B9B7] mb-4 ">
          Delete Blog
        </h1>{" "}
        {/* Added margin bottom */}
        <div className="bg-white shadow-md rounded-lg p-6">
          {" "}
          {/* Improved padding */}
          <p className="text-lg font-semibold text-[#39B9B7] mb-2">
            {" "}
            {/* Added margin bottom */}
            Are you sure you want to delete the Blog?
          </p>
          <p className="mt-2">Name: {member?.data.name}</p>
          <p className="mt-2">Category: {member?.data.category}</p>
          <p className="mt-2">Title: {member?.data.title}</p>
          {/* Removed duplicate Name field */}
          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 mt-4 rounded-lg transition duration-300" // Improved button styling
          >
            Delete Blog
          </button>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />{" "}
        {/* Toast configuration */}
      </div>
    </div>
  );
};

export default DeleteBlog;
