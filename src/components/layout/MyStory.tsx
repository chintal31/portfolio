import Image from "next/image";

export default function MyStory() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mb-12">
          <span className="font-open-sans text-lg md:text-xl uppercase tracking-wide text-gray-500 mb-4 block">
            my story
          </span>
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal text-black mb-4">
              Design Found Me
            </h2>
            <p className="font-display text-lg md:text-xl italic text-black">
              Like Music Did - Naturally.
            </p>
          </div>
          <div className="border-l-4 border-gray-300 pl-6">
            <p className="font-open-sans text-lg md:text-xl italic text-gray-600 leading-relaxed">
              "I didn't study UX. But when I stumbled into it, something just
              clicked."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Text Content */}
          <div className="space-y-12">
            {/* Learning Phase */}
            <div className="space-y-4">
              <h3 className="font-open-sans text-xl md:text-2xl font-semibold text-black">
                The learning phase
              </h3>
              <p className="font-open-sans text-lg md:text-xl leading-relaxed text-black">
                The way I connected the dots, the way I noticed friction, the
                way I wanted things to feel - it all came instinctively. Much
                like the first time I picked up a guitar or started singing as a
                kid, I didn't need a classroom to tell me this felt right. It
                just made sense. I taught myself the craft - from wireframes and
                user flows to research plans and stakeholder maps. I asked
                questions, got my hands dirty, and built my confidence one
                experience at a time.
              </p>
            </div>

            {/* Present Role */}
            <div className="space-y-4">
              <h3 className="font-open-sans text-xl md:text-2xl font-semibold text-black">
                The present role
              </h3>
              <p className="font-open-sans text-lg md:text-xl leading-relaxed text-black">
                Today, nearly five years later, I lead UX at a product level -
                speaking up for users, aligning with business needs, and
                designing with both empathy and clarity.
              </p>
            </div>

            {/* Final Quote */}
            <div className="border-l-4 border-gray-300 pl-6">
              <p className="font-open-sans text-lg md:text-xl italic text-gray-600 leading-relaxed">
                "It wasn't a conventional journey. But it was mine. And it began
                the same way my love for music did - with curiosity, feeling,
                and an undeniable pull to create."
              </p>
            </div>
          </div>

          {/* Right: Visual Elements */}
          <div className="relative">
            <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] bg-gray-100 rounded-3xl overflow-hidden">
              {/* Dashed border */}
              <div className="absolute inset-4 border-2 border-dashed border-gray-400 rounded-2xl"></div>

              {/* Image cards */}
              <div className="absolute top-10 left-7 w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40">
                <div className="w-full h-full bg-gray-200 rounded-xl transform rotate-12"></div>
                <div className="absolute -bottom-4 left-0 right-0 text-center">
                  <h4 className="font-open-sans text-lg md:text-xl font-semibold text-black">
                    ABC
                  </h4>
                  <p className="font-open-sans text-sm md:text-base text-black">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
              </div>

              <div className="absolute top-48 left-16 w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40">
                <div className="w-full h-full bg-gray-200 rounded-xl transform -rotate-6"></div>
                <div className="absolute -bottom-4 left-0 right-0 text-center">
                  <h4 className="font-open-sans text-lg md:text-xl font-semibold text-black">
                    ABC
                  </h4>
                  <p className="font-open-sans text-sm md:text-base text-black">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
              </div>

              <div className="absolute bottom-20 left-16 w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40">
                <div className="w-full h-full bg-gray-200 rounded-xl transform rotate-12"></div>
                <div className="absolute -bottom-4 left-0 right-0 text-center">
                  <h4 className="font-open-sans text-lg md:text-xl font-semibold text-black">
                    ABC
                  </h4>
                  <p className="font-open-sans text-sm md:text-base text-black">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
