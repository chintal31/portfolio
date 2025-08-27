import Image from "next/image";
import { AnimatedWrapper } from "../ui";

export default function OutsideWork() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Header */}
        <AnimatedWrapper
          delay={0}
          duration={0.8}
          animationType="fadeInUp"
          distance={80}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 mb-12">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Planning a trip */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-[200px] aspect-square rounded-2xl mb-5 overflow-hidden">
                <Image
                  src="/images/about/trip_planning.svg"
                  alt="trip"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-lg md:text-xl font-normal text-gray-800 max-w-[250px]">
                Planning a trip (with too many Pinterest tabs open)
              </h3>
            </div>

            {/* Singing or strumming */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-[200px] aspect-square rounded-2xl mb-5 overflow-hidden">
                <Image
                  src="/images/about/guitar.svg"
                  alt="trip"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-lg md:text-xl font-normal text-gray-800 max-w-[250px]">
                Singing or strumming my guitar/ukulele
              </h3>
            </div>

            {/* Cooking */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-[200px] aspect-square rounded-2xl mb-5 overflow-hidden">
                <Image
                  src="/images/about/cook.svg"
                  alt="trip"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-lg md:text-xl font-normal text-gray-800 max-w-[250px]">
                Whipping up something healthy-ish in the kitchen
              </h3>
            </div>

            {/* Gym */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-[200px] aspect-square rounded-2xl mb-5 overflow-hidden">
                <Image
                  src="/images/about/gym.svg"
                  alt="trip"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-lg md:text-xl font-normal text-gray-800 max-w-[250px]">
                Showing up at the gym - for both strength & sanity
              </h3>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
