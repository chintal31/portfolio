import Image from "next/image";
import { AnimatedWrapper } from "../ui";

export default function MyStory() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Header */}

        <div className="mb-12">
          <AnimatedWrapper
            delay={0}
            duration={0.8}
            animationType="fadeInUp"
            distance={80}
          >
            <span className="font-open-sans text-lg md:text-xl uppercase tracking-wide text-gray-500 mb-4 block">
              my story
            </span>
          </AnimatedWrapper>

          <div className="mb-12">
            <AnimatedWrapper
              delay={0}
              duration={0.8}
              animationType="fadeInUp"
              distance={80}
            >
              {" "}
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal text-black mb-4">
                Design Found Me
              </h2>
            </AnimatedWrapper>
            <AnimatedWrapper
              delay={0}
              duration={0.8}
              animationType="fadeInUp"
              distance={80}
            >
              <p className="font-display text-lg md:text-xl italic text-black">
                Like Music Did - Naturally.
              </p>
            </AnimatedWrapper>
          </div>
          <AnimatedWrapper
            delay={0}
            duration={0.8}
            animationType="fadeInUp"
            distance={80}
          >
            <div className="border-l-4 border-gray-300 pl-6">
              <p className="font-open-sans text-lg md:text-xl italic text-gray-600 leading-relaxed">
                &quot;I didn&apos;t study UX. But when I stumbled into it,
                something just clicked.&quot;
              </p>
            </div>
          </AnimatedWrapper>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Text Content */}
          <div className="space-y-12">
            {/* Learning Phase */}
            <div className="space-y-4">
              <AnimatedWrapper
                delay={0}
                duration={0.8}
                animationType="fadeInUp"
                distance={80}
              >
                <h3 className="font-open-sans text-xl md:text-2xl font-semibold text-black">
                  The learning phase
                </h3>
              </AnimatedWrapper>
              <AnimatedWrapper
                delay={0}
                duration={0.8}
                animationType="fadeInUp"
                distance={80}
              >
                <p className="font-open-sans text-lg md:text-xl leading-relaxed text-black">
                  The way I connected the dots, the way I noticed friction, the
                  way I wanted things to feel - it all came instinctively. Much
                  like the first time I picked up a guitar or started singing as
                  a kid, I didn&apos;t need a classroom to tell me this felt
                  right. It just made sense. I taught myself the craft - from
                  wireframes and user flows to research plans and stakeholder
                  maps. I asked questions, got my hands dirty, and built my
                  confidence one experience at a time.
                </p>
              </AnimatedWrapper>
            </div>

            {/* Present Role */}
            <div className="space-y-4">
              <AnimatedWrapper
                delay={0}
                duration={0.8}
                animationType="fadeInUp"
                distance={80}
              >
                <h3 className="font-open-sans text-xl md:text-2xl font-semibold text-black">
                  The present role
                </h3>
              </AnimatedWrapper>
              <AnimatedWrapper
                delay={0}
                duration={0.8}
                animationType="fadeInUp"
                distance={80}
              >
                <p className="font-open-sans text-lg md:text-xl leading-relaxed text-black">
                  Today, nearly five years later, I lead UX at a product level -
                  speaking up for users, aligning with business needs, and
                  designing with both empathy and clarity.
                </p>
              </AnimatedWrapper>
            </div>

            {/* Final Quote */}
            <AnimatedWrapper
              delay={0}
              duration={0.8}
              animationType="fadeInUp"
              distance={80}
            >
              <div className="border-l-4 border-gray-300 pl-6">
                <p className="font-open-sans text-lg md:text-xl italic text-gray-600 leading-relaxed">
                  &quot;It wasn&apos;t a conventional journey. But it was mine.
                  And it began the same way my love for music did - with
                  curiosity, feeling, and an undeniable pull to create.&quot;
                </p>
              </div>
            </AnimatedWrapper>
          </div>

          {/* Right: Visual Elements */}
          <AnimatedWrapper
            delay={0}
            duration={0.8}
            animationType="fadeInUp"
            distance={80}
          >
            <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
              <Image
                src="/images/about/story.svg"
                alt="My Story"
                width={800}
                height={800}
                className="w-full h-full object-contain"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
