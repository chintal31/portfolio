"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (reducedMotion.matches || !finePointer.matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    setEnabled(true);

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let frameId: number | null = null;

    const paint = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      cursor.style.setProperty("--cursor-x", `${currentX}px`);
      cursor.style.setProperty("--cursor-y", `${currentY}px`);

      if (
        Math.abs(targetX - currentX) > 0.1 ||
        Math.abs(targetY - currentY) > 0.1
      ) {
        frameId = requestAnimationFrame(paint);
      } else {
        frameId = null;
      }
    };

    const moveCursor = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.dataset.visible = "true";
      cursor.dataset.hover = String(
        event.target instanceof Element &&
          Boolean(event.target.closest("a, button, .cursor-hover"))
      );
      cursor.dataset.highlight = String(
        event.target instanceof Element &&
          Boolean(event.target.closest(".home-hero-highlight"))
      );

      if (frameId === null) frameId = requestAnimationFrame(paint);
    };
    const hideCursor = () => {
      cursor.dataset.visible = "false";
    };
    const showCursor = () => {
      cursor.dataset.visible = "true";
    };

    window.addEventListener("pointermove", moveCursor, { passive: true });
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", showCursor);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseenter", showCursor);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      id="cursor"
      ref={cursorRef}
      data-enabled={enabled}
      aria-hidden="true"
    />
  );
}
