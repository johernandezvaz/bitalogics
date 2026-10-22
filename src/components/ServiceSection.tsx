"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { projects } from "@/lib/projects";
import { whatsappHref } from "@/lib/whatsapp";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Surface = "white" | "paper" | "deep";

interface ServiceSectionData {
  id: string;
  title: string;
  valueLine: string;
  specs: string;
  primaryCta: string;
  secondaryCta: string;
  surface: Surface;
  projectId: string;
  coverImage?: string; // Imagen de fondo con efecto parallax (opcional)
}

interface ServiceSectionProps {
  data: ServiceSectionData;
}

const BG: Record<Surface, string> = {
  white: "bg-white",
  paper: "bg-paper",
  deep: "bg-deep",
};

const TITLE_COLOR: Record<Surface, string> = {
  white: "text-ink",
  paper: "text-ink",
  deep: "text-paper",
};

const VALUE_COLOR: Record<Surface, string> = {
  white: "text-body",
  paper: "text-body",
  deep: "text-soft-on-dark",
};

const SPECS_COLOR: Record<Surface, string> = {
  white: "text-ink",
  paper: "text-ink",
  deep: "text-paper",
};

/** Hook de parallax simple: devuelve un offset en px para translateY */
function useParallax(factor = 0.25) {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const rafRef = useRef<number | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) { setOffset(0); return; }

    const update = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      setOffset((sectionCenter - viewportCenter) * factor);
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [factor, reducedMotion]);

  return { sectionRef, offset };
}

export default function ServiceSection({ data }: ServiceSectionProps) {
  const { ref: revealRef, isVisible } = useScrollReveal();
  const { sectionRef, offset } = useParallax(0.25);
  const isDark = data.surface === "deep";

  const project = data.projectId
    ? projects.find((p) => p.id === data.projectId)
    : undefined;
  const image = project?.image;

  // Combina los refs de scroll reveal y parallax
  const combinedRef = (el: HTMLElement | null) => {
    (sectionRef as React.MutableRefObject<HTMLElement | null>).current = el;
    (revealRef as React.MutableRefObject<HTMLElement | null>).current = el;
  };

  return (
    <section
      id={data.id}
      ref={combinedRef}
      className={`${data.coverImage ? "relative" : BG[data.surface]} min-h-[100svh] flex items-center px-6 md:px-12 lg:px-16 py-16 overflow-hidden`}
      style={data.coverImage ? { background: "var(--color-deep)" } : undefined}
    >
      {/* Imagen de fondo con parallax */}
      {data.coverImage && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute inset-[-15%]"
            style={{
              transform: `translateY(${offset}px)`,
              willChange: "transform",
            }}
          >
            <Image
              src={data.coverImage}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
          </div>
          {/* Overlay oscuro para mantener contraste de texto */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(14,27,46,0.62)" }}
          />
        </div>
      )}

      {/* Contenido */}
      <div
        className={`relative z-10 w-full max-w-[1200px] mx-auto grid grid-cols-1 items-center text-center reveal-item ${
          isVisible ? "is-visible" : ""
        } ${image ? "lg:grid-cols-12 lg:gap-12 lg:text-left" : ""}`}
      >
        <div className={image ? "lg:col-span-5" : "max-w-[720px] mx-auto"}>
          <h2
            className={`text-[32px] md:text-[40px] leading-[1.2] font-medium text-balance ${TITLE_COLOR[data.surface]}`}
          >
            {data.title}
          </h2>
          <p
            className={`mt-4 text-[18px] md:text-[20px] leading-[1.4] font-normal ${VALUE_COLOR[data.surface]}`}
          >
            {data.valueLine}
          </p>
          <p
            className={`mt-4 text-[16px] leading-[1.4] font-medium ${SPECS_COLOR[data.surface]}`}
          >
            {data.specs}
          </p>
          <div
            className={`mt-8 flex flex-col md:flex-row gap-4 md:justify-center ${
              image ? "lg:justify-start" : ""
            }`}
          >
            <Button
              href={whatsappHref(data.primaryCta)}
              variant="primary"
              surface={isDark ? "dark" : "light"}
            >
              {data.primaryCta}
            </Button>
            {data.secondaryCta && (
              <Button
                href={`/#portafolio`}
                variant="secondary"
                surface={isDark ? "dark" : "light"}
              >
                {data.secondaryCta}
              </Button>
            )}
          </div>
        </div>

        {image ? (
          <div className="mt-12 lg:mt-0 lg:col-span-7">
            <div className="bg-paper-warm rounded-[12px] p-4 md:p-8">
              <div className="relative aspect-[3/2] overflow-hidden rounded-[12px]">
                <Image
                  src={image}
                  alt={`Captura de ${project?.title ?? data.title}: proyecto entregado por Bitalogics`}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
