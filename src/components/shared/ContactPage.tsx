"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  FaPaperPlane,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

// Define the form data types
type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // Handle form submission here, e.g., send data to an API
  };

  return (
    <div>
      <div className="md:h-[60rem] h-[68rem] w-full dark:bg-[#0B1120] bg-white dark:bg-dot-white/[0.1] bg-dot-black/[0.1]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="max-w-7xl mx-auto">
          <div className="md:px-5 px-2">
            <div className="text-2xl font-semibold text-dark-01 dark:text-dark-03 flex items-baseline gap-1 p-3 md:mt-12">
              <div className="text-[#3CD1B8]">Contact</div>
              <div className="w-48 border border-[#3CD1B8]"></div>
            </div>
            <div className="max-w-7xl mx-auto p-10 my-20 flex flex-col-reverse md:flex-row gap-6 items-center shadow-md hover:text-[#4ca1e7] text-[#3CD1B8] rounded-md bg-white dark:bg-opacity-[0.01] border border-white border-opacity-10 backdrop-blur-[10px]">
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                className="md:w-1/2"
              >
                <h2 className="text-[#3CD1B8] font-semibold text-3xl md:text-4xl mb-2">
                  Subscribe now
                </h2>
                <div className="w-20 h-1.5 bg-dark-03 mb-5 ml-2"></div>
                <p className="text-dark-02 dark:text-white text-lg mb-5">
                  Get latest updates, deals, and exclusive offers every time.
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className="py-3 px-5 bg-gray-100 border border-gray-200 w-full rounded outline-none mb-4"
                    type="text"
                    placeholder="Your Name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                  <input
                    className="py-3 px-5 bg-gray-100 border border-gray-200 w-full rounded outline-none mb-4"
                    type="email"
                    placeholder="Your Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                  <textarea
                    className="py-3 px-5 bg-gray-100 border border-gray-200 w-full rounded outline-none mb-4"
                    placeholder="Your Message"
                    rows={4}
                    {...register("message", {
                      required: "Message is required",
                    })}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                  <button
                    className="py-3 px-10 text-white bg-[#3CD1B8] rounded inline-flex gap-3 items-center hover:bg-[#2fa997] transition-colors"
                    type="submit"
                  >
                    Subscribe <FaPaperPlane aria-label="Submit" />
                  </button>
                </form>
              </div>

              <div className="absolute border-opacity-20 border-gray-300 h-3/4 md:border ml-1.5 md:ml-0 md:left-1/2"></div>

              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                className="md:w-1/2 p-10"
              >
                <h2 className="text-dark-01 dark:text-white font-semibold text-3xl md:text-4xl mb-2">
                  Contact now
                </h2>
                <div className="w-20 h-1.5 bg-dark-03 dark:text-white mb-5 ml-2"></div>
                <div className="flex gap-3 font-medium text-xl items-center">
                  <FaWhatsapp
                    className="text-dark-03 dark:text-[#3CD1B8] text-3xl"
                    aria-label="WhatsApp"
                  />
                  <Link
                    className="text-dark-01 dark:text-white"
                    href="https://wa.me/01540643211"
                  >
                    01540643211
                  </Link>
                </div>
                <div className="flex gap-3 font-medium text-xl items-center mt-2">
                  <MdEmail
                    className="text-dark-03 dark:text-[#3CD1B8] text-3xl"
                    aria-label="Email"
                  />
                  <Link
                    className="text-dark-01 dark:text-white"
                    href="mailto:rabby-webdeveloper@gmail.com"
                  >
                    rabby-webdeveloper@gmail.com
                  </Link>
                </div>
                <div className="flex-1">
                  <h2 className="text-dark-01 dark:text-white font-semibold text-3xl md:text-4xl mb-2 mt-2">
                    Social Link
                  </h2>
                  <div className="text-dark-03 dark:text-[#3CD1B8] flex flex-col md:flex-row gap-4 mt-4">
                    <Link href="https://github.com/rabby-web">
                      <div className="flex items-center justify-center gap-2 border rounded px-2 py-1 hover:dark:text-[#4ca1e7] hover:dark:border-[#4ca1e7]">
                        <FaGithub aria-label="GitHub" />
                        <h2>GitHub</h2>
                      </div>
                    </Link>
                    <Link href="https://www.linkedin.com/in/rabby-web/">
                      <div className="flex items-center justify-center gap-2 border rounded px-2 py-1 hover:dark:text-[#4ca1e7] hover:dark:border-[#4ca1e7]">
                        <FaLinkedin aria-label="LinkedIn" />
                        <h2>LinkedIn</h2>
                      </div>
                    </Link>
                    <Link href="https://www.facebook.com/">
                      <div className="flex items-center justify-center gap-2 border rounded px-2 py-1 hover:dark:text-[#4ca1e7] hover:dark:border-[#4ca1e7]">
                        <FaFacebook aria-label="Facebook" />
                        <h2>Facebook</h2>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
