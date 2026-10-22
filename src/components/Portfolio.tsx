"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { siteContent } from "@/lib/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface PortfolioProps {
  featuredOnly?: boolean;
}

export default function Portfolio({ featuredOnly = true }: PortfolioProps) {
  const { portfolio } = siteContent;
  const { ref, isVisible } = useScrollReveal();

  const displayedProjects = featuredOnly
    ? projects.filter((p) => p.destacado)
    : projects;

  const SectionHeading = featuredOnly ? "h2" : "h1";
  const CardHeading = featuredOnly ? "h3" : "h2";

  return (
    <section
      id="portafolio"
      ref={ref}
      className="bg-white py-[96px] px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-[1200px] mx-auto">

        <div
          className={`flex flex-col md:flex-row md:items-end justify-between mb-[64px] gap-4 reveal-item ${isVisible ? "is-visible" : ""
            }`}
        >
          <div className="max-w-[560px]">
            <SectionHeading className="text-[32px] md:text-[40px] leading-[1.2] font-medium text-ink">
              {featuredOnly ? portfolio.title : portfolio.pageTitle}
            </SectionHeading>
            <p className="text-[16px] leading-[1.6] font-normal text-body mt-4 m-0">
              {portfolio.intro}
            </p>
          </div>
          {featuredOnly && (
            <div className="flex-shrink-0">
              <Link
                href="/portafolio"
                className="text-[14px] font-normal text-soft hover:text-ink transition-colors duration-[330ms] underline underline-offset-4 no-underline hover:underline"
              >
                {portfolio.viewAllCta}
              </Link>
            </div>
          )}
        </div>

        <div
          className="grid gap-[24px]"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          }}
        >
          {displayedProjects.map((project, index) => {
            const isReal = project.tag === "real";
            return (
              <div
                key={project.id}
                className={`reveal-item ${isVisible ? "is-visible" : ""}`}
                style={{
                  transitionDelay: isVisible ? `${index * 80}ms` : "0ms",
                }}
              >

                <div className="relative aspect-[3/2] overflow-hidden rounded-[12px] bg-paper-warm">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`Captura del sitio web del proyecto ${project.title}`}
                      fill
                      sizes="(max-width: 720px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-[14px] font-normal text-soft text-center px-6">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-[16px]">
                  <span className="block text-[14px] font-normal text-soft mb-[4px]">
                    {isReal ? portfolio.tags.real : portfolio.tags.concept}
                  </span>
                  <CardHeading className="text-[18px] leading-[1.3] font-medium text-ink mb-[4px]">
                    {project.title}
                  </CardHeading>
                  <p className="text-[16px] leading-[1.6] font-normal text-body m-0">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

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
