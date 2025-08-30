import Image from "next/image";
import Link from "next/link";
import { AnimatedWrapper } from "../ui";

interface CaseStudyCardProps {
  id: number;
  title: string;
  backgroundColor: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  href?: string | undefined;
  tags?: string[];
  tagBgColor?: string | undefined;
  svg?: string | undefined;
  svgPosition?: "tag" | "topRight";
}

function CaseStudyCard({
  title,
  backgroundColor,
  imageSrc,
  imageAlt,
  className = "",
  href,
  tags = [],
  tagBgColor,
  svg,
  svgPosition = "topRight",
}: CaseStudyCardProps) {
  const CardContent = () => (
    <AnimatedWrapper
      delay={0}
      duration={0.8}
      animationType="fadeInUp"
      distance={80}
    >
      <div
        className={`flex flex-col gap-8 w-full ${className} cursor-pointer group`}
      >
        <div
          className="w-full h-[330px] rounded-[20px] relative overflow-hidden"
          style={{ backgroundColor }}
        >
          {imageSrc && (
            <div className={`absolute inset-0 pl-15 pt-15`}>
              <div className="relative w-full h-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt || title}
                  fill
                  className={`object-cover scale-100 lg:group-hover:scale-130 transition-transform duration-500 ease-out object-top-left origin-top-left`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          )}

          {/* Tags overlay - positioned at top, visible on hover */}
          {tags.length > 0 && (
            <div className="absolute top-0 left-0 right-0 p-4 md:p-6 flex flex-nowrap gap-1 md:gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-1.5 py-0.5 md:px-2 md:py-1 bg-opacity-90 text-[#222222] text-[10px] md:text-xs font-normal rounded-md shadow-sm flex items-center gap-1 whitespace-nowrap flex-shrink-0 border-0 outline-none"
                  style={{ backgroundColor: tagBgColor }}
                >
                  {index === 0 && svg && svgPosition === "tag" && (
                    <Image
                      src={svg}
                      alt={tag}
                      width={12}
                      height={12}
                      className="md:w-4 md:h-4"
                    />
                  )}
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Runners-up SVG icon - positioned at top right */}
          {svg && svgPosition === "topRight" && (
            <div className="absolute top-4 right-4 md:top-6 md:right-6">
              <Image src={svg} alt="Award icon" width={100} height={100} />
            </div>
          )}
        </div>
        <h3 className="font-display font-normal text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.3] text-[#222222] lg:group-hover:text-[#444444] transition-colors duration-300 lg:group-hover:underline decoration-[#444444] decoration-0 underline-offset-4">
          {title}
        </h3>
      </div>
    </AnimatedWrapper>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}

export default function UXCaseStudies() {
  const caseStudies: CaseStudyCardProps[] = [
    {
      id: 1,
      title: "UX Strategy for AI-Powered News Intelligence",
      backgroundColor: "#FFEAD4",
      imageSrc: "/images/landing-page/case-study/newsverse.png",
      imageAlt: "AI Media Intelligence Interface",
      href: "/newsverse",
      tags: ["AI", "Media Intelligence", "B2B SaaS"],
      tagBgColor: "#FFD5AA",
    },
    {
      id: 2,
      title: "Improving Amway's Product Discovery",
      backgroundColor: "#F5E1FF",
      imageSrc: "/images/landing-page/case-study/amway.png",
      imageAlt: "Amway Product Discovery",
      href: "/amway",
      tags: ["E2E Responsive", "B2C", "E-Commerce"],
      tagBgColor: "#EAB8FF",
    },
    {
      id: 3,
      title: "Reimagining the Home Buying Process",
      backgroundColor: "#DAF3FF",
      imageSrc: "/images/landing-page/case-study/home-buying-exp.png",
      imageAlt: "Lennar Employee Portal",
      href: "https://luminous-galaxy-47d.notion.site/Home-Buying-Experience-8342de601ef4446e935ece5709eb7a71",
      tags: ["UX Research", "B2B Saas", "Real Estate"],
      tagBgColor: "#C5EAFF",
    },
    {
      id: 4,
      title: "Gamifying the Sustainability for Individuals",
      // backgroundColor: "#DBFFF0",
      backgroundColor: "#30B0A0",
      imageSrc: "/images/landing-page/case-study/sus-2.png",
      imageAlt: "Sustainability Gamification",
      href: "https://www.behance.net/gallery/153216047/IMPACT-APP-Designathon",
      tags: ["Designathon", "E2E", "Sustainability"],
      tagBgColor: "#96FFD0",
    },
  ];

  return (
    <section
      id="work"
      className="bg-[#FCFCFC] border-t border-[#EBEBEB] py-16 px-4 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedWrapper
          delay={0}
          duration={0.8}
          animationType="fadeInUp"
          distance={80}
        >
          <div className="mb-12 md:mb-16">
            <h2 className="font-display font-medium text-[clamp(2rem,6vw,3rem)] leading-[1.3] text-[#222222]">
              UX Case Studies
            </h2>
          </div>
        </AnimatedWrapper>

        {/* Case Studies Grid */}
        <div className="space-y-16 md:space-y-20">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14">
            <CaseStudyCard
              id={caseStudies[0]?.id || 0}
              title={caseStudies[0]?.title || ""}
              backgroundColor={caseStudies[0]?.backgroundColor || "#DAF3FF"}
              imageSrc={caseStudies[0]?.imageSrc || ""}
              imageAlt={caseStudies[0]?.imageAlt || ""}
              href={caseStudies[0]?.href}
              tags={caseStudies[0]?.tags || []}
              tagBgColor={caseStudies[0]?.tagBgColor}
              svg={"/images/landing-page/case-study/AI.svg"}
              svgPosition="tag"
            />
            <CaseStudyCard
              id={caseStudies[1]?.id || 0}
              title={caseStudies[1]?.title || ""}
              backgroundColor={caseStudies[1]?.backgroundColor || "#FFDEBD"}
              imageSrc={caseStudies[1]?.imageSrc || ""}
              imageAlt={caseStudies[1]?.imageAlt || ""}
              href={caseStudies[1]?.href}
              tags={caseStudies[1]?.tags || []}
              tagBgColor={caseStudies[1]?.tagBgColor}
            />
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14">
            <CaseStudyCard
              id={caseStudies[2]?.id || 0}
              title={caseStudies[2]?.title || ""}
              backgroundColor={caseStudies[2]?.backgroundColor || "#E4CFFF"}
              imageSrc={caseStudies[2]?.imageSrc || ""}
              imageAlt={caseStudies[2]?.imageAlt || ""}
              href={caseStudies[2]?.href}
              tags={caseStudies[2]?.tags || []}
              tagBgColor={caseStudies[2]?.tagBgColor}
            />
            <CaseStudyCard
              id={caseStudies[3]?.id || 0}
              title={caseStudies[3]?.title || ""}
              backgroundColor={caseStudies[3]?.backgroundColor || "#CFFFC1"}
              imageSrc={caseStudies[3]?.imageSrc || ""}
              imageAlt={caseStudies[3]?.imageAlt || ""}
              href={caseStudies[3]?.href}
              tags={caseStudies[3]?.tags || []}
              tagBgColor={caseStudies[3]?.tagBgColor}
              svg={"/images/landing-page/case-study/runnersup.svg"}
              svgPosition="topRight"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
