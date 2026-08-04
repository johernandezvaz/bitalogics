import { siteContent } from "@/lib/content";

export default function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="border-t border-line py-8 px-8 text-[13px] text-text-soft">
      <div className="max-w-[1080px] mx-auto flex justify-between items-center">
        <span>{footer.copyright}</span>
        <span>{footer.location}</span>
      </div>
    </footer>
  );
}
