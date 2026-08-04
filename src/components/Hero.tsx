import { siteContent } from "@/lib/content";

export default function Hero() {
  const { hero } = siteContent;

  return (
    <header className="relative pt-[110px] pb-[90px] px-8 overflow-hidden">
      {/* Irregular seam element matching original design */}
      <div className="hero-seam hidden md:block" />

      <div className="relative max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12">
        <div>
          <span className="eyebrow block">{hero.eyebrow}</span>
          <h1 className="font-serif text-[32px] md:text-[44px] leading-[1.15] font-medium my-[18px] md:mb-[22px] text-ink">
            {hero.titleMain}
            <span className="font-mono text-blue-dark text-[0.62em] block tracking-[0.01em] mt-[6px]">
              {hero.titleMono}
            </span>
          </h1>
          <p className="text-[16.5px] text-text-soft max-w-[440px] mb-8 leading-relaxed">
            {hero.lead}
          </p>
          <div className="flex flex-wrap gap-[14px]">
            <a
              href="#contacto"
              className="bg-ink text-paper px-[24px] py-[13px] text-sm font-medium rounded-[2px] no-underline hover:bg-deep active:translate-y-[1px] transition-all duration-200"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#portafolio"
              className="border border-line text-ink px-[24px] py-[13px] text-sm font-medium rounded-[2px] no-underline hover:border-ink active:translate-y-[1px] transition-all duration-200"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 md:pl-6">
          {hero.stats.map((stat, idx) => (
            <div key={idx} className="border-l-2 border-blue pl-4">
              <b className="font-serif text-[26px] font-medium block text-ink">
                {stat.title}
              </b>
              <span className="text-[13px] text-text-soft">
                {stat.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
