"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-50 to-teal-100 py-10">
      <div className="w-full max-w-4xl mx-4 bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Section - Illustration */}
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
          <Image
            src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?t=st=1710130697~exp=1710134297~hmac=f1b21d9c1823a0657d339c256a1c4ad8301168480e35b35aeba5106568a21010&w=740"
            width={400}
            height={400}
            alt="Login Illustration"
            className="w-full h-auto"
          />
        </div>

        {/* Right Section - Login Form */}
        <div className="w-full md:w-1/2 p-8 bg-teal-50 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-center mb-6 text-teal-700">
            Welcome Back!
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Log in to your account using your favorite social platform.
          </p>

          {/* Social Login Buttons */}
          <div className="space-y-4">
            <button
              onClick={() =>
                signIn("google", {
                  callbackUrl: "http://localhost:3000/dashboard",
                })
              }
              className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-lg py-3 px-6 shadow-sm hover:bg-gray-50 transition-colors"
            >
              <Image
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                width={24}
                height={24}
                alt="Google Logo"
                className="mr-4"
              />
              <span className="text-gray-700 font-medium">
                Continue with Google
              </span>
            </button>

            <button
              onClick={() =>
                signIn("github", {
                  callbackUrl: "http://localhost:3000/dashboard",
                })
              }
              className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-lg py-3 px-6 shadow-sm hover:bg-gray-50 transition-colors"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                width={24}
                height={24}
                alt="GitHub Logo"
                className="mr-4"
              />
              <span className="text-gray-700 font-medium">
                Continue with GitHub
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
