"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import { WobbleCard } from "@/components/ui/wobble-card";
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
    <div className="h-[100vh] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased mt-20">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <div className="max-w-7xl mx-auto py-20 z-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeInUpAnimation}
            className="flex justify-center text-center flex-col gap-40"
          >
            <motion.h1
              variants={fadeInUpAnimation}
              className="linear__text__gradient text-4xl font-extrabold leading-tight tracking-tight sm:text-7xl md:text-8xl"
            >
              Overview
            </motion.h1>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto w-full mb-48">
          <WobbleCard
            containerClassName="col-span-1 w-full bg-black min-h-[300px]"
            className="w-full"
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Extensive Learning
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                Through a series of immersive workshops, both at individual
                colleges and city-wide, participants will gain a deep
                understanding of Spheron and Aptos’ ecosystem, Decentralised
                Apps (dApps), deploying smart contracts.
              </p>
            </div>
            <Image
              src="/linear.webp"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 w-full min-h-[300px]">
            <h2 className="max-w-96 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Supermove BuildersMeet
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              In 6 major cities across India, exclusive BuildersMeet events will
              connect early-stage Web3 founders, developers, and enthusiasts
              with industry leaders, investors, and mentors for networking,
              learning, and potential funding opportunities.
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 w-full min-h-[300px]">
            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Hackathon Showdown
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Six dynamic hackathons (day-dappAthons and dappAthons) will
              provide a competitive platform for participants to showcase their
              skills, build innovative projects, and win exciting rewards.
            </p>
          </WobbleCard>
          <WobbleCard
            containerClassName="col-span-1 w-full bg-black min-h-[300px]"
            className="w-full"
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Real-World Impact
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                The Spheron SuperMove tour is a mission towards creating a real
                - world impact by giving hands-on experience building
                decentralized applications (dApps) on Aptos with real-world use
                cases, leveraging Spheron's infrastructure.
              </p>
            </div>
            <Image
              src="/linear.webp"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
        </div>
      </BackgroundLines>
    </div>
  );
}
