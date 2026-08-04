"use client";

import { useState } from "react";
import { siteContent } from "@/lib/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import ContactModal from "./ContactModal";

export default function Contact() {
  const { contact } = siteContent;
  const { ref, isVisible } = useScrollReveal();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="contacto" ref={ref} className="py-[80px] px-8 text-center overflow-hidden">
        <div
          className={`max-w-[1080px] mx-auto reveal-item ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <span className="eyebrow block">{contact.eyebrow}</span>
          <h2 className="font-serif text-[34px] font-medium max-w-[600px] mx-auto mt-[14px] mb-[28px] text-ink">
            {contact.title}
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-ink text-paper px-[24px] py-[13px] text-sm font-medium rounded-[2px] inline-block no-underline hover:bg-deep active:translate-y-[1px] transition-all duration-200 border-none cursor-pointer"
          >
            {contact.cta}
          </button>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
