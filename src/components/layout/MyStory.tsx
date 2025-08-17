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
              &quot;I didn&apos;t study UX. But when I stumbled into it,
              something just clicked.&quot;
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
                kid, I didn&apos;t need a classroom to tell me this felt right.
                It just made sense. I taught myself the craft - from wireframes
                and user flows to research plans and stakeholder maps. I asked
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
                &quot;It wasn&apos;t a conventional journey. But it was mine.
                And it began the same way my love for music did - with
                curiosity, feeling, and an undeniable pull to create.&quot;
              </p>
            </div>
          </div>

          {/* Right: Visual Elements */}
          <div className="relative">
            <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] rounded-3xl overflow-hidden">
              {/* Dashed curved path - positioned based on Figma */}
              <svg
                width="75%"
                height="70%"
                className="absolute inset-0 m-auto"
                viewBox="0 0 359 458"
                preserveAspectRatio="xMidYMid meet"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.32032 1C20.4231 32.5171 70.2648 94.115 172.809 88.3701C275.353 82.6252 317.126 113.504 325.194 129.661C367.921 203.268 402.762 352.276 200.315 359.457C-2.13211 366.638 -12.0344 427.478 8.32032 457"
                  stroke="#727272"
                  stroke-dasharray="6 6"
                />
              </svg>

              {/* First Image Card - Top Left */}
              <div className="absolute">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                  {/* Image */}
                  <div className="relative">
                    <img
                      src="/images/about/abc.jpg"
                      alt="ABC - Learning Journey"
                      className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl object-cover transform rotate-12 shadow-lg"
                    />
                  </div>
                  {/* Text Content */}
                  <div className="text-center md:text-left max-w-[200px] md:max-w-[250px] lg:max-w-[300px]">
                    <h4 className="font-open-sans text-lg md:text-xl font-semibold text-black mb-2">
                      UX/UI Designer
                    </h4>
                    <p className="font-open-sans text-sm md:text-base text-gray-700 leading-relaxed">
                      The beginning of my design journey - where curiosity met
                      creativity
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Image Card - Middle */}
              <div className="absolute top-48 md:top-56 lg:top-64 left-8 md:left-10 lg:left-12">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                  {/* Text Content */}
                  <div className="text-center md:text-left max-w-[200px] md:max-w-[250px] lg:max-w-[300px] order-2 md:order-1">
                    <h4 className="font-open-sans text-lg md:text-xl font-semibold text-black mb-2">
                      Product Designer
                    </h4>
                    <p className="font-open-sans text-sm md:text-base text-gray-700 leading-relaxed">
                      Growth through challenges - every obstacle became a
                      stepping stone
                    </p>
                  </div>
                  {/* Image */}
                  <div className="relative order-1 md:order-2">
                    <img
                      src="/images/about/efg.jpg"
                      alt="EFG - Growth Journey"
                      className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl object-cover transform -rotate-6 shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Third Image Card - Bottom */}
              <div className="absolute bottom-16 md:bottom-20 lg:bottom-24 left-8 md:left-12 lg:left-16">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                  {/* Image */}
                  <div className="relative">
                    <img
                      src="/images/about/xyz.jpg"
                      alt="XYZ - Current State"
                      className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl object-cover transform rotate-12 shadow-lg"
                    />
                  </div>
                  {/* Text Content */}
                  <div className="text-center md:text-left max-w-[200px] md:max-w-[250px] lg:max-w-[300px]">
                    <h4 className="font-open-sans text-lg md:text-xl font-semibold text-black mb-2">
                      UX Lead
                    </h4>
                    <p className="font-open-sans text-sm md:text-base text-gray-700 leading-relaxed">
                      Where I stand today - leading UX with confidence and
                      clarity
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional decorative elements */}
              <div className="absolute top-1/2 right-4 w-2 h-2 bg-gray-300 rounded-full opacity-60"></div>
              <div className="absolute bottom-1/3 right-8 w-1 h-1 bg-gray-400 rounded-full opacity-40"></div>
              <div className="absolute top-1/3 right-12 w-1.5 h-1.5 bg-gray-300 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
