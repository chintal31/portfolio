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
}

function CaseStudyCard({
  title,
  backgroundColor,
  imageSrc,
  imageAlt,
  className = "",
  href,
}: CaseStudyCardProps) {
  const CardContent = () => (
    <AnimatedWrapper
      delay={0}
      duration={0.8}
      animationType="fadeInUp"
      distance={80}
    >
      <div
        className={`flex flex-col gap-8 w-full ${className} cursor-pointer hover:opacity-80 transition-opacity duration-300`}
      >
        <div
          className="w-full h-[330px] rounded-[20px] relative overflow-hidden"
          style={{ backgroundColor }}
        >
          {imageSrc && (
            <div className="absolute inset-0 pl-15 pt-15">
              <div className="relative w-full h-full ">
                <Image
                  src={imageSrc}
                  alt={imageAlt || title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          )}
        </div>
        <h3 className="font-display font-normal text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.3] text-[#222222]">
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
      title: "UX Strategy for AI-Powered Media Intelligence",
      backgroundColor: "#DAF3FF",
      imageSrc: "/images/newsverse.png",
      imageAlt: "AI Media Intelligence Interface",
      href: "/work",
    },
    {
      title: "Improving Amway's Product Discovery",
      backgroundColor: "#FFDEBD",
      imageSrc: "/images/amway-hero.png",
      imageAlt: "Amway Product Discovery",
      href: "/work",
    },
    {
      title: "Unifying Lennar Associates' Employee Portal",
      backgroundColor: "#E4CFFF",
      imageSrc: "",
      imageAlt: "Lennar Employee Portal",
      href: "/work",
    },
    {
      title: "Gamifying the Sustainability for Individuals",
      backgroundColor: "#CFFFC1",
      imageSrc: "",
      imageAlt: "Sustainability Gamification",
      href: "/work",
    },
  ];

  return (
    <section className="bg-[#FCFCFC] border-t border-[#EBEBEB] py-16 px-4 md:py-20">
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
            />
            <CaseStudyCard
              title={caseStudies[1]?.title || ""}
              backgroundColor={caseStudies[1]?.backgroundColor || "#FFDEBD"}
              imageSrc={caseStudies[1]?.imageSrc || ""}
              imageAlt={caseStudies[1]?.imageAlt || ""}
              href={caseStudies[1]?.href}
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
            />
            <CaseStudyCard
              title={caseStudies[3]?.title || ""}
              backgroundColor={caseStudies[3]?.backgroundColor || "#CFFFC1"}
              imageSrc={caseStudies[3]?.imageSrc || ""}
              imageAlt={caseStudies[3]?.imageAlt || ""}
              href={caseStudies[3]?.href}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
