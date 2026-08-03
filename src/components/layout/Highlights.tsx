"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const highlights = [
  { value: 20, suffix: "%", label: "Reduction in payment flow drop-offs" },
  { value: 3, suffix: "", label: "Designers mentored" },
  { value: 30, suffix: "+", label: "Flows Design audited" },
  { value: 2400, suffix: "+", label: "Screens Design QA" },
];

const sustainabilityHighlights = [
  { value: 100, suffix: "+", label: "Participants" },
  { value: 24, suffix: "", label: "hours Designathon Project" },
  { value: 2, suffix: "nd", label: "Runner Up" },
];

const COUNT_DURATION = 1200;

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frameId = 0;
    const startTime = performance.now();
    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / COUNT_DURATION, 1);
      setCount(Math.round(target * progress));
      if (progress < 1) frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [active, target]);

  return count;
}

function HighlightStat({
  value,
  suffix,
  label,
  active,
}: (typeof highlights)[number] & { active: boolean }) {
  const count = useCountUp(value, active);

  return (
    <article className={active ? "highlight-stat-in" : "opacity-0"}>
      <p className="font-display text-[42px] leading-none text-white md:text-5xl">
        {count.toLocaleString("en-US")}
        {suffix}
      </p>
      <p className="mt-3 max-w-[9rem] font-open-sans text-base leading-relaxed text-white/55 sm:text-lg">
        {label}
      </p>
    </article>
  );
}

function SustainabilityStat({
  value,
  suffix,
  label,
  active,
}: (typeof sustainabilityHighlights)[number] & { active: boolean }) {
  const count = useCountUp(value, active);

  return (
    <article className={active ? "highlight-stat-in" : "opacity-0"}>
      <p className="font-display text-[42px] leading-none text-white md:text-5xl">
        {count.toLocaleString("en-US")}
        {suffix === "nd" ? <sup className="text-2xl">nd</sup> : suffix}
      </p>
      <p className="mt-3 max-w-[10rem] font-open-sans text-base leading-relaxed text-white/55 sm:text-lg">
        {label}
      </p>
    </article>
  );
}

function BankingAppMockup() {
  return (
    <div className="relative mx-auto h-64 w-[13.7rem] overflow-hidden rounded-[20px] sm:h-[19.5rem] sm:w-[16.6rem]">
      <Image
        src="/images/landing-page/highlights-rbl.png"
        alt="RBL Bank payments app"
        fill
        className="object-contain"
        sizes="(min-width: 640px) 224px, 192px"
      />
    </div>
  );
}

function SustainabilityAppMockup() {
  return (
    <div className="relative mx-auto aspect-[1379/1228] w-[18rem] overflow-hidden rounded-[20px] sm:w-[22rem]">
      <Image
        src="/images/landing-page/highlights-impact.png"
        alt="Impact sustainability app"
        fill
        className="object-contain"
        sizes="(min-width: 640px) 352px, 288px"
      />
    </div>
  );
}

function MagneticConceptLink() {
  return (
    <a
      href="https://www.behance.net/gallery/153216047/IMPACT-APP-Designathon"
      target="_blank"
      rel="noreferrer"
      className="inline-flex w-fit max-w-full self-start items-center gap-1 whitespace-nowrap rounded-[20px] border border-[#848484] px-3 py-2.5 font-display text-sm text-white transition-transform duration-200 ease-out sm:gap-2 sm:px-5 sm:py-3 sm:text-[21px] md:text-2xl lg:col-span-2"
      onPointerMove={event => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - bounds.left - bounds.width / 2) * 0.18;
        const y = (event.clientY - bounds.top - bounds.height / 2) * 0.18;
        event.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
      }}
      onPointerLeave={event => {
        event.currentTarget.style.transform = "translate(0, 0)";
      }}
    >
      <span>Full concept</span>
      <Image
        src="/images/landing-page/diagonal-arrow-right-up.svg"
        alt=""
        width={20}
        height={20}
        aria-hidden="true"
        className="shrink-0"
      />
    </a>
  );
}

export default function Highlights() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let frameId: number | null = null;

    const updateTrackPosition = () => {
      frameId = null;

      const sectionStart = section.getBoundingClientRect().top + window.scrollY;
      const progress = Math.min(
        Math.max((window.scrollY - sectionStart) / window.innerHeight, 0),
        1
      );

      track.style.transform = `translate3d(-${progress * 100}%, 0, 0)`;
      setCurrentSlide(progress >= 0.5 ? 1 : 0);
    };

    const scheduleTrackUpdate = () => {
      if (frameId === null) {
        frameId = requestAnimationFrame(updateTrackPosition);
      }
    };

    updateTrackPosition();
    window.addEventListener("scroll", scheduleTrackUpdate, { passive: true });
    window.addEventListener("resize", scheduleTrackUpdate);

    return () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", scheduleTrackUpdate);
      window.removeEventListener("resize", scheduleTrackUpdate);
    };
  }, []);

  const goToSlide = (slide: number) => {
    const section = sectionRef.current;
    if (!section) return;

    const sectionStart = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionStart + slide * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section ref={sectionRef} className="relative bg-white">
      <div className="sticky top-0 overflow-hidden bg-black pt-20 pb-10 sm:pt-24 sm:pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          <p className="font-open-sans text-lg font-normal text-white/55 md:text-xl">
            Highlights
          </p>
          <div className="mt-3 overflow-hidden md:mt-4 lg:mt-5">
            <div ref={trackRef} className="flex">
              <div className="w-full shrink-0" aria-hidden={currentSlide !== 0}>
                <h2 className="max-w-4xl font-display text-2xl text-white md:text-[32px]">
                  Redesigning the Payments Flow for a 5M+ User Banking App
                </h2>
                <div className="mt-5 grid items-center gap-12 md:mt-6 lg:mt-8 lg:grid-cols-[auto_1fr] lg:gap-16">
                  <BankingAppMockup />
                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 sm:gap-8">
                    {highlights.map(stat => (
                      <HighlightStat
                        key={stat.label}
                        {...stat}
                        active={active && currentSlide === 0}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full shrink-0" aria-hidden={currentSlide !== 1}>
                <h2 className="max-w-4xl font-display text-2xl text-white md:text-[32px]">
                  Gamifying the Sustainability for individuals
                </h2>
                <div className="mt-5 grid items-center gap-12 md:mt-6 lg:mt-8 lg:grid-cols-[auto_1fr] lg:gap-20">
                  <SustainabilityAppMockup />
                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 sm:gap-8">
                    {sustainabilityHighlights.map(stat => (
                      <SustainabilityStat
                        key={stat.label}
                        {...stat}
                        active={active && currentSlide === 1}
                      />
                    ))}
                    <MagneticConceptLink />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="mt-8 flex justify-center gap-2"
              aria-label="Highlights carousel navigation"
            >
              {[
                "Show banking-app highlights",
                "Show sustainability highlights",
              ].map((label, index) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={label}
                  aria-current={currentSlide === index ? "true" : undefined}
                  className={`h-2 w-8 rounded-full transition-colors ${
                    currentSlide === index
                      ? "bg-white"
                      : "bg-white/35 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="h-screen" />
    </section>
  );
}
