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
import { signOut } from "next-auth/react";
import Image from "next/image";

type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

export default function Navbar({ session }: { session: UserProps | null }) {
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
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <nav className="bg-white dark:bg-[#111827] border-b border-gray-200 dark:border-gray-700 transition-colors duration-300 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center ">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl font-bold text-[#28bcae] dark:text-[#39B9B7]"
          >
            <Image
              src="https://res.cloudinary.com/daxjf1buu/image/upload/v1739348942/r-logo_bmw9vm.png"
              alt="Rabby Logo"
              width={25}
              height={25}
              priority
            />
            <span>Rabby</span>
          </Link>

          <div className="hidden md:flex space-x-6 py-4 text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-gray-800 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300 ${
                  pathname === link.href
                    ? "font-bold text-[#28bcae] dark:text-[#39B9B7]"
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

            {session?.user ? (
              <Button
                onClick={() => signOut()}
                className="hidden md:inline-flex bg-[#28bcae] dark:bg-[#39B9B7] text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:bg-[#28bcae] dark:hover:bg-[#39B9B7]"
              >
                Logout
              </Button>
            ) : (
              <Link href="/login">
                <Button className="hidden md:inline-flex bg-[#28bcae] dark:bg-[#39B9B7] text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:bg-[#28bcae] dark:hover:bg-[#39B9B7]">
                  Login
                </Button>
              </Link>
            )}

            <DropdownMenu>
              <DropdownMenuTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-8 w-full text-gray-800 dark:text-gray-200 hover:text-gray-800" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-700 w-52"
              >
                {navLinks.map((link) => (
                  <DropdownMenuItem
                    key={link.href}
                    className="text-gray-800 dark:text-gray-200 hover:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Link
                      href={link.href}
                      className={`${
                        pathname === link.href
                          ? "font-bold text-[#28bcae] dark:text-[#39B9B7]"
                          : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem className="text-gray-800 dark:text-gray-200 hover:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                  {session?.user ? (
                    <Button
                      onClick={() => signOut()}
                      className="bg-[#28bcae] dark:bg-[#39B9B7] text-white font-semibold px-4 py-1 rounded-md transition-all duration-300 hover:bg-hover:bg-[#28bcae] dark:hover:bg-[#39B9B7]"
                    >
                      Logout
                    </Button>
                  ) : (
                    <Link href="/login">
                      <Button className="bg-[#28bcae] dark:bg-[#39B9B7] text-white font-semibold px-4 py-1 rounded-md transition-all duration-300 hover:bg-[#28bcae] dark:hover:bg-[#39B9B7]">
                        Login
                      </Button>
                    </Link>
                  )}
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Switch
                    id="dark-mode-mobile"
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                  />
                  <span className="text-[#28bcae] dark:text-[#39B9B7]">
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
