import Nav from "@/components/Nav";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";
import { siteContent } from "@/lib/content";

export const metadata = {
  title: "Portafolio — Bitalogics",
  description:
    "Explora nuestro trabajo de cliente y las exploraciones de diseño que hemos desarrollado como estudio.",
};

export default function PortafolioPage() {
  const { portfolio } = siteContent;

  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Nav />
      <main className="flex-1">
        <div className="pt-8 px-8 max-w-[1080px] mx-auto">
          <Link
            href="/"
            className="font-mono text-[13px] text-blue-dark hover:underline inline-block"
          >
            {portfolio.backToHomeCta}
          </Link>
        </div>

        <Portfolio featuredOnly={false} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
