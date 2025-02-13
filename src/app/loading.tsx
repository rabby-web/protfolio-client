import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      {/* Spinner */}
      <div className="w-10 h-10 border-4 border-gray-200 border-t-[#28bcae] rounded-full animate-spin"></div>
      {/* Loading Text */}
      <h2 className="mt-4 text-xl font-medium text-gray-700">Loading...</h2>
    </div>
  );
};

export default Loading;
