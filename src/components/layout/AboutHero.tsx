import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 lg:gap-16">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight font-normal text-gray-800">
              Design is more than just moving pixels
            </h1>

            <p className="font-open-sans text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-800 max-w-2xl">
              I believe design sits at the intersection of{" "}
              <span className="font-bold">empathy and impact</span> - listening
              to users, understanding business goals, and bridging the gap
              between the two with clarity and purpose.
            </p>

            <div className="border-l-4 border-gray-300 pl-6">
              <p className="font-open-sans text-md md:text-lg italic text-gray-600 leading-relaxed">
                "I'll show you every version of design I can think of." [swiftie
                coded]
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[484px] lg:h-[484px]">
              <Image
                src="/images/about/about_hero.svg"
                alt="Jashvi Sudra - UX Designer"
                fill
                className="object-cover rounded-lg"
                priority
                sizes="(min-width: 1024px) 484px, (min-width: 768px) 384px, 320px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
