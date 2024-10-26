"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className="hidden sm:block bg-[#0a0a0a] shadow-md fixed top-5 left-0 right-0 z-50 w-[40vw] mx-auto rounded-[50px] border border-[#464646]"
      >
        <div className="flex justify-center h-16 items-center">
          <div className="space-x-8">
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
            <a
              href="#events"
              className="text-white opacity-75 hover:opacity-100"
            >
              Events
            </a>
            <a
              href="#joinus"
              className="text-white opacity-75 hover:opacity-100"
            >
              Join
            </a>
            <a
              href="#tweets"
              className="text-white opacity-75 hover:opacity-100"
            >
              Journey
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hamburger Icon */}
      <div className="sm:hidden fixed top-6 left-6 z-50 bg-black rounded-[50px] px-1">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white mt-1"
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col items-center justify-center space-y-6 text-white">
          <a
            href="#landing"
            onClick={() => setIsMenuOpen(false)}
            className="opacity-75 hover:opacity-100"
          >
            Home
          </a>
          <a
            href="#information"
            onClick={() => setIsMenuOpen(false)}
            className="opacity-75 hover:opacity-100"
          >
            Information
          </a>
          <a
            href="#overview"
            onClick={() => setIsMenuOpen(false)}
            className="opacity-75 hover:opacity-100"
          >
            Overview
          </a>
          <a
            href="#events"
            onClick={() => setIsMenuOpen(false)}
            className="opacity-75 hover:opacity-100"
          >
            Events
          </a>
          <a
            href="#joinus"
            onClick={() => setIsMenuOpen(false)}
            className="opacity-75 hover:opacity-100"
          >
            Join
          </a>
          <a
            href="#tweets"
            onClick={() => setIsMenuOpen(false)}
            className="opacity-75 hover:opacity-100"
          >
            Journey
          </a>
        </div>
      )}
    </>
  );
};
