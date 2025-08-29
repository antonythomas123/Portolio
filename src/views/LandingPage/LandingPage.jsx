import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HomeImg, ResumeAntony } from "../../assets";
import {
  ArrowLongDownIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@headlessui/react";

function LandingPage() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = ResumeAntony; // Use the imported PDF as the href
    link.download = "Antony_Thomas.pdf"; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-col-reverse items-center md:flex-row h-full md:h-screen flex-1">
        <div className="flex flex-col gap-6 md:w-1/2 w-full items-center md:items-start">
          <div className="tracking-widest flex flex-col gap-2 text-center md:text-left">
            <h3 className="text-3xl">hi,</h3>
            <h3 className="text-3xl">I am</h3>
            <h1 className="text-[32px] font-normal">Antony Thomas</h1>
          </div>
          <div className="flex flex-col gap-4 text-center md:text-left">
            <span className="text-1xl">
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
            </span>

            <p className="text-[#a8b2d1] text-[14px] tracking-widest">
              Software engineer with 2 years of experience specializing in
              React.js, Next.js, and Node.js. Passionate about building
              performant and user-friendly web applications with clean code
              practices.
            </p>
          </div>

          <div className="flex w-full gap-8 items-center justify-center md:justify-start">
            <Button
              className="border-[#00ff9b] border-[2px] rounded-full p-3 cursor-pointer data-active:bg-[#64ffda33] data-hover:bg-[#64ffda1a]"
              onClick={() => scrollToSection("contactme")}
            >
              Get in touch
            </Button>

            <Button
              className="group border-none bg-none flex gap-2 items-center cursor-pointer data-hover:text-[#00ff9b]"
              onClick={() => scrollToSection("works")}
            >
              View my work{" "}
              <ArrowLongRightIcon className="size-6 transform transition-transform duration-300 group-hover:translate-x-2" />
            </Button>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/antonythomas123"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="size-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/antony-thomas123"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="size-8" />
            </a>
            <a
              href="https://www.instagram.com/anto_ny_thom_as/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="size-8" />
            </a>
          </div>
        </div>

        <div className="flex justify-center w-full md:w-1/2 mb-6 md:mb-0">
          <img
            className="h-[300px] w-[300px] rounded-full object-cover border-3 border-[#00ff9b]"
            src={HomeImg}
            alt=""
          />
        </div>

        <div className="absolute bottom-[-40px] md:bottom-40 w-full flex items-center justify-center mt-10">
          <ArrowLongDownIcon className="size-8" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
