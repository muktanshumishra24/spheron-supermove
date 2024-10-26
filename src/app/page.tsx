import { BackgroundBeams } from "@/components/ui/background-beams";
import { Landing } from "@/components/landing";
import { Information } from "@/components/information";
import { Overview } from "@/components/overview";
import { Events } from "@/components/events";
import { Footer } from "@/components/footer";
import { Tweets } from "@/components/tweets";
import { Header } from "@/components/header";
import { JoinUs } from "@/components/joinus";

export default function Home() {
  return (
    <div className="bg-neutral-950">
      <Header />
      <section id="landing">
        <Landing />
      </section>
      <section id="information">
        <Information />
      </section>
      <section id="overview">
        <Overview />
      </section>
      <section id="events">
        <Events />
      </section>
      <section id="joinus">
        <JoinUs />
      </section>
      <section id="tweets">
        <Tweets />
      </section>
      <Footer />
    </div>
  );
}
