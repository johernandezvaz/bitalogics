import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";
import { siteContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portafolio: software industrial, páginas web y tiendas en línea",
  description:
    "Software industrial, sitios web y tiendas en línea desarrollados por Bitalogics en Chihuahua, con etiqueta honesta en cada proyecto.",
  alternates: { canonical: "/portafolio" },
};

export default function PortafolioPage() {
  const { portfolio } = siteContent;

  return (
    <div className="flex flex-col">
      <Nav />
      <main className="flex-1">
        {/* Enlace de regreso */}
        <div className="pt-8 px-6 md:px-12 lg:px-16 max-w-[1200px] mx-auto">
          <Link
            href="/"
            className="text-[14px] font-normal text-soft hover:text-ink transition-colors duration-[330ms] underline underline-offset-4"
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
