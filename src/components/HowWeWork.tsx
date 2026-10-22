"use client";

import { siteContent } from "@/lib/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function HowWeWork() {
  const { howWeWork } = siteContent;
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="como-trabajamos"
      ref={ref}
      className="bg-paper py-[96px] px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-[1200px] mx-auto">
        <h2
          className={`text-[32px] md:text-[40px] leading-[1.2] font-medium text-ink mb-[64px] text-center reveal-item ${
            isVisible ? "is-visible" : ""
          }`}
        >
          {howWeWork.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[48px]">
          {howWeWork.steps.map((step, index) => (
            <div
              key={step.num}
              className={`reveal-item ${isVisible ? "is-visible" : ""}`}
              style={{
                transitionDelay: isVisible ? `${index * 80}ms` : "0ms",
              }}
            >
              <span className="block text-[14px] font-medium leading-[1.2] text-soft mb-[12px]">
                {step.num}
              </span>
              <h3 className="text-[18px] leading-[1.3] font-medium text-ink mb-[8px]">
                {step.title}
              </h3>
              <p className="text-[16px] leading-[1.6] font-normal text-body m-0">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
