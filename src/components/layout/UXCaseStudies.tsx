import Image from 'next/image';

interface CaseStudyCardProps {
  title: string;
  backgroundColor: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

function CaseStudyCard({ title, backgroundColor, imageSrc, imageAlt, className = '' }: CaseStudyCardProps) {
  return (
    <div className={`flex flex-col gap-8 w-full ${className}`}>
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
                // sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        )}
      </div>
      <h3 className="font-display font-normal text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.3] text-[#222222]">
        {title}
      </h3>
    </div>
  );
}

export default function UXCaseStudies() {
  const caseStudies = [
    {
      title: "UX Strategy for AI-Powered Media Intelligence",
      backgroundColor: "#DAF3FF",
      imageSrc: "/images/newsverse.png", // TODO: image is blurred
      imageAlt: "AI Media Intelligence Interface"
    },
    {
      title: "Improving Amway's Product Discovery",
      backgroundColor: "#FFDEBD",
      imageSrc: "",
      imageAlt: "Amway Product Discovery"
    },
    {
      title: "Unifying Lennar Associates' Employee Portal",
      backgroundColor: "#E4CFFF",
      imageSrc: "",
      imageAlt: "Lennar Employee Portal"
    },
    {
      title: "Gamifying the Sustainability for Individuals",
      backgroundColor: "#CFFFC1",
      imageSrc: "", 
      imageAlt: "Sustainability Gamification"
    }
  ];

  return (
    <section className="bg-[#FCFCFC] border-t border-[#EBEBEB] py-16 px-4 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-display font-medium text-[clamp(2rem,6vw,3rem)] leading-[1.3] text-[#222222]">
            UX Case Studies
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-16 md:space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14">
            <CaseStudyCard
              title={caseStudies[0].title}
              backgroundColor={caseStudies[0].backgroundColor}
              imageSrc={caseStudies[0].imageSrc}
              imageAlt={caseStudies[0].imageAlt}
            />
            <CaseStudyCard
              title={caseStudies[1].title}
              backgroundColor={caseStudies[1].backgroundColor}
              imageSrc={caseStudies[1].imageSrc}
              imageAlt={caseStudies[1].imageAlt}
            />
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14">
            <CaseStudyCard
              title={caseStudies[2].title}
              backgroundColor={caseStudies[2].backgroundColor}
              imageSrc={caseStudies[2].imageSrc}
              imageAlt={caseStudies[2].imageAlt}
            />
            <CaseStudyCard
              title={caseStudies[3].title}
              backgroundColor={caseStudies[3].backgroundColor}
              imageSrc={caseStudies[3].imageSrc}
              imageAlt={caseStudies[3].imageAlt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
