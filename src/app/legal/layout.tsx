import Link from "next/link";
import { Fraunces, JetBrains_Mono, Inter } from "next/font/google";
import "../../globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${jetbrainsMono.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-paper text-ink font-sans antialiased">

        <header
          style={{
            borderBottom: "1px solid var(--color-line)",
            padding: "16px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "18px",
              fontWeight: 600,
              color: "var(--color-ink)",
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            bita<span style={{ color: "var(--color-blue)" }}>logics</span>
          </Link>
          <Link
            href="/"
            style={{
              fontSize: "13px",
              color: "var(--color-text-soft)",
              textDecoration: "none",
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            ← Volver al inicio
          </Link>
        </header>

        <main
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "56px 32px 80px",
          }}
        >
          {children}
        </main>

        <footer
          style={{
            borderTop: "1px solid var(--color-line)",
            padding: "20px 32px",
            display: "flex",
            gap: "24px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "Términos y condiciones", href: "/legal/terminos" },
            { label: "Política de privacidad", href: "/legal/privacidad" },
            { label: "Política de cookies", href: "/legal/cookies" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontSize: "12px",
                color: "var(--color-text-soft)",
                textDecoration: "none",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              {label}
            </Link>
          ))}
        </footer>
      </body>
    </html>
  );
}
