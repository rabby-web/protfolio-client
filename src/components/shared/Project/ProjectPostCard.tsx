import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa"; // Import icons
import { MdArrowForwardIos } from "react-icons/md";

function ProjectPostCard({
  name,
  category,
  title,
  content,
  image,
  technologies,
  liveDemoLink,
  repoLinkClient,
  repoLinkServer,
}) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:scale-105">
      {/* Project Image */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Project Title */}
        <h2 className="mt-2 text-xl font-bold text-gray-800 dark:text-gray-200">
          {name}
        </h2>

        {/* Project Description */}
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {content}
        </p>

        {/* Technologies Used */}
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold px-2.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons for Live Demo and Repo */}
        <div className="mt-6 flex gap-4">
          {/* Live Demo Button */}
          <Link
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            <FaExternalLinkAlt className="inline-block" /> {/* Icon */}
            Live
          </Link>

          {/* GitHub Repo Button */}
          <Link
            href={repoLinkClient}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Details
            <MdArrowForwardIos className="inline-block" /> {/* Icon */}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectPostCard;
