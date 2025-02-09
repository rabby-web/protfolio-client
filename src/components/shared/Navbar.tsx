"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedDarkMode = localStorage.getItem("darkMode");
      if (storedDarkMode !== null) {
        setDarkMode(JSON.parse(storedDarkMode)); // Convert string to boolean
        document.documentElement.classList.toggle(
          "dark",
          JSON.parse(storedDarkMode)
        );
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode)); // Convert boolean to string
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skill", label: "Skill" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white dark:bg-[#111827] border-b border-gray-200 dark:border-gray-700 transition-colors duration-300 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 dark:text-gray-50"
          >
            Portfolio {/* Replace with your logo component or image */}
          </Link>

          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300 ${
                  pathname === link.href
                    ? "font-bold text-[#6366F1] dark:text-[#818CF8]"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Switch
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={setDarkMode}
                className="relative inline-flex items-center h-6 rounded-full w-14 bg-gray-200 dark:bg-gray-700"
              >
                <span className="sr-only">Toggle Dark Mode</span>
                <span
                  className={`${
                    darkMode ? "translate-x-7" : "translate-x-0"
                  } inline-block w-6 h-6 transform bg-white dark:bg-gray-800 rounded-full shadow-lg transition-all duration-300`}
                />
              </Switch>
            </div>

            <Button className="hidden md:inline-flex bg-[#6366F1] dark:bg-[#818CF8] text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:bg-[#4F46E5] dark:hover:bg-[#6D7AFF]">
              Login
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-full text-gray-600 dark:text-gray-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-700"
              >
                {navLinks.map((link) => (
                  <DropdownMenuItem
                    key={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Link
                      href={link.href}
                      className={`${
                        pathname === link.href
                          ? "font-bold text-[#6366F1] dark:text-[#818CF8]"
                          : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem className="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Button className="bg-[#6366F1] dark:bg-[#818CF8] text-white font-semibold px-4 py-1 rounded-md transition-all duration-300 hover:bg-[#4F46E5] dark:hover:bg-[#6D7AFF]">
                    Login
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Switch
                    id="dark-mode-mobile"
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                  />
                  <span className="text-gray-600 dark:text-gray-400">
                    Dark Mode
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
