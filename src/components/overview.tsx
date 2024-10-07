"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
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

export function Overview() {
  return (
    <div className="h-[100vh] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-7xl mx-auto pt-20 z-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeInUpAnimation}
          className="flex justify-center text-center flex-col gap-40"
        >
          <motion.h1
            variants={fadeInUpAnimation}
            className="linear__text__gradient text-4xl font-extrabold leading-tight tracking-tight sm:text-7xl md:text-8xl" // Increased font size here
          >
            Overview
          </motion.h1>
        </motion.div>
      </div>

      <BackgroundBeams />
    </div>
  );
}
