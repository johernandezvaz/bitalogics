import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/lib/content";

export default function Nav() {
  const { nav } = siteContent;

  return (
    <nav className="sticky top-0 z-10 bg-paper/92 backdrop-blur-[6px] border-b border-line">
      <div className="flex items-center justify-between px-8 py-[18px] max-w-[1080px] mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-serif text-[19px] font-semibold text-ink no-underline"
        >
          <Image
            src="/logo.png"
            alt={nav.brand}
            width={120}
            height={32}
            className="w-auto h-[28px] object-contain"
            priority
          />
          <span>{nav.brand}</span>
        </Link>
        <div className="hidden md:flex items-center gap-9 text-sm font-medium">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 no-underline opacity-80 hover:opacity-100 hover:text-blue-dark transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-blue-dark hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contacto"
          className="font-mono text-[13px] border border-ink px-4 py-2 rounded-[2px] no-underline hover:bg-deep hover:text-paper active:translate-y-[1px] transition-all duration-200"
        >
          {nav.cta}
        </a>
      </div>
    </nav>
  );
}
