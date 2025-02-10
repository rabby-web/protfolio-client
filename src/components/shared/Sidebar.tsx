"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-blue-600 p-5 shadow-lg">
      <h2 className="text-white text-2xl font-extrabold mb-6">Brand</h2>
      <ul className="space-y-4">
        <li>
          <Link
            href="/"
            className="text-white block px-4 py-2 hover:bg-blue-700 rounded-md transition"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
            className="text-white block px-4 py-2 hover:bg-blue-700 rounded-md transition"
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            href="/settings"
            className="text-white block px-4 py-2 hover:bg-blue-700 rounded-md transition"
          >
            Settings
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-white block px-4 py-2 hover:bg-blue-700 rounded-md transition"
          >
            Contact
          </Link>
        </li>
      </ul>
    </aside>
  );
}
