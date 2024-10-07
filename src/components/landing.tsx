"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import { Heading } from "./ui/heading";

export function Landing() {
  return (
    <div className="h-[100vh] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      {/* Sponsor Image - Positioned at the top */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-auto z-20">
        <Image
          src="/assets/sponsors.png"
          alt="sponsors"
          width={500} // Increased size for the sponsor logo
          height={300} // Adjust height proportionally
        />
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto p-4 z-10">
        <Heading />
      </div>

      {/* Background image positioned at the bottom */}
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
