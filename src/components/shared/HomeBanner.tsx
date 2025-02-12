"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import StatsSection from "./StatsSection";
import BannerText from "./BannerText";
import { FaUser, FaDownload } from "react-icons/fa"; // Import the icons you want to use

export default function Banner() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24 min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center md:justify-end md:order-last">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <Image
              src="https://res.cloudinary.com/daxjf1buu/image/upload/v1739100332/rt-removebg-preview_iptghi.png"
              alt="Your Name"
              fill
              className="object-cover"
              priority
              aria-label="Your Name's Profile Picture"
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="text-lg md:text-lg text-gray-800 dark:text-gray-100 mb-3 transition-colors duration-300">
            Hi, I’m{" "}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#47E4E1] mb-6 transition-colors duration-300">
            Zulkar Naeem Rabby
          </h1>

          <BannerText></BannerText>

          <div>
            <StatsSection />
          </div>

          <div className="flex gap-3">
            <Button
              size="lg"
              className="bg-[#28bcae] dark:bg-[#39B9B7] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300"
              asChild
            >
              <Link href="/about">
                <FaUser className="mr-2" /> About Me
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-[#28bcae] dark:bg-[#39B9B7] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300"
              asChild
            >
              <a
                href="/rabby.pdf"
                download="Rabby-CV.pdf"
                aria-label="Download CV"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload className="mr-2" /> Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
