import { AnimatedWrapper } from "../ui";

export default function Experience() {
  return (
    <AnimatedWrapper
      delay={0}
      duration={0.8}
      animationType="scaleIn"
      distance={80}
    >
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          {/* Header */}
          <div className="mb-12">
            <span className="font-open-sans text-lg md:text-xl uppercase tracking-wide text-gray-500 mb-2 block">
              MY Experience
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal text-black mb-6">
              From Self Taught to UX Lead
            </h2>
            <p className="font-open-sans text-lg md:text-xl text-gray-800 max-w-5xl">
              I taught myself the craft - from wireframes and flows to research,
              strategy, and product thinking. I asked a lot of questions. Got my
              hands dirty. Made mistakes. Grew stronger.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="space-y-6">
            {/* UX Lead */}
            <div className="bg-[#F4F7FF] rounded-xl p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center text-[#1A6FC5]">
                <div className="text-center md:text-left">
                  <h3 className="font-open-sans text-xs md:text-lg lg:text-xl font-semibold ">
                    UX Lead
                  </h3>
                </div>
                <div className="text-center">
                  <h4 className="font-open-sans text-xs md:text-lg lg:text-xl font-semibold">
                    Locobuzz Solutions Pvt. Ltd.
                  </h4>
                </div>
                <div className="text-center md:text-right">
                  <span className="font-open-sans text-xs md:text-lg lg:text-xl font-semibold">
                    2024 - Present
                  </span>
                </div>
              </div>
            </div>

            {/* Manager - UX Design */}
            <div className="bg-gray-50 rounded-xl p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center">
                <div className="text-center md:text-left">
                  <h3 className="font-open-sans text-sm sm:text-base md:text-lg lg:text-xl text-gray-800">
                    Manager - UX Design
                  </h3>
                </div>
                <div className="text-center">
                  <h4 className="font-open-sans text-sm sm:text-base md:text-lg lg:text-xl text-gray-800">
                    RBL Bank Ltd.
                  </h4>
                </div>
                <div className="text-center md:text-right">
                  <span className="font-open-sans text-sm sm:text-base md:text-lg lg:text-xl text-gray-800">
                    2024 - 2024
                  </span>
                </div>
              </div>
            </div>

            {/* Product Experience Designer */}
            <div className="bg-gray-50 rounded-xl p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center">
                <div className="text-center md:text-left">
                  <h3 className="font-open-sans text-sm sm:text-base md:text-lg lg:text-xl text-gray-800">
                    Product Experience Designer
                  </h3>
                </div>
                <div className="text-center">
                  <h4 className="font-open-sans text-sm sm:text-base md:text-lg lg:text-xl text-gray-800">
                    Mindstix Software Pvt. Ltd.
                  </h4>
                </div>
                <div className="text-center md:text-right">
                  <span className="font-open-sans text-sm sm:text-base md:text-lg lg:text-xl text-gray-800">
                    2021 - 2024
                  </span>
                </div>
              </div>
            </div>

            {/* UX/UI Designer */}
            <div className="bg-gray-50 rounded-xl p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center">
                <div className="text-center md:text-left">
                  <h3 className="font-open-sans text-sm sm:text-base md:text-lg lg:text-xl text-gray-800">
                    UX/UI Designer
                  </h3>
                </div>
                <div className="text-center">
                  <h4 className="font-open-sans text-sm sm:text-base md:text-lg lg:text-xl text-gray-800">
                    Boho Procures Pvt. Ltd.
                  </h4>
                </div>
                <div className="text-center md:text-right">
                  <span className="font-open-sans text-sm sm:text-base md:text-lg lg:text-xl text-gray-800">
                    2019-2020
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedWrapper>
  );
}
