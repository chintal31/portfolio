import Image from "next/image";
import { AnimatedWrapper } from "../ui";

const brands = [
  { name: "Amway", logo: "/images/landing-page/brands/amway.png" },
  { name: "Lennar", logo: "/images/landing-page/brands/lennar.png" },
  { name: "Locobuzz", logo: "/images/landing-page/brands/locobuzz.jpeg" },
  { name: "RBL", logo: "/images/landing-page/brands/rbl.png" },
  { name: "Mindstix", logo: "/images/landing-page/brands/mindstix.png" },
];

const duplicated = [...brands, ...brands];

export default function Brands() {
  return (
    <AnimatedWrapper
      delay={0}
      duration={0.8}
      animationType="slideInUp"
      distance={80}
    >
      <section className="py-6 sm:py-16 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-[14px]">
            <h2 className="font-open-sans text-[clamp(0.775rem,1.75vw,1.25rem)] text-gray-600">
              Brands I&apos;ve designed for
            </h2>
          </div>

          {/* Companies Marquee */}
          <div className="w-[92%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto overflow-hidden marquee-fade-mask">
            <div className="animate-marquee flex gap-6 sm:gap-8 md:gap-10 w-max">
              {duplicated.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex flex-col items-center justify-center flex-shrink-0"
                >
                  <div className="relative w-[4rem] h-[4rem] sm:w-[5.5rem] sm:h-[5.5rem] md:w-[7.5rem] md:h-[7.5rem] bg-white rounded-xl flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      fill
                      className="object-contain p-2 sm:p-3 md:p-4"
                      sizes="(min-width: 768px) 120px, (min-width: 640px) 88px, 64px"
                    />
                  </div>
                  <span className="sr-only">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedWrapper>
  );
}
