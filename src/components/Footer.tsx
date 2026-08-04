import Link from "next/link";
import { siteContent } from "@/lib/content";

export default function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="border-t border-line py-8 px-8 text-[13px] text-text-soft">
      <div className="max-w-[1080px] mx-auto">

        <div className="flex justify-between items-center flex-wrap gap-3 mb-5">
          <span>{footer.copyright}</span>
          <span>{footer.location}</span>
        </div>

        <div className="flex gap-6 flex-wrap border-t border-line pt-4">
          <Link
            href="/legal/terminos"
            className="hover:text-ink transition-colors duration-150 no-underline"
          >
            Términos y condiciones
          </Link>
          <Link
            href="/legal/privacidad"
            className="hover:text-ink transition-colors duration-150 no-underline"
          >
            Política de privacidad
          </Link>
          <Link
            href="/legal/cookies"
            className="hover:text-ink transition-colors duration-150 no-underline"
          >
            Política de cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
