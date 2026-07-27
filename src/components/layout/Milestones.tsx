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
    value: 5_000_000,
    suffix: "M+",
    label: "Users Designed For",
    description: "Product designed for users across web, iOS, and Android.",
  },
];

function useCountUp(target: number, active: boolean, duration = 1755) {
  const [count, setCount] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (!active) return;

    let frameId = 0;
    let completionFrameId = 0;
    const startTime = performance.now();
    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(target * eased));
      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        completionFrameId = requestAnimationFrame(() => setComplete(true));
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frameId);
      cancelAnimationFrame(completionFrameId);
    };
  }, [active, duration, target]);

  return { count, complete };
}

function Milestone({
  milestone,
  active,
}: {
  milestone: (typeof milestones)[number];
  active: boolean;
}) {
  const { count, complete } = useCountUp(milestone.value, active);

  return (
    <article>
      <p className="font-display text-5xl leading-none text-white">
        <span className="inline-block min-w-[9ch] tabular-nums">
          {complete
            ? milestone.value === 5_000_000
              ? "5M+"
              : `${milestone.value}${milestone.suffix}`
            : count.toLocaleString("en-US")}
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
    const timeoutIds: number[] = [];

    const play = () => {
      if (
        !hasScrolledRef.current ||
        !isVisibleRef.current ||
        hasPlayedRef.current
      ) {
        return;
      }

      hasPlayedRef.current = true;
      milestones.forEach((_, index) => {
        const timeoutId = window.setTimeout(() => {
          setActiveStats(stats => [...stats, index]);
        }, index * 120);
        timeoutIds.push(timeoutId);
      });
    };

    const onScroll = () => {
      hasScrolledRef.current = true;
      play();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = Boolean(
          entry?.isIntersecting && entry.intersectionRatio >= 0.3
        );
        play();
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      timeoutIds.forEach(timeoutId => window.clearTimeout(timeoutId));
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-black py-20 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Every number tells a story.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl font-open-sans text-lg leading-relaxed text-white/55 sm:text-xl">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
