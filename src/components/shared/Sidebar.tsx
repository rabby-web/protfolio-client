"use client";

import { useState } from "react";
import Link from "next/link";
import { FaHome, FaCog, FaEnvelope, FaBars } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { MdManageHistory } from "react-icons/md";

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
        <h2 className="text-white text-2xl font-extrabold mb-6">Brand</h2>

        {/* Sidebar Links */}
        <ul className="space-y-4">
          <li>
            <Link
              href="/"
              className="text-white flex items-center px-4 py-2 hover:bg-gray-800 rounded-md transition"
            >
              <FaHome className="mr-3" />
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/blogs/createBlog"
              className="text-white flex items-center px-4 py-2 hover:bg-gray-800 rounded-md transition"
            >
              <IoIosCreate className="mr-3" />
              Create Blog
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/blogs"
              className="text-white flex items-center px-4 py-2 hover:bg-gray-800 rounded-md transition"
            >
              <MdManageHistory className="mr-3" />
              Manage Blog
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="text-white flex items-center px-4 py-2 hover:bg-gray-800 rounded-md transition"
            >
              <FaCog className="mr-3" />
              Settings
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/contact"
              className="text-white flex items-center px-4 py-2 hover:bg-gray-800 rounded-md transition"
            >
              <FaEnvelope className="mr-3" />
              Contact Data
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
