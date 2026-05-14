import type { UXCaseStudy } from "@/data/uxCaseStudies";
import { UX_CASE_STUDIES } from "@/data/uxCaseStudies";
import { AnimatedWrapper } from "../ui";
import CaseStudyCard from "./CaseStudyCard";

const CASE_STUDY_GRID = UX_CASE_STUDIES as [
  UXCaseStudy,
  UXCaseStudy,
  UXCaseStudy,
  UXCaseStudy,
];

export default function UXCaseStudies() {
  const [c0, c1, c2, c3] = CASE_STUDY_GRID;

  return (
    <section id="work" className="bg-[#FCFCFC] py-16 px-4 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedWrapper
          delay={0}
          duration={0.8}
          animationType="fadeInUp"
          distance={80}
        >
          <div className="text-center md:text-left mb-12 md:mb-16">
            <h2 className="font-display font-medium text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-[#222222]">
              Case Studies
            </h2>
          </div>
        </AnimatedWrapper>

        {/* Case Studies Grid */}
        <div className="space-y-16 md:space-y-20">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14">
            <CaseStudyCard
              id={c0.id}
              title={c0.title}
              backgroundColor={c0.backgroundColor}
              imageSrc={c0.imageSrc}
              imageAlt={c0.imageAlt}
              href={c0.href}
              tags={c0.tags ?? []}
              tagBgColor={c0.tagBgColor}
              {...(c0.svg !== undefined ? { svg: c0.svg } : {})}
              {...(c0.svgPosition !== undefined
                ? { svgPosition: c0.svgPosition }
                : {})}
            />
            <CaseStudyCard
              id={c1.id}
              title={c1.title}
              backgroundColor={c1.backgroundColor}
              imageSrc={c1.imageSrc}
              imageAlt={c1.imageAlt}
              href={c1.href}
              tags={c1.tags ?? []}
              tagBgColor={c1.tagBgColor}
              {...(c1.svg !== undefined ? { svg: c1.svg } : {})}
              {...(c1.svgPosition !== undefined
                ? { svgPosition: c1.svgPosition }
                : {})}
            />
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14">
            <CaseStudyCard
              id={c2.id}
              title={c2.title}
              backgroundColor={c2.backgroundColor}
              imageSrc={c2.imageSrc}
              imageAlt={c2.imageAlt}
              href={c2.href}
              tags={c2.tags ?? []}
              tagBgColor={c2.tagBgColor}
              {...(c2.svg !== undefined ? { svg: c2.svg } : {})}
              {...(c2.svgPosition !== undefined
                ? { svgPosition: c2.svgPosition }
                : {})}
            />
            <CaseStudyCard
              id={c3.id}
              title={c3.title}
              backgroundColor={c3.backgroundColor}
              imageSrc={c3.imageSrc}
              imageAlt={c3.imageAlt}
              href={c3.href}
              tags={c3.tags ?? []}
              tagBgColor={c3.tagBgColor}
              {...(c3.svg !== undefined ? { svg: c3.svg } : {})}
              {...(c3.svgPosition !== undefined
                ? { svgPosition: c3.svgPosition }
                : {})}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
