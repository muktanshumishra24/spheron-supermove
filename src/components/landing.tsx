"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import { Heading } from "./ui/heading";

export function Landing() {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 z-10">
        <Heading />
      </div>
      <div className="absolute bottom-0 w-full">
        <Image
          src="/assets/spheron-backdrop.png"
          alt="logo"
          layout="responsive"
          width={1600}
          height={400}
          className="w-full h-auto"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
