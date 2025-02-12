import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"; // Import icons
import React from "react";
import { Product } from "@/types";

// Predefined colors for technologies
const techColors = [
  "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100",
  "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100",
  "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100",
  "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100",
  "bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100",
  "bg-pink-100 text-pink-800 dark:bg-pink-800 dark:text-pink-100",
  "bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100",
];

const ProjectDetailsCard = ({ product }: { product: Product }) => {
  return (
    <div className="min-h-screen">
      <div className="w-full md:w-1/2 mx-auto rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-2xl ">
        {/* Project Image */}
        <div className="relative h-96 w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill // Use `fill` instead of `layout="fill"`
            style={{ objectFit: "cover" }} // Add object-fit styling
            className="rounded-t-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        </div>

        {/* Project Content */}
        <div className="p-6 relative">
          {/* Project Subtitle */}
          <h2 className="mt-2 text-base font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            {product.title}
          </h2>

          {/* Project Title */}
          <h2 className="mt-2 text-xl font-bold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            {product.name}
          </h2>

          {/* Project Description */}
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
            {product.content}
          </p>

          {/* Technologies Used */}
          <div className="mt-4 flex flex-wrap gap-2">
            {product.technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded transition-colors duration-300 ${
                  techColors[index % techColors.length]
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {/* Live Demo Button */}
            <Link
              href={product.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#28bcae] dark:bg-[#39B9B7] text-white dark:text-gray-900 hover:bg-[#1f9c8f] dark:hover:bg-[#2da7a5] font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
            >
              <FaExternalLinkAlt className="inline-block" />
              Live Demo
            </Link>

            {/* Client Repo Button */}
            <Link
              href={product.repoLinkClient}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
            >
              <FaGithub className="inline-block" /> Client Repo
            </Link>

            {/* Server Repo Button */}
            <Link
              href={product.repoLinkServer}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
            >
              <FaGithub className="inline-block" /> Server Repo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsCard;
