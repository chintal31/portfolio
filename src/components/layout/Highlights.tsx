"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    if (!active || hasPlayedRef.current) return;

    hasPlayedRef.current = true;

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

function useHasEntered(active: boolean) {
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (active) setHasEntered(true);
  }, [active]);

  return hasEntered;
}

function HighlightStat({
  value,
  suffix,
  label,
  active,
}: (typeof highlights)[number] & { active: boolean }) {
  const count = useCountUp(value, active);
  const hasEntered = useHasEntered(active);

  return (
    <article className={hasEntered ? "highlight-stat-in" : "opacity-0"}>
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
  const hasEntered = useHasEntered(active);

  return (
    <article className={hasEntered ? "highlight-stat-in" : "opacity-0"}>
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
  const [activeSlide, setActiveSlide] = useState(0);
  const [secondSlideVisible, setSecondSlideVisible] = useState(false);
  const [impactStatsStarted, setImpactStatsStarted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && entry.intersectionRatio >= 0.5) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!section || !track || reducedMotion.matches) return;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          id: "highlights-carousel",
          trigger: section,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 0.7,
          anticipatePin: 1,
          onUpdate: trigger => {
            setActiveSlide(trigger.progress >= 0.5 ? 1 : 0);
            setSecondSlideVisible(trigger.progress > 0.01);
            setImpactStatsStarted(trigger.progress >= 0.15);
          },
        },
      });

      timeline
        .to(track, { xPercent: -50, duration: 1, ease: "none" })
        .to({}, { duration: 1 });
    }, section);

    return () => context.revert();
  }, []);

  const goToSlide = (slide: number) => {
    const trigger = ScrollTrigger.getById("highlights-carousel");
    if (trigger) {
      window.scrollTo({
        top: trigger.start + (trigger.end - trigger.start) * slide,
        behavior: "smooth",
      });
    } else {
      setActiveSlide(slide);
      gsap.set(trackRef.current, { xPercent: -50 * slide });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-black pt-20 pb-10 sm:pt-24 sm:pb-12 md:pt-32 md:pb-16"
    >
      <div className="mx-auto max-w-7xl overflow-hidden px-6 sm:px-8 lg:px-10">
        <p className="font-open-sans text-lg font-normal text-white/55 md:text-xl">
          Highlights
        </p>
        <div ref={trackRef} className="mt-3 flex w-[200%] md:mt-4 lg:mt-5">
          <div
            className="w-1/2 pr-6 sm:pr-8 lg:pr-10"
            aria-hidden={activeSlide !== 0}
          >
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
                    active={active && activeSlide === 0}
                  />
                ))}
              </div>
            </div>
          </div>
          <div
            className={`w-1/2 ${secondSlideVisible ? "visible" : "invisible pointer-events-none"}`}
            aria-hidden={activeSlide !== 1}
          >
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
                    active={active && impactStatsStarted}
                  />
                ))}
                <MagneticConceptLink />
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-10 flex justify-center gap-1.5"
          aria-label="Highlights pagination"
        >
          {[0, 1].map(slide => (
            <button
              key={slide}
              type="button"
              onClick={() => goToSlide(slide)}
              aria-label={`Show highlight ${slide + 1}`}
              aria-current={activeSlide === slide ? "true" : undefined}
              className={`h-1.5 w-6 rounded-full transition-colors ${activeSlide === slide ? "bg-white" : "bg-white/35"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
