import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ServiceSection from "@/components/ServiceSection";
import Portfolio from "@/components/Portfolio";
import HowWeWork from "@/components/HowWeWork";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { siteContent } from "@/lib/content";

export default function Home() {

  const extraSections = siteContent.serviceSections.slice(1);

  return (
    <div className="flex flex-col">
      <Nav darkHero />
      <main>
        <Hero />
        {extraSections.map((section) => (
          <ServiceSection key={section.id} data={section} />
        ))}
        <Portfolio />
        <HowWeWork />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
