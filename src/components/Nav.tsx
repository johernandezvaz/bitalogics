"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/lib/content";

interface NavProps {

  darkHero?: boolean;
}

export default function Nav({ darkHero = false }: NavProps) {
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

  // Está sobre el hero oscuro y el usuario aún no ha hecho scroll
  const overDark = darkHero && !scrolled;

  const navLinkBase =
    "inline-flex items-center min-h-[44px] px-4 rounded-[4px] text-[14px] leading-[1.2] font-medium no-underline transition-colors duration-[330ms] ease-site focus-visible:outline-none focus-visible:ring-[3px]";

  const navLinkClass = overDark
    ? `${navLinkBase} text-paper hover:bg-white/[0.08] focus-visible:ring-paper`
    : `${navLinkBase} text-ink hover:bg-ink/[0.06] focus-visible:ring-blue`;

  return (
    <>
      <nav
        aria-label="Principal"
        className={`sticky top-0 z-30 transition-colors duration-[330ms] ease-site ${scrolled
            ? "bg-frost backdrop-blur-[12px]"
            : "bg-transparent backdrop-blur-none"
          }`}
      >
        <div className="flex items-center justify-between h-[72px] px-6 md:px-12 lg:px-16 max-w-[1200px] mx-auto">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className={`flex items-center gap-2 no-underline rounded-[4px] focus-visible:outline-none focus-visible:ring-[3px] ${overDark ? "focus-visible:ring-paper" : "focus-visible:ring-blue"
              }`}
          >
            <Image
              src={
                overDark
                  ? "/brand/bitalogics-b-inverso.svg"
                  : "/brand/bitalogics-b.svg"
              }
              alt={nav.logoAlt}
              width={32}
              height={32}
              style={{ width: "auto" }}
              className="h-8"
              priority
            />
            <span
              className={`text-[19px] leading-none font-medium tracking-normal transition-colors duration-[330ms] ${overDark ? "text-paper" : "text-ink"
                }`}
            >
              {nav.brand}
            </span>
          </Link>

          {/* Links escritorio */}
          <div className="hidden md:flex items-center gap-1">
            {nav.links.map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClass}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + hamburguesa */}
          <div className="flex items-center gap-2">
            {overDark ? (
              /* Sobre hero oscuro → enlace de texto para no competir con el botón dorado */
              <Link
                href="/#contacto"
                className="hidden md:inline-flex items-center min-h-[44px] px-4 rounded-[4px] text-[14px] leading-[1.2] font-medium text-paper no-underline transition-colors duration-[330ms] ease-site hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-paper"
              >
                {nav.cta}
              </Link>
            ) : (
              /* Sobre fondo claro o con scroll → botón azul oscuro */
              <Link
                href="/#contacto"
                className="hidden md:inline-flex items-center justify-center min-h-[48px] px-6 rounded-[4px] bg-blue-dark text-white text-[15px] leading-[1.2] font-medium no-underline transition-colors duration-[330ms] ease-site hover:bg-ink focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-blue"
              >
                {nav.cta}
              </Link>
            )}

            {/* Botón hamburguesa (móvil) */}
            <button
              type="button"
              aria-label={open ? nav.menuCloseLabel : nav.menuOpenLabel}
              aria-expanded={open}
              aria-controls="menu-movil"
              onClick={() => setOpen((v) => !v)}
              className={`md:hidden inline-flex items-center justify-center w-11 h-11 rounded-[4px] transition-colors duration-[330ms] ease-site focus-visible:outline-none focus-visible:ring-[3px] ${overDark
                  ? "text-paper hover:bg-white/[0.08] focus-visible:ring-paper"
                  : "text-ink hover:bg-ink/[0.06] focus-visible:ring-blue"
                }`}
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

      {/* Panel móvil */}
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
                className="flex items-center min-h-[56px] text-[18px] leading-[1.3] font-medium text-ink no-underline transition-colors duration-[330ms] ease-site hover:text-blue-dark focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-blue rounded-[4px]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contacto"
              onClick={closeMenu}
              className="mt-6 flex w-full items-center justify-center min-h-[48px] px-6 rounded-[4px] bg-blue-dark text-white text-[15px] font-medium no-underline transition-colors duration-[330ms] hover:bg-ink focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-blue"
            >
              {nav.cta}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
