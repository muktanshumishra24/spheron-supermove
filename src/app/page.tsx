import { BackgroundBeams } from "@/components/ui/background-beams";
import { Landing } from "@/components/landing";
import { Information } from "@/components/information";
import Image from "next/image";
import { Timeline } from "@/components/timeline";
import { Overview } from "@/components/overview";
import { Events } from "@/components/events";

export default function Home() {
  return (
    <div className="bg-neutral-950">
      <Landing />
      <Information />
      <Overview />
      <Events />
      <Timeline />
    </div>
  );
}
