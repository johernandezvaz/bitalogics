"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => firstInputRef.current?.focus(), 50);

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setStatus("idle");
      setErrorMsg("");
      setForm({ name: "", email: "", whatsapp: "", message: "" });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!form.name.trim()) {
      setErrorMsg("Por favor ingresa tu nombre completo.");
      return;
    }
    if (!validateEmail(form.email)) {
      setErrorMsg("Ingresa un correo electrónico válido.");
      return;
    }
    if (form.message.trim().length < 10) {
      setErrorMsg("El mensaje debe tener al menos 10 caracteres.");
      return;
    }

    setStatus("loading");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name.trim(),
          email: form.email.trim(),
          whatsapp: form.whatsapp.trim() || "No proporcionado",
          message: form.message.trim(),
          time: new Date().toLocaleString("es-MX"),
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg(
        "Ocurrió un error al enviar tu mensaje. Intenta de nuevo o escríbenos directamente a hola@bitalogics.com"
      );
    }
  };

  return (
    <>

      <div
        ref={overlayRef}
        onClick={handleOverlayClick}
        aria-modal="true"
        role="dialog"
        aria-label="Formulario de contacto"
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(14,27,46,0.6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          padding: "20px",
        }}
      >

        <div
          style={{
            background: "var(--color-paper)",
            border: "1px solid var(--color-line)",
            borderRadius: "4px",
            maxWidth: "480px",
            width: "100%",
            padding: "40px",
            position: "relative",
          }}
        >

          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--color-text-soft)",
              fontSize: "20px",
              lineHeight: 1,
              padding: "4px",
            }}
          >
            ✕
          </button>

          {status === "success" ? (

            <div style={{ textAlign: "center", padding: "8px 0" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "rgba(46,134,193,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  fontSize: "22px",
                }}
              >
                ✓
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontSize: "22px",
                  fontWeight: 500,
                  color: "var(--color-ink)",
                  margin: "0 0 12px",
                }}
              >
                ¡Listo!
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--color-text-soft)",
                  lineHeight: 1.6,
                  margin: "0 0 28px",
                }}
              >
                Revisa tu correo, te enviamos la confirmación. Nos pondremos en
                contacto contigo muy pronto.
              </p>
              <button
                onClick={onClose}
                style={{
                  background: "var(--color-ink)",
                  color: "var(--color-paper)",
                  border: "none",
                  borderRadius: "2px",
                  padding: "13px 24px",
                  fontSize: "14px",
                  fontWeight: 500,
                  fontFamily: "var(--font-inter), sans-serif",
                  cursor: "pointer",
                  transition: "background 200ms",
                }}
                onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background =
                  "var(--color-deep)")
                }
                onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background =
                  "var(--color-ink)")
                }
              >
                Cerrar
              </button>
            </div>
          ) : (

            <>
              <h2
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontSize: "24px",
                  fontWeight: 500,
                  color: "var(--color-ink)",
                  margin: "0 0 28px",
                  paddingRight: "24px",
                }}
              >
                Cuéntanos de tu proyecto
              </h2>

              <form onSubmit={handleSubmit} noValidate>

                <div style={{ marginBottom: "18px" }}>
                  <label style={labelStyle} htmlFor="cm-name">
                    Nombre completo
                  </label>
                  <input
                    id="cm-name"
                    ref={firstInputRef}
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    style={inputStyle}
                    onFocus={(e) =>
                    (e.currentTarget.style.outline =
                      "2px solid var(--color-blue)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.outline = "none")
                    }
                  />
                </div>

                <div style={{ marginBottom: "18px" }}>
                  <label style={labelStyle} htmlFor="cm-email">
                    Correo electrónico
                  </label>
                  <input
                    id="cm-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@correo.com"
                    style={inputStyle}
                    onFocus={(e) =>
                    (e.currentTarget.style.outline =
                      "2px solid var(--color-blue)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.outline = "none")
                    }
                  />
                </div>

                <div style={{ marginBottom: "18px" }}>
                  <label style={labelStyle} htmlFor="cm-whatsapp">
                    WhatsApp{" "}
                    <span
                      style={{ color: "var(--color-text-soft)", fontWeight: 400 }}
                    >
                      (opcional)
                    </span>
                  </label>
                  <input
                    id="cm-whatsapp"
                    name="whatsapp"
                    type="tel"
                    value={form.whatsapp}
                    onChange={handleChange}
                    placeholder="Opcional"
                    style={inputStyle}
                    onFocus={(e) =>
                    (e.currentTarget.style.outline =
                      "2px solid var(--color-blue)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.outline = "none")
                    }
                  />
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label style={labelStyle} htmlFor="cm-message">
                    Mensaje
                  </label>
                  <textarea
                    id="cm-message"
                    name="message"
                    required
                    minLength={10}
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos brevemente qué necesitas..."
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: "100px",
                    }}
                    onFocus={(e) =>
                    (e.currentTarget.style.outline =
                      "2px solid var(--color-blue)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.outline = "none")
                    }
                  />
                </div>

                {status === "error" && errorMsg && (
                  <p
                    style={{
                      color: "#C0392B",
                      fontSize: "13px",
                      marginBottom: "12px",
                      lineHeight: 1.5,
                    }}
                  >
                    {errorMsg}
                  </p>
                )}
                {status !== "error" && errorMsg && (
                  <p
                    style={{
                      color: "#C0392B",
                      fontSize: "13px",
                      marginBottom: "12px",
                      lineHeight: 1.5,
                    }}
                  >
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    background:
                      status === "loading"
                        ? "var(--color-text-soft)"
                        : "var(--color-ink)",
                    color: "var(--color-paper)",
                    border: "none",
                    borderRadius: "2px",
                    padding: "13px 24px",
                    fontSize: "14px",
                    fontWeight: 500,
                    fontFamily: "var(--font-inter), sans-serif",
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    transition: "background 200ms, transform 100ms",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "loading")
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "var(--color-deep)";
                  }}
                  onMouseLeave={(e) => {
                    if (status !== "loading")
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "var(--color-ink)";
                  }}
                >
                  {status === "loading" ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "13px",
  fontWeight: 500,
  color: "var(--color-ink)",
  marginBottom: "6px",
  fontFamily: "var(--font-inter), sans-serif",
};

const inputStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  padding: "10px 12px",
  fontSize: "14px",
  fontFamily: "var(--font-inter), sans-serif",
  color: "var(--color-ink)",
  background: "#fff",
  border: "1px solid var(--color-line)",
  borderRadius: "2px",
  outline: "none",
  outlineOffset: "2px",
  boxSizing: "border-box",
  transition: "outline 150ms",
};
