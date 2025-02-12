"use client";
import Image from "next/image";
import { icons } from "../data/proficiencyData";
import { motion } from "framer-motion";

const AllIcons = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, ease: "easeInOut" },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-6 container mx-auto px-6 py-12 md:py-16"
    >
      {icons?.map((icon) => (
        <motion.div
          key={icon.id}
          variants={item}
          whileHover="hover"
          className="w-full p-5 text-center flex flex-col justify-center items-center relative group rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-900 transition-all duration-300"
        >
          {/* Icon Container */}
          <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-300 shadow-md group-hover:shadow-xl">
            <Image
              src={icon.image}
              width={30}
              height={30}
              alt={icon.name}
              className="filter grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>

          {/* Icon Name */}
          <h2 className="text-lg font-semibold mt-3 text-gray-900 dark:text-gray-200 group-hover:text-[#6366F1] transition-colors duration-300">
            {icon.name}
          </h2>

          {/* Glowing Effect on Hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent to-[#6366F1]/20 group-hover:from-[#6366F1]/10 group-hover:to-[#6366F1]/40 transition-all duration-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AllIcons;
