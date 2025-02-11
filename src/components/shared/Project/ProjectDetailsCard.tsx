import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"; // Import icons

import React from "react";
import { Product } from "@/types";

const ProjectDetailsCard = ({ product }: { product: Product }) => {
  return (
    <div>
      <div className="w-full md:w-1/2 mx-auto rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
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
            {product.technologies.map(
              (
                tech: string,
                index: number // Explicitly type `tech` and `index`
              ) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold px-2.5 py-0.5 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href={product.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
            >
              <FaExternalLinkAlt className="inline-block" />
              Live Demo
            </Link>

            {/* OR Separate Repo Buttons */}
            <Link
              href={product.repoLinkClient}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
            >
              <FaGithub className="inline-block" /> Client Repo
            </Link>
            <Link
              href={product.repoLinkServer}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
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
