import Button from "@/components/Button";
import { siteContent } from "@/lib/content";
import { whatsappHref } from "@/lib/whatsapp";

export default function Hero() {
  const { hero } = siteContent;

  return (
    <header className="relative min-h-[calc(100svh-72px)] bg-deep flex flex-col overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ opacity: 0.55 }}
      >
        <source src="/bitalogics_hero.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0"
        style={{ background: "rgba(14,27,46,0.45)" }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-x-0 top-0 h-28"
        style={{
          background:
            "linear-gradient(to bottom, rgba(14,27,46,0.72) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="text-center max-w-[720px] mx-auto">
          <h1 className="text-[32px] md:text-[40px] leading-[1.2] font-medium text-paper text-balance">
            {hero.title}
          </h1>
          <p className="mt-4 text-[18px] md:text-[20px] leading-[1.4] font-normal text-soft-on-dark">
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
      </div>

      <nav
        aria-label="Secciones del sitio"
        className="relative z-10 border-t border-white/[0.08] overflow-x-auto"
      >
        <ul className="flex md:grid md:grid-cols-3 divide-x divide-white/[0.08] list-none m-0 p-0 min-w-max md:min-w-0">
          {hero.strip.map((item, i) => (
            <li key={item.href} className="flex-shrink-0 md:flex-shrink">
              <a
                href={item.href}
                className="flex flex-col justify-center min-h-[44px] px-6 py-4 no-underline transition-colors duration-[330ms] hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-inset focus-visible:ring-blue"
                style={
                  i === 0
                    ? { borderBottom: "2px solid var(--color-gold)" }
                    : { borderBottom: "2px solid transparent" }
                }
              >
                <span className="block text-[16px] leading-[1.3] font-medium text-paper whitespace-nowrap">
                  {item.label}
                </span>
                <span className="block text-[14px] leading-[1.4] font-normal text-soft-on-dark mt-[2px] whitespace-nowrap">
                  {item.description}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
