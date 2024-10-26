"use client";

import { motion, Variants } from "framer-motion";
import { PinContainer } from "./ui/3d-pin";
import { useState } from "react";

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

export function Tweets() {
  return (
    <div className="h-full w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-7xl mx-auto pt-5 z-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeInUpAnimation}
          className="flex justify-center text-center flex-col gap-40 py-20"
        >
          <motion.h1
            variants={fadeInUpAnimation}
            className="linear__text__gradient text-4xl font-extrabold leading-tight tracking-tight sm:text-7xl md:text-8xl"
          >
            On the Move
          </motion.h1>
        </motion.div>

        <div className="max-w-8xl flex flex-row flex-wrap items-center gap-16 pb-10">
          {pinsData.map((pin, index) => (
            <PinContainer key={index} title={pin.title} href={pin.href}>
              <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {pin.title}
                </h3>
                <div className="flex flex-1 w-full h-[12rem] rounded-lg mt-4 overflow-hidden">
                  <img
                    src={pin.imageUrl}
                    alt={pin.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
    </div>
  );
}

export const pinsData = [
  {
    title: "NSUT",
    imageUrl: "/assets/nsut.jpeg",
    href: "https://x.com/onlyhardikk/status/1843960962879193292",
  },
  {
    title: "Thapar University",
    imageUrl: "/assets/thapar.jpeg",
    href: "https://x.com/onlyhardikk/status/1844373086675874048",
  },
  {
    title: "IIT Mandi",
    imageUrl: "/assets/iitmandi.jpeg",
    href: "https://x.com/Rahul15kathuria/status/1843528722923827643",
  },
  {
    title: "Chitkara University",
    imageUrl: "/assets/chitkara.jpeg",
    href: "https://x.com/onlyhardikk/status/1844250285499412658",
  },
  {
    title: "Amity University",
    imageUrl: "/assets/amity.jpeg",
    href: "https://x.com/oyehardikk/status/1842067366034772286",
  },
  {
    title: "ABESIT",
    imageUrl: "/assets/abesit.jpeg",
    href: "https://x.com/oyehardikk/status/1843248801420865752",
  },
];
