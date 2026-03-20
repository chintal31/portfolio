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
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-open-sans text-[clamp(0.775rem,1.75vw,1.25rem)] text-gray-600">
              Brands I&apos;ve designed for
            </h2>
          </div>

          {/* Companies Marquee */}
          <div className="w-[60%] mx-auto overflow-hidden marquee-fade-mask">
            <div className="animate-marquee flex gap-8 w-max">
              {duplicated.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex flex-col items-center justify-center flex-shrink-0"
                >
                  <div className="relative w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-xl flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      fill
                      className="object-contain p-4"
                      sizes="(min-width: 1024px) 96px, (min-width: 640px) 80px, 56px"
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
