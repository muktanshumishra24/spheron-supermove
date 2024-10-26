"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";

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

const information = [
  {
    title: "What is Supermove Tour?",
    quote:
      "Spheron SuperMove Tour is a 6 month long developer adoption campaign being lead by Spheron and Aptos. Spheron SuperMove Tour aims at uniting the open-source developer community here in India 🇮🇳 for building dapps on Aptos using Move while utilizing Spheron Network. This campaign will comprise of over 100+ events and will cover 50+ colleges & 20+ cities.",
  },
  {
    title: "Why move Super?",
    quote:
      "The Indian web3 developer ecosystem faces several challenges: a fragmented and inadequate education system, stagnant growth in communication and social channels, and limited reach and awareness among the target audience. Additionally, there's untapped potential in scaling hackathon projects into marketplace dApps, while current hackathons lack exposure to top-tier universities.",
  },
  {
    title: "Who tf is Supermove?",
    quote:
      "The Spheron SuperMove Tour is tailor-made for developers, aspiring blockchain builders, and open-source enthusiasts who are eager to dive into the world of blockchain and emerging decentralized technologies. This initiative is also for devshops willing to build or have been building in the web3 space to get their chance of seeking opportunities from industry leaders, investors, or finding a partner for their upcoming project.",
  },
];

export function Information() {
  return (
    <div className="h-full md:h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased text-white overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-40 h-auto bg-transparent z-50 blur-[3px]"
        animate={{ x: "100vw" }}
        initial={{ x: "-100vw" }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "loop" }}
        style={{ transform: "scaleY(-1)" }}
      >
        <Image
          src="/assets/car-tata-mirror.png"
          alt="car"
          width={128}
          height={64}
          className="w-full h-auto"
        />
      </motion.div>

      <div className="absolute top-0 w-full">
        <Image
          src="/assets/spheron-backdrop.png"
          alt="logo"
          layout="responsive"
          width={1600}
          height={400}
          className="w-full h-auto transform blur-[3px] scale-x-[-1] rotate-180"
        />
      </div>

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="max-w-7xl mx-auto pt-40 md:pt-20 z-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeInUpAnimation}
          className="flex flex-col gap-20"
        >
          {information.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUpAnimation}
              className="flex flex-col md:flex-row gap-10"
            >
              <div className="text-center md:text-start md:w-1/2">
                <h1 className="linear__text__gradient text-2xl md:text-5xl font-extrabold leading-tight tracking-tight">
                  {testimonial.title}
                </h1>
              </div>

              <div className="md:w-1/2 px-4 md:px-0 text-center md:text-start">
                <p className="text-sm md:text-xl">{testimonial.quote}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
