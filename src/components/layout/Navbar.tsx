"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { NAVIGATION_ITEMS } from "@/constants";
import { cn } from "@/utils";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  return (
    <header className="relative z-50 pt-6 pb-4 bg-white">
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
              src="/images/flower.png"
              alt="Logo"
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
                <Link
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-[14px] leading-[20px] tracking-[0.1px] font-medium rounded-xl transition-colors",
                    router.pathname === item.href
                      ? "text-gray-900"
                      : "text-gray-800 hover:text-gray-900"
                  )}
                >
                  {item.label}
                </Link>
                {/* Dash indicator below About item */}
                {router.pathname === "/about" && item.href === "/about" && (
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

        {/* Mobile full-screen overlay menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-[60] bg-[#f9f9f9]">
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
                {NAVIGATION_ITEMS.map(item => (
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
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
