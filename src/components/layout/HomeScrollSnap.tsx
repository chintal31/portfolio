"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeScrollSnap({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!container || reducedMotion.matches) return;

    const context = gsap.context(() => {
      const sections = Array.from(container.children)
        .filter(
          (child): child is HTMLElement =>
            child instanceof HTMLElement && child.tagName === "SECTION"
        )
        .slice(0, 3);

      if (sections.length < 2) return;

      const trigger = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        snap: {
          snapTo: progress => {
            const scrollRange = trigger.end - trigger.start;
            const sectionStops = sections.map(section =>
              Math.max(
                0,
                Math.min(
                  1,
                  (section.getBoundingClientRect().top +
                    window.scrollY -
                    trigger.start) /
                    scrollRange
                )
              )
            );
            const nextIndex = sectionStops.findIndex(stop => stop > progress);

            if (nextIndex === -1) return progress;
            if (nextIndex === 0) return 0;

            const previousStop = sectionStops[nextIndex - 1] ?? 0;
            const nextStop = sectionStops[nextIndex] ?? 1;
            const progressBetweenSections =
              (progress - previousStop) / (nextStop - previousStop);

            return progressBetweenSections >= 0.3 ? nextStop : progress;
          },
          delay: 0.072,
          duration: { min: 0.6, max: 1 },
          ease: "power2.inOut",
        },
      });

      const refresh = () => ScrollTrigger.refresh();
      let restoreSnapTimer: number | undefined;
      const pauseSnapForAnchorNavigation = () => {
        trigger.disable();
        window.clearTimeout(restoreSnapTimer);
        restoreSnapTimer = window.setTimeout(() => {
          trigger.enable();
          ScrollTrigger.refresh();
        }, 1000);
      };
      window.addEventListener("resize", refresh);
      window.addEventListener(
        "portfolio:anchor-navigation",
        pauseSnapForAnchorNavigation
      );

      return () => {
        window.removeEventListener("resize", refresh);
        window.removeEventListener(
          "portfolio:anchor-navigation",
          pauseSnapForAnchorNavigation
        );
        window.clearTimeout(restoreSnapTimer);
        trigger.kill();
      };
    }, container);

    return () => context.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="[&>section]:min-h-screen [&>section:nth-child(2)]:min-h-0 [&>section:nth-child(4)]:min-h-0 [&>section:nth-child(5)]:min-h-0 [&>section:nth-child(6)]:min-h-0"
    >
      {children}
    </div>
  );
}
