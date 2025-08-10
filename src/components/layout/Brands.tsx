import Image from 'next/image';

const companies = [
  { name: 'Amway', logo: '/images/amway.png' },
  { name: 'Lennar', logo: '/images/lennar.png' },
  { name: 'Brand3', logo: '/images/brand3.png' },
  { name: 'LNT', logo: '/images/lnt.png' },
  { name: 'RBL', logo: '/images/rbl.png' },
  { name: 'Mindstix', logo: '/images/mindstix.png' },
];

export default function Brands() {
  return (
    <section className="py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-open-sans text-lg md:text-xl text-gray-600">
            Brands I've designed for
          </h2>
        </div>

        {/* Companies Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-6 gap-4 md:gap-6 lg:gap-8 max-w-4xl">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className="flex flex-col items-center justify-center"
              >
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-white border border-gray-100 rounded-xl flex items-center justify-center">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain p-2"
                    sizes="(min-width: 1280px) 112px, (min-width: 1024px) 96px, (min-width: 768px) 80px, (min-width: 640px) 64px, 48px"
                  />
                </div>
                <span className="sr-only">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
