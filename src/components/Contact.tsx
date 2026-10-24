"use client";

import { useState } from "react";
import Image from "next/image";
import { siteContent } from "@/lib/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { whatsappHref } from "@/lib/whatsapp";
import ContactModal from "./ContactModal";
import Button from "./Button";

export default function Contact() {
  const { contact } = siteContent;
  const { ref, isVisible } = useScrollReveal();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="contacto"
        ref={ref}
        className="bg-deep py-[96px] px-6 md:px-12 lg:px-16"
      >
        <div
          className={`max-w-[720px] mx-auto text-center reveal-item ${isVisible ? "is-visible" : ""
            }`}
        >

          <div
            className="flex justify-center mb-[32px]"
            aria-hidden="true"
          >
            <Image
              src="/brand/andy-inverso.svg"
              alt=""
              width={64}
              height={80}
              className="h-[80px] w-auto"
            />
          </div>

          <h2 className="text-[32px] md:text-[40px] leading-[1.2] font-medium text-paper mb-[16px]">
            {contact.title}
          </h2>
          <p className="text-[16px] leading-[1.6] font-normal text-soft-on-dark mb-[32px]">
            {contact.body}
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              href={whatsappHref(contact.whatsappCta)}
              variant="primary"
              surface="dark"
            >
              {contact.whatsappCta}
            </Button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-[4px] text-[15px] leading-[1.2] font-medium bg-paper/[0.08] text-paper hover:bg-paper/[0.16] transition-colors duration-[330ms] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-paper w-full md:w-auto md:min-w-[200px] cursor-pointer border-none"
            >
              {contact.cta}
            </button>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
