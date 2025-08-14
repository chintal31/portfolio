import Image from "next/image";
import ProjectOverview from "./ProjectOverview";
import ContextSection from "./ContextSection";
import ProblemStatement from "./ProblemStatement";
import DesignProcess from "./DesignProcess";
import UserPersonas from "./UserPersonas";
import KeyUXSolutions from "./KeyUXSolutions";
import Outcomes from "./Outcomes";
import KeyLearning from "./KeyLearning";

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
  const categories = [
    { label: "UX Case Study", color: "#730FD6" },
    { label: "Media Intelligence", color: "#C93F03" },
    { label: "B2B, SaaS", color: "#8FA715" },
  ];

  const projectDetails = [
    {
      title: "Role",
      description: "Product Strategist, UX Designer, Design QA",
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
              "linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 20%, transparent 40%), radial-gradient(1% 1% at 1% 1%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 100%), url('/images/newsverse-bg.jpg')",
            backgroundColor: "#FFFFFF",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 md:px-12 h-full">
          <div className="flex flex-col md:flex-row items-center justify-between min-h-[528px] py-16 gap-8 md:gap-12">
            {/* Left Content */}
            <div className="flex flex-col gap-8 md:gap-11 w-full md:w-auto md:max-w-[clamp(400px,55vw,600px)] order-1 md:order-2">
              {/* Title */}
              <h2 className="font-display font-normal text-[clamp(1.25rem,3.5vw,2.5rem)] leading-[1.2] text-[#272727]">
                <span className="block">UX Strategy For</span>
                <span className="block">AI-Powered Media</span>
                <span className="block">Intelligence</span>
              </h2>

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
              <button className="flex items-center justify-center py-3 w-[clamp(150px,40vw,171px)] h-[clamp(45px,12vw,51px)] border border-[#ACACAC] rounded-[30px] hover:border-[#730FD6] hover:bg-[#730FD6] hover:text-white transition-all duration-300 group">
                <span className="font-open-sans font-normal text-[clamp(16px,4vw,20px)] leading-[1.35] text-[#272727] group-hover:text-white">
                  Check live site
                </span>
              </button>
            </div>

            {/* Right: Device Frame - Full size image with responsive positioning */}
            <div className="order-1 md:order-2 w-full md:w-auto flex justify-center md:justify-start mb-8 md:mb-0">
              <div className="relative w-full h-[clamp(200px,50vh,400px)] sm:w-[clamp(300px,80vw,500px)] sm:h-[clamp(250px,60vh,450px)] md:w-[clamp(400px,50vw,600px)] md:h-[clamp(300px,70vh,500px)] xl:w-[clamp(500px,45vw,700px)] xl:h-[clamp(350px,65vh,550px)]">
                <Image
                  src="/images/newsverse2.png"
                  alt="Newsverse AI Media Intelligence Interface"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, (max-width: 1280px) 45vw, 700px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <ProjectOverview projectDetails={projectDetails} bgColor="#FAF6FF" />

      {/* Context Section */}
      <ContextSection />

      {/* Problem Statement Section */}
      <ProblemStatement />

      {/* Design Process Section */}
      <DesignProcess />

      {/* User Personas Section */}
      <UserPersonas />

      {/* Key UX Solutions Section */}
      <KeyUXSolutions />

      {/* Outcomes Section */}
      <Outcomes />

      {/* Key Learning Section */}
      <KeyLearning />
    </>
  );
}
