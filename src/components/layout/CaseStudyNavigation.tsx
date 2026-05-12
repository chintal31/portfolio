"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define the case studies order
const caseStudies = [
  { slug: "newsverse", title: "Newsverse" },
  { slug: "amway", title: "Amway" },
];

interface CaseStudyNavigationProps {
  currentSlug: string;
}

export default function CaseStudyNavigation({
  currentSlug,
}: CaseStudyNavigationProps) {
  const currentIndex = caseStudies.findIndex(
    (study) => study.slug === currentSlug
  );

  // Circular navigation - wrap around
  const prevIndex =
    currentIndex === 0 ? caseStudies.length - 1 : currentIndex - 1;
  const nextIndex =
    currentIndex === caseStudies.length - 1 ? 0 : currentIndex + 1;

  const prevStudy = caseStudies[prevIndex];
  const nextStudy = caseStudies[nextIndex];

  return (
    <section className="w-full bg-[#1A1A1A] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Previous Button */}
          <Link
            href={`/${prevStudy.slug}`}
            className="group flex items-center gap-2 md:gap-3 text-[#808080] hover:text-white transition-colors duration-300"
          >
            <ChevronLeft
              className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 transition-transform duration-300 group-hover:-translate-x-1"
              strokeWidth={1.5}
            />
            <span className="font-open-sans font-normal text-lg md:text-2xl lg:text-[28px] leading-tight">
              Previous
            </span>
          </Link>

          {/* Next Button */}
          <Link
            href={`/${nextStudy.slug}`}
            className="group flex items-center gap-2 md:gap-3 text-[#808080] hover:text-white transition-colors duration-300"
          >
            <span className="font-open-sans font-normal text-lg md:text-2xl lg:text-[28px] leading-tight">
              Next
            </span>
            <ChevronRight
              className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
