import { siteContent } from "@/lib/content";

export const SITE_URL = "https://bitalogics.com";
export const SITE_NAME = "Bitalogics";

export const SITE_TITLE =
  "Páginas web en Chihuahua, sistemas a la medida e IoT";

export const SITE_DESCRIPTION =
  "Páginas web en Chihuahua desde $2,500 MXN, tiendas en línea, software a la medida y sistemas embebidos e IoT para negocios del norte de México.";

export const OG_IMAGE = {
  width: 1200,
  height: 630,
  alt: "Bitalogics — logo b sobre fondo azul marino",
};

export const BUSINESS = {
  telephone: "[TELÉFONO]",
  streetAddress: "[DIRECCIÓN]",
  email: "hola@bitalogics.com",
  city: "Chihuahua",
  region: "Chihuahua",
  country: "MX",
};

const isFilled = (value: string) => !value.trim().startsWith("[");

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function buildProfessionalServiceJsonLd() {
  const address: Record<string, string> = {
    "@type": "PostalAddress",
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    addressCountry: BUSINESS.country,
  };
  if (isFilled(BUSINESS.streetAddress)) {
    address.streetAddress = BUSINESS.streetAddress;
  }

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/android-chrome-512x512.png"),
    image: absoluteUrl("/opengraph-image"),
    description: SITE_DESCRIPTION,
    email: BUSINESS.email,
    ...(isFilled(BUSINESS.telephone) && { telephone: BUSINESS.telephone }),
    address,
    areaServed: [
      { "@type": "City", name: "Chihuahua" },
      { "@type": "AdministrativeArea", name: "Chihuahua" },
      { "@type": "Country", name: "México" },
    ],
    knowsLanguage: "es-MX",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Bitalogics",
      itemListElement: siteContent.services.items.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.title,
          description: item.description,
          areaServed: "Chihuahua, México",
        },
        ...("price" in item && item.price
          ? {
            priceSpecification: {
              "@type": "PriceSpecification",
              price: item.price,
              priceCurrency: "MXN",
              minPrice: item.price,
            },
          }
          : {}),
      })),
    },
  };
}
