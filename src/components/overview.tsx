"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { BackgroundLines } from "@/components/ui/background-lines";

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
    <div className="h-full md:h-screen w-full rounded-md bg-transparent relative flex flex-col items-center justify-center antialiased mt-10">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <div className="max-w-7xl mx-auto py-20 z-10 flex flex-col items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeInUpAnimation}
            className="flex justify-start text-left flex-col gap-40"
          >
            <motion.h1
              variants={fadeInUpAnimation}
              className="linear__text__gradient text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl md:text-8xl"
            >
              Overview
            </motion.h1>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center items-start gap-8 max-w-7xl mx-auto w-full mb-48">
          <motion.div
            variants={fadeInUpAnimation}
            initial="hidden"
            animate="show"
            className="flex flex-col w-full max-w-lg text-left"
          >
            <h2 className="text-balance text-lg md:text-xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
              Extensive Learning
            </h2>
            <p className="mt-4 text-lg md:text-base lg:text-xl text-neutral-200">
              Through a series of immersive workshops, both at individual
              colleges and city-wide, participants will gain a deep
              understanding of Spheron and Aptos’ ecosystem, Decentralised Apps
              (dApps), deploying smart contracts.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUpAnimation}
            initial="hidden"
            animate="show"
            className="flex flex-col w-full max-w-lg text-right"
          >
            <h2 className="text-balance text-lg md:text-xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
              Supermove BuildersMeet
            </h2>
            <p className="mt-4 text-lg md:text-base lg:text-xl text-neutral-200">
              In 6 major cities across India, exclusive BuildersMeet events will
              connect early-stage Web3 founders, developers, and enthusiasts
              with industry leaders, investors, and mentors for networking,
              learning, and potential funding opportunities.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUpAnimation}
            initial="hidden"
            animate="show"
            className="flex flex-col w-full max-w-lg text-left"
          >
            <h2 className="text-balance text-lg md:text-xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
              Hackathon Showdown
            </h2>
            <p className="mt-4 text-lg md:text-base lg:text-xl text-neutral-200">
              Six dynamic hackathons (day-dappAthons and dappAthons) will
              provide a competitive platform for participants to showcase their
              skills, build innovative projects, and win exciting rewards.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUpAnimation}
            initial="hidden"
            animate="show"
            className="flex flex-col w-full max-w-lg text-right min-h-[300px]"
          >
            <h2 className="text-balance text-lg md:text-xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
              Real-World Impact
            </h2>
            <p className="mt-4 text-lg md:text-base lg:text-xl text-neutral-200">
              The Spheron SuperMove tour is a mission towards creating a real
              world impact by giving hands-on experience building decentralized
              applications (dApps) on Aptos with real-world use cases,
              leveraging Spheron's infrastructure.
            </p>
          </motion.div>
        </div>
      </BackgroundLines>
    </div>
  );
}
