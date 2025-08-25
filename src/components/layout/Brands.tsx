import Image from "next/image";
import { AnimatedWrapper } from "../ui";

const brands = [
  { name: "Amway", logo: "/images/landing-page/amway.png" },
  { name: "Lennar", logo: "/images/landing-page/lennar.png" },
  { name: "Brand3", logo: "/images/landing-page/brand3.png" },
  { name: "LNT", logo: "/images/landing-page/lnt.png" }, //TODO: This logo is not clear
  { name: "RBL", logo: "/images/landing-page/rbl.png" },
  { name: "Mindstix", logo: "/images/landing-page/mindstix.png" },
];

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

          {/* Companies Grid */}
          <div className="flex justify-center">
            <div className="grid grid-cols-6 gap-4 md:gap-6 lg:gap-8 max-w-4xl">
              {brands.map(brand => (
                <div
                  key={brand.name}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-white border border-gray-100 rounded-xl flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      fill
                      className="object-contain p-2"
                      sizes="(min-width: 1280px) 112px, (min-width: 1024px) 96px, (min-width: 768px) 80px, (min-width: 640px) 64px, 48px"
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
