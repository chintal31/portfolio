"use client";

import { useId, useState, type KeyboardEvent } from "react";
import { AnimatedWrapper } from "../ui";

export type ValuePanel = {
  title: string;
  description: string;
  /** A Tailwind background class, e.g. `bg-[#FFE4D0]`. */
  colorClass: string;
  textColor?: string;
};

const defaultPanels: ValuePanel[] = [
  {
    title: "Strategy",
    description:
      "I don't open Figma until I know which business problem we're solving — and why now.",
    colorClass: "bg-[#FFE4D0]",
    textColor: "#703506",
  },
  {
    title: "Systems",
    description:
      "I build for scale, not just this screen — component libraries and design systems that outlast a single release.",
    colorClass: "bg-[#F1FFD1]",
    textColor: "#5D720B",
  },
  {
    title: "Execution",
    description:
      "Pixel-perfect craft and delivery. From rough wireframe to polished, shippable final.",
    colorClass: "bg-[#C8F8F0]",
    textColor: "#045546",
  },
  {
    title: "Collaboration",
    description:
      "Designing with, not for. Cross-functional alignment that turns stakeholders into partners.",
    colorClass: "bg-[#D5DFFF]",
    textColor: "#062159",
  },
];

type HowICreateValueProps = {
  panels?: ValuePanel[];
};

export default function HowICreateValue({
  panels = defaultPanels,
}: HowICreateValueProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const labelId = useId();

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    setActiveIndex(
      current => (current + direction + panels.length) % panels.length
    );
  };

  return (
    <section
      className="bg-[#FFFFFF] py-16 md:py-20 lg:py-20"
      aria-labelledby={labelId}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <AnimatedWrapper
          delay={0}
          duration={0.8}
          animationType="fadeInUp"
          distance={80}
        >
          <h2
            id={labelId}
            className="mb-8 font-display text-[28px] font-medium leading-tight text-[#222222] md:mb-10 md:text-[32px] lg:text-[40px] xl:text-[48px]"
          >
            How I Create Value
          </h2>
        </AnimatedWrapper>
        <AnimatedWrapper
          delay={0}
          duration={0.8}
          animationType="fadeInUp"
          distance={80}
        >
          <p className="value-accordion-instruction">Select a pillar to expand</p>
          <div
            className="value-accordion"
            role="group"
            aria-label="How I Create Value accordion"
            tabIndex={0}
            onKeyDown={onKeyDown}
          >
          {panels.map((panel, index) => {
            const isActive = index === activeIndex;
            const number = `${String(index + 1).padStart(2, "0")}/${String(
              panels.length
            ).padStart(2, "0")}`;

            return (
              <button
                key={panel.title}
                type="button"
                aria-expanded={isActive}
                aria-label={panel.title}
                tabIndex={isActive ? 0 : -1}
                className={`value-accordion-panel ${panel.colorClass}`}
                data-active={isActive}
                style={{ color: panel.textColor }}
                onClick={() => {
                  if (!isActive) setActiveIndex(index);
                }}
              >
                <span
                  className="value-accordion-collapsed-number"
                  aria-hidden="true"
                >
                  {number}
                </span>
                <span
                  className="value-accordion-collapsed-label"
                  aria-hidden="true"
                >
                  {panel.title}
                </span>
                <span
                  id={`${labelId}-panel-${index}`}
                  className="value-accordion-content"
                  aria-hidden={!isActive}
                >
                  <span className="value-accordion-badge">{number}</span>
                  <span className="value-accordion-title">{panel.title}</span>
                  <span className="value-accordion-description">
                    {panel.description}
                  </span>
                </span>
              </button>
            );
          })}
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
