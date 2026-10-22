import { siteContent } from "@/lib/content";


export function whatsappHref(): string {
  const { number, message } = siteContent.whatsapp;
  const digits = number.replace(/\D/g, "");
  if (number.trim().startsWith("[") || digits.length < 10) {
    return "/#contacto";
  }
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
