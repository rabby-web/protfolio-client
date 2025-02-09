"use client";

import { Flame, FolderGit, GitCommit, Github } from "lucide-react"; // Import icons

export default function StatsSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      {/* Long Streak */}
      <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
        <Flame className="h-6 w-6 text-orange-500 mb-2" />
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          365
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">Long Streak</p>
      </div>

      {/* Total Project */}
      <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
        <FolderGit className="h-6 w-6 text-blue-500 mb-2" />
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          50+
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Total Project
        </p>
      </div>

      {/* Total Commit */}
      <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
        <GitCommit className="h-6 w-6 text-green-500 mb-2" />
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          1.2k
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">Total Commit</p>
      </div>

      {/* Total Repository */}
      <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
        <Github className="h-6 w-6 text-purple-500 mb-2" />
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          30+
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Total Repository
        </p>
      </div>
    </div>
  );
}
