import React, { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  HomeIcon,
  XMarkIcon,
  AdjustmentsHorizontalIcon,
  BriefcaseIcon,
  UserCircleIcon,
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
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Nav = ({ name, onClick, icon }) => {
  return (
    <div>
      <a
        className="relative flex gap-2 items-center cursor-pointer after:absolute after:bg-[#00ff9b] after:h-[3px] after:w-0 after:left-0 after:bottom-[-4px] after:transition-[0.3s] hover:after:w-[80%] hover:after:rounded"
        onClick={onClick}
      >
        <span>{icon}</span>
        <span>{name}</span>
      </a>
    </div>
  );
};

function Navbar() {
  const navigations = [
    {
      name: "Home",
      current: true,
      id: "home",
      icon: <HomeIcon className="size-6" />,
    },
    {
      name: "Resume",
      current: false,
      id: "resume",
      icon: <AdjustmentsHorizontalIcon className="size-6" />,
    },
    {
      name: "Work",
      current: false,
      id: "works",
      icon: <BriefcaseIcon className="size-6" />,
    },
    {
      name: "Contact",
      current: false,
      id: "contactme",
      icon: <UserCircleIcon className="size-6" />,
    },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Disclosure
      as="nav"
      className="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative flex text-[#FFFFFF] h-[70px] items-center justify-between px-10"
      >
        <motion.div variants={childVariants}>
          <span className="text-3xl tracking-widest">Antony</span>
          <span className="text-[4rem] text-[#00ff9b]">.</span>
        </motion.div>
        <div className="hidden sm:ml-6 sm:block">
          <motion.div variants={childVariants} className="flex gap-6 text-[14px] items-end tracking-widest">
            {navigations?.map((item) => {
              return (
                <Nav
                  key={item?.id}
                  name={item?.name}
                  icon={item?.icon}
                  onClick={() => scrollToSection(item?.id)}
                />
              );
            })}
          </motion.div>
        </div>

        <div className="absolute inset-y-0 right-5 flex items-center sm:hidden">
          <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-[#00ff9b]">
            <Bars3Icon
              aria-hidden="true"
              className="block size-10 group-data-open:hidden"
            />
          </DisclosureButton>
        </div>
      </motion.div>
      <Transition
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 translate-x-full"
        enterTo="opacity-100 translate-x-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 translate-x-full"
      >
        <DisclosurePanel className="sm:hidden fixed inset-y-0 right-0 w-2/3 max-w-3/4 bg-[#121212] flex flex-col items-center justify-center gap-6 text-white z-50">
          <DisclosureButton className="absolute top-5 right-5 rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-[#00ff9b]">
            <XMarkIcon className="size-8" />
          </DisclosureButton>
          <div className="flex flex-col text-center gap-6">
            {navigations?.map((item) => {
              return (
                <DisclosureButton
                  key={item?.id}
                  as="a"
                  className={"flex gap-2 items-center"}
                  onClick={() => scrollToSection(item?.id)}
                >
                  {item?.icon}
                  <span>{item?.name}</span>
                </DisclosureButton>
              );
            })}
          </div>
        </DisclosurePanel>
      </Transition>
    </Disclosure>
  );
}

export default Navbar;
