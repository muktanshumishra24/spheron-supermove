"use client";
import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import { Heading } from "./ui/heading";

export function Landing() {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 z-10">
        <Heading />
      </div>

      <motion.div
        className="absolute bottom-0 left-0 w-40 h-auto bg-transparent z-10 pt-40"
        animate={{ x: "100vw" }}
        initial={{ x: "-100vw" }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "loop" }}
      >
        <Image
          src="/assets/car-tata.png"
          alt="car"
          width={128}
          height={64}
          className="w-full h-auto pt-40"
        />
      </motion.div>

      <div className="absolute bottom-0 w-full">
        <Image
          src="/assets/spheron-backdrop.png"
          alt="backdrop"
          layout="responsive"
          width={1920}
          height={480}
          className="w-full h-auto"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
