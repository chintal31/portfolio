import KeyLearning from "@/components/layout/KeyLearning";
import Layout from "@/components/layout/Layout";
import Outcomes from "@/components/layout/Outcomes";
import ProjectOverview from "@/components/layout/ProjectOverview";
import { AnimatedWrapper } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

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

export default function Amway() {
  const categories = [
    { label: "E-Commerce", color: "#730FD6" },
    { label: "UX Revamp", color: "#C93F03" },
    { label: "B2C & B2B", color: "#8FA715" },
  ];

  const projectDetails = [
    {
      title: "Role",
      description: "UX Designer, UX Researcher - Product Pod",
    },
    {
      title: "Timeline",
      description: "1 month | March 2023 - March 2024",
    },
    {
      title: "Team",
      description: "1 PM, 12 Developers, 3 Designer",
    },

    {
      title: "Platform",
      description: "Web responsive (B2C)",
    },
  ];

  const userInterviews = [
    { text: "Unresponsive Buttons", image: "/images/amway/close_window.svg" },
    {
      text: "Cluttered Layout",
      image: "/images/amway/outline.svg",
    },
    {
      text: "Complex Menu Structure",
      image: "/images/amway/mind_map.svg",
    },
    {
      text: "Inconsistent Design Elements",
      image: "/images/amway/paint_palette.svg",
    },
    {
      text: "Search Functionality Issues",
      image: "/images/amway/analyze.svg",
    },
    {
      text: "Hover and Click States",
      image: "/images/amway/hand_cursor.svg",
    },
  ];

  const heuristicAnalysis = [
    {
      boldText: "Categorisation needs a refresh",
      text: ", as it lacks proper product grouping and clear hierarchy for important information.",
      image: "/images/amway/mind_map.svg",
    },
    {
      boldText: "Value discovery is limited",
      text: " as the current search can&apos;t identify user intent, context, or keyword synonyms to deliver personalised results.",
      image: "/images/amway/search.svg",
    },
    {
      boldText: "Inconsistent visual hierarchy",
      text: "exists across the storefront",
      image: "/images/amway/prototype.svg",
    },
    {
      boldText: "Lacks essential features",
      text: " like Wishlist/ Save for later capabilities, Category-specific filters, Product Recommender, etc.",
      image: "/images/amway/popular.svg",
    },
  ];

  return (
    <Layout
      seo={{
        title: "Amway Case Study - Improving Product Discovery",
        description:
          "UX case study on redesigning Amway Thailand's product discovery journey across Search, Product Pages, and Navigation.",
      }}
    >
      {/* Back Button */}
      <div className="bg-white border-b border-[#EBEBEB] py-4">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <svg
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="font-medium">Back to Work</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full min-h-[528px] bg-white overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 md:px-12 h-full">
          <div className="flex flex-col md:flex-row items-center justify-between min-h-[528px] py-16 gap-8 md:gap-12">
            {/* Left Content */}
            <AnimatedWrapper
              delay={0}
              duration={0.8}
              animationType="fadeInUp"
              distance={80}
            >
              <div className="flex flex-col gap-8 md:gap-11 w-full md:w-auto md:max-w-[clamp(400px,55vw,600px)] order-1 md:order-2">
                {/* Title */}
                <h2 className="font-display font-normal text-[clamp(1.25rem,3.5vw,2.5rem)] leading-[1.2] text-[#272727]">
                  <span className="block">Improving Amway&apos;s</span>
                  <span className="block">Product Discovery</span>
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
            </AnimatedWrapper>

            {/* Right: Device Frame - Full size image with responsive positioning */}
            <AnimatedWrapper
              delay={0}
              duration={0.8}
              animationType="fadeInRight"
              distance={80}
            >
              <div className="order-1 md:order-2 w-full md:w-auto flex justify-center md:justify-start mb-8 md:mb-0">
                <div className="relative w-full h-[clamp(200px,50vh,400px)] sm:w-[clamp(300px,80vw,500px)] sm:h-[clamp(250px,60vh,450px)] md:w-[clamp(400px,50vw,600px)] md:h-[clamp(300px,70vh,500px)] xl:w-[clamp(500px,45vw,700px)] xl:h-[clamp(350px,65vh,550px)]">
                  <Image //TODO: change to actual image
                    src="/images/amway-hero.png"
                    alt="Amway Product Discovery"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, (max-width: 1280px) 45vw, 700px"
                  />
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </section>

      <AnimatedWrapper
        delay={0}
        duration={0.8}
        animationType="fadeInUp"
        distance={80}
      >
        <section className="w-full bg-[#F2F8FF] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="max-w-5xl">
              <h2 className="font-display font-medium text-xl md:text-2xl leading-tight md:leading-8 text-black mb-4 md:mb-6">
                Context
              </h2>
              <div className="flex flex-col gap-3 md:gap-4">
                <p className="font-open-sans font-normal text-base md:text-lg lg:text-xl leading-relaxed md:leading-8 text-[#393939]">
                  Redesigned Amway Thailand&apos;s product discovery journey
                  across Search, Product Pages (PLPs + PDPs), and Navigation.
                  Focused on improving usability, accessibility, and business
                  flexibility through a frontend-backend integrated UX approach.
                </p>
                <p className="font-open-sans [font-style:italic] text-sm leading-relaxed md:leading-8 text-[#393939]">
                  [This project is based on my work for Amway Thailand. All
                  views and designs shared here are my own and do not reflect
                  confidential business information]
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedWrapper>

      <AnimatedWrapper
        delay={0}
        duration={0.8}
        animationType="fadeInUp"
        distance={80}
      >
        <ProjectOverview projectDetails={projectDetails} bgColor="#FFFFFF" />
      </AnimatedWrapper>

      <AnimatedWrapper
        delay={0}
        duration={0.8}
        animationType="fadeInUp"
        distance={80}
      >
        <section className="w-full bg-[#FAFAFA] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="flex flex-col gap-8 md:gap-11 lg:gap-12">
              <h3 className="font-display font-medium text-2xl md:text-3xl leading-tight md:leading-[43px] text-[#0C0C0C]">
                Design Process
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-18">
                {/* Left Column */}
                <div className="flex flex-col gap-6 md:gap-8">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-[42px] md:h-[42px] bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-open-sans font-semibold text-sm md:text-base leading-tight md:leading-[22px]">
                        1
                      </span>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-3">
                      <h4 className="font-open-sans font-semibold text-sm md:text-base leading-tight md:leading-[22px] text-black">
                        Research & Discovery
                      </h4>
                      <p className="font-open-sans font-normal text-sm md:text-base leading-relaxed md:leading-[22px] text-black">
                        I led user research for Search including benchmarking
                        and analysing stakeholder interviews. For PDP, PLPs, I
                        built on earlier research and contextualized findings
                        for Thai users.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-[42px] md:h-[42px] bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-open-sans font-semibold text-sm md:text-base leading-tight md:leading-[22px]">
                        3
                      </span>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-3">
                      <h4 className="font-open-sans font-semibold text-sm md:text-base leading-tight md:leading-[22px] text-black">
                        Continuous Iteration
                      </h4>
                      <p className="font-open-sans font-normal text-sm md:text-base leading-relaxed md:leading-[22px] text-black">
                        Design and testing ran in parallel. I balanced future
                        sprint work while incorporating live insights and
                        aligning design intent with evolving business
                        priorities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6 md:gap-8">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-[42px] md:h-[42px] bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-open-sans font-semibold text-sm md:text-base leading-tight md:leading-[22px]">
                        2
                      </span>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-3">
                      <h4 className="font-open-sans font-semibold text-sm md:text-base leading-tight md:leading-[22px] text-black">
                        Usability Testing
                      </h4>
                      <p className="font-open-sans font-normal text-sm md:text-base leading-relaxed md:leading-[22px] text-black">
                        We invited beta users to test early designs, where I
                        created test scenarios, observed behavior, and noted
                        pain points. Their feedback helped shape design
                        direction sprint-by-sprint.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-[42px] md:h-[42px] bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-open-sans font-semibold text-sm md:text-base leading-tight md:leading-[22px]">
                        4
                      </span>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-3">
                      <h4 className="font-open-sans font-semibold text-sm md:text-base leading-tight md:leading-[22px] text-black">
                        User Flows & Edge Cases
                      </h4>
                      <p className="font-open-sans font-normal text-sm md:text-base leading-relaxed md:leading-[22px] text-black">
                        I created detailed UX flows covering complex product
                        logic—stock status, price visibility, multilingual
                        support—ensuring the frontend and back-office UX worked
                        seamlessly together.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedWrapper>

      {/* User Personas Section */}
      <section className="w-full bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col gap-8 lg:gap-13">
            <div className="flex flex-col gap-3">
              <p className="font-open-sans font-normal text-sm md:text-base leading-tight md:leading-[22px] text-[#272727]">
                And the first step was to understand who are we designing for
              </p>
              <h3 className="font-display font-normal text-lg md:text-[21px] leading-tight md:leading-7 text-black">
                Amway focuses on two key users
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
              {/* Customer Persona */}
              <div className="flex flex-col items-center gap-7">
                <div className="relative">
                  <div className="w-24 h-24 md:w-[133px] md:h-[133px] border border-[#66798F] rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 md:w-[67px] md:h-[67px] bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-xs text-gray-600">
                        <svg
                          width="68"
                          height="67"
                          viewBox="0 0 68 67"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <rect
                            x="0.5"
                            y="-0.000488281"
                            width="66.6667"
                            height="66.6667"
                            fill="url(#pattern0_2723_23102)"
                          />
                          <defs>
                            <pattern
                              id="pattern0_2723_23102"
                              patternContentUnits="objectBoundingBox"
                              width="1"
                              height="1"
                            >
                              <use
                                xlinkHref="#image0_2723_23102"
                                transform="scale(0.01)"
                              />
                            </pattern>
                            <image
                              id="image0_2723_23102"
                              width="100"
                              height="100"
                              preserveAspectRatio="none"
                              xlinkHref="data:image/png;base64,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"
                            />
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="absolute -top-1 -right-4 md:-right-20 bg-[#EAFFD6] border border-[#7ED27F] rounded-[20px] px-2 md:px-3 py-2 min-w-[50px] md:min-w-[70px] flex items-center justify-center">
                    <span className="font-open-sans font-normal text-[8px] md:text-[10px] leading-[8px] md:leading-[10px] text-black">
                      Easy Product Discovery
                    </span>
                  </div>
                  <div className="absolute top-20 sm:top-24 -right-4 md:-right-20 bg-[#EAFFD6] border border-[#7ED27F] rounded-[20px] px-2 md:px-3 py-2 min-w-[50px] md:min-w-[70px] flex items-center justify-center">
                    <span className="font-open-sans font-normal text-[8px] md:text-[10px] leading-[8px] md:leading-[10px] text-black">
                      Offers & Discounts
                    </span>
                  </div>
                  <div className="absolute top-12 sm:top-14 -left-4 md:-left-28 bg-[#EAFFD6] border border-[#7ED27F] rounded-[20px] px-2 md:px-3 py-2 min-w-[50px] md:min-w-[70px] flex items-center justify-center">
                    <span className="font-open-sans font-normal text-[8px] md:text-[10px] leading-[8px] md:leading-[10px] text-black">
                      Learn about products
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="font-open-sans font-bold text-sm md:text-base leading-tight md:leading-[22px] text-black mb-1">
                    Amway Customers
                  </h4>
                  <p className="font-open-sans font-normal text-sm md:text-base leading-tight md:leading-[22px] text-[#272727]">
                    Who purchases Amway products
                  </p>
                </div>
              </div>

              {/* ABO Persona */}
              <div className="flex flex-col items-center gap-4 md:gap-5">
                <div className="relative">
                  <div className="w-24 h-24 md:w-[133px] md:h-[133px] border border-[#967A44] rounded-full flex items-center justify-center">
                    <div className="w-10 h-10 md:w-[53px] md:h-[53px] bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-xs text-gray-600">
                        <svg
                          width="134"
                          height="134"
                          viewBox="0 0 134 134"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <rect
                            x="1.00033"
                            y="0.332845"
                            width="132.667"
                            height="132.667"
                            rx="66.3333"
                            stroke="#967A44"
                            stroke-width="0.666667"
                          />
                          <rect
                            x="40.667"
                            y="39.9995"
                            width="53.3333"
                            height="53.3333"
                            fill="url(#pattern0_2723_23113)"
                          />
                          <defs>
                            <pattern
                              id="pattern0_2723_23113"
                              patternContentUnits="objectBoundingBox"
                              width="1"
                              height="1"
                            >
                              <use
                                xlinkHref="#image0_2723_23113"
                                transform="scale(0.0125)"
                              />
                            </pattern>
                            <image
                              id="image0_2723_23113"
                              width="80"
                              height="80"
                              preserveAspectRatio="none"
                              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChElEQVR4nO2awWoTURSGZ+VT2LWPITLXNOLCVRdxo75EdWbaabEtpDtd3FFbq65clEI3TTdK2oDZSDnPUCq2ELBUy6yPnNtYlJgmYOKZO/l/+AkkZObMl//MOTAJAgiaGNmkMmUjs2Vj8yOLDY/S3WNuZ3O3bgTlhRd+GzW4Xoencq6gbLKR2bpISth4Pnvz+qiPL8e0kdl1EKNwMyibbLdtxwHv8hxJZaoL8HtQFm0uzFzLYrN62WJRWJf3fD3Pf1cWhfWe+1QU1n09T/8Cxn5zN6UyAMZjApjTCkz9GQAg/VtAAJAAkDVvM0ggASAjgeTvpEcLEwAyEkj6rYgWJgBk7TRhiBAAsnaisMYQALJPxiJNAMhIIOm3IlqYAJD7Qei0U27YGq+lVecdW+OTVqKePi+GSKed8uvFas9TMHlPPtOur/AAG7bW91HiblZTr6/wANfS3vT98no6rV6f3wAXqur1FR7gzpUtfL/4AM8+P1Ut8KSV/HWIbCze4c6nedXahM1AgIcfH6v/yp126gaG3PPEkjxteOLDD7ODAe69eaheaF5QNzceDACYGH41X+EvzUi92LxgPmo+4Zdztx2jgX9ve7d0FxDpT3jCZKi/t20/m3GvQlsiK32vPVhyBcs1y7ULA5e839hcCfD8YNl96UVy8SXYOBYyG84PlobfA7/ux9x6+4jfr95zk3DSQK6n0+7ahcHxfuzPIp0X3ABIAMhIIOm3IlqYAJC104QhQgDI2onCGkMAyD4ZizQBICOBpN+KaGECQNZOE4YIASBrJwprDAEg+2Qs0gSAjASSfiuihQkAWTtNGCIEgFy6NQY2QzEAwHjEACEIgiAIgqBgkvQTWwdJiy+KBDMAAAAASUVORK5CYII="
                            />
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="absolute -top-1 -right-2 sm:-right-8 md:-right-28 bg-[#FFEBD6] border border-[#D2A97E] rounded-[20px] px-2 md:px-3 py-2 min-w-[50px] md:min-w-[70px] flex items-center justify-center">
                    <span className="font-open-sans font-normal text-[8px] md:text-[10px] leading-[8px] md:leading-[10px] text-black">
                      Managing Multiple Orders
                    </span>
                  </div>
                  <div className="absolute top-8 sm:top-10 -left-2 sm:-left-8 md:-left-28 bg-[#FFEBD6] border border-[#D2A97E] rounded-[20px] px-2 md:px-3 py-2 min-w-[50px] md:min-w-[70px] flex items-center justify-center">
                    <span className="font-open-sans font-normal text-[8px] md:text-[10px] leading-[8px] md:leading-[10px] text-black">
                      Personalised Experience
                    </span>
                  </div>
                  <div className="absolute top-20 sm:top-28 -right-2 sm:-right-8 md:-right-32 bg-[#FFEBD6] border border-[#D2A97E] rounded-[20px] px-2 md:px-3 py-2 min-w-[50px] md:min-w-[70px] flex items-center justify-center">
                    <span className="font-open-sans font-normal text-[8px] md:text-[10px] leading-[8px] md:leading-[10px] text-black">
                      Actionable Insights & Dashboards
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="font-open-sans font-bold text-sm md:text-base leading-tight md:leading-[22px] text-black mb-1">
                    Amway Business Owners (ABOs)
                  </h4>
                  <p className="font-open-sans font-normal text-sm md:text-base leading-tight md:leading-[22px] text-[#272727]">
                    Who builds businesses by selling Amway products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Interviews Section */}
      <section className="w-full bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col gap-10 lg:gap-12">
            <div className="flex flex-col gap-3">
              <AnimatedWrapper
                delay={0}
                duration={0.8}
                animationType="fadeInUp"
                distance={80}
              >
                <h3 className="font-display font-normal text-[21px] leading-7 text-black">
                  User Interviews
                </h3>
              </AnimatedWrapper>

              <AnimatedWrapper
                delay={0}
                duration={0.8}
                animationType="fadeInUp"
                distance={80}
              >
                {" "}
                <p className="font-open-sans font-normal text-base leading-[22px] text-[#272727] max-w-2xl">
                  As a part of User Research, our primary method was to conduct
                  User Interviews. It was done by our in-house expert
                  researchers.
                </p>
              </AnimatedWrapper>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {userInterviews.map((item, index) => (
                <AnimatedWrapper
                  delay={0}
                  duration={0.8}
                  animationType="fadeInUp"
                  distance={80}
                  key={index}
                >
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                    <div className="w-[53px] h-[53px] bg-[#FFD6F4] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Image
                        src={item.image}
                        alt="User Interview"
                        width={20}
                        height={20}
                      />
                    </div>
                    <span className="font-open-sans font-bold text-base leading-[22px] text-[#272727]">
                      {item.text}
                    </span>
                  </div>
                </AnimatedWrapper>
              ))}{" "}
            </div>
          </div>
        </div>
      </section>

      {/* Heuristic Analysis Section */}

      <section className="w-full bg-[#FAFAFA] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col gap-11 lg:gap-12">
            <AnimatedWrapper
              delay={0}
              duration={0.8}
              animationType="fadeInUp"
              distance={80}
            >
              <div className="flex flex-col gap-3">
                <h3 className="font-display font-normal text-[21px] leading-7 text-black">
                  Heuristic Analysis
                </h3>
                <p className="font-open-sans font-normal text-base leading-[22px] text-[#272727] max-w-2xl">
                  We decided to look inwards & see what&apos;s missing in the
                  existing experience. We achieved this by analysing Amway
                  Thailand&apos;s current experience with{" "}
                  <span className="font-bold">
                    10 Heuristic principles of UX.
                  </span>
                </p>
              </div>
            </AnimatedWrapper>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <AnimatedWrapper
                delay={0}
                duration={0.8}
                animationType="fadeInUp"
                distance={80}
              >
                {" "}
                {/* Left Column - Issues */}
                <div className="flex flex-col gap-7">
                  {heuristicAnalysis.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-[53px] h-[53px] bg-[#D6EDFF] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Image
                          src={item.image}
                          alt="User Interview"
                          width={20}
                          height={20}
                        />
                      </div>
                      <p className="font-open-sans font-normal text-base leading-[22px] text-[#272727]">
                        <span className="font-bold">{item.boldText}</span>{" "}
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedWrapper>

              {/* Right Column - Image */}
              <AnimatedWrapper
                delay={0}
                duration={0.8}
                animationType="fadeInRight"
                distance={80}
              >
                <div className="w-full h-[385px] bg-[#D6EDFF] rounded-[13px] flex items-center justify-center">
                  <div className="w-full h-full rounded-[16px] flex items-center justify-center">
                    <span className="text-lg text-gray-600">
                      Heuristic Analysis Image
                    </span>
                  </div>
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </div>
      </section>

      <AnimatedWrapper
        delay={0}
        duration={0.8}
        animationType="fadeInUp"
        distance={80}
      >
        {/* Problem Statement Section */}
        <section className="w-full bg-[#272727] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
              {/* Icon/Illustration */}
              <div className="w-full max-w-[200px] lg:max-w-[250px] flex justify-center">
                <div className="w-32 h-32 lg:w-40 lg:h-40 bg-[#272727] flex items-center justify-center">
                  <svg
                    width="200"
                    height="220"
                    viewBox="0 0 200 220"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M128.167 29.8086C152.977 29.8086 172.303 47.4978 172.303 69.9727C172.303 91.7632 153.415 108.305 128.167 108.305C122.586 108.305 117.148 107.49 111.98 105.875L111.767 105.808L111.562 105.898C104.854 108.875 100.847 110.74 98.4521 111.907C96.0774 113.065 95.2522 113.555 94.9531 113.78C94.6556 114.005 94.3068 114.114 93.9482 114.114C93.5759 114.114 93.2114 113.998 92.9121 113.761L92.9111 113.76L92.8037 113.667C92.2896 113.186 92.1268 112.431 92.4072 111.776L97.7344 99.3477L97.9199 98.9131L97.5391 98.6328C87.3537 91.1602 81.5899 80.4711 81.5898 69.0566C81.5898 47.5083 102.388 29.8086 128.167 29.8086ZM128.167 33.1631C104.441 33.1631 84.9434 49.1604 84.9434 69.0566C84.9435 79.9369 90.7986 90.0892 100.938 96.9229L100.939 96.9238C101.6 97.3658 101.855 98.2297 101.54 98.9717L97.9961 107.246L97.376 108.692L98.7988 108.018C101.441 106.764 105.3 104.998 110.993 102.478H110.994C111.369 102.311 111.798 102.288 112.199 102.42C117.276 104.102 122.652 104.95 128.167 104.95C151.694 104.95 168.947 90.3076 168.947 69.9736C168.947 49.2827 150.965 33.1632 128.167 33.1631Z"
                      fill="#F7F7F7"
                      stroke="#272727"
                      stroke-width="1.19048"
                    />
                    <path
                      d="M110.054 49.5815C113.413 47.0482 117.048 46.0295 120.58 46.563V46.562C123.806 47.0552 126.786 48.8885 129.011 51.7778L129.338 52.2017L129.794 51.9214C132.676 50.1524 135.699 49.6196 138.505 50.4438C138.951 50.5747 139.787 50.8217 140.582 51.3091C141.325 51.7647 141.985 52.4006 142.276 53.3032L142.329 53.4868C142.767 55.1988 141.785 56.772 140.012 58.688L139.569 59.1646L140.084 59.563C142.251 61.2385 143.819 63.165 144.528 65.0601L144.759 65.6753L145.349 65.3862C146.17 64.9831 146.914 64.4616 147.554 63.814L147.555 63.8149C150.229 61.1104 150.946 56.227 149.965 49.563L149.864 48.9126C149.717 47.994 150.342 47.1346 151.253 46.9878L151.257 46.9868C152.102 46.8453 152.921 47.3835 153.142 48.2075L153.178 48.3765C154.503 56.6468 153.472 62.2946 150.258 65.8306L149.939 66.1665C148.629 67.4976 147.049 68.4185 145.281 69.0327L145.379 70.1821C147.971 70.6131 150.56 71.5285 152.314 72.8345L152.654 73.1011C154.346 74.5048 154.988 76.2279 154.598 77.9888C154.322 79.2321 153.792 80.0849 153.125 80.6772C152.452 81.2745 151.602 81.641 150.634 81.8442C148.673 82.256 146.372 81.976 144.435 81.7388H144.433L143.311 81.604H143.31C142.562 81.5157 141.788 81.3589 141.001 81.1147L140.141 80.8481L140.232 81.7446C140.503 84.3734 139.568 85.6972 138.788 86.3755C137.477 87.5103 135.532 87.7655 133.288 87.5327C131.059 87.3014 128.681 86.6052 126.618 85.9985H126.616L125.345 85.6284L125.339 85.6274L124.879 85.5103C120.12 84.4114 115.247 86.8452 113.981 91.2495L113.98 91.2515C113.771 91.9885 113.102 92.4663 112.373 92.4663C112.229 92.4663 112.08 92.4418 111.902 92.395C111.013 92.1364 110.502 91.2113 110.758 90.3218C112.553 84.1024 119.479 80.5019 126.246 82.3979V82.3989C126.649 82.512 127.094 82.639 127.565 82.7798L127.568 82.7808C128.475 83.0465 130.335 83.5912 132.112 83.9468C132.999 84.1241 133.889 84.2588 134.641 84.2837C135.016 84.2961 135.378 84.2822 135.696 84.2241C136.004 84.168 136.33 84.0598 136.585 83.8413L136.586 83.8423C136.719 83.7298 136.789 83.5846 136.828 83.4849C136.873 83.3704 136.905 83.2403 136.924 83.0981C136.963 82.8131 136.959 82.439 136.89 81.9604L136.887 81.936L136.881 81.9126L136.446 80.0894V80.0874L136.136 78.7632L136.09 78.5562L135.924 78.4253L135.608 78.1704C134.878 77.5656 134.178 76.8816 133.531 76.1147L133.282 75.8198L132.91 75.9272C130.553 76.6103 128.112 77.048 126.015 77.0112C123.896 76.9741 122.258 76.4567 121.334 75.3794C119.891 73.6966 119.402 71.364 119.621 68.7573L119.674 68.1304L119.044 68.1128C118.505 68.098 118.003 68.1126 117.561 68.1421L117.211 68.1655L117.062 68.4829C116.489 69.7028 115.604 70.3117 114.938 70.6167L114.671 70.7388L114.605 71.0249C113.952 73.8794 112.132 76.5636 109.653 77.1411C109.013 77.2903 108.063 77.3548 106.973 76.9175C105.951 76.5077 104.754 75.6368 103.555 73.8794L103.315 73.5161C101.012 69.9015 101.029 66.0017 103.294 62.7642L103.293 62.7632C103.422 62.5798 103.557 62.4004 103.695 62.229L103.858 62.0269L103.821 61.771C103.596 60.1908 103.676 58.2675 104.539 56.188C105.402 54.1083 107.063 51.8366 110.054 49.5815ZM141.967 73.2563C141.136 73.2554 140.366 73.3352 139.864 73.5522H139.863C139.717 73.6159 139.536 73.7078 139.375 73.8618C139.205 74.0249 139.088 74.2272 139.021 74.4692C138.899 74.9076 138.934 75.5009 139.065 76.3101L139.11 76.5845L139.35 76.7271C140.94 77.6708 142.512 78.1318 143.678 78.2622V78.2612L144.843 78.4028V78.4038C146.976 78.6691 148.441 78.7741 149.412 78.6597C149.902 78.602 150.331 78.482 150.668 78.2466C151.028 77.9949 151.227 77.6491 151.313 77.2593L151.315 77.2505L151.317 77.2407C151.336 77.144 151.382 76.9023 151.251 76.5815C151.133 76.2943 150.896 75.9995 150.508 75.6782H150.509C149.155 74.5554 146.9 73.8598 144.864 73.5181C143.832 73.3447 142.824 73.2573 141.967 73.2563ZM105 67.3013C104.841 68.5048 105.074 69.883 105.961 71.3892L106.147 71.6919C106.627 72.4466 107.098 72.9952 107.523 73.353C107.736 73.5317 107.951 73.6733 108.161 73.7661C108.363 73.8551 108.614 73.9214 108.873 73.8735L108.883 73.8726L108.892 73.8706C109.134 73.818 109.353 73.6885 109.537 73.5454C109.727 73.3978 109.911 73.2088 110.085 72.9937C110.433 72.563 110.764 71.991 111.019 71.3286L111.233 70.769L110.672 70.5581C109.011 69.9335 107.352 68.692 106.062 67.0161L105.188 65.8804L105 67.3013ZM122.945 69.062C122.806 70.7015 123.044 72.2157 123.874 73.186L123.922 73.2417L123.981 73.2837C124.28 73.496 124.693 73.5928 125.098 73.6411C125.524 73.692 126.036 73.6988 126.602 73.6685C127.735 73.6076 129.145 73.3947 130.647 73.0444L131.354 72.8794L131.055 72.2183C130.874 71.8205 130.7 71.4036 130.541 70.9761L130.387 70.5444C130.304 70.2953 130.233 70.0714 130.184 69.854L130.093 69.4546L129.688 69.397L126.772 68.9712H126.771C125.762 68.822 124.686 68.6656 123.616 68.5229L122.998 68.4399L122.945 69.062ZM134.084 70.7896C134.168 70.9726 134.28 71.1896 134.351 71.3374L134.59 71.8354L135.104 71.6343C135.481 71.4868 135.847 71.3255 136.196 71.1685L135.981 70.0308C135.547 70.0097 135.106 69.9817 134.673 69.9468L133.657 69.8647L134.084 70.7896ZM112.24 61.6343C111.025 61.3611 109.391 61.8319 108.016 62.7515L107.608 63.0229L107.797 63.4751C107.822 63.5343 107.848 63.5899 107.874 63.6401L107.944 63.7729C108.897 65.5603 110.388 66.7705 111.603 67.3188L112.047 67.519L112.331 67.1226C112.605 66.7404 112.921 66.407 113.297 66.1187L113.296 66.1177C113.507 65.9581 113.73 65.8154 113.977 65.6646L114.274 65.4819L114.261 65.1323C114.245 64.7489 114.19 64.3236 114.11 63.8501L114.109 63.8442C113.977 63.1043 113.718 62.5754 113.353 62.2114C112.988 61.8484 112.575 61.7067 112.249 61.6362H112.25C112.248 61.6359 112.247 61.6356 112.245 61.6353C112.244 61.635 112.242 61.6345 112.241 61.6343H112.24ZM136.837 61.9673C135.643 63.2542 134.631 64.4965 134.01 65.7085L133.605 66.4976L134.488 66.5737C136.645 66.76 138.768 66.8191 140.717 66.6147L141.559 66.5269L141.19 65.7642C140.534 64.4045 139.233 63.056 137.623 61.8901L137.196 61.5815L136.837 61.9673ZM130.675 59.2368C129.844 61.3675 127.798 63.0377 124.935 63.7554L124.629 63.8257L124.284 63.8901L124.174 64.2222C124.153 64.2832 124.127 64.349 124.09 64.438L123.795 65.145L124.553 65.2554C125.43 65.3837 126.327 65.5111 127.263 65.6528H127.265C128.083 65.7738 128.922 65.8944 129.76 66.0151L130.25 66.0864L130.409 65.6167C131.033 63.7738 132.251 62.0757 133.617 60.5132L134.173 59.8765L133.387 59.5669C133.154 59.4752 132.909 59.3789 132.656 59.2896H132.655C132.231 59.1384 131.813 58.9988 131.391 58.8804L130.871 58.7349L130.675 59.2368ZM120.075 49.8735C117.397 49.4681 114.633 50.3184 112.072 52.2515C109.661 54.065 108.064 56.0617 107.389 58.1558L107 59.3618L108.177 58.8911C109.793 58.2449 111.48 58.0482 112.968 58.3794C115.25 58.888 116.843 60.5494 117.364 63.0425L117.412 63.2866C117.467 63.6193 117.515 63.9401 117.549 64.2368L117.611 64.7876L118.165 64.7642C118.321 64.7577 118.485 64.7573 118.665 64.7573C119.078 64.7573 119.51 64.7714 119.959 64.7925L120.408 64.813L120.551 64.3862L120.801 63.6362L120.425 63.3833C119.859 63.0039 119.479 62.5036 119.267 61.979C118.529 60.1559 119.599 57.7814 122.429 56.1479L122.431 56.147C123.402 55.5827 124.559 55.2127 125.858 55.0435L126.079 55.0151L126.227 54.8491C126.27 54.8003 126.315 54.755 126.373 54.6968L126.738 54.3315L126.429 53.9194C124.739 51.6634 122.548 50.2487 120.076 49.8735H120.075ZM137.559 53.6538C135.622 53.0859 133.693 53.5344 131.973 54.5112L130.716 55.2241L132.11 55.603C132.669 55.7548 133.236 55.934 133.802 56.1411L133.805 56.1421C134.65 56.4469 135.461 56.7943 136.246 57.1763L136.634 57.3647L136.934 57.0552C137.642 56.3262 138.427 55.4791 138.807 54.8774L139.169 54.3052L138.555 54.02C138.331 53.9163 138.01 53.784 137.559 53.6538Z"
                      fill="#F7F7F7"
                      stroke="#272727"
                      stroke-width="1.19048"
                    />
                    <path
                      d="M169.817 110.243C172.666 109.259 175.376 109.106 177.573 110.405C179.707 111.664 180.984 113.314 181.453 115.201C181.924 117.097 181.601 119.319 180.365 121.754C174.73 132.841 170.075 136.834 154.357 150.278L154.356 150.279L148.199 155.563C138.883 163.577 132.991 167.692 128.396 169.929C123.829 172.152 120.524 172.53 116.304 173.009H116.303C115.84 173.062 115.363 173.115 114.87 173.173L113.343 173.365C107.744 174.112 105.311 174.098 94.9316 174.041C91.1604 174.02 86.3367 173.992 79.9004 173.992C66.2415 173.992 61.0831 179.274 60.916 179.465C60.8837 179.502 60.8523 179.533 60.8154 179.565L60.8086 179.571L60.8027 179.577L49.8789 189.733L49.8779 189.734C49.5531 190.038 49.1465 190.185 48.7363 190.185C48.2898 190.185 47.8398 190.006 47.5107 189.651L47.5078 189.648L47.3975 189.518C46.8816 188.842 46.9546 187.871 47.5918 187.283L47.5928 187.281L58.46 177.182L58.4814 177.16C59.2483 176.369 65.2423 170.65 79.8945 170.65C86.3341 170.65 91.1693 170.679 94.9404 170.7C105.312 170.757 107.512 170.773 112.886 170.049L112.885 170.048C113.962 169.906 114.944 169.795 115.912 169.673L115.913 169.674C119.846 169.229 122.979 168.876 127.339 166.702C131.669 164.543 137.193 160.598 145.992 153.028L145.993 153.027C148.222 151.104 150.265 149.357 152.155 147.737L152.156 147.738C167.242 134.833 171.725 131.004 176.856 121.208L177.355 120.241C178.332 118.326 178.503 116.851 178.086 115.676C177.673 114.513 176.735 113.797 175.864 113.28L175.863 113.279C174.613 112.542 172.772 112.731 170.746 113.459C168.677 114.203 166.239 115.571 163.653 117.467C161.736 118.864 159.368 120.734 156.812 122.777L154.201 124.869C145.511 131.85 135.752 139.678 128.876 142.979C123.628 145.497 116.245 146.052 108.79 145.673C102.285 145.342 95.7963 144.305 90.7607 143.302L88.6963 142.876C87.7894 142.682 87.2132 141.791 87.4072 140.884L87.4062 140.883C87.6003 139.986 88.4969 139.406 89.3994 139.594V139.595C97.8999 141.408 105.606 142.354 112.075 142.423C118.328 142.489 123.48 141.737 127.08 140.113L127.423 139.954C129.465 138.976 131.837 137.515 134.367 135.798L134.63 135.619L134.629 135.302C134.615 132.713 133.95 130.513 132.513 128.862L132.215 128.54C130.082 126.353 126.63 125.348 122.069 125.435L116.43 125.541H116.429C102.977 125.811 96.8987 125.921 89.3506 124.486H89.3516L88.2432 124.273H88.2441C84.1605 123.482 77.8045 122.247 71.1006 122.48C64.3954 122.714 57.2719 124.418 51.7051 129.569C40.7528 139.697 21.41 159.552 21.2188 159.75L21.2168 159.752C20.8968 160.087 20.46 160.257 20.0215 160.257C19.6055 160.257 19.1791 160.095 18.8516 159.778C18.1888 159.137 18.1744 158.078 18.8223 157.409L18.8232 157.408C19.0222 157.202 38.4177 137.297 49.4316 127.12V127.119C55.5609 121.448 63.1724 119.473 70.4004 119.142C76.7296 118.851 82.7237 119.822 87.1084 120.647L88.8848 120.988L89.9785 121.202H89.9814C96.3085 122.401 101.735 122.455 111.769 122.279L116.367 122.192L122.014 122.086L122.013 122.085C127.541 122.004 131.632 123.327 134.363 125.952L134.623 126.211C135.823 127.438 137.166 129.424 137.738 132.385L137.918 133.311L138.677 132.751C143.177 129.433 147.916 125.633 152.111 122.268H152.112C155.702 119.382 159.078 116.677 161.679 114.769C164.101 112.997 166.976 111.224 169.817 110.243Z"
                      fill="#F7F7F7"
                      stroke="#272727"
                      stroke-width="1.19048"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 max-w-sm md:max-w-lg lg:max-w-2xl">
                <h2 className="font-display font-medium text-xl md:text-2xl leading-tight md:leading-8 text-white mb-4 md:mb-6">
                  Problem Statement
                </h2>
                <div className="flex flex-col gap-3 md:gap-4">
                  <p className="font-open-sans font-normal text-base md:text-lg lg:text-xl leading-relaxed md:leading-8 text-[#B7B7B7]">
                    <span className="font-semibold text-white">
                      Amway Thailand&apos;s digital storefront posed serious
                      friction across key discovery and browsing journeys.
                    </span>
                    The existing experience suffered from{" "}
                    <span className="font-semibold text-white">
                      fragmented categorization, unintelligent search, and
                      inconsistent visual hierarchy{" "}
                    </span>{" "}
                    - making it difficult for customers to find the right
                    products and for business owners (ABOs) to support their
                    downlines effectively.{" "}
                    <span className="font-semibold text-white">
                      {" "}
                      Essential features{" "}
                    </span>{" "}
                    like wishlist, contextual filtering, or semantic recognition
                    were missing. Additionally,{" "}
                    <span className="font-semibold text-white">
                      backend-driven use cases{" "}
                    </span>{" "}
                    like stock availability and language-specific pricing lacked
                    proper front-end visibility, eroding user trust. A{" "}
                    <span className="font-semibold text-white">
                      unified, scalable, and role-aware UX solution
                    </span>
                    was urgently needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedWrapper>

      {/* Key UX Solutions Section */}
      <section className="w-full bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col gap-18">
            <AnimatedWrapper
              delay={0}
              duration={0.8}
              animationType="fadeInUp"
              distance={80}
            >
              <h3 className="font-display font-medium text-3xl leading-[43px] text-[#0C0C0C]">
                Key UX Solutions
              </h3>
            </AnimatedWrapper>

            {/* Solution 1: Semantic Search */}

            <AnimatedWrapper
              delay={0}
              duration={0.8}
              animationType="fadeInUp"
              distance={80}
            >
              {" "}
              <div className="flex flex-col lg:flex-row items-center gap-11">
                <div className="flex flex-col gap-6 w-full lg:w-[577px]">
                  <h4 className="font-open-sans font-semibold text-2xl leading-[33px] text-black">
                    Semantic Search with Smart Filters
                  </h4>
                  <p className="font-open-sans font-normal text-base leading-[22px] text-black">
                    Implemented a semantic search experience by configuring
                    backend logic to handle synonyms, spelling variations, and
                    user intent.
                  </p>
                  <p className="font-open-sans font-normal text-base leading-[22px] text-black">
                    On the frontend, I designed a responsive interface with:
                  </p>
                  <div className="font-open-sans font-normal text-base leading-[22px] text-black">
                    <ul className="list-disc list-inside space-y-4 ml-6">
                      <li>
                        <span className="font-semibold">Quick filters</span> in
                        the form of pill-shaped components on the search results
                        page (SRP) for popular categories.
                      </li>
                      <li>
                        <span className="font-semibold">Advanced filters</span>{" "}
                        supporting detailed refinement across categories,
                        solutions, and brands—structured to mimic intuitive
                        navigation.
                      </li>
                      <li>
                        <span className="font-semibold">Placeholder text</span>{" "}
                        in the search bar using market-recommended keywords to
                        help guide users from their first interaction.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="w-full lg:w-[547px] h-[550px] bg-[#F3FFE8] rounded-[20px] flex items-center justify-center">
                  <div className="w-full h-full rounded-[20px] flex items-center justify-center">
                    <span className="text-lg text-gray-600">
                      Auto Complete Image
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper
              delay={0}
              duration={0.8}
              animationType="fadeInUp"
              distance={80}
            >
              {/* Solution 2: Product Pages */}
              <div className="flex flex-col lg:flex-row items-center gap-11">
                <div className="w-full lg:w-[517px] h-[562px] bg-[#F7ECFC] rounded-[16px] flex items-center justify-center gap-9 p-8">
                  <div className="w-[207px] h-[495px] rounded-lg flex items-center justify-center">
                    <span className="text-sm text-gray-600">PDP</span>
                  </div>
                  <div className="w-[212px] h-[499px] rounded-lg flex items-center justify-center">
                    <span className="text-sm text-gray-600">PLP</span>
                  </div>
                </div>

                <div className="flex flex-col gap-6 w-full lg:w-[607px]">
                  <h4 className="font-open-sans font-semibold text-2xl leading-[33px] text-black">
                    Redesigned Product Listing & Detail Pages (PLP/PDP)
                  </h4>
                  <p className="font-open-sans font-normal text-base leading-[22px] text-black">
                    Enhanced the card UX for PLPs to improve visual clarity,
                    product comparison, and CTA visibility.
                  </p>
                  <p className="font-open-sans font-normal text-base leading-[22px] text-black">
                    Key design improvements:
                  </p>

                  <div className="font-open-sans font-normal text-base leading-[22px] text-black">
                    <ul className="list-disc list-inside space-y-4 ml-6">
                      <li>
                        <span className="font-semibold">
                          Optimized card density{" "}
                        </span>{" "}
                        to show more products per fold.
                      </li>
                      <li>
                        Applied{" "}
                        <span className="font-semibold">
                          {" "}
                          accessibility standards{" "}
                        </span>{" "}
                        (contrast, spacing, and hierarchy).
                      </li>
                      <li>
                        {" "}
                        Supported{" "}
                        <span className="font-semibold">
                          {" "}
                          stock-unavailable{" "}
                        </span>
                        scenarios with meaningful messaging and visual cues.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper
              delay={0}
              duration={0.8}
              animationType="fadeInUp"
              distance={80}
            >
              {/* Solution 3: Categorization */}
              <div className="flex flex-col lg:flex-row items-center gap-11">
                <div className="flex flex-col gap-6 w-full lg:w-[345px]">
                  <h4 className="font-open-sans font-semibold text-2xl leading-[33px] text-black">
                    Solution-Based Categorization for Navigation
                  </h4>
                  <p className="font-open-sans font-normal text-base leading-[22px] text-black">
                    Replaced the traditional product hierarchy with
                    user-centered categories aligned to user goals (e.g.,
                    &quot;Anti-Ageing&quot; vs. &quot;Serums&quot;). This made
                    navigation faster for new customers and easier for ABOs to
                    guide their downlines.
                  </p>
                </div>

                <div className="w-full lg:w-[779px] h-[562px] bg-[#FFF2D9] rounded-[16px] flex items-center justify-center">
                  <div className="w-full h-full rounded-[16px] flex items-center justify-center">
                    <span className="text-lg text-gray-600">
                      Categorization Image
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>

            {/* Solution 4: Backend-Driven UX */}
            <AnimatedWrapper
              delay={0}
              duration={0.8}
              animationType="fadeInUp"
              distance={80}
            >
              <div className="flex flex-col lg:flex-row items-center gap-11">
                <div className="w-full lg:w-[779px] h-[562px] bg-[#E8F3FA] rounded-[21px] flex items-center justify-center">
                  <div className="w-full h-full rounded-[21px] flex items-center justify-center">
                    <span className="text-lg text-gray-600">
                      Backend UX Image
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-6 w-full lg:w-[345px]">
                  <h4 className="font-open-sans font-semibold text-2xl leading-[33px] text-black">
                    Backend-Driven UX Edge Case Handling
                  </h4>
                  <p className="font-open-sans font-normal text-base leading-[22px] text-black">
                    Collaborated with backend teams to design for real-world
                    scenarios like:
                  </p>
                  <p className="font-open-sans font-normal text-base leading-[22px] text-black">
                    <ul className="list-disc list-inside space-y-4 ml-6">
                      <li>
                        Dynamic stock status (in stock, out of stock, limited
                        stock)
                      </li>
                      <li>Semantic search set up</li>
                      <li>
                        Back Office configuration support without breaking UX
                      </li>
                    </ul>
                  </p>
                  <p className="font-open-sans font-normal text-base leading-[22px] text-black">
                    The frontend was structured to adapt based on these backend
                    inputs without degrading user experience.
                  </p>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </section>

      <Outcomes />

      <KeyLearning />
    </Layout>
  );
}
