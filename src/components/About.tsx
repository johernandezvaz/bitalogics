"use client";

import { siteContent } from "@/lib/content";
import FounderPhoto from "@/components/FounderPhoto";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const { about } = siteContent;
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      className="bg-deep text-paper py-[80px] px-8 overflow-hidden"
      id="nosotros"
      ref={ref}
    >
      <div
        className={`max-w-[1080px] mx-auto reveal-item ${
          isVisible ? "is-visible" : ""
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[56px] items-start">
          <div>
            <span className="eyebrow block !text-blue">{about.eyebrow}</span>
            <h2 className="font-serif text-[30px] font-medium mt-[10px] mb-[20px] text-paper">
              {about.title}
            </h2>
            <p className="text-paper/72 text-[15px] max-w-[460px] leading-relaxed">
              {about.paragraph1}
            </p>
            <div className="flex gap-[16px] items-center mt-[28px]">
              <FounderPhoto />
              <div>
                <b className="block font-serif text-[15.5px] font-medium text-paper">
                  {about.founderName}
                </b>
                <span className="text-[13px] text-paper/60">
                  {about.founderTitle}
                </span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-paper/72 text-[15px] max-w-[460px] leading-relaxed">
              {about.paragraph2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
