interface DesignJourneyProps {
  heading: string;
  paragraphs: string[];
}

export default function DesignJourney({
  heading,
  paragraphs,
}: DesignJourneyProps) {
  const descriptionTextClass =
    "flex flex-col gap-0 sm:gap-0 w-full font-open-sans font-normal text-[clamp(0.625rem,1.5vw,0.75rem)] sm:text-[clamp(0.875rem,2vw,1rem)] md:text-[clamp(1rem,2.25vw,1.125rem)] lg:text-[clamp(1.125rem,2.5vw,1.25rem)] xl:text-[clamp(1.25rem,3vw,1.375rem)] leading-[1.35] text-black max-w-6xl";
  const headerTextClass =
    "font-display font-normal text-[clamp(1rem,2.25vw,1.5rem)] sm:text-[clamp(1.25rem,3vw,1.875rem)] md:text-[clamp(1.75rem,3.75vw,2.25rem)] lg:text-[clamp(2rem,4.5vw,2.625rem)] xl:text-[clamp(2.25rem,5.25vw,3rem)] leading-[1.1] text-[#272727] max-w-5xl";

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col items-start gap-8 sm:gap-10 w-full">
          {/* Main Content Container */}
          <div className="flex flex-col items-start gap-5 sm:gap-6 w-full">
            {/* Main Heading */}
            <h3 className={headerTextClass}>{heading}</h3>

            {/* Description Text */}
            {paragraphs.map((paragraph, index) => (
              <div key={index} className={descriptionTextClass}>
                {paragraph.split("\n").map((line, lineIndex) => (
                  <div key={lineIndex}>{line}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
