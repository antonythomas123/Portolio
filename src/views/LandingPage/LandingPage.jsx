import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HomeImg, ResumeAntony } from "../../assets";
import {
  ArrowLongDownIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
      // delay: 1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

function LandingPage() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-col-reverse items-center md:flex-row h-full md:h-screen flex-1">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col gap-6 md:w-1/2 w-full items-center md:items-start"
        >
          <div className="tracking-widest flex flex-col gap-2 text-center md:text-left">
            <motion.h3 variants={childVariants} className="text-3xl">
              hi,
            </motion.h3>
            <motion.h3 variants={childVariants} className="text-3xl">
              I am
            </motion.h3>
            <motion.h1
              variants={childVariants}
              className="text-[32px] font-normal"
            >
              Antony Thomas
            </motion.h1>
          </div>
          <div className="flex flex-col gap-4 text-center md:text-left">
            <motion.span variants={childVariants} className="text-1xl">
              I am a&nbsp;
              <span className="text-[#00ff9b] font-bold font-mono text-[16px]">
                <Typewriter
                  words={[
                    "Software Engineer",
                    "Frond End Developer",
                    "Technology Associate",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={70}
                  delaySpeed={1000}
                />
              </span>
            </motion.span>

            <motion.p
              variants={childVariants}
              className="text-[#a8b2d1] text-[14px] tracking-widest"
            >
              Software engineer with 2 years of experience specializing in
              React.js, Next.js, and Node.js. Passionate about building
              performant and user-friendly web applications with clean code
              practices.
            </motion.p>
          </div>

          <div className="flex w-full gap-8 items-center justify-center md:justify-start">
            <motion.button
              variants={childVariants}
              className="border-[#00ff9b] border-[2px] rounded-full p-3 cursor-pointer active:bg-[#64ffda33] hover:bg-[#64ffda1a]"
              onClick={() => scrollToSection("contactme")}
            >
              Get in touch
            </motion.button>

            <motion.button
              variants={childVariants}
              className="group border-none bg-none flex gap-2 items-center cursor-pointer hover:text-[#00ff9b]"
              onClick={() => scrollToSection("works")}
            >
              View my work{" "}
              <ArrowLongRightIcon className="size-6 transform transition-transform duration-300 group-hover:translate-x-2" />
            </motion.button>
          </div>

          <div className="flex gap-4">
            <motion.a
              variants={childVariants}
              href="https://github.com/antonythomas123"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="size-8" />
            </motion.a>
            <motion.a
              variants={childVariants}
              href="https://www.linkedin.com/in/antony-thomas123"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="size-8" />
            </motion.a>
            <motion.a
              variants={childVariants}
              href="https://www.instagram.com/anto_ny_thom_as/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="size-8" />
            </motion.a>
          </div>
        </motion.div>

        <div className="flex justify-center w-full md:w-1/2 mb-6 md:mb-0">
          <motion.img
            className="h-[300px] w-[300px] rounded-full object-cover border-3 border-[#00ff9b]"
            src={HomeImg}
            alt=""
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          />
        </div>

        <div className="absolute bottom-[-40px] md:bottom-40 w-full flex items-center justify-center mt-10">
          <motion.div
            animate={{
              y: [0, -10, 0],
              opacity: [1, 0.6, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowLongDownIcon className="size-6" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
