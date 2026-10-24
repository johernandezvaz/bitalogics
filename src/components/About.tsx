"use client";

import { siteContent } from "@/lib/content";
import FounderPhoto from "@/components/FounderPhoto";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const { about } = siteContent;
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      className="bg-deep py-[96px] px-6 md:px-12 lg:px-16"
      id="nosotros"
      ref={ref}
    >
      <div
        className={`max-w-[1200px] mx-auto reveal-item ${
          isVisible ? "is-visible" : ""
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] md:gap-[64px] items-start">
          <div>
            <h2 className="text-[32px] md:text-[40px] leading-[1.2] font-medium text-paper mb-[24px]">
              {about.title}
            </h2>
            <p className="text-[16px] leading-[1.6] font-normal text-soft-on-dark max-w-[520px] m-0">
              {about.paragraph1}
            </p>
            <div className="flex gap-[16px] items-center mt-[32px]">
              <FounderPhoto />
              <div>
                <span className="block text-[16px] leading-[1.3] font-medium text-paper">
                  {about.founderName}
                </span>
                <span className="block text-[14px] leading-[1.5] font-normal text-soft-on-dark">
                  {about.founderTitle}
                </span>
              </div>
            </div>
          </div>
          <div className="md:pt-[72px]">
            <p className="text-[16px] leading-[1.6] font-normal text-soft-on-dark max-w-[520px] m-0">
              {about.paragraph2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
