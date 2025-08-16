import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  const caseStudies = [
    {
      title: "UX Strategy for AI-Powered Media Intelligence",
      subtitle: "Newsverse",
      description:
        "A comprehensive UX strategy for an AI-powered media intelligence platform, focusing on user experience optimization and interface design.",
      backgroundColor: "#DAF3FF",
      imageSrc: "/images/newsverse.png",
      imageAlt: "AI Media Intelligence Interface",
      href: "/newsverse",
      tags: ["UX Strategy", "AI", "Media Intelligence"],
      isExternal: false,
    },
    {
      title: "Improving Amway's Product Discovery",
      subtitle: "Amway Thailand",
      description:
        "Redesigned Amway Thailand's product discovery journey across Search, Product Pages, and Navigation to improve user experience.",
      backgroundColor: "#FFDEBD",
      imageSrc: "/images/amway-hero.png",
      imageAlt: "Amway Product Discovery",
      href: "/amway",
      tags: ["Product Discovery", "E-commerce", "UX Redesign"],
      isExternal: false,
    },
    {
      title: "Unifying Lennar Associates' Employee Portal",
      subtitle: "Lennar",
      description:
        "Streamlined employee portal design to improve workflow efficiency and user satisfaction across different departments.",
      backgroundColor: "#E4CFFF",
      imageSrc: "",
      imageAlt: "Lennar Employee Portal",
      href: "https://www.behance.net/gallery/123456789/Lennar-Employee-Portal",
      tags: ["Employee Portal", "Workflow", "UX Design"],
      isExternal: true,
    },
    {
      title: "Gamifying Sustainability for Individuals",
      subtitle: "Sustainability App",
      description:
        "Interactive gamification design to encourage sustainable practices and environmental consciousness among individuals.",
      backgroundColor: "#CFFFC1",
      imageSrc: "",
      imageAlt: "Sustainability Gamification",
      href: "https://www.behance.net/gallery/123456789/Sustainability-Gamification",
      tags: ["Gamification", "Sustainability", "Mobile App"],
      isExternal: true,
    },
  ];

  return (
    <Layout
      seo={{
        title: "Work - UX/UI Case Studies",
        description:
          "Explore my UX/UI design case studies and projects across various industries and domains.",
      }}
    >
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display font-medium text-[clamp(2.5rem,8vw,4rem)] leading-[1.2] text-[#222222] mb-6">
              My Work
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              A collection of UX/UI design case studies and projects that
              showcase my approach to solving complex design challenges across
              different industries.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-[#FCFCFC] border-t border-[#EBEBEB] py-16 px-4 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h2 className="font-display font-medium text-[clamp(2rem,6vw,3rem)] leading-[1.3] text-[#222222]">
              Case Studies
            </h2>
          </div>

          {/* Case Studies Grid */}
          <div className="space-y-16 md:space-y-20">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14">
              {caseStudies.slice(0, 2).map((study, index) => (
                <div key={index} className="block group">
                  {study.isExternal ? (
                    <a
                      href={study.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="flex flex-col gap-6 w-full cursor-pointer transition-transform duration-300 group-hover:scale-[1.02]">
                        <div
                          className="w-full h-[330px] rounded-[20px] relative overflow-hidden"
                          style={{ backgroundColor: study.backgroundColor }}
                        >
                          {study.imageSrc && (
                            <div className="absolute inset-0 pl-15 pt-15">
                              <div className="relative w-full h-full">
                                <Image
                                  src={study.imageSrc}
                                  alt={study.imageAlt}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                              {study.subtitle}
                            </span>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                              Behance
                            </span>
                          </div>
                          <h3 className="font-display font-normal text-[clamp(1.5rem,4vw,2rem)] leading-[1.3] text-[#222222] group-hover:text-blue-600 transition-colors">
                            {study.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {study.description}
                          </p>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {study.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <Link href={study.href} className="block">
                      <div className="flex flex-col gap-6 w-full cursor-pointer transition-transform duration-300 group-hover:scale-[1.02]">
                        <div
                          className="w-full h-[330px] rounded-[20px] relative overflow-hidden"
                          style={{ backgroundColor: study.backgroundColor }}
                        >
                          {study.imageSrc && (
                            <div className="absolute inset-0 pl-15 pt-15">
                              <div className="relative w-full h-full">
                                <Image
                                  src={study.imageSrc}
                                  alt={study.imageAlt}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                              {study.subtitle}
                            </span>
                          </div>
                          <h3 className="font-display font-normal text-[clamp(1.5rem,4vw,2rem)] leading-[1.3] text-[#222222] group-hover:text-blue-600 transition-colors">
                            {study.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {study.description}
                          </p>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {study.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14">
              {caseStudies.slice(2, 4).map((study, index) => (
                <div key={index + 2} className="block group">
                  {study.isExternal ? (
                    <a
                      href={study.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="flex flex-col gap-6 w-full cursor-pointer transition-transform duration-300 group-hover:scale-[1.02]">
                        <div
                          className="w-full h-[330px] rounded-[20px] relative overflow-hidden"
                          style={{ backgroundColor: study.backgroundColor }}
                        >
                          {study.imageSrc && (
                            <div className="absolute inset-0 pl-15 pt-15">
                              <div className="relative w-full h-full">
                                <Image
                                  src={study.imageSrc}
                                  alt={study.imageAlt}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                              {study.subtitle}
                            </span>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                              Behance
                            </span>
                          </div>
                          <h3 className="font-display font-normal text-[clamp(1.5rem,4vw,2rem)] leading-[1.3] text-[#222222] group-hover:text-blue-600 transition-colors">
                            {study.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {study.description}
                          </p>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {study.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <Link href={study.href} className="block">
                      <div className="flex flex-col gap-6 w-full cursor-pointer transition-transform duration-300 group-hover:scale-[1.02]">
                        <div
                          className="w-full h-[330px] rounded-[20px] relative overflow-hidden"
                          style={{ backgroundColor: study.backgroundColor }}
                        >
                          {study.imageSrc && (
                            <div className="absolute inset-0 pl-15 pt-15">
                              <div className="relative w-full h-full">
                                <Image
                                  src={study.imageSrc}
                                  alt={study.imageAlt}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                              {study.subtitle}
                            </span>
                          </div>
                          <h3 className="font-display font-normal text-[clamp(1.5rem,4vw,2rem)] leading-[1.3] text-[#222222] group-hover:text-blue-600 transition-colors">
                            {study.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {study.description}
                          </p>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {study.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
