"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { NAVIGATION_ITEMS } from "@/constants";
import { cn } from "@/utils";

// Custom hook for scroll-based navbar behavior
function useScrollDirection() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        // Hide navbar when scrolling down
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return isVisible;
}

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const isVisible = useScrollDirection();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 pt-6 bg-white transition-transform duration-300 ease-in-out",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
        style={{
          background: "rgba(255,255,255,0.01)",
          backdropFilter: "blur(2px)",
        }}
      >
        {/* Centered container */}
        <div className="mx-auto w-[90%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[55%]">
          {/* Glass/Pill navbar */}
          <nav
            className="mx-auto flex items-center justify-between rounded-[20px] bg-[#f9f9f9] border-black/5 px-4 sm:px-5 md:px-6 py-3 md:py-3.5 font-noto-sans antialiased"
            aria-label="Main navigation"
          >
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/navbar/flower.png"
                alt="Flower"
                width={28}
                height={28}
                className="rounded-full"
              />
              <span className="text-[14px] leading-[20px] tracking-[0.1px] font-medium text-gray-900">
                Jashvi Sudra
              </span>
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-5">
              {NAVIGATION_ITEMS.map(item => (
                <div key={item.href} className="relative">
                  {item.label === "Resume" ? (
                    <a
                      href={item.href}
                      download
                      className={cn(
                        "px-3 py-2 text-[14px] leading-[20px] tracking-[0.1px] font-medium rounded-xl transition-colors cursor-pointer",
                        "text-gray-800 hover:text-[#1404D5]"
                      )}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "px-3 py-2 text-[14px] leading-[20px] tracking-[0.1px] font-medium rounded-xl transition-colors",
                        router.pathname === item.href
                          ? "text-gray-900"
                          : "text-gray-800 hover:text-[#1404D5]"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                  {/* Dash indicator below active navigation item */}
                  {router.pathname === item.href && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-10 h-0.5 bg-gray-400 rounded-full mt-1"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-100 focus:outline-none"
              aria-label="Open menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(prev => !prev)}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile full-screen overlay menu - positioned at document level */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-screen h-screen z-[70] bg-[#f9f9f9]">
          <div className="absolute top-4 right-4">
            <button
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-800 hover:bg-gray-200/60"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex h-full w-full items-center justify-center">
            <nav className="flex flex-col items-center gap-6 font-noto-sans">
              {NAVIGATION_ITEMS.map(item =>
                item.label === "Resume" ? (
                  <a
                    key={item.href}
                    href={item.href}
                    download
                    className={cn(
                      "px-4 py-2 text-[14px] leading-[20px] tracking-[0.1px] font-medium cursor-pointer",
                      "text-gray-800"
                    )}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-[14px] leading-[20px] tracking-[0.1px] font-medium",
                      router.pathname === item.href
                        ? "text-gray-900"
                        : "text-gray-800"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
