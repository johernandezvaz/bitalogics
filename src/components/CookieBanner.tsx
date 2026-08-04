"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("bl_cookies_accepted");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("bl_cookies_accepted", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2000,
        background: "var(--color-deep)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "18px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        flexWrap: "wrap",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "13px",
          color: "rgba(255,255,255,0.75)",
          lineHeight: 1.6,
          fontFamily: "var(--font-inter), sans-serif",
          maxWidth: "680px",
        }}
      >
        Usamos cookies esenciales para que el sitio funcione correctamente y
        cookies de análisis para entender cómo lo utilizan nuestros visitantes.
        Al continuar navegando aceptas nuestra{" "}
        <Link
          href="/legal/cookies"
          style={{
            color: "var(--color-blue)",
            textDecoration: "underline",
          }}
        >
          Política de Cookies
        </Link>
        .
      </p>

      <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
        <button
          onClick={accept}
          style={{
            background: "var(--color-blue)",
            color: "#fff",
            border: "none",
            borderRadius: "2px",
            padding: "9px 20px",
            fontSize: "13px",
            fontWeight: 500,
            fontFamily: "var(--font-inter), sans-serif",
            cursor: "pointer",
            transition: "background 200ms",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.background =
              "var(--color-blue-dark)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.background =
              "var(--color-blue)")
          }
        >
          Aceptar
        </button>

        <Link
          href="/legal/cookies"
          style={{
            background: "transparent",
            color: "rgba(255,255,255,0.6)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "2px",
            padding: "9px 16px",
            fontSize: "13px",
            fontFamily: "var(--font-inter), sans-serif",
            textDecoration: "none",
            cursor: "pointer",
            transition: "border-color 200ms, color 200ms",
            display: "inline-block",
          }}
        >
          Más info
        </Link>
      </div>
    </div>
  );
}
