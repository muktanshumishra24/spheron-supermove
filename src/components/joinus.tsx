"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

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

export function JoinUs() {
  return (
    <div className="flex flex-col justify-center items-center h-auto px-4">
      <div className="max-w-7xl mx-auto pt-5 z-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeInUpAnimation}
          className="flex justify-center text-center flex-col gap-40"
        >
          <motion.h1
            variants={fadeInUpAnimation}
            className="linear__text__gradient text-4xl font-extrabold leading-tight tracking-tight sm:text-7xl md:text-8xl mb-10"
          >
            Join Us
          </motion.h1>
        </motion.div>
      </div>

      <div className="flex flex-col text-neutral-500 text-xl md:text-2xl space-y-6 mb-16 max-w-5xl px-4">
        <p>
          Calling all the web3 chads! This ain't no solo - dolo mission, the
          Spheron SuperMove Tour is about the community, for the community.
        </p>
        <p>
          Wanna help us blow this up? We need OGs like you to organize college
          events, host epic hackathons, and spread the degen gospel with online
          workshops. Know anyone building in the web3 space? Connect us!
        </p>
      </div>

      <div className="flex flex-col text-white text-xl md:text-3xl space-y-6 max-w-5xl px-4">
        <p>
          Check out more information about{" "}
          <LinkPreview
            url="https://sphn.notion.site/Spheron-SuperMove-Tour-a0a840cc31e3437b81394281005d6f7b"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-blue-500"
          >
            Supermove Notion
          </LinkPreview>{" "}
          and about{" "}
          <LinkPreview
            url="https://sphn.notion.site/Fizz-Your-Way-Spheron-Grant-Program-e6a2b8f79cf64c2fa5df026fa9391956"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-blue-500"
          >
            Grants Program
          </LinkPreview>{" "}
          here.
        </p>

        <p className="text-white">
          <LinkPreview
            url="https://www.typeform.com/explore/?utm_source=typeform.com&utm_medium=typeform&utm_content=typeform-incorrectURL&utm_campaign=viral_expt%0A%20%20%20%20"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-purple-500"
          >
            Join us
          </LinkPreview>{" "}
          for this revolution. Don’t just Move - It’s time to SuperMove!
        </p>
      </div>
    </div>
  );
}
