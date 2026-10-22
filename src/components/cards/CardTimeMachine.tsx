"use client";

/**
 * CardTimeMachine — adaptado de amicro.dev
 * Cambios vs original:
 *  - Prop items (no TIMELINE_DATA fijo) y tamaño fluido: la pila ocupa todo el ancho del contenedor
 *  - next/image en lugar de <img>; `fit` por item (cover para capturas, contain para logos)
 *  - Sin shadow, sin filtro goo, sin overlay sobre imágenes (DESIGN.md §6 y §8)
 *  - Tokens: deep, gold, paper, paper-warm, soft, line, ink, body (CSS vars)
 *  - Controles prev/next accesibles (44x44px, aria-label) e indicador "n / total"
 *  - Teclado solo cuando el carrusel tiene el foco (flechas izquierda/derecha)
 *  - Swipe táctil; scrubber vertical oculto en móvil
 *  - prefers-reduced-motion: solo opacidad
 *  - Excepción DESIGN.md §8: springs permitidos en este carrusel
 */

import React, { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";

export interface CardTimeMachineItem {
  src: string;
  alt: string;
  label: string;
  title: string;
  description: string;
  fit?: "cover" | "contain";
}

interface CardTimeMachineProps {
  items: CardTimeMachineItem[];
  /** Nivel del título del proyecto activo, para respetar la jerarquía de la página */
  headingLevel?: "h2" | "h3";
  ariaLabel?: string;
  className?: string;
}

/** Cuántas tarjetas se ven detrás de la activa */
const VISIBLE_BEHIND = 3;

export const CardTimeMachine = React.memo(function CardTimeMachine({
  items,
  headingLevel = "h3",
  ariaLabel = "Proyectos",
  className = "",
}: CardTimeMachineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const total = items.length;

  const prev = useCallback(
    () => setActiveIndex((i) => (i - 1 + total) % total),
    [total]
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % total),
    [total]
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      if (delta > 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  const handleTimelineHover = (index: number) => {
    setHoveredIndex(index);
    setActiveIndex(Math.round(index));
  };

  const timelineNodes = useMemo(() => {
    const nodes: { type: "main" | "sub"; index: number }[] = [];
    items.forEach((_, i) => {
      nodes.push({ type: "main", index: i });
      if (i < items.length - 1) {
        nodes.push({ type: "sub", index: i + 0.33 });
        nodes.push({ type: "sub", index: i + 0.66 });
      }
    });
    return nodes;
  }, [items]);

  if (total === 0) return null;

  const activeItem = items[activeIndex];
  const Heading = headingLevel;

  return (
    <div
      className={`w-full flex flex-col ${className}`}
      role="region"
      aria-roledescription="carrusel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{ outlineOffset: "4px" }}
    >
      {/* Escenario: pila de tarjetas + scrubber */}
      <div
        className="w-full flex flex-row items-stretch gap-4 md:gap-6 relative overflow-hidden rounded-[12px] p-4 md:p-8"
        style={{ background: "var(--color-deep)" }}
      >
        {/* Pila 3D a tamaño completo */}
        <div
          className="relative flex-1 min-w-0 aspect-[4/3] md:aspect-[16/10]"
          style={{ perspective: "1400px" }}
        >
          {items.map((item, i) => {
            const offset = i - activeIndex;
            const isPast = i < activeIndex;
            const hidden = offset > VISIBLE_BEHIND;
            const animateProps = reducedMotion
              ? { opacity: i === activeIndex ? 1 : 0 }
              : {
                  z: isPast ? 240 : -offset * 70,
                  y: isPast ? "60%" : `${-offset * 7}%`,
                  rotateX: isPast ? -18 : offset * 2,
                  opacity: isPast || hidden ? 0 : 1 - offset * 0.22,
                  scale: isPast ? 1.15 : 1,
                };
            const fit = item.fit ?? "cover";
            return (
              <motion.div
                key={`${item.src}-${i}`}
                className="absolute left-0 right-0 bottom-0 top-[10%] rounded-[12px] overflow-hidden pointer-events-none"
                initial={false}
                animate={animateProps}
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 220, damping: 28, mass: 0.9 }
                }
                style={{
                  zIndex: total - i,
                  background: "var(--color-paper-warm)",
                }}
                aria-hidden={i !== activeIndex}
              >
                {item.src ? (
                  <Image
                    src={item.src}
                    alt={i === activeIndex ? item.alt : ""}
                    fill
                    sizes="(max-width: 720px) 100vw, 1100px"
                    className={
                      fit === "contain"
                        ? "object-contain p-[8%]"
                        : "object-cover object-top"
                    }
                    priority={i === 0}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span
                      className="px-6 text-center"
                      style={{ fontSize: 14, color: "var(--color-soft)" }}
                    >
                      {item.title}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Scrubber vertical (escritorio) */}
        <div
          className="relative hidden md:flex flex-col items-end justify-center z-50 py-2"
          onMouseLeave={() => setHoveredIndex(null)}
          role="group"
          aria-label="Seleccionar proyecto"
        >
          {timelineNodes.map((node) => {
            if (node.type === "main") {
              const index = node.index;
              const isSelected = activeIndex === index;
              return (
                <button
                  key={`main-${index}`}
                  type="button"
                  aria-label={`Ir a proyecto ${index + 1}: ${items[index]?.title}`}
                  aria-current={isSelected ? "true" : undefined}
                  style={{
                    background: "transparent",
                    border: "none",
                    minHeight: "32px",
                    width: "64px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    position: "relative",
                    cursor: "pointer",
                    padding: 0,
                  }}
                  onMouseEnter={() => handleTimelineHover(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  {hoveredIndex === index && (
                    <span
                      style={{
                        position: "absolute",
                        right: "36px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        fontSize: "12px",
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                        color: isSelected
                          ? "var(--color-gold)"
                          : "var(--color-paper)",
                      }}
                    >
                      {index + 1}
                    </span>
                  )}
                  <motion.div
                    style={{
                      height: "3px",
                      width: "24px",
                      borderRadius: "9999px",
                      transformOrigin: "right",
                      background: isSelected
                        ? "var(--color-gold)"
                        : "rgba(244,246,249,0.55)",
                    }}
                    animate={
                      reducedMotion
                        ? {}
                        : {
                            scaleX:
                              hoveredIndex === null
                                ? isSelected
                                  ? 1.3
                                  : 1
                                : isSelected
                                ? 1.4
                                : Math.abs(index - (hoveredIndex ?? 0)) < 0.5
                                ? 1.25
                                : 1,
                          }
                    }
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                </button>
              );
            }
            const isHoveringNear =
              hoveredIndex !== null && Math.abs(node.index - hoveredIndex) <= 0.5;
            return (
              <div
                key={`sub-${node.index}`}
                aria-hidden="true"
                style={{
                  padding: "2px 0",
                  width: "64px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
                onMouseEnter={() => handleTimelineHover(node.index)}
              >
                <motion.div
                  style={{
                    height: "3px",
                    width: "14px",
                    borderRadius: "9999px",
                    transformOrigin: "right",
                    background: "rgba(244,246,249,0.25)",
                  }}
                  animate={
                    reducedMotion
                      ? {}
                      : { scaleX: isHoveringNear ? 1.15 : 1 }
                  }
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Datos del proyecto activo + controles */}
      <div className="flex flex-col md:flex-row md:items-start justify-between mt-6 gap-4">
        <div className="flex-1 min-w-0" aria-live="polite">
          <span
            style={{
              display: "block",
              fontSize: "14px",
              fontWeight: 400,
              color: "var(--color-soft)",
              marginBottom: "4px",
            }}
          >
            {activeItem.label}
          </span>
          <Heading
            style={{
              fontSize: "18px",
              lineHeight: 1.3,
              fontWeight: 500,
              color: "var(--color-ink)",
              margin: 0,
            }}
          >
            {activeItem.title}
          </Heading>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.6,
              color: "var(--color-body)",
              margin: "4px 0 0",
              maxWidth: "720px",
            }}
          >
            {activeItem.description}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexShrink: 0,
          }}
        >
          <button
            type="button"
            onClick={prev}
            aria-label="Proyecto anterior"
            className="carousel-ctrl"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <span
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: "var(--color-soft)",
              minWidth: "3rem",
              textAlign: "center",
            }}
          >
            {activeIndex + 1} / {total}
          </span>

          <button
            type="button"
            onClick={next}
            aria-label="Proyecto siguiente"
            className="carousel-ctrl"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        .carousel-ctrl {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          cursor: pointer;
          border: 1px solid var(--color-input-border, var(--color-line));
          border-radius: 4px;
          color: var(--color-ink);
          transition: background-color 0.33s cubic-bezier(0.5, 0, 0, 0.75);
        }
        .carousel-ctrl:hover { background-color: var(--color-paper); }
        .carousel-ctrl:focus-visible { outline: none; box-shadow: 0 0 0 3px var(--color-blue); }
      `}</style>
    </div>
  );
});
