"use client"; // Required for client-side interactivity

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  };

  return (
    <nav className="bg-white dark:bg-[#0E1217] border-b border-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#"
              className="text-xl font-bold text-gray-900 dark:text-white "
            >
              Logo
            </a>
          </div>

          {/* Menu for Desktop */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            >
              Contact
            </a>
          </div>

          {/* Toggle and Login Button */}
          <div className="flex items-center space-x-4">
            {/* Dark/Light Mode Toggle (Hidden on Small Devices) */}
            <div className="hidden md:flex items-center space-x-2 ">
              <Switch
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={toggleDarkMode}
                className="relative inline-flex items-center h-6 rounded-full w-14 bg-gradient-to-r from-pink-500 to-red-500 dark:from-[#FD619D] dark:to-[#FF2D55] transition-all duration-300"
              >
                <span className="sr-only">Toggle Dark Mode</span>
                <span
                  className={`${
                    darkMode ? "translate-x-7" : "translate-x-0"
                  } inline-block w-6 h-6 transform bg-white rounded-full shadow-lg transition-all duration-300`}
                />
              </Switch>
            </div>

            {/* Login Button (Hidden on Small Devices) */}
            {/* <Button
              variant="default"
              className="hidden md:inline-flex dark:bg-[#FD619D] dark:text-black font-semibold"
            >
              Login
            </Button> */}
            <Button
              variant="default"
              className="hidden md:inline-flex bg-gradient-to-r from-pink-500 to-red-500 text-white dark:from-[#FD619D] dark:to-[#FF2D55] dark:text-black font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              Login
            </Button>

            {/* Mobile Menu Button (Visible on Small Devices) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-full" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Home</DropdownMenuItem>
                <DropdownMenuItem>About</DropdownMenuItem>
                <DropdownMenuItem>Services</DropdownMenuItem>
                <DropdownMenuItem>Contact</DropdownMenuItem>

                <DropdownMenuItem>Login</DropdownMenuItem>
                <DropdownMenuItem>
                  {" "}
                  <div className="flex flex-col  items-center space-x-2">
                    <Switch
                      id="dark-mode"
                      checked={darkMode}
                      onCheckedChange={toggleDarkMode}
                    />
                    {/* <label
                    htmlFor="dark-mode"
                    className="text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Dark Mode
                  </label> */}
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
