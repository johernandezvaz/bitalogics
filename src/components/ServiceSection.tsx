"use client";

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

export default function ServiceSection({ data }: ServiceSectionProps) {
  const { ref, isVisible } = useScrollReveal();
  const project = data.projectId
    ? projects.find((p) => p.id === data.projectId)
    : undefined;
  const image = project?.image;
  const isDark = data.surface === "deep";

  return (
    <section
      id={data.id}
      ref={ref}
      className={`${BG[data.surface]} min-h-[100svh] flex items-center px-6 md:px-12 lg:px-16 py-16`}
    >
      <div
        className={`w-full max-w-[1200px] mx-auto grid grid-cols-1 items-center text-center reveal-item ${isVisible ? "is-visible" : ""
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
            className={`mt-8 flex flex-col md:flex-row gap-4 md:justify-center ${image ? "lg:justify-start" : ""
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
        ) : (
          null
        )}
      </div>
    </section>
  );
}
