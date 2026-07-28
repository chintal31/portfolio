import Image from "next/image";
import { AnimatedWrapper } from "../ui";

const brands = [
  {
    name: "Mindstix",
    logo: "/images/landing-page/brands/mindstix-gray.png",
  },
  {
    name: "Locobuzz",
    logo: "/images/landing-page/brands/locobuzz-gray.png",
  },
  {
    name: "Lennar",
    logo: "/images/landing-page/brands/lennar-gray.png",
  },
  { name: "Amway", logo: "/images/landing-page/brands/amway-gray.png" },
  {
    name: "RBL",
    logo: "/images/landing-page/brands/rbl-bank-gray.png",
  },
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
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="mb-6 text-center md:mb-8 lg:mb-10">
            <h2 className="font-open-sans text-base text-gray-500 sm:text-lg">
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
                  <div className="relative h-[80px] w-[120px]">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      fill
                      className="object-contain"
                      sizes="120px"
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
