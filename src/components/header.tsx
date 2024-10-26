"use client";
import { motion } from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

export const Header = () => {
  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="bg-[#0a0a0a] shadow-md fixed top-5 left-0 right-0 z-50 w-[40vw] mx-auto rounded-[50px] border border-[#464646]" // Added mx-auto
    >
      <div className="flex justify-center h-16 items-center">
        {/* Links */}
        <div className="flex space-x-8">
          <a
            href="#landing"
            className="text-white opacity-75 hover:opacity-100"
          >
            Home
          </a>
          <a
            href="#information"
            className="text-white opacity-75 hover:opacity-100"
          >
            Information
          </a>
          <a
            href="#overview"
            className="text-white opacity-75 hover:opacity-100"
          >
            Overview
          </a>
          <a href="#events" className="text-white opacity-75 hover:opacity-100">
            Events
          </a>
          <a href="#joinus" className="text-white opacity-75 hover:opacity-100">
            Join
          </a>
          <a href="#tweets" className="text-white opacity-75 hover:opacity-100">
            Journey
          </a>
          {/* <a
            href="#timeline"
            className="text-white opacity-75 hover:opacity-100"
          >
            Timeline
          </a> */}
        </div>
      </div>
    </motion.nav>
  );
};
