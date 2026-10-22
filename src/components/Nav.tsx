"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/lib/content";

const NAV_LINK =
  "inline-flex items-center min-h-[44px] px-4 rounded-[4px] text-[14px] leading-[1.2] font-medium text-ink no-underline transition-colors duration-330 ease-site hover:bg-ink/[0.06] active:bg-ink/[0.06] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-blue";

const PRIMARY_BUTTON =
  "items-center justify-center min-h-[48px] px-6 rounded-[4px] bg-blue-dark text-white text-[15px] leading-[1.2] font-medium no-underline transition-colors duration-330 ease-site hover:bg-ink focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-blue";

export default function Nav() {
  const { nav } = siteContent;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav
        aria-label="Principal"
        className={`sticky top-0 z-30 transition-colors duration-330 ease-site ${scrolled
          ? "bg-frost backdrop-blur-[12px]"
          : "bg-transparent backdrop-blur-none"
          }`}
      >
        <div className="flex items-center justify-between h-[72px] px-6 md:px-12 lg:px-16 max-w-[1200px] mx-auto">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2 text-ink no-underline rounded-[4px] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-blue"
          >
            <Image
              src="/brand/bitalogics-b.svg"
              alt={nav.logoAlt}
              width={32}
              height={32}
              className="h-8 w-8"
              priority
            />
            <span className="text-[19px] leading-none font-medium tracking-normal">
              {nav.brand}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {nav.links.map((link) => (
              <Link key={link.href} href={link.href} className={NAV_LINK}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link href="/#contacto" className={`hidden md:inline-flex ${PRIMARY_BUTTON}`}>
              {nav.cta}
            </Link>
            <button
              type="button"
              aria-label={open ? nav.menuCloseLabel : nav.menuOpenLabel}
              aria-expanded={open}
              aria-controls="menu-movil"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-[4px] text-ink transition-colors duration-330 ease-site hover:bg-ink/[0.06] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-blue"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div
          id="menu-movil"
          className="md:hidden fixed inset-0 top-[72px] z-20 bg-white overflow-y-auto"
        >
          <div className="flex flex-col px-6 pt-8 pb-12 gap-2">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center min-h-[56px] text-[18px] leading-[1.3] font-medium text-ink no-underline transition-colors duration-330 ease-site hover:text-blue-dark focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-blue rounded-[4px]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contacto"
              onClick={closeMenu}
              className={`mt-6 flex w-full ${PRIMARY_BUTTON}`}
            >
              {nav.cta}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
