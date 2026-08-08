"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface FullscreenImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function FullscreenImage({
  src,
  alt,
  width,
  height,
  className = "",
}: FullscreenImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="block w-full cursor-zoom-in text-left"
        aria-label={`View ${alt} fullscreen`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} fullscreen preview`}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative h-full w-full max-w-7xl"
            onClick={event => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-0 top-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl leading-none text-black shadow-lg transition-colors hover:bg-[#F0F0F0]"
              aria-label="Close fullscreen preview"
            >
              ×
            </button>
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
