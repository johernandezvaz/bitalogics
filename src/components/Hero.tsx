import Button from "@/components/Button";
import { siteContent } from "@/lib/content";
import { whatsappHref } from "@/lib/whatsapp";

export default function Hero() {
  const { hero } = siteContent;

  return (
    <header className="relative min-h-[100svh] flex items-center overflow-hidden bg-deep">
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ opacity: 0.55 }}
      >
        <source src="/embedded_systems_hero.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0"
        style={{ background: "rgba(14,27,46,0.45)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 py-16 text-center">
        <h1 className="text-[32px] md:text-[40px] leading-[1.2] font-medium text-paper text-balance max-w-[720px] mx-auto">
          {hero.title}
        </h1>

        <p className="mt-4 text-[18px] md:text-[20px] leading-[1.4] font-normal text-soft-on-dark max-w-[600px] mx-auto">
          {hero.valueLine}
        </p>

        <p className="mt-4 text-[16px] leading-[1.4] font-medium text-paper">
          {hero.specs}
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <Button href={whatsappHref()} variant="primary" surface="dark">
            {hero.primaryCta}
          </Button>
          <Button href="/#portafolio" variant="secondary" surface="dark">
            {hero.secondaryCta}
          </Button>
        </div>
      </div>
    </header>
  );
}
