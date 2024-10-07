import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { motion, Variants } from "framer-motion";

const fadeInUpAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 1.5,
    },
  },
};

export function Heading() {
  return (
    <div className="h-[40rem] flex flex-col items-center justify-center">
      <div className="grid place-items-center h-screen">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeInUpAnimation}
          className="flex justify-center text-center flex-col gap-4"
        >
          <motion.h1
            variants={fadeInUpAnimation}
            className="linear__text__gradient text-6xl font-extrabold leading-tight tracking-tight sm:text-8xl md:text-9xl" // Increased font size here
          >
            THE
            <br />
            <span className="text-8xl md:text-9xl">SUPERMOVE TOUR</span>{" "}
          </motion.h1>
          <motion.p
            variants={fadeInUpAnimation}
            className="text-base text-gray-500 md:text-2xl"
          >
            A Journey of Empowerment: Shaping India’s Blockchain Future!
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}