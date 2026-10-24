"use client";

import { siteContent } from "@/lib/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Services() {
  const { services } = siteContent;
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="servicios"
      ref={ref}
      className="bg-white py-[96px] px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-[1200px] mx-auto">
        <div
          className={`max-w-[720px] mx-auto text-center mb-[64px] reveal-item ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <h2 className="text-[32px] md:text-[40px] leading-[1.2] font-medium text-ink">
            {services.title}
          </h2>
          <p className="mt-4 text-[18px] md:text-[20px] leading-[1.4] font-normal text-body">
            {services.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[64px] gap-y-[48px] max-w-[960px] mx-auto">
          {services.items.map((service) => (
            <div
              key={service.num}
              className={`reveal-item ${isVisible ? "is-visible" : ""}`}
            >
              <span className="block text-[14px] font-medium leading-[1.2] text-soft mb-[12px]">
                {service.num}
              </span>
              <h3 className="text-[18px] leading-[1.3] font-medium text-ink mb-[8px]">
                {service.title}
              </h3>
              <p className="text-[16px] leading-[1.6] font-normal text-body m-0">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
