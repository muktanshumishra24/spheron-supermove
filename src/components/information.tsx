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

export function Information() {
  return (
    <div className="h-[100vh] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="absolute top-0 w-full z-10">
        <Image
          src="/assets/spheron-backdrop.png"
          alt="logo"
          layout="responsive"
          width={1600}
          height={400}
          className="w-full h-auto transform blur-[3px] scale-x-[-1] rotate-180" // Added scale-x-[-1] for horizontal mirroring
        />
      </div>
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
            What, Why and How?
          </motion.h1>
        </motion.div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

const testimonials = [
  {
    title: "What is Supermove Tour?",
    quote:
      "Spheron SuperMove Tour is a 6 month long developer adoption campaign being lead by Spheron and Aptos. Spheron SuperMove Tour aims at uniting the open - source developer community here in India 🇮🇳 for building dapps on Aptos using Move while utilising Spehron Network.This campaign will comprise of over 100+ events and will cover 50+ colleges & 20+ cities.",
  },
  {
    title: "Why move Super?",
    quote:
      "The Indian web3 developer ecosystem faces several challenges: a fragmented and inadequate education system, stagnant growth in communication and social channels, and limited reach and awareness among the target audience. Additionally, there's untapped potential in scaling hackathon projects into marketplace dApps, while current hackathons lack exposure to top-tier universities.",
  },
  {
    title: "Who tf is Supermove?",
    quote:
      "The Spheron SuperMove Tour is tailor-made for developers, aspiring blockchain builders, and open-source enthusiasts who are eager to dive into the world of blockchain and emerging decentralised technologies. This initiative is also for the devshops who are either willing to build or have been building in the web3 space to get their chance of seeking opportunities from Industry leaders, investors or find a partner for their upcoming project. ",
  },
];
