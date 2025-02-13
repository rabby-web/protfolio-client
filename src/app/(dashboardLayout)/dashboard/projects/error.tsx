"use client";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      {/* Error Message Container */}
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-2xl w-full">
        {/* Error Icon */}
        <div className="text-red-500 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Error Title */}
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Oops! Something went wrong.
        </h1>

        {/* Error Message */}
        <p className="text-gray-700 text-lg mb-6">
          {error.message || "An unexpected error occurred."}
        </p>

        {/* Try Again Button */}
        <button
          onClick={reset}
          className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-500 transition-colors duration-200"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
