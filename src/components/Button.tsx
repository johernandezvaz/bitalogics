import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";
type Surface = "light" | "dark";

interface ButtonProps {
  href: string;
  variant?: Variant;
  surface?: Surface;
  className?: string;
  children: ReactNode;
}

const BASE =
  "inline-flex items-center justify-center min-h-[48px] px-6 rounded-[4px] text-[15px] leading-[1.2] font-medium no-underline transition-colors duration-330 ease-site focus-visible:outline-none focus-visible:ring-[3px] w-full md:w-auto md:min-w-[200px]";

const STYLES: Record<Surface, Record<Variant, string>> = {
  light: {
    primary: "bg-blue-dark text-white hover:bg-ink focus-visible:ring-blue",
    secondary:
      "bg-paper text-ink hover:bg-paper-warm focus-visible:ring-blue",
  },
  dark: {
    primary:
      "bg-gold text-deep hover:bg-gold-dark focus-visible:ring-paper",
    secondary:
      "bg-paper/[0.08] text-paper hover:bg-paper/[0.16] focus-visible:ring-paper",
  },
};

export default function Button({
  href,
  variant = "primary",
  surface = "light",
  className = "",
  children,
}: ButtonProps) {
  const classes = `${BASE} ${STYLES[surface][variant]} ${className}`;
  const external = /^https?:\/\//.test(href);

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
