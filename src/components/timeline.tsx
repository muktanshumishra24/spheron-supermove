import Image from "next/image";
import React from "react";
import { TimelineUI } from "@/components/ui/timeline";

export function Timeline() {
  const data = [
    {
      title: "July",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
            {/* Other images */}
          </div>
        </div>
      ),
    },
    {
      title: "August",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Refined the UI components and added user feedback features.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/august-1.webp"
              alt="August template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
            {/* Add more images if necessary */}
          </div>
        </div>
      ),
    },
    {
      title: "September",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Optimized performance and integrated analytics tracking.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/september-1.webp"
              alt="September template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
            {/* Add more images if necessary */}
          </div>
        </div>
      ),
    },
    {
      title: "October",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Launched beta testing and received great feedback from users.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/october-1.webp"
              alt="October template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
            {/* Add more images if necessary */}
          </div>
        </div>
      ),
    },
    {
      title: "November",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Continued feature development and prepared for full release.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/november-1.webp"
              alt="November template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
            {/* Add more images if necessary */}
          </div>
        </div>
      ),
    },
    {
      title: "December",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Official launch of Aceternity, including Pro features.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/december-1.webp"
              alt="December template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
            {/* Add more images if necessary */}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-neutral-950 flex flex-col items-center justify-center">
      <h1 className="linear__text__gradient text-4xl font-extrabold leading-tight tracking-tight sm:text-7xl md:text-8xl mx-auto">
        Timeline
      </h1>
      <TimelineUI data={data} />
    </div>
  );
}
