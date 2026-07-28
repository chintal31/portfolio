"use client";

import { useEffect, useRef, useState } from "react";

const milestones = [
  {
    value: 5,
    suffix: "+",
    label: "Years of Experience",
    description:
      "From self-taught beginnings to leading UX at enterprise scale.",
  },
  {
    value: 5,
    suffix: "",
    label: "Industries practised",
    description:
      "Enterprise SaaS, banking, e-commerce, real estate, and B2B procurement.",
  },
  {
    value: 10,
    suffix: "",
    label: "Projects delivered",
    description: "From 0→1 concepts to system-wide rollouts.",
  },
  {
    value: 5,
    suffix: "M+",
    label: "Users Designed For",
    description: "Product designed for users across web, iOS, and Android.",
  },
];

const COUNT_DURATION = 1200;

function useCountUp(target: number, active: boolean, duration: number) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frameId = 0;
    const startTime = performance.now();
    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.round(target * progress));
      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [active, duration, target]);

  return count;
}

function Milestone({
  milestone,
  active,
  duration,
}: {
  milestone: (typeof milestones)[number];
  active: boolean;
  duration: number;
}) {
  const count = useCountUp(milestone.value, active, duration);

  return (
    <article className={active ? "milestone-slide-in" : "opacity-0"}>
      <p className="font-display text-[42px] leading-none text-white md:text-5xl">
        <span className="inline-block min-w-[9ch] tabular-nums">
          {count.toLocaleString("en-US")}
          {milestone.suffix}
        </span>
      </p>
      <h3 className="mt-4 font-open-sans text-xl font-semibold text-white">
        {milestone.label}
      </h3>
      <p className="mt-3 max-w-[16rem] font-open-sans text-base leading-relaxed text-white/55 sm:text-lg">
        {milestone.description}
      </p>
    </article>
  );
}

export default function Milestones() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasScrolledRef = useRef(false);
  const isVisibleRef = useRef(false);
  const hasPlayedRef = useRef(false);
  const [activeStats, setActiveStats] = useState<number[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const play = () => {
      if (
        !hasScrolledRef.current ||
        !isVisibleRef.current ||
        hasPlayedRef.current
      ) {
        return;
      }

      hasPlayedRef.current = true;
      setActiveStats(milestones.map((_, index) => index));
    };

    const onScroll = () => {
      hasScrolledRef.current = true;
      play();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = Boolean(
          entry?.isIntersecting && entry.intersectionRatio >= 0.5
        );
        play();
      },
      { threshold: 0.5 }
    );
    observer.observe(section);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-black py-20 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-[28px] text-white md:text-[32px]">
            Every number tells a story.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl font-open-sans text-lg leading-relaxed text-white/55 md:text-2xl">
            These milestones reflect a career built on curiosity, craft and
            meaningful impact.
          </p>
        </div>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-12">
          {milestones.map((milestone, index) => (
            <Milestone
              key={milestone.label}
              milestone={milestone}
              active={activeStats.includes(index)}
              duration={COUNT_DURATION}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
