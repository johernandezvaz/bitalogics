"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { labProjects, type LabProject } from "@/lib/projects";
import { siteContent } from "@/lib/content";
import { whatsappHref } from "@/lib/whatsapp";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Surface = "paper" | "white";

const BG: Record<Surface, string> = {
  paper: "bg-paper",
  white: "bg-white",
};

interface LabProps {
  /** En /portafolio el título de la sección es el h1 de la página */
  asPage?: boolean;
}

/** Superficies alternas por pantalla de proyecto */
const surfaceFor = (index: number): Surface => (index % 2 === 0 ? "paper" : "white");

export default function Lab({ asPage = false }: LabProps) {
  const { lab } = siteContent;
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const SectionHeading = asPage ? "h1" : "h2";
  const ProjectHeading = asPage ? "h2" : "h3";

  const header = (
    <div
      className={`max-w-[720px] mx-auto text-center mb-[64px] reveal-item ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <SectionHeading
        id="laboratorio-titulo"
        className="text-[32px] md:text-[40px] leading-[1.2] font-medium text-ink"
      >
        {lab.title}
      </SectionHeading>
      <p className="mt-4 text-[18px] md:text-[20px] leading-[1.4] font-normal text-body">
        {lab.intro}
      </p>
    </div>
  );

  return (
    <section id="laboratorio" aria-labelledby="laboratorio-titulo" ref={ref}>
      {labProjects.map((project, index) => (
        <LabProjectScreen
          key={project.id}
          project={project}
          surface={surfaceFor(index)}
          headingLevel={ProjectHeading}
          header={index === 0 ? header : null}
        />
      ))}
    </section>
  );
}

interface LabProjectScreenProps {
  project: LabProject;
  surface: Surface;
  headingLevel: "h2" | "h3";
  /** Encabezado de la sección, solo en la primera pantalla */
  header?: React.ReactNode;
}

function LabProjectScreen({ project, surface, headingLevel: Heading, header }: LabProjectScreenProps) {
  const { lab } = siteContent;
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.2);

  return (
    <article
      ref={ref}
      id={project.id}
      className={`${BG[surface]} min-h-[100svh] flex items-center px-6 md:px-12 lg:px-16 py-16`}
    >
      <div className="w-full">
        {header}
        <div
          className={`w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 lg:gap-12 items-center text-center lg:text-left reveal-item ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <div className="lg:col-span-5">
            <Heading className="text-[32px] md:text-[40px] leading-[1.2] font-medium text-ink text-balance">
              {project.title}
            </Heading>
            <p className="mt-4 text-[18px] md:text-[20px] leading-[1.4] font-normal text-body">
              {project.summary}
            </p>
            <p className="mt-4 text-[16px] leading-[1.6] font-normal text-body max-w-[560px] mx-auto lg:mx-0">
              {project.description}
            </p>
            <p className="mt-4 text-[16px] leading-[1.4] font-medium text-ink">
              <span className="sr-only">{lab.techLabel}: </span>
              {project.tech.join(" · ")}
            </p>
            <div className="mt-8 flex flex-col md:flex-row gap-4 md:justify-center lg:justify-start">
              <Button href={whatsappHref(project.whatsappMessage)} variant="primary" surface="light">
                {lab.cta}
              </Button>
            </div>
          </div>

          <figure className="mt-12 lg:mt-0 lg:col-span-7 m-0">
            <div className="bg-paper-warm rounded-[12px] p-4 md:p-8">
              <div className="relative aspect-[3/2]">
                <Image
                  src={project.illustration}
                  alt={project.illustrationAlt}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            <figcaption className="mt-4 text-[14px] leading-[1.5] font-normal text-soft text-center lg:text-left">
              {lab.tags[project.tag]}
            </figcaption>
          </figure>
        </div>
      </div>
    </article>
  );
}
