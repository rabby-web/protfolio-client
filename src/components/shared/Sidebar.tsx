"use client";

import { useState } from "react";
import Link from "next/link";
import { FaHome, FaEnvelope, FaBars } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { MdManageHistory } from "react-icons/md";
import Image from "next/image";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-[#111827] text-white rounded-md md:hidden"
      >
        <FaBars className="text-2xl" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#111827] p-5 shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
      >
        {/* Brand Name */}
        <div className="flex items-center">
          {" "}
          {/* Use flexbox for alignment */}
          {/* Logo (replace with your actual logo path) */}
          <Image
            src="https://res.cloudinary.com/daxjf1buu/image/upload/v1739348942/r-logo_bmw9vm.png" // Or .png, .jpg, etc.
            alt="Brand Logo"
            width={25} // Adjust size as needed
            height={25} // Adjust size as needed
            className="mr-2" // Add some spacing to the right of the logo
          />
          <h2 className="text-[#39B9B7] text-2xl font-extrabold">Rabby</h2>
        </div>

        <div className="py-2">
          <hr />
        </div>
        {/* Sidebar Links */}
        <ul className="space-y-4">
          <li>
            <Link
              href="/"
              className="text-white flex items-center px-4 py-2 hover:bg-gray-800 rounded-md transition"
            >
              <FaHome className="mr-3 text-xl" />
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/blogs/createBlog"
              className="text-white flex items-center px-4 py-2 hover:bg-gray-800 rounded-md transition"
            >
              <IoIosCreate className="mr-3 text-xl" />
              Create Blog
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/blogs"
              className="text-white flex items-center px-4 py-2 hover:bg-gray-800 rounded-md transition"
            >
              <MdManageHistory className="mr-3 text-xl" />
              Manage Blog
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/projects/createProject"
              className="text-white flex items-center px-4 py-2 hover:bg-gray-800 rounded-md transition"
            >
              <IoIosCreate className="mr-3 text-xl" />
              Create Project
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/projects"
              className="text-white flex items-center px-4 py-2 hover:bg-gray-800 rounded-md transition"
            >
              <MdManageHistory className="mr-3 text-xl" />
              Manage Project
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/contact"
              className="text-white flex items-center px-4 py-2 hover:bg-gray-800 rounded-md transition"
            >
              <FaEnvelope className="mr-3 text-xl" />
              Contact Data
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
