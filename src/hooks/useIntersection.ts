"use client";

import { useEffect, useRef, useState } from "react";

export function useElementVisible(
  selector: string,
  threshold = 0.1
): boolean {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = document.querySelector(selector);
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [selector, threshold]);

  return visible;
}

export function useScrolledPast(offsetPx: number): boolean {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const check = () => setPast(window.scrollY > offsetPx);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [offsetPx]);

  return past;
}
