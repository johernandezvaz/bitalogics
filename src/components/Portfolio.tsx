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
    <section id="portafolio" ref={ref} className="py-[80px] px-8 overflow-hidden">
      <div className="max-w-[1080px] mx-auto">
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between mb-[44px] gap-4 reveal-item ${isVisible ? "is-visible" : ""
            }`}
        >
          <div className="max-w-[560px]">
            <span className="eyebrow block">{portfolio.eyebrow}</span>
            <SectionHeading className="font-serif text-[30px] font-medium mt-[10px] text-ink">
              {featuredOnly ? portfolio.title : portfolio.pageTitle}
            </SectionHeading>
            <p className="text-[14.5px] text-text-soft mt-3 leading-relaxed">
              {portfolio.intro}
            </p>
          </div>
          {featuredOnly && (
            <div>
              <Link
                href="/portafolio"
                className="font-mono text-[13px] border border-ink text-ink px-4 py-2 rounded-[2px] inline-block no-underline hover:bg-ink hover:text-paper active:translate-y-[1px] transition-all duration-200"
              >
                {portfolio.viewAllCta}
              </Link>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {displayedProjects.map((project, index) => {
            const isReal = project.tag === "real";
            return (
              <div
                key={project.id}
                className={`border border-line rounded-[2px] overflow-hidden bg-white flex flex-col transition-all duration-200 hover:-translate-y-1 hover:border-blue hover:shadow-[0_8px_24px_rgba(22,40,63,0.08)] reveal-item ${isVisible ? "is-visible" : ""
                  }`}
                style={{
                  transitionDelay: isVisible ? `${index * 80}ms` : "0ms",
                }}
              >
                <div
                  className={`h-[120px] bg-ink relative overflow-hidden flex items-center justify-center glass-reflection ${isReal && !project.image
                      ? "after:content-[''] after:absolute after:inset-0 after:left-[55%] after:bg-blue"
                      : ""
                    }`}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`Captura del sitio web del proyecto ${project.title}`}
                      fill
                      sizes="(max-width: 720px) 100vw, 33vw"
                      className="object-cover object-center"
                    />
                  ) : (
                    <div className="w-full h-full bg-paper-warm border-b border-line flex items-center justify-center p-4 text-center">
                      <span className="font-mono text-[11px] text-text-soft uppercase tracking-wider">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-[20px] flex-1 flex flex-col">
                  <div>
                    <span
                      className={`inline-block font-mono text-[11px] px-[8px] py-[3px] rounded-[2px] mb-[10px] ${isReal
                          ? "bg-blue/12 text-blue-dark"
                          : "bg-gold/15 text-[#8a5a20]"
                        }`}
                    >
                      {isReal ? portfolio.tags.real : portfolio.tags.concept}
                    </span>
                  </div>
                  <CardHeading className="font-serif text-[16.5px] font-medium mb-[6px] text-ink">
                    {project.title}
                  </CardHeading>
                  <p className="text-[13.5px] text-text-soft m-0 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {featuredOnly && (
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/portafolio"
              className="font-mono text-[13px] border border-ink text-ink px-4 py-2 rounded-[2px] inline-block no-underline hover:bg-ink hover:text-paper active:translate-y-[1px] transition-all duration-200"
            >
              {portfolio.viewAllCta}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
