import Image from "next/image";
import { AnimatedWrapper } from "../ui";

export default function Hero() {
  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/landing-page/hero/hero-section-bg.png')",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left: Text */}
          <AnimatedWrapper
            delay={0}
            duration={0.8}
            animationType="fadeInUp"
            distance={80}
          >
            <div className="order-2 md:order-1">
              <div className="flex flex-col gap-1">
                <h1 className="font-display text-[clamp(1.5rem,6vw,3rem)] md:text-[clamp(1.05rem,4.6vw,2.4rem)] lg:text-[clamp(1.5rem,6vw,3rem)] leading-[1.2] font-normal">
                  Designing
                  <br />
                  Digital Experiences
                  <br />
                  that bring
                </h1>
                <div
                  className="font-display font-semibold text-transparent bg-clip-text text-[clamp(1.25rem,6vw,3rem)] md:text-[clamp(1.05rem,4.6vw,2.4rem)] lg:text-[clamp(1.25rem,6vw,3rem)] md:whitespace-nowrap md:tracking-[-0.01em] leading-[1.2]"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #064CF0 0%, #2F0267 67.33%)",
                  }}
                >
                  clarity to complexity
                </div>
                <div className="flex items-baseline leading-[1.2]">
                  <span className="font-display font-semibold text-black text-[clamp(1.25rem,6vw,3rem)] md:text-[clamp(1.15rem,5vw,2.6rem)] lg:text-[clamp(1.25rem,6vw,3rem)]">
                    & &nbsp;
                  </span>
                  <span
                    className="font-display font-semibold text-transparent bg-clip-text text-[clamp(1.25rem,6vw,3rem)] md:text-[clamp(1.15rem,5vw,2.6rem)] lg:text-[clamp(1.25rem,6vw,3rem)] leading-[1]"
                    style={{
                      backgroundImage:
                        "linear-gradient(90.24deg, #DF09A2 8.5%, #920081 99.8%)",
                    }}
                  >
                    ideas to life
                  </span>
                </div>
                <span className="mt-[clamp(14px,2.8vw,32px)] font-open-sans text-gray-700 text-[clamp(0.875rem,2vw,1.5rem)] leading-[1.4] max-w-[clamp(300px,60vw,500px)]">
                  With 5+ years of UX expertise, I&apos;ve helped startups and
                  global teams bring powerful tools to life.
                </span>
              </div>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper
            delay={0.2}
            duration={0.8}
            animationType="fadeInUp"
            distance={80}
          >
            {/* Right: Images */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-full h-[clamp(250px,40vw,400px)] flex justify-center items-center">
                <div className="flex gap-4 items-center">
                  {/* Background Image */}
                  <div
                    className="relative z-2"
                    style={{
                      width: "clamp(160px,22vw,280px)",
                      height: "clamp(200px,30vw,380px)",
                      transform: "rotate(-6.86deg)",
                    }}
                  >
                    <Image
                      src="/images/landing-page/hero/hero-img2.png"
                      alt="UI mockups collage"
                      fill
                      className="object-cover rounded-[clamp(6px,0.6vw,10px)] shadow-sm"
                      priority
                      sizes="(min-width: 1024px) 400px, 60vw"
                    />
                  </div>

                  {/* Foreground Image */}
                  <div
                    className="relative z-1 -ml-5"
                    style={{
                      width: "clamp(160px,22vw,280px)",
                      height: "clamp(200px,30vw,380px)",
                      transform: "rotate(9.17deg)",
                    }}
                  >
                    <Image
                      src="/images/landing-page/hero/hero-img1.png"
                      alt="Jashvi presenting a UX flow"
                      fill
                      className="object-cover rounded-[clamp(6px,0.6vw,10px)] shadow-sm"
                      priority
                      sizes="(min-width: 1024px) 400px, 60vw"
                    />
                  </div>
                  {/* Flexbox container for all SVGs */}
                  <div className="absolute inset-0 z-3">
                    {/* Top row - UX Lead on left, empty space, empty space */}
                    <div className="flex justify-center items-start h-1/3">
                      <div className="w-[clamp(40px,4vw,60px)] h-full">
                        <Image
                          src="/images/landing-page/hero/ux-lead.svg"
                          alt="UX Lead"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Middle row - Center SVG */}
                    <div className="flex justify-end items-end h-1/3">
                      <div className="w-[clamp(100px,12vw,150px)] h-full">
                        <Image
                          src="/images/landing-page/hero/digital-problem-solver.svg"
                          alt="Digital Problem Solver"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Bottom row - Empty space, empty space, Driven by Clarity on right */}
                    <div className="flex justify-center items-end h-1/3">
                      <div className="w-[clamp(150px,20vw,250px)] h-full">
                        <Image
                          src="/images/landing-page/hero/driven-by-clarity.svg"
                          alt="Driven by Clarity"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
