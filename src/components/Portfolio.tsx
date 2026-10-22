"use client";

import Link from "next/link";
import { projects } from "@/lib/projects";
import { siteContent } from "@/lib/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CardTimeMachine, type CardTimeMachineItem } from "@/components/cards/CardTimeMachine";

interface PortfolioProps {
  featuredOnly?: boolean;
}

export default function Portfolio({ featuredOnly = true }: PortfolioProps) {
  const { portfolio } = siteContent;
  const { ref, isVisible } = useScrollReveal();

  const SectionHeading = featuredOnly ? "h2" : "h1";
  const CardHeading = featuredOnly ? "h3" : "h2";

  // Todo va en el carrusel. Los industriales abren (DESIGN.md §7), después el resto en su orden.
  const visible = featuredOnly ? projects.filter((p) => p.destacado) : projects;
  const ordered = [
    ...visible.filter((p) => p.tag === "industrial"),
    ...visible.filter((p) => p.tag !== "industrial"),
  ];

  const tagLabel = (tag: string) => {
    if (tag === "industrial") return portfolio.tags.industrial;
    if (tag === "real") return portfolio.tags.real;
    return portfolio.tags.concept;
  };

  const carouselItems: CardTimeMachineItem[] = ordered.map((p) => ({
    src: (p.portfolioImage ?? p.image) || "",
    alt:
      p.tag === "industrial"
        ? `Pantalla de operación: ${p.title}`
        : `Captura del proyecto ${p.title}`,
    label: tagLabel(p.tag),
    title: p.title,
    description: p.description,
    fit: p.imageFit ?? "cover",
  }));

  return (
    <section
      id="portafolio"
      ref={ref}
      className="bg-white py-[96px] px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-[1200px] mx-auto">

        <div
          className={`flex flex-col md:flex-row md:items-end justify-between mb-[48px] gap-4 reveal-item ${isVisible ? "is-visible" : ""}`}
        >
          <div className="max-w-[600px]">
            <SectionHeading className="text-[32px] md:text-[40px] leading-[1.2] font-medium text-ink">
              {featuredOnly ? portfolio.title : portfolio.pageTitle}
            </SectionHeading>
            <p className="text-[16px] leading-[1.6] font-normal text-body mt-4 m-0">
              {portfolio.intro}
            </p>
          </div>
          {featuredOnly && (
            <div className="flex-shrink-0 hidden md:block">
              <Link
                href="/portafolio"
                className="text-[14px] font-normal text-soft hover:text-ink transition-colors duration-[330ms] underline underline-offset-4"
              >
                {portfolio.viewAllCta}
              </Link>
            </div>
          )}
        </div>

        {carouselItems.length > 0 && (
          <div className={`reveal-item ${isVisible ? "is-visible" : ""}`}>
            <CardTimeMachine
              items={carouselItems}
              headingLevel={CardHeading}
              ariaLabel={featuredOnly ? portfolio.title : portfolio.pageTitle}
            />
          </div>
        )}

        {/* CTA móvil */}
        {featuredOnly && (
          <div className="mt-[48px] text-center md:hidden">
            <Link
              href="/portafolio"
              className="text-[14px] font-normal text-soft hover:text-ink transition-colors duration-[330ms] underline underline-offset-4"
            >
              {portfolio.viewAllCta}
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
