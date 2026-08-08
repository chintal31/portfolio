"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const TICKER_WORDS = [
  "Product Designer",
  "Strategic Thinker",
  "Curious Experimenter",
];
const PHOTO_CARDS = [
  {
    src: "/images/landing-page/hero/online meeting.jpg",
    caption: "Friday evenings. Brainstorms > happy hours.",
  },
  {
    src: "/images/landing-page/hero/meeting.jpg",
    caption: "Early feedback = Less rework",
  },
  {
    src: "/images/landing-page/hero/hero-img2.png",
    caption: 'Always in my "Let me try this." mode.',
  },
  {
    src: "/images/landing-page/hero/hero-img1.png",
    caption: "Before AI, there was this :)",
  },
  {
    src: "/images/landing-page/hero/designathon.jpg",
    caption: "Good design = Good communication",
  },
];

export default function AboutHero() {
  const [phase, setPhase] = useState<"reveal" | "ready">("reveal");
  const [tickerIndex, setTickerIndex] = useState(0);
  const [activeCaption, setActiveCaption] = useState(2);

  const handleCardPointerEnter = (slot: number) => {
    setActiveCaption(slot);
  };

  const handleCardPointerLeave = () => {
    setActiveCaption(2);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("ready");
      return;
    }
    const tickerStart = window.setTimeout(() => setTickerIndex(1), 2250);
    const ready = window.setTimeout(() => setPhase("ready"), 7000);
    const ticker = window.setInterval(
      () => setTickerIndex(current => (current + 1) % TICKER_WORDS.length),
      4250
    );
    return () => {
      window.clearTimeout(tickerStart);
      window.clearTimeout(ready);
      window.clearInterval(ticker);
    };
  }, []);

  return (
    <section
      className={`hero-redesign hero-${phase}`}
      aria-label="Introduction"
    >
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
            {PHOTO_CARDS.map((card, slot) => (
              <figure
                className={`hero-photo-card hero-photo-card-${slot} ${activeCaption === slot ? "is-caption-active" : ""}`}
                key={card.src}
                onClick={() => setActiveCaption(slot)}
                onPointerEnter={() => handleCardPointerEnter(slot)}
                onPointerLeave={handleCardPointerLeave}
                onKeyDown={event => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveCaption(slot);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <div className="hero-photo-image">
                  <Image
                    src={card.src}
                    alt="Jashvi in a strategy and collaboration session"
                    fill
                    priority={slot < 2}
                    sizes="(max-width: 767px) 45vw, (max-width: 1200px) 30vw, 300px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="hero-photo-caption">
                  {slot === 2 ? (
                    <>
                      Always in my
                      <br />
                      “Let me try this” mode.
                    </>
                  ) : (
                    card.caption
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
