"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface CookieBannerProps {
  onVisibilityChange?: (visible: boolean) => void;
}

export default function CookieBanner({
  onVisibilityChange,
}: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("bl_cookies_accepted");
    const isVisible = !accepted;
    setVisible(isVisible);
    onVisibilityChange?.(isVisible);
  }, [onVisibilityChange]);

  const accept = () => {
    localStorage.setItem("bl_cookies_accepted", "1");
    setVisible(false);
    onVisibilityChange?.(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      aria-modal="false"
      style={{
        position: "fixed",
        bottom: "16px",
        left: "50%",
        transform: visible
          ? "translateX(-50%) translateY(0)"
          : "translateX(-50%) translateY(calc(100% + 24px))",
        zIndex: 1100,
        width: "calc(100% - 32px)",
        maxWidth: "560px",
        background: "var(--color-white)",
        border: "1px solid var(--color-line)",
        borderRadius: "12px",
        padding: "16px 20px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        transition: "transform 0.33s cubic-bezier(0.5, 0, 0, 0.75)",
      }}
    >

      <p
        style={{
          margin: 0,
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: 1.6,
          color: "var(--color-body)",
        }}
      >
        Usamos cookies esenciales para que el sitio funcione y cookies de
        análisis para mejorar la experiencia. Al aceptar, confirmas que leíste
        nuestra{" "}
        <Link
          href="/legal/cookies"
          style={{
            color: "var(--color-blue-dark)",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
          }}
        >
          Política de cookies
        </Link>
        .
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >

        <button
          onClick={accept}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "40px",
            minWidth: "120px",
            padding: "0 20px",
            borderRadius: "4px",
            background: "var(--color-blue-dark)",
            color: "#ffffff",
            fontSize: "15px",
            fontWeight: 500,
            lineHeight: 1.2,
            border: "none",
            cursor: "pointer",
            transition: "background 0.33s cubic-bezier(0.5, 0, 0, 0.75)",
          }}
          onMouseEnter={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.background =
            "var(--color-ink)")
          }
          onMouseLeave={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.background =
            "var(--color-blue-dark)")
          }
        >
          Aceptar
        </button>

        <Link
          href="/legal/cookies"
          style={{
            fontSize: "14px",
            fontWeight: 400,
            color: "var(--color-soft)",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
            transition: "color 0.33s",
          }}
          onMouseEnter={(e) =>
          ((e.currentTarget as HTMLAnchorElement).style.color =
            "var(--color-ink)")
          }
          onMouseLeave={(e) =>
          ((e.currentTarget as HTMLAnchorElement).style.color =
            "var(--color-soft)")
          }
        >
          Configurar
        </Link>
      </div>
    </div>
  );
}
