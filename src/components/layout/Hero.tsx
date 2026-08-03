"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const TICKER_WORDS = [
  "Product Designer",
  "Strategic Thinker",
  "Curious Experimenter",
];

// Temporary stand-ins until the final strategy-session photos are supplied.
const PLACEHOLDER_CARDS = [
  "/images/landing-page/hero/online meeting.jpg",
  "/images/landing-page/hero/meeting.jpg",
  "/images/landing-page/hero/hero-img2.png",
  "/images/landing-page/hero/hero-img1.png",
  "/images/landing-page/hero/designathon.jpg",
];

export default function Hero() {
  const [phase, setPhase] = useState<"intro" | "reveal" | "ready">("intro");
  const [showIntro, setShowIntro] = useState(true);
  const [tickerIndex, setTickerIndex] = useState(0);
  const timers = useRef<number[]>([]);
  const tickerTimer = useRef<number | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const navigation = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    const playOnThisVisit =
      reducedMotion === false &&
      (navigation?.type === "reload" ||
        !sessionStorage.getItem("jashvi-hero-played"));

    const addTimer = (callback: () => void, delay: number) => {
      const timer = window.setTimeout(callback, delay);
      timers.current.push(timer);
    };

    const startTicker = () => {
      if (reducedMotion || tickerTimer.current !== null) return;

      tickerTimer.current = window.setInterval(() => {
        setTickerIndex(current => (current + 1) % TICKER_WORDS.length);
      }, 2000);
    };

    const revealTicker = () => {
      addTimer(() => {
        setTickerIndex(current => (current + 1) % TICKER_WORDS.length);
        startTicker();
      }, 2250);
    };

    const finishImmediately = () => {
      timers.current.forEach(window.clearTimeout);
      timers.current = [];
      setPhase("ready");
      setShowIntro(false);
      setTickerIndex(0);
      startTicker();
    };

    if (!playOnThisVisit) {
      finishImmediately();
      return;
    }

    sessionStorage.setItem("jashvi-hero-played", "true");
    addTimer(() => {
      setPhase("reveal");
      setShowIntro(false);
      revealTicker();
    }, 3800);
    addTimer(() => setPhase("ready"), 7000);

    window.addEventListener("wheel", finishImmediately, {
      passive: true,
      once: true,
    });
    window.addEventListener("touchstart", finishImmediately, {
      passive: true,
      once: true,
    });
    window.addEventListener("scroll", finishImmediately, {
      passive: true,
      once: true,
    });

    return () => {
      timers.current.forEach(window.clearTimeout);
      if (tickerTimer.current !== null) {
        window.clearInterval(tickerTimer.current);
        tickerTimer.current = null;
      }
      window.removeEventListener("wheel", finishImmediately);
      window.removeEventListener("touchstart", finishImmediately);
      window.removeEventListener("scroll", finishImmediately);
    };
  }, []);

  return (
    <section
      className={`hero-redesign hero-${phase}`}
      aria-label="Introduction"
    >
      {showIntro && (
        <div
          className={`hero-intro ${phase === "reveal" ? "hero-intro-leaving" : ""}`}
          aria-hidden="true"
        >
          <div
            className="hero-command-intro"
            aria-label="Research, strategy, and a little AI magic."
          >
            <span className="hero-command-window-controls" aria-hidden="true">
              <span className="hero-command-window-dot hero-command-window-dot-red" />
              <span className="hero-command-window-dot hero-command-window-dot-yellow" />
              <span className="hero-command-window-dot hero-command-window-dot-green" />
            </span>
            <span className="hero-command-prompt" aria-hidden="true">
              <span className="hero-command-username">jashvi@studio</span>
              <span className="hero-command-path">:~</span>
              <span className="hero-command-symbol">$</span>
            </span>
            <span className="hero-command-text">
              Research, strategy, and a little AI magic.
            </span>
            <span className="hero-command-caret" aria-hidden="true" />
          </div>
        </div>
      )}

      <div className="hero-redesign-content">
        <div className="hero-copy">
          <p className="hero-question">Who am I?</p>
          <div className="hero-ticker" aria-live="polite">
            <span className="hero-ticker-word" key={tickerIndex}>
              {TICKER_WORDS[tickerIndex]}
            </span>
          </div>
        </div>

        <div
          className="hero-photo-stage"
          aria-label="Strategy and collaboration moments"
        >
          <div className="hero-photo-stack">
            {PLACEHOLDER_CARDS.map((card, slot) => (
              <figure
                className={`hero-photo-card hero-photo-card-${slot}`}
                key={card}
              >
                <Image
                  src={card}
                  alt="Placeholder for a Jashvi strategy session photograph"
                  fill
                  priority={slot < 2}
                  sizes="(max-width: 767px) 45vw, (max-width: 1200px) 30vw, 300px"
                  className="object-cover"
                />
              </figure>
            ))}
          </div>
        </div>

        <a className="hero-scroll-cue" href="#milestones">
          <span className="hero-scroll-arrow" aria-hidden="true" />
          <span className="hero-scroll-copy">
            <span className="hero-scroll-heading">Design in action</span>
            <span className="hero-scroll-body">Scroll to view</span>
          </span>
        </a>
      </div>
    </section>
  );
}
