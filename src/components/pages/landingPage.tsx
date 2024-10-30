"use client";

import { TypewriterEffect } from "../ui/typewriter-effect";
import IntroPic from "../../assets/intro/heroImage.png";
import { motion } from "framer-motion";
import logo from "../../../public/logo.png";

import { AuroraBackground } from "../ui/aurora-background";

const landingPage = () => {
  const words = [
    {
      text: "Bharat",
    },
    {
      text: "Raj",
    },
    {
      text: "Verma",
    },
    {
      text: "Software",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Developer",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative w-full h-full"
        >
          <div className="absolute p-8">
            <img src={logo} alt="" className="w-[3rem]" />
          </div>

          <div className="h-full w-full dark:bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="relative z-10 flex flex-row items-center h-screen w-full space-x-6 px-8">
              <div className="flex flex-col items-center w-[100rem]">
                <p className="text-neutral-600 dark:text-neutral-200 text-base mb-10">
                  Crafting code with passion and purpose
                </p>
                <TypewriterEffect words={words} />
              </div>
              <div className=" hidden md:block bg-neutral-100 w-2/3 rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-100">
                <img
                  src={IntroPic}
                  alt="my profile"
                  className="rounded-full shadow-lg mx-auto w-full hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
    </>
  );
};

export default landingPage;
