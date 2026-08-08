import Image from "next/image";
import { AnimatedWrapper } from "../ui";

export default function OutsideWork() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Header */}
        <AnimatedWrapper
          delay={0}
          duration={0.8}
          animationType="fadeInUp"
          distance={80}
        >
          <h2 className="mb-8 font-display text-[28px] font-medium leading-tight text-[#222222] md:mb-10 md:text-[32px] lg:text-[40px] xl:text-[48px]">
            Outside Work? I&apos;m Probably...
          </h2>
        </AnimatedWrapper>

        {/* Activities Grid */}
        <AnimatedWrapper
          delay={0}
          duration={0.8}
          animationType="fadeInUp"
          distance={80}
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-8">
            {/* Planning a trip */}
            <article className="group flex flex-col rounded-[26px] bg-[#f1f1f1] px-2.5 pt-4 pb-8 md:px-3 md:pt-2.5 md:pb-6 lg:px-4 lg:pt-4 lg:pb-8">
              <div className="aspect-[3/2] overflow-hidden rounded-2xl">
                <Image
                  src="/images/about/trip_planning.svg"
                  alt="Travel planning essentials spread across a map"
                  width={700}
                  height={440}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-2.5 font-open-sans text-[15px] leading-[1.35] text-[#303030] md:mt-3 md:text-base lg:mt-3 lg:text-lg">
                Planning a trip (with too many Pinterest tabs open)
              </h3>
            </article>

            {/* Singing or strumming */}
            <article className="group flex flex-col rounded-[26px] bg-[#f1f1f1] px-2.5 pt-4 pb-8 md:px-3 md:pt-2.5 md:pb-6 lg:px-4 lg:pt-4 lg:pb-8">
              <div className="aspect-[3/2] overflow-hidden rounded-2xl">
                <Image
                  src="/images/about/guitar.svg"
                  alt="A person playing an acoustic guitar"
                  width={900}
                  height={506}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-2.5 font-open-sans text-[15px] leading-[1.35] text-[#303030] md:mt-3 md:text-base lg:mt-3 lg:text-lg">
                Singing or strumming my guitar/ukulele
              </h3>
            </article>

            {/* Cooking */}
            <article className="group flex flex-col rounded-[26px] bg-[#f1f1f1] px-2.5 pt-4 pb-8 md:px-3 md:pt-2.5 md:pb-6 lg:px-4 lg:pt-4 lg:pb-8">
              <div className="aspect-[3/2] overflow-hidden rounded-2xl">
                <Image
                  src="/images/about/cook.svg"
                  alt="A colourful homemade meal"
                  width={1000}
                  height={500}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-2.5 font-open-sans text-[15px] leading-[1.35] text-[#303030] md:mt-3 md:text-base lg:mt-3 lg:text-lg">
                Whipping up something healthy-ish in the kitchen
              </h3>
            </article>

            {/* Gym */}
            <article className="group flex flex-col rounded-[26px] bg-[#f1f1f1] px-2.5 pt-4 pb-8 md:px-3 md:pt-2.5 md:pb-6 lg:px-4 lg:pt-4 lg:pb-8">
              <div className="aspect-[3/2] overflow-hidden rounded-2xl">
                <Image
                  src="/images/about/gym.svg"
                  alt="Gym weights"
                  width={700}
                  height={350}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-2.5 font-open-sans text-[15px] leading-[1.35] text-[#303030] md:mt-3 md:text-base lg:mt-3 lg:text-lg">
                Showing up at the gym - for both strength & sanity
              </h3>
            </article>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
