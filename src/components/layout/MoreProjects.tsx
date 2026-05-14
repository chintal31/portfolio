import { getFollowingCaseStudies } from "@/data/uxCaseStudies";
import { AnimatedWrapper } from "../ui";
import CaseStudyCard from "./CaseStudyCard";

interface MoreProjectsProps {
  /** Same `href` as in `UX_CASE_STUDIES` for the active case study page, e.g. `/newsverse`. */
  currentHref: string;
}

export default function MoreProjects({ currentHref }: MoreProjectsProps) {
  const items = getFollowingCaseStudies(currentHref, 2);
  if (items.length === 0) return null;

  return (
    <section className="bg-black py-16 px-4 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedWrapper
          delay={0}
          duration={0.8}
          animationType="fadeInUp"
          distance={80}
        >
          <div className="mb-12 md:mb-16">
            <h2 className="font-display font-normal text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.2] text-white">
              More Projects
            </h2>
          </div>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14">
          {items.map(cs => (
            <CaseStudyCard
              key={cs.id}
              id={cs.id}
              title={cs.title}
              backgroundColor={cs.backgroundColor}
              imageSrc={cs.imageSrc}
              imageAlt={cs.imageAlt}
              href={cs.href}
              tags={cs.tags ?? []}
              tagBgColor={cs.tagBgColor}
              {...(cs.svg !== undefined ? { svg: cs.svg } : {})}
              {...(cs.svgPosition !== undefined
                ? { svgPosition: cs.svgPosition }
                : {})}
              variant="onDark"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
