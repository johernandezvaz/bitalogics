import Image from "next/image";
import Button from "@/components/Button";
import { siteContent } from "@/lib/content";
import { projects } from "@/lib/projects";
import { whatsappHref } from "@/lib/whatsapp";

export default function Hero() {
  const { hero } = siteContent;
  const project = projects.find((p) => p.id === hero.projectId);
  const image = project?.image;

  return (
    <header className="min-h-[calc(100svh-72px)] bg-deep flex flex-col px-6 md:px-12 lg:px-16">

      {/* ── Contenido principal ─────────────────────────────────── */}
      <div className="flex-1 flex items-center justify-center py-12 md:py-16">
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">

          {/* Texto — ocupa todo el ancho en móvil, 5/12 en escritorio */}
          <div className="text-center lg:text-left lg:col-span-5">
            <h1 className="text-[32px] md:text-[40px] leading-[1.2] font-medium text-paper text-balance">
              {hero.title}
            </h1>
            <p className="mt-4 text-[18px] md:text-[20px] leading-[1.4] font-normal text-soft-on-dark">
              {hero.valueLine}
            </p>
            <p className="mt-4 text-[16px] leading-[1.4] font-medium text-paper">
              {hero.specs}
            </p>
            <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
              <Button href={whatsappHref()} variant="primary" surface="dark">
                {hero.primaryCta}
              </Button>
              <Button href="/#portafolio" variant="secondary" surface="dark">
                {hero.secondaryCta}
              </Button>
            </div>
          </div>

          {/* Marco de celular — oculto en móvil, visible desde md ── */}
          {image && (
            <div className="hidden md:flex lg:col-span-7 items-center justify-center">
              {/* Contenedor paper-warm per DESIGN.md §6 */}
              <div className="bg-paper-warm rounded-[12px] p-4 md:p-6 w-full max-w-[340px] lg:max-w-[420px]">
                {/* Marco plano de celular: borde ink 2px, sin sombra, sin reflejo */}
                <div className="relative overflow-hidden rounded-[8px] border-2 border-ink aspect-[9/16]">
                  <Image
                    src={image}
                    alt={`Ejemplo de sitio web entregado por Bitalogics — ${project?.title ?? ""}`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 420px, 340px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Franja de productos ─────────────────────────────────────
          Al pie del hero, dentro de la primera pantalla (100svh).
          Tres enlaces a secciones. Primero activo con línea dorada.
          Móvil: fila con scroll horizontal, áreas táctiles 44 px.
      ─────────────────────────────────────────────────────────────── */}
      <nav
        aria-label="Secciones del sitio"
        className="border-t border-white/[0.08] overflow-x-auto"
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
