"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ProjectOverview from "./ProjectOverview";
import ContextSection from "./ContextSection";
import ProblemStatement from "./ProblemStatement";
import UserPersonas from "./UserPersonas";
import KeyUXSolutions from "./KeyUXSolutions";
import Outcomes from "./Outcomes";
import KeyLearning from "./KeyLearning";
import MoreProjects from "./MoreProjects";
import { AnimatedWrapper } from "../ui";

interface CategoryTagProps {
  label: string;
  color: string;
}

function CategoryTag({ label, color }: CategoryTagProps) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span className="font-noto-sans font-medium text-sm leading-5 text-center text-[#1A1A1A] tracking-[0.1px]">
        {label}
      </span>
    </div>
  );
}

export default function NewsverseCaseStudy() {
  const [isHeroImageOpen, setIsHeroImageOpen] = useState(false);

  useEffect(() => {
    if (!isHeroImageOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsHeroImageOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isHeroImageOpen]);

  const categories = [
    { label: "UX Case Study", color: "#730FD6" },
    { label: "Media Intelligence", color: "#C93F03" },
    { label: "B2B, SaaS", color: "#8FA715" },
  ];

  const projectDetails = [
    {
      title: "Role",
      description: "End-to-end UX ownership, Product Strategist, Design QA",
    },
    {
      title: "Timeline",
      description: "6 months | Feb 2024 - July 2024",
    },
    {
      title: "Team",
      description: "1 PM, 7 Developers, 1 Designer",
    },
    {
      title: "Platform",
      description: "Web app (B2B SaaS)",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[528px] bg-cover bg-center bg-no-repeat overflow-hidden">
        {/* Background with gradient overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 20%, transparent 40%), radial-gradient(1% 1% at 1% 1%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 100%), url('/images/newsverse/newsverse-bg.jpg')",
            backgroundColor: "#FFFFFF",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 md:px-12 h-full">
          <div className="flex flex-col md:flex-row items-center justify-between min-h-[528px] pt-16 pb-0 gap-8 md:gap-12">
            {/* Left Content */}
            <AnimatedWrapper
              delay={0}
              duration={0.8}
              animationType="fadeInUp"
              distance={80}
            >
              <div className="flex flex-col gap-8 md:gap-11 w-full md:w-auto md:max-w-[clamp(400px,55vw,600px)] order-1 md:order-2">
                {/* Title */}

                <h1 className="font-display font-normal text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.2] text-[#272727]">
                  <span className="block">Streamlining Media Monitoring</span>
                  <span className="block">for Enterprises</span>
                </h1>
                {/* Category Tags */}
                <div className="flex flex-wrap items-start gap-6 md:gap-8 w-full max-w-full md:max-w-[407px]">
                  {categories.map((category, index) => (
                    <CategoryTag
                      key={index}
                      label={category.label}
                      color={category.color}
                    />
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="https://newzverse.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-3 w-[clamp(150px,40vw,171px)] h-[clamp(45px,12vw,51px)] border border-[#ACACAC] rounded-[30px] hover:border-[#730FD6] hover:bg-[#730FD6] hover:text-white transition-all duration-300 group"
                >
                  <span className="font-open-sans font-normal text-[clamp(16px,4vw,20px)] leading-[1.35] text-[#272727] group-hover:text-white">
                    Check live site
                  </span>
                </a>
              </div>
            </AnimatedWrapper>

            {/* Right: Device Frame - Full size image with responsive positioning */}
            <AnimatedWrapper
              delay={0}
              duration={0.8}
              animationType="fadeInRight"
              distance={80}
            >
              <div className="order-1 md:order-2 w-full md:w-auto flex justify-center md:justify-start mb-8 md:mb-0">
                <button
                  type="button"
                  onClick={() => setIsHeroImageOpen(true)}
                  aria-label="View Newsverse interface fullscreen"
                  className="w-full max-w-lg md:max-w-xl lg:max-w-3xl flex justify-center cursor-zoom-in"
                >
                  <Image
                    src="/images/newsverse/newsverse.png"
                    alt="Newsverse AI Media Intelligence Interface"
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </button>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <ProjectOverview projectDetails={projectDetails} bgColor="#FAF6FF" />

      {/* Context Section */}
      <ContextSection />

      {/* Problem Statement Section */}
      <AnimatedWrapper
        delay={0}
        duration={0.8}
        animationType="fadeInUp"
        distance={80}
      >
        <ProblemStatement />
      </AnimatedWrapper>

      {/* User Personas Section */}
      <AnimatedWrapper
        delay={0}
        duration={0.8}
        animationType="fadeInUp"
        distance={80}
      >
        <UserPersonas />
      </AnimatedWrapper>

      {/* Key UX Solutions Section */}
      <KeyUXSolutions />

      {/* Outcomes Section */}
      <Outcomes
        items={[
          "Enabled faster detection and internal escalation of misinformation events within minutes",
          "Supported SEBI compliance by streamlining structured alert creation and reporting",
          "Improved cross-functional coordination between PR, Compliance, and CXOs",
          "Internal testing showed 90% success rate in alert setup",
        ]}
      />

      {/* Impact Section */}
      <AnimatedWrapper
        delay={0}
        duration={0.8}
        animationType="fadeInUp"
        distance={80}
      >
        <section className="w-full bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="max-w-4xl">
              <h2 className="font-display font-medium text-2xl md:text-3xl leading-tight md:leading-[43px] text-[#0C0C0C] mb-8 md:mb-12">
                Impact
              </h2>
              <p className="font-open-sans font-normal text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-9 text-black">
                Beyond the interface, this reframed how Locobuzz&apos;s teams
                approached misinformation risk — moving from reactive damage
                control to proactive, criteria-based monitoring. For a company
                selling trust and speed to compliance-sensitive clients, that
                shift is the product.
              </p>
            </div>
          </div>
        </section>
      </AnimatedWrapper>

      {/* Key Learning Section */}
      <KeyLearning />

      <MoreProjects currentHref="/newsverse" />

      {isHeroImageOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Newsverse interface fullscreen preview"
          onClick={() => setIsHeroImageOpen(false)}
        >
          <div
            className="relative h-full w-full max-w-7xl"
            onClick={event => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsHeroImageOpen(false)}
              className="absolute right-0 top-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl leading-none text-black shadow-lg transition-colors hover:bg-[#F0F0F0]"
              aria-label="Close fullscreen preview"
            >
              ×
            </button>
            <Image
              src="/images/newsverse/newsverse.png"
              alt="Newsverse AI Media Intelligence Interface"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
