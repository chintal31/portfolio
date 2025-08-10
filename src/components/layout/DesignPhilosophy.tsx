export default function DesignPhilosophy() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden flex flex-col items-center justify-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col items-start gap-8 sm:gap-10 w-full">
          {/* Text Content */}
          <div className="flex flex-col gap-5 sm:gap-6 max-w-4xl">
            {/* Main Heading */}
            <h2 className="font-display font-normal text-[clamp(1.25rem,3vw,2rem)] sm:text-[clamp(1.75rem,4vw,2.5rem)] md:text-[clamp(2.25rem,5vw,3rem)] lg:text-[clamp(2.75rem,6vw,3.5rem)] xl:text-[clamp(3rem,7vw,4rem)] leading-[1.1] text-[#272727] whitespace-nowrap">
              Design is more than moving Pixels
            </h2>
            
            {/* Description */}
            <p className="font-display font-normal text-[clamp(0.75rem,1.8vw,1rem)] leading-[1.35] text-[#272727] max-w-4xl">
              I believe design sits at the intersection of <span className="font-bold">empathy and impact</span> - listening to users, understanding business goals, and bridging the gap between the two with clarity and purpose.
            </p>
          </div>

          {/* Black Box with Centered Text */}
          <div className="w-full bg-black rounded-[20px] p-8 sm:p-12 md:p-16 flex items-center justify-center" style={{ aspectRatio: '1280/511' }}>
            <div className="text-center max-w-4xl">
              <div className="font-open-sans font-semibold text-[clamp(0.875rem,2vw,1.25rem)] sm:text-[clamp(1rem,2.5vw,1.5rem)] md:text-[clamp(1.25rem,3vw,1.75rem)] lg:text-[clamp(1.5rem,3.5vw,2rem)] leading-[1.35] text-white">
                <div className="whitespace-nowrap">Design is strategy. It's storytelling.</div>
                <div className="mt-2">It's what brings meaning to digital experiences.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
