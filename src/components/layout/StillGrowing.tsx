import { AnimatedWrapper } from "../ui";

export default function StillGrowing() {
  return (
    <AnimatedWrapper
      delay={0}
      duration={0.8}
      animationType="fadeInUp"
      distance={80}
    >
      <section className="w-full bg-[#F2F8FF] py-11 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col gap-8 lg:gap-10">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800">
              Still Growing, Still Curious
            </h2>
            <p className="font-open-sans font-normal text-base leading-6 text-[#393939] sm:text-lg sm:leading-7 md:text-xl md:leading-8 lg:text-2xl lg:leading-9 max-w-4xl ">
              I&apos;ve come a long way. But I know I&apos;ve only just begun. I
              dream of taking my skills global - to live and work across
              cultures, to challenge what I know, and to prove time and again
              how valuable good design truly is. Because great design is not
              just beautiful - it&apos;s brave. And I&apos;m here for all of it.
            </p>
          </div>
        </div>
      </section>
    </AnimatedWrapper>
  );
}
