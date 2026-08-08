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

    let isHovering = false;
    let isHighlighting = false;

    const moveCursor = (event: PointerEvent) => {
      // Keep the custom cursor locked to the pointer. The previous eased
      // animation made it trail behind during a scroll and feel sluggish.
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      cursor.dataset.visible = "true";
      const nextHovering =
        event.target instanceof Element &&
        Boolean(event.target.closest("a, button, .cursor-hover"));
      const nextHighlighting =
        event.target instanceof Element &&
        Boolean(event.target.closest(".home-hero-highlight"));

      if (nextHovering !== isHovering) {
        isHovering = nextHovering;
        cursor.dataset.hover = String(isHovering);
      }

      if (nextHighlighting !== isHighlighting) {
        isHighlighting = nextHighlighting;
        cursor.dataset.highlight = String(isHighlighting);
      }
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
