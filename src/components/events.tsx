"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

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

export function Events() {
  const eventsData = [
    {
      title: "University Workshops",
      description:
        "Empowering students with hands-on Web3 skills and cutting-edge blockchain insights.",
      imageUrl: "/assets/workshops.webp",
      link: "https://sphn.notion.site/University-Workshops-Timeline-171cd87db2eb40618e7e614e10752772?pvs=23",
    },
    {
      title: "The dAppthons",
      description:
        "A 12-hour hackathon challenge to build the most innovative decentralized applications.",
      imageUrl: "/assets/dappthon.webp",
      link: "https://sphn.notion.site/University-Workshops-Timeline-171cd87db2eb40618e7e614e10752772",
    },
    {
      title: "Virtual Hackathons",
      description:
        "Collaborate, compete, and create solutions that address real-world challenges in the Web3 space.",
      imageUrl: "/assets/hackathons.webp",
      link: "https://sphn.notion.site/dappAthon-Virtual-b3cbba61fdfd4daf91fb67594b010bd4",
    },
    {
      title: "Online Workshops",
      description: "Virtual sessions designed to enhance your knowledge.",
      imageUrl: "/assets/workshop2.webp",
      link: "https://sphn.notion.site/Online-Workshops-38089b95de6b447aaa9df443bc1dd2e7",
    },
    {
      title: "Builder's Meet",
      description:
        "A gathering of Web3 builders to brainstorm and work together on next-gen blockchain projects.",
      imageUrl: "/assets/meet.webp",
      link: "https://sphn.notion.site/BuildersMeet-612bf7af5a6a4d18804b644380c68884",
    },
    {
      title: "City-Wide Events",
      description:
        "Explore decentralized tech through city-wide hackathons, meetups, and Web3 celebrations.",
      imageUrl: "/assets/events.webp",
      link: "https://sphn.notion.site/City-Wide-Events-d037c41dd39d407991281ebb061c7d31",
    },
    {
      title: "Bounties",
      description:
        "Tackle bounties, solve challenges, and earn rewards while contributing to cutting-edge projects.",
      imageUrl: "/assets/bounties.webp",
      link: "https://sphn.notion.site/Bounties-8710451b6f29402987d85bdb00e5a1a3",
    },
  ];
  return (
    <div className="h-full w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-7xl mx-auto pt-20 z-10">
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
            Events
          </motion.h1>
        </motion.div>
      </div>
      <BackgroundBeams />

      {/* Flexbox layout for the cards */}
      <div className="flex flex-wrap justify-center gap-5 mt-10 ">
        {eventsData.map((event, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-black relative group/card hover:shadow-2xl hover:shadow-blue-500/[0.5] border-white/[0.3] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-white"
              >
                {event.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-100"
              >
                {event.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={event.imageUrl}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={`${event.title} thumbnail`}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={event.link}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-md font-normal text-white"
                >
                  Learn More →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
