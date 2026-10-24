import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Lab from "@/components/Lab";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { siteContent } from "@/lib/content";

const { lab } = siteContent;

export const metadata: Metadata = {
  title: lab.pageTitle,
  description: lab.pageDescription,
  alternates: { canonical: "/portafolio" },
};

export default function PortafolioPage() {
  return (
    <div className="flex flex-col">
      <Nav />
      <main className="flex-1 pt-[72px]">
        <div className="bg-paper pt-8 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1200px] mx-auto">
            <Link
              href="/"
              className="text-[14px] font-normal text-soft hover:text-ink transition-colors duration-[330ms] underline underline-offset-4"
            >
              {lab.backToHomeCta}
            </Link>
          </div>
        </div>

        <Lab asPage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
