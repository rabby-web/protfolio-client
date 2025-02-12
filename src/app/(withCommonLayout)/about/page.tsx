"use client";

import { FaCode, FaServer, FaTools } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutPage = () => {
  const skills = [
    {
      icon: <FaCode size={48} className="text-[#39B9B7] mb-4" />,
      title: "Frontend Development",
      description:
        "Crafting responsive and interactive user interfaces with modern frameworks.",
    },
    {
      icon: <FaServer size={48} className="text-green-500 mb-4" />,
      title: "Backend Development",
      description:
        "Building scalable, secure, and high-performance server-side applications.",
    },
    {
      icon: <FaTools size={48} className="text-yellow-500 mb-4" />,
      title: "DevOps & Deployment",
      description:
        "Automating deployment, CI/CD pipelines, and cloud infrastructure.",
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="flex flex-col gap-8 p-6 max-w-5xl mx-auto pt-10">
          {/* <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white">
            About Me
          </h1> */}
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 w-full lg:w-1/2">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:scale-105 h-full"
                >
                  <div className="hover:rotate-12 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div className="flex-grow flex flex-col">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {skill.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="p-8 w-full lg:w-1/2">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                  <Image
                    src="https://res.cloudinary.com/daxjf1buu/image/upload/v1739100332/rt-removebg-preview_iptghi.png"
                    alt="John Doe"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                  Hi, I{"'"}m Zulkar Naeem Rabby
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
                I am a passionate Full-Stack Web Developer specializing in the
                MERN (MongoDB, Express.js, React, Node.js) stack. With a strong
                foundation in both frontend and backend development, I build
                dynamic, scalable, and high-performance web applications. I
                focus on clean code, responsive design, and seamless user
                experiences. Always eager to learn and implement the latest
                technologies to deliver innovative solutions. 🚀
              </p>
              {/* <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
                With expertise in{" "}
                <strong>
                  React.js, Next.js, Redux, TypeScript, Node.js, Express,
                  MongoDB, Docker, and AWS
                </strong>
                , I ensure smooth development from design to deployment.
              </p> */}
              <p className="text-gray-700 dark:text-gray-400 font-semibold mt-6 text-lg">
                I love solving complex problems and delivering high-quality
                software solutions. 🚀
              </p>
              <a
                href="/contact"
                className="inline-block mt-8 px-6 py-3 bg-[#39B9B7] text-white font-semibold rounded-lg hover:bg-[#39B9B7] transition-colors duration-300"
              >
                Let{"'"}s Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
