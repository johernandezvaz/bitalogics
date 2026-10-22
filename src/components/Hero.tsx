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
    <header className="min-h-[calc(100svh-72px)] flex items-center bg-white px-6 md:px-12 lg:px-16 py-12 md:py-16">
      <div
        className={`w-full max-w-[1200px] mx-auto grid grid-cols-1 items-center text-center ${
          image ? "lg:grid-cols-12 lg:gap-12 lg:text-left" : ""
        }`}
      >
        <div className={image ? "lg:col-span-5" : "max-w-[720px] mx-auto"}>
          <h1 className="text-[32px] md:text-[40px] leading-[1.2] font-medium text-ink text-balance">
            {hero.title}
          </h1>
          <p className="mt-4 text-[18px] md:text-[20px] leading-[1.4] font-normal text-body">
            {hero.valueLine}
          </p>
          <p className="mt-4 text-[16px] leading-[1.4] font-medium text-ink">
            {hero.specs}
          </p>
          <div
            className={`mt-8 flex flex-col md:flex-row gap-4 md:justify-center ${
              image ? "lg:justify-start" : ""
            }`}
          >
            <Button href={whatsappHref()}>{hero.primaryCta}</Button>
            <Button href="/#portafolio" variant="secondary">
              {hero.secondaryCta}
            </Button>
          </div>
        </div>

        {image && (
          <div className="mt-8 md:mt-12 lg:mt-0 lg:col-span-7">

            <div className="bg-paper-warm rounded-[12px] p-4 md:p-8">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[4px] border-2 border-ink bg-white">
                <Image
                  src={image}
                  alt={`Captura de ${project.title}: ejemplo de sitio web entregado por Bitalogics`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
