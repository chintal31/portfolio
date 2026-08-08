"use client";

import { useEffect, useRef, useState } from "react";

const HERO_INTRO_SESSION_KEY = "jashvi-hero-intro-seen";

export default function Hero() {
  // Keep the first client render identical to the server render. Reading
  // sessionStorage here made a returning visitor render different markup
  // during hydration.
  const [showIntro, setShowIntro] = useState(true);
  const timerRef = useRef<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    const shouldSkipIntro =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.sessionStorage.getItem(HERO_INTRO_SESSION_KEY) === "true";

    if (shouldSkipIntro) {
      setShowIntro(false);
      return () => {
        window.history.scrollRestoration = previousScrollRestoration;
      };
    }

    if (!showIntro) {
      return () => {
        window.history.scrollRestoration = previousScrollRestoration;
      };
    }

    window.sessionStorage.setItem(HERO_INTRO_SESSION_KEY, "true");

    const dismissIntro = () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
      setShowIntro(false);
    };

    timerRef.current = window.setTimeout(dismissIntro, 3800);
    window.addEventListener("wheel", dismissIntro, {
      passive: true,
      once: true,
    });
    window.addEventListener("touchstart", dismissIntro, {
      passive: true,
      once: true,
    });

    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
      window.removeEventListener("wheel", dismissIntro);
      window.removeEventListener("touchstart", dismissIntro);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, [showIntro]);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let frameId: number | null = null;
    const updateGridVisibility = () => {
      frameId = null;
      const progress = Math.max(
        0,
        Math.min(1, window.scrollY / window.innerHeight)
      );
      hero.style.setProperty("--home-hero-scroll-progress", String(progress));
    };
    const onScroll = () => {
      if (frameId === null)
        frameId = window.requestAnimationFrame(updateGridVisibility);
    };

    updateGridVisibility();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className={`home-hero ${showIntro ? "home-hero-intro-active" : "home-hero-ready"}`}
      aria-labelledby="home-hero-heading"
    >
      {showIntro && (
        <div className="hero-intro" aria-hidden="true">
          <div className="hero-command-intro">
            <span className="hero-command-window-controls">
              <span className="hero-command-window-dot hero-command-window-dot-red" />
              <span className="hero-command-window-dot hero-command-window-dot-yellow" />
              <span className="hero-command-window-dot hero-command-window-dot-green" />
            </span>
            <span className="hero-command-prompt">
              <span className="hero-command-username">jashvi@studio</span>
              <span className="hero-command-path">:~</span>
              <span className="hero-command-symbol">$</span>
            </span>
            <span className="hero-command-text">
              Research, strategy, and a little AI magic.
            </span>
            <span className="hero-command-caret" />
          </div>
        </div>
      )}
      <div className="home-hero-grid" aria-hidden="true" />
      <div className="home-hero-content">
        <h1 id="home-hero-heading">
          <span className="home-hero-heading-line home-hero-heading-line-one">
            Every brief hides an{" "}
            <span className="home-hero-highlight cursor-hover">assumption</span>
            .
          </span>
          <span className="home-hero-heading-line home-hero-heading-line-two">
            I find it before I build anything
          </span>
        </h1>
        <p>Hi, I&apos;m Jashvi, a Product designer based in Germany</p>
      </div>
      <a className="hero-scroll-cue home-hero-scroll-cue" href="#milestones">
        <span className="hero-scroll-arrow" aria-hidden="true" />
        <span className="hero-scroll-copy">
          <span className="hero-scroll-heading">Design in action</span>
          <span className="hero-scroll-body">Scroll to view</span>
        </span>
      </a>
    </section>
  );
}
