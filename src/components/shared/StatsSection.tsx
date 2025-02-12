"use client";

import { Flame, FolderGit, GitCommit, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function StatsSection() {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      {/* Long Streak */}
      <motion.div
        className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={cardVariants}
      >
        <div className="flex items-center">
          {" "}
          {/* Flex for icon and streak number */}
          <Flame
            className="h-8 w-8 text-orange-500 mr-2"
            strokeWidth={2.5}
          />{" "}
          {/* Margin right */}
          <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
            365
          </p>
        </div>
        <p className="text-sm font-bold text-gray-600 dark:text-gray-300 mt-2">
          {" "}
          {/* Bold and margin top */}
          Long Streak
        </p>
      </motion.div>

      {/* Total Project */}
      <motion.div
        className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={cardVariants}
      >
        <div className="flex items-center">
          <FolderGit className="h-8 w-8 text-blue-500 mr-2" strokeWidth={2.5} />
          <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
            50+
          </p>
        </div>
        <p className="text-sm font-bold text-gray-600 dark:text-gray-300 mt-2">
          Total Project
        </p>
      </motion.div>

      {/* Total Commit */}
      <motion.div
        className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={cardVariants}
      >
        <div className="flex items-center">
          <GitCommit
            className="h-8 w-8 text-green-500 mr-2"
            strokeWidth={2.5}
          />
          <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
            1.2k
          </p>
        </div>
        <p className="text-sm font-bold text-gray-600 dark:text-gray-300 mt-2">
          Total Commit
        </p>
      </motion.div>

      {/* Total Repository */}
      <motion.div
        className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={cardVariants}
      >
        <div className="flex items-center">
          <Github className="h-8 w-8 text-purple-500 mr-2" strokeWidth={2.5} />
          <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
            30+
          </p>
        </div>
        <p className="text-sm font-bold text-gray-600 dark:text-gray-300 mt-2">
          Total Repository
        </p>
      </motion.div>
    </div>
  );
}
