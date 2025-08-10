import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "If I were to describe Jashvi's performance and working with her in one word, it would be 'Exceptional.' From the beginning of working with her, she exceeded my expectations. She quickly adapted to the working process, understood the business model of Amway, and proactively learned new things. She showcased her expertise in ",
    author: "Ronnel Sanchez",// TODO: Complete the quote
    position: "UX Lead",
    company: "Amway Global"
  },
  {
    id: '2',
    quote: "Kudos to Jashvi for leading UX with clarity and conviction! From untangling complex user flows to crafting intuitive, insight-driven journeys, your contribution has fundamentally shaped how users experience NewzVerse. Your ability to balance functionality with empathy, while keeping business needs in mind.",
    author: "Asawari Pawar", // TODO: Complete the quote
    position: "Project Manager",
    company: "Locobuzz"
  },
    
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedQuotes, setExpandedQuotes] = useState<{ [key: string]: boolean }>({});
  const [isMobile, setIsMobile] = useState(false);
  
  const MAX_QUOTE_LENGTH = 200; // Character limit for quotes

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === testimonials.length - 1) {
          // After last testimonial, go to first
          return 0;
        }
        return prevIndex + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleQuote = (testimonialId: string) => {
    setExpandedQuotes(prev => ({
      ...prev,
      [testimonialId]: !prev[testimonialId]
    }));
  };

  const truncateQuote = (quote: string, maxLength: number) => {
    if (quote.length <= maxLength) return quote;
    return quote.substring(0, maxLength).trim() + '...';
  };

  // Calculate transform based on device type
  const getTransformValue = () => {
    if (isMobile) {
      return `translateX(-${currentIndex * 100}%)`;
    }
    return `translateX(-${currentIndex * 75}%)`;
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16 md:gap-20">
          {/* Section Title */}
          <div className="text-center md:text-left">
            <h2 className="font-display font-medium text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-[#222222]">
              Testimonials
            </h2>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: getTransformValue() }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="w-full md:w-[75%] flex-shrink-0 px-4"
                  >
                    <div className="max-w-4xl mx-auto">
                      {/* Testimonial Card - Updated to match Figma design */}
                      <div className="relative bg-[#F8F8F8] rounded-[20px] p-2 md:p-4 lg:p-6">
                        {/* Quote Mark - Positioned as per Figma */}
                        <div className="absolute left-4 md:left-8 lg:left-10 top-4 md:top-8 lg:top-10 -translate-y-1 md:-translate-y-2">
                          <span className="text-[60px] md:text-[80px] lg:text-[100px] font-pavanam text-[#4B01AB] leading-[70px] md:leading-[90px] lg:leading-[110px]">
                            “
                          </span>
                        </div>

                        {/* Content Container - Positioned with proper spacing */}
                        <div className="ml-[40px] md:ml-[60px] lg:ml-[75px] pt-6 md:pt-8 lg:pt-10">
                          {/* Quote Text */}
                          <div className="mb-2 md:mb-4">
                            <p className="font-open-sans font-normal text-sm md:text-base lg:text-lg leading-[18px] md:leading-[20px] lg:leading-[22px] text-[#272727] max-w-none">
                              {expandedQuotes[testimonial.id] 
                                ? testimonial.quote 
                                : truncateQuote(testimonial.quote, MAX_QUOTE_LENGTH)
                              }
                              {testimonial.quote.length > MAX_QUOTE_LENGTH && (
                                <button
                                  onClick={() => toggleQuote(testimonial.id)}
                                  className="inline-block ml-1 text-[#4B01AB] font-open-sans font-medium text-xs md:text-sm hover:text-[#064CF0] focus:outline-none rounded"
                                >
                                  {expandedQuotes[testimonial.id] ? 'Read Less' : 'Read More'}
                                </button>
                              )}
                            </p>
                          </div>

                          {/* Author Info - Updated spacing and typography */}
                          <div className="flex flex-col gap-1">
                            <h4 className="font-open-sans font-semibold text-base md:text-lg lg:text-xl leading-[20px] md:leading-[22px] lg:leading-[24px] text-[#272727]">
                              {testimonial.author}
                            </h4>
                            <p className="font-open-sans font-normal text-xs md:text-sm lg:text-base leading-[16px] md:leading-[18px] lg:leading-[20px] text-[#272727]">
                              {testimonial.position}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-[#4B01AB] scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
