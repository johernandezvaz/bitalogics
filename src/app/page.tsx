import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Lab from "@/components/Lab";
import HowWeWork from "@/components/HowWeWork";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Nav darkHero />
      <main>
        <Hero />
        <Services />
        <Lab />
        <HowWeWork />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
