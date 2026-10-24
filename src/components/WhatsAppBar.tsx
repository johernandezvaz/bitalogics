"use client";

import { useState } from "react";
import { whatsappHref } from "@/lib/whatsapp";
import { useElementVisible, useScrolledPast } from "@/hooks/useIntersection";

interface WhatsAppBarProps {

  cookieVisible?: boolean;
}

export default function WhatsAppBar({ cookieVisible = false }: WhatsAppBarProps) {
  const [dismissed, setDismissed] = useState(false);

  const pastHero = useScrolledPast(
    typeof window !== "undefined" ? window.innerHeight * 0.9 : 700
  );
  const contactVisible = useElementVisible("#contacto", 0.15);

  const shouldShow =
    !dismissed && !cookieVisible && pastHero && !contactVisible;

  return (
    <div
      role="complementary"
      aria-label="Contacto rápido por WhatsApp"
      style={{
        position: "fixed",
        bottom: "16px",
        left: "50%",
        transform: shouldShow
          ? "translateX(-50%) translateY(0)"
          : "translateX(-50%) translateY(calc(100% + 24px))",
        zIndex: 1000,
        width: "calc(100% - 32px)",
        maxWidth: "560px",
        background: "var(--color-white)",
        border: "1px solid var(--color-line)",
        borderRadius: "12px",
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        transition: "transform 0.33s cubic-bezier(0.5, 0, 0, 0.75)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/andy-base.svg"
        alt=""
        aria-hidden="true"
        style={{ width: "26px", height: "32px", flexShrink: 0 }}
      />

      <p
        style={{
          margin: 0,
          fontSize: "15px",
          fontWeight: 500,
          lineHeight: 1.3,
          color: "var(--color-ink)",
          flex: 1,
          minWidth: 0,
        }}
      >
        ¿Tienes un proyecto?{" "}
        <span
          style={{ fontWeight: 400, color: "var(--color-body)" }}
        >
          Escríbenos
        </span>
      </p>

      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: "40px",
          padding: "0 16px",
          borderRadius: "4px",
          background: "var(--color-blue-dark)",
          color: "#ffffff",
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: 1.2,
          textDecoration: "none",
          whiteSpace: "nowrap",
          flexShrink: 0,
          transition: "background 0.33s cubic-bezier(0.5, 0, 0, 0.75)",
        }}
        onMouseEnter={(e) =>
        ((e.currentTarget as HTMLAnchorElement).style.background =
          "var(--color-ink)")
        }
        onMouseLeave={(e) =>
        ((e.currentTarget as HTMLAnchorElement).style.background =
          "var(--color-blue-dark)")
        }
      >
        WhatsApp
      </a>

      <button
        onClick={() => setDismissed(true)}
        aria-label="Cerrar"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "44px",
          height: "44px",
          flexShrink: 0,
          margin: "-8px -8px -8px 0",
          background: "transparent",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          color: "var(--color-soft)",
          transition: "color 0.33s",
        }}
        onMouseEnter={(e) =>
        ((e.currentTarget as HTMLButtonElement).style.color =
          "var(--color-ink)")
        }
        onMouseLeave={(e) =>
        ((e.currentTarget as HTMLButtonElement).style.color =
          "var(--color-soft)")
        }
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1 1l12 12M13 1L1 13"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
