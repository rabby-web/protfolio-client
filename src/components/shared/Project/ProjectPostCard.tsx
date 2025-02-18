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

function ProjectPostCard({ product }: ProjectPostCardProps) {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Project Image */}
      <div className="relative h-64 w-full">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
      </div>

      {/* Project Content */}
      <div className="p-6">
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
          {product.technologies.map((tech, index) => (
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

        {/* Buttons for Live Demo and Details */}
        <div className="mt-6 flex flex-wrap gap-4">
          {/* Live Demo Button */}
          <Link
            href={product.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#28bcae] dark:bg-[#39B9B7] text-white dark:text-gray-900 hover:bg-[#1f9c8f] dark:hover:bg-[#2da7a5] font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            <FaExternalLinkAlt className="inline-block" />
            Live Demo
          </Link>

          {/* Details Button */}
          <Link
            href={`/projects/${product._id}`}
            className="flex-1 flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Details
            <MdArrowForwardIos className="inline-block" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectPostCard;
