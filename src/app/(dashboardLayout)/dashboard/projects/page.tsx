import { Product } from "@/types";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { IoEyeSharp } from "react-icons/io5";

const ProjectPage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/projects", {
    cache: "no-store",
  }); // SSR
  const projectsData = await res.json();
  const projects: Product[] = projectsData.data;

  return (
    <div className="container mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-[#39B9B7] text-center mb-6">
        Manage Projects
      </h2>

      <div className="overflow-x-auto bg-white dark:bg-[#111827] shadow-lg rounded-lg p-4">
        <table className="min-w-full border-collapse  border-gray-300 dark:border-gray-700 rounded-lg">
          <thead>
            <tr className="bg-[#39B9B7] text-white">
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Author</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr
                key={project._id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-[#E8FAF9] dark:hover:bg-gray-800 transition"
              >
                <td className="py-3 px-4">{project.title}</td>
                <td className="py-3 px-4">{project.name}</td>
                <td className="py-3 px-4">{project.content}</td>
                <td className="py-3 px-4 text-center">
                  <div className="flex gap-3 justify-center">
                    {/* View Button */}
                    <Link href={`/projects/${project._id}`}>
                      <button
                        className="p-2 bg-[#39B9B7] text-white rounded-md hover:bg-[#2B9F9C] transition"
                        title="View Project"
                      >
                        <IoEyeSharp size={18} />
                      </button>
                    </Link>
                    {/* Edit Button */}
                    <Link href={`/dashboard/projects/update/${project._id}`}>
                      <button
                        className="p-2 bg-[#FFC107] text-white rounded-md hover:bg-[#E0A800] transition"
                        title="Edit Project"
                      >
                        <Pencil size={18} />
                      </button>
                    </Link>
                    {/* Delete Button */}
                    <Link href={`/dashboard/projects/delete/${project._id}`}>
                      <button
                        className="p-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                        title="Delete Project"
                      >
                        <Trash2 size={18} />
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectPage;
