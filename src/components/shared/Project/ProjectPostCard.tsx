import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa"; // Import icons
import { MdArrowForwardIos } from "react-icons/md";

// Define the Product interface
interface Product {
  _id: string;
  name: string;
  category: string;
  title: string;
  content: string;
  image: string;
  technologies: string[];
  liveDemoLink: string;
  repoLinkClient: string;
  repoLinkServer: string;
  isPublished: boolean;
}

// Define the props for the ProjectPostCard component
interface ProjectPostCardProps {
  product: Product;
}

function ProjectPostCard({ product }: ProjectPostCardProps) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:scale-105">
      {/* Project Image */}
      <div className="relative h-56 w-full">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Project Title */}
        <h2 className="mt-2 text-xl font-bold text-gray-800 dark:text-gray-200">
          {product.name}
        </h2>

        {/* Project Description */}
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {product.content}
        </p>

        {/* Technologies Used */}
        <div className="mt-4 flex flex-wrap gap-2">
          {product.technologies.map((tech, index) => (
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
            href={product.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            <FaExternalLinkAlt className="inline-block" /> {/* Icon */}
            Live
          </Link>

          {/* GitHub Repo Button */}
          <Link
            href={`/projects/${product._id}`}
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
