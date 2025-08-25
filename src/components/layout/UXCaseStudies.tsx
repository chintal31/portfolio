import Image from "next/image";
import Link from "next/link";
import { AnimatedWrapper } from "../ui";

interface CaseStudyCardProps {
  title: string;
  backgroundColor: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  href?: string | undefined;
  tags?: string[];
  tagBgColor?: string | undefined;
  svg?: string | undefined;
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
            <div className="absolute inset-0 pl-20 pt-20">
              <div className="relative w-full h-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt || title}
                  fill
                  className="object-cover object-top-left transition-transform duration-500 ease-out group-hover:scale-150 origin-top-left"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          )}

          {/* Tags overlay - positioned at top, visible on hover */}
          {tags.length > 0 && (
            <div className="absolute top-0 left-0 right-0 p-6 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-opacity-90 text-[#222222] text-xs font-normal rounded-md shadow-sm flex items-center gap-1"
                  style={{ backgroundColor: tagBgColor }}
                >
                  {index === 0 && svg && (
                    <Image src={svg} alt={tag} width={16} height={16} />
                  )}
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <h3 className="font-display font-normal text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.3] text-[#222222] group-hover:text-[#444444] transition-colors duration-300">
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
  const caseStudies = [
    {
      title: "UX Strategy for AI-Powered News Intelligence",
      backgroundColor: "#FFEAD4",
      imageSrc: "/images/landing-page/newsverse.png",
      imageAlt: "AI Media Intelligence Interface",
      href: "/newsverse",
      tags: ["AI", "Media Intelligence", "B2B SaaS"],
      tagBgColor: "#FFD5AA",
    },
    {
      title: "Improving Amway's Product Discovery",
      backgroundColor: "#DAF3FF",
      imageSrc: "/images/landing-page/amway-hero.png",
      imageAlt: "Amway Product Discovery",
      href: "/amway",
      tags: ["E-commerce", "Product Discovery", "User Experience"],
      tagBgColor: "#C5EAFF",
    },
    {
      title: "Reimagining the Home Buying Process",
      backgroundColor: "#F5E1FF",
      imageSrc: "/images/landing-page/home_exp.png",
      imageAlt: "Lennar Employee Portal",
      href: "https://luminous-galaxy-47d.notion.site/Home-Buying-Experience-8342de601ef4446e935ece5709eb7a71",
      tags: ["Employee Portal", "Enterprise UX", "Digital Transformation"],
      tagBgColor: "#EAB8FF",
    },
    {
      title: "Gamifying the Sustainability for Individuals",
      backgroundColor: "#DBFFF0",
      imageSrc: "/images/landing-page/sustainability-gamify.png",
      imageAlt: "Sustainability Gamification",
      href: "https://www.behance.net/gallery/153216047/IMPACT-APP-Designathon",
      tags: ["Gamification", "Sustainability", "Mobile App"],
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
              title={caseStudies[0]?.title || ""}
              backgroundColor={caseStudies[0]?.backgroundColor || "#DAF3FF"}
              imageSrc={caseStudies[0]?.imageSrc || ""}
              imageAlt={caseStudies[0]?.imageAlt || ""}
              href={caseStudies[0]?.href}
              tags={caseStudies[0]?.tags || []}
              tagBgColor={caseStudies[0]?.tagBgColor}
              svg={"/images/AI.svg"}
            />
            <CaseStudyCard
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
              title={caseStudies[2]?.title || ""}
              backgroundColor={caseStudies[2]?.backgroundColor || "#E4CFFF"}
              imageSrc={caseStudies[2]?.imageSrc || ""}
              imageAlt={caseStudies[2]?.imageAlt || ""}
              href={caseStudies[2]?.href}
              tags={caseStudies[2]?.tags || []}
              tagBgColor={caseStudies[2]?.tagBgColor}
            />
            <CaseStudyCard
              title={caseStudies[3]?.title || ""}
              backgroundColor={caseStudies[3]?.backgroundColor || "#CFFFC1"}
              imageSrc={caseStudies[3]?.imageSrc || ""}
              imageAlt={caseStudies[3]?.imageAlt || ""}
              href={caseStudies[3]?.href}
              tags={caseStudies[3]?.tags || []}
              tagBgColor={caseStudies[3]?.tagBgColor}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
