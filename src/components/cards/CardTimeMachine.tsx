"use client";

/**
 * CardTimeMachine — adaptado de amicro.dev
 * Cambios vs original:
 *  - Prop items (no TIMELINE_DATA fijo)
 *  - next/image en lugar de <img>
 *  - Sin shadow, sin gradiente radial (DESIGN.md §3)
 *  - Tokens: deep, gold, paper, soft, line (CSS vars)
 *  - Controles prev/next accesibles (min 44x44px, aria-label)
 *  - Indicador "n / total" (14/400 soft)
 *  - Navegacion con teclas arriba/abajo
 *  - Swipe tactil
 *  - prefers-reduced-motion: solo opacidad
 *  - Excepcion DESIGN.md §8: springs permitidos en carrusel
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
}

interface CardTimeMachineProps {
  items: CardTimeMachineItem[];
  className?: string;
}

export const CardTimeMachine = React.memo(function CardTimeMachine({
  items,
  className = "",
}: CardTimeMachineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const total = items.length;

  const prev = useCallback(() =>
    setActiveIndex((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() =>
    setActiveIndex((i) => (i + 1) % total), [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
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

  return (
    <div
      className={`w-full flex flex-col gap-0 ${className}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Seccion de tarjetas + scrubber */}
      <div
        className="w-full flex flex-row items-center justify-center gap-6 relative overflow-hidden rounded-[12px] p-6 md:p-8"
        style={{ background: "var(--color-deep)", minHeight: "260px" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-0 h-0" aria-hidden="true">
          <defs>
            <filter id="bita-squircle">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
              <feColorMatrix in="blur" mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -6" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        {/* Pila 3D */}
        <div
          className="relative flex-1 max-w-[290px] aspect-[4/3] flex items-center justify-center"
          style={{ perspective: "800px" }}
          aria-label={`Proyecto ${activeIndex + 1} de ${total}: ${activeItem.title}`}
          aria-live="polite"
        >
          {items.map((item, i) => {
            const offset = i - activeIndex;
            const isPast = i < activeIndex;
            const animateProps = reducedMotion
              ? { opacity: i === activeIndex ? 1 : 0 }
              : {
                  z: isPast ? 200 : -offset * 60,
                  y: isPast ? 300 : -offset * 12,
                  rotateX: isPast ? -20 : offset * 2,
                  opacity: isPast ? 0 : 1 - Math.abs(offset) * 0.2,
                  scale: isPast ? 1.3 : 1,
                };
            return (
              <motion.div
                key={item.src + i}
                className="absolute rounded-[12px] flex h-[135px] w-[220px] origin-center overflow-hidden pointer-events-none"
                initial={false}
                animate={animateProps}
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 250, damping: 25, mass: 0.8 }
                }
                style={{
                  zIndex: total - i,
                  filter: reducedMotion ? undefined : "url(#bita-squircle)",
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="220px"
                  className="object-cover object-top"
                  priority={i === 0}
                />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: "rgba(0,0,0,0.08)" }} aria-hidden="true" />
              </motion.div>
            );
          })}
        </div>

        {/* Scrubber vertical */}
        <div
          className="relative flex flex-col items-end z-50 py-2 px-1"
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
                  aria-label={`Ir a proyecto ${index + 1}: ${items[index]?.title}`}
                  aria-pressed={isSelected}
                  style={{
                    background: "transparent", border: "none",
                    minHeight: "44px", width: "80px",
                    display: "flex", alignItems: "center", justifyContent: "flex-end",
                    position: "relative", cursor: "pointer", padding: "3px 0",
                  }}
                  onMouseEnter={() => handleTimelineHover(index)}
                  onClick={(e) => { e.stopPropagation(); setActiveIndex(index); }}
                >
                  {hoveredIndex === index && (
                    <motion.span
                      style={{
                        position: "absolute", right: "40px", top: "50%",
                        transform: "translateY(-50%)",
                        fontSize: "10px", fontWeight: 500, whiteSpace: "nowrap",
                        color: isSelected ? "var(--color-gold)" : "rgba(245,244,240,0.9)",
                      }}
                      initial={{ opacity: 0, filter: "blur(2px)", scale: 0.8 }}
                      animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                      transition={reducedMotion ? { duration: 0 } : { duration: 0.15 }}
                    >
                      {index + 1}
                    </motion.span>
                  )}
                  <motion.div
                    style={{
                      height: "3px", width: "24px", borderRadius: "9999px",
                      transformOrigin: "right",
                      background: isSelected
                        ? "var(--color-gold)"
                        : hoveredIndex === index
                        ? "rgba(245,244,240,0.8)"
                        : "rgba(245,244,240,0.5)",
                    }}
                    animate={reducedMotion ? {} : {
                      scaleX: hoveredIndex === null ? 1
                        : isSelected ? 1.4
                        : Math.abs(index - (hoveredIndex ?? 0)) < 0.5 ? 1.25 : 1,
                    }}
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
                style={{ padding: "1px 0", width: "80px", display: "flex", justifyContent: "flex-end", cursor: "pointer" }}
                onMouseEnter={() => handleTimelineHover(node.index)}
                onClick={(e) => { e.stopPropagation(); setActiveIndex(Math.round(node.index)); }}
              >
                <motion.div
                  style={{ height: "3px", width: "16px", borderRadius: "9999px",
                    transformOrigin: "right", background: "rgba(245,244,240,0.2)" }}
                  animate={reducedMotion ? {} : {
                    scaleX: hoveredIndex === null ? 1 : isHoveringNear ? 1.15 : 1,
                    opacity: hoveredIndex === null ? 0.3 : isHoveringNear ? 0.5 : 0.3,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Metadatos + controles */}
      <div className="flex items-start justify-between mt-4 gap-4">
        <div className="flex-1 min-w-0">
          <span style={{ display: "block", fontSize: "14px", fontWeight: 400,
            color: "var(--color-soft)", marginBottom: "4px" }}>
            {activeItem.label}
          </span>
          <p style={{ fontSize: "18px", lineHeight: 1.3, fontWeight: 500,
            color: "var(--color-ink)", margin: 0 }}>
            {activeItem.title}
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.6,
            color: "var(--color-body)", margin: "4px 0 0" }}>
            {activeItem.description}
          </p>
        </div>

        {/* Prev / indicador / Next */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px",
          flexShrink: 0, marginTop: "4px" }}>
          <button onClick={prev} aria-label="Proyecto anterior"
            style={{ width: 44, height: 44, display: "flex", alignItems: "center",
              justifyContent: "center", background: "transparent", cursor: "pointer",
              border: "1px solid var(--color-line)", borderRadius: "4px",
              color: "var(--color-ink)",
              transition: "background 0.33s cubic-bezier(0.5,0,0,0.75)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "var(--color-paper)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "transparent")}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <span aria-live="polite" style={{ fontSize: "14px", fontWeight: 400,
            color: "var(--color-soft)", minWidth: "2.5rem", textAlign: "center" }}>
            {activeIndex + 1} / {total}
          </span>

          <button onClick={next} aria-label="Proyecto siguiente"
            style={{ width: 44, height: 44, display: "flex", alignItems: "center",
              justifyContent: "center", background: "transparent", cursor: "pointer",
              border: "1px solid var(--color-line)", borderRadius: "4px",
              color: "var(--color-ink)",
              transition: "background 0.33s cubic-bezier(0.5,0,0,0.75)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "var(--color-paper)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "transparent")}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
});
