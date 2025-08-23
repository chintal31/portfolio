import { useEffect, useRef, useState } from "react";

// Custom hook for better scroll handling
export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
        } else if (entry && hasAnimated) {
          // Only hide if we've already animated and are significantly out of view
          const rect = entry.boundingClientRect;
          if (rect.top > window.innerHeight + 200 || rect.bottom < -200) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold: [0, threshold, 0.5, 1],
        rootMargin: "0px 0px -100px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, hasAnimated]);

  return { elementRef, isVisible, hasAnimated };
};
