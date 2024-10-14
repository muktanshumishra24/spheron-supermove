import Image from "next/image";
import React from "react";
import { TimelineUI } from "@/components/ui/timeline";

export function Timeline() {
  const data = [
    {
      title: "July",
      content: (
        <div>
          <h1 className="text-neutral-200 text-3xl md:text-md font-normal my-8">
            City Wide Workshops
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/events.webp"
              alt="startup template"
              width={300}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Mid-July",
      content: (
        <div>
          <h1 className="text-neutral-200 text-3xl md:text-md font-normal mb-8">
            College & University Workshops
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/workshops.webp"
              alt="startup template"
              width={300}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "August",
      content: (
        <div>
          <h1 className="text-neutral-200 text-3xl md:text-md font-normal mb-8">
            Online Workshops
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/workshop2.webp"
              alt="startup template"
              width={300}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Mid-August",
      content: (
        <div>
          <h1 className="text-neutral-200 text-3xl md:text-md font-normal mb-8">
            Online Workshops
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/dappthon.webp"
              alt="startup template"
              width={300}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
            <Image
              src="/assets/hackathons.webp"
              alt="startup template"
              width={300}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
            <Image
              src="/assets/meet.webp"
              alt="startup template"
              width={300}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
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
