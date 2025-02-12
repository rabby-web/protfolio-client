import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface FeatureProjectCardProps {
  product: Product;
}

// More distinguishable, lighter tech colors
const techColors = [
  "bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-500",
  "bg-green-50 text-green-700 dark:bg-green-900/50 dark:text-green-500",
  "bg-yellow-50 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-500",
  "bg-red-50 text-red-700 dark:bg-red-900/50 dark:text-red-500",
  "bg-purple-50 text-purple-700 dark:bg-purple-900/50 dark:text-purple-500",
  "bg-pink-50 text-pink-700 dark:bg-pink-900/50 dark:text-pink-500",
  "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-500",
  "bg-gray-100 text-gray-700 dark:bg-gray-800/50 dark:text-gray-400", // Added gray for variety
];

const FeatureProjectCard: React.FC<FeatureProjectCardProps> = ({ product }) => {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Project Image - Make sure the parent has w-full for full width */}
      <div className="relative h-96 w-full">
        {" "}
        {/* w-full is important here */}
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
      </div>

      <div className="p-6 relative">
        <h2 className="mt-2 text-xl font-bold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
          {product.name}
        </h2>

        <h2 className="mt-2 text-base font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
          {product.title}
        </h2>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
          {product.content}
        </p>

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

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href={product.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#28bcae] dark:bg-[#39B9B7] text-white dark:text-gray-900 hover:bg-[#1f9c8f] dark:hover:bg-[#2da7a5] font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            <FaExternalLinkAlt className="inline-block" />
            Live Demo
          </Link>

          <Link
            href={product.repoLinkClient}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            <FaGithub className="inline-block" /> Client Repo
          </Link>

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
  );
};

export default FeatureProjectCard;
