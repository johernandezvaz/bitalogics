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
      className="bg-paper-warm py-[80px] px-8 overflow-hidden"
    >
      <div className="max-w-[1080px] mx-auto">
        <div
          className={`mb-[44px] max-w-[560px] reveal-item ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <span className="eyebrow block">{services.eyebrow}</span>
          <h2 className="font-serif text-[30px] font-medium mt-[10px] text-ink">
            {services.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
          {services.items.map((service, index) => (
            <div
              key={service.num}
              className={`bg-paper-warm p-8 transition-all duration-200 hover:-translate-y-1 hover:border-blue hover:shadow-[0_8px_24px_rgba(22,40,63,0.08)] reveal-item ${
                isVisible ? "is-visible" : ""
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 80}ms` : "0ms",
              }}
            >
              <span className="font-mono text-[12px] text-gold block">
                {service.num}
              </span>
              <h3 className="font-serif text-[19px] font-medium my-[12px] text-ink">
                {service.title}
              </h3>
              <p className="text-[14.5px] text-soft m-0 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
