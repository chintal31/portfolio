import React, { useRef, useEffect, useState } from "react";

interface AnimatedWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  enabled?: boolean;
  animationType?:
    | "fadeInUp"
    | "fadeInDown"
    | "fadeInLeft"
    | "fadeInRight"
    | "scaleIn"
    | "slideInUp";
  distance?: number;
}

export default function AnimatedWrapper({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  enabled = true,
  animationType = "fadeInUp",
  distance = 50,
}: AnimatedWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
          // Don't disconnect immediately to allow for scroll-based animations
          setTimeout(() => observer.disconnect(), 1000);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: "0px 0px -100px 0px", // Trigger slightly before element is fully visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, enabled]);

  // Get animation styles based on type and scroll progress
  const getAnimationStyles = () => {
    const baseStyles = {
      opacity: isVisible ? 1 : 0,
      transition: `all ${duration}s ease-out ${delay}s`,
    };

    const animationStyles = {
      fadeInUp: {
        ...baseStyles,
        transform: isVisible ? "translateY(0)" : `translateY(${distance}px)`,
      },
      fadeInDown: {
        ...baseStyles,
        transform: isVisible ? "translateY(0)" : `translateY(-${distance}px)`,
      },
      fadeInLeft: {
        ...baseStyles,
        transform: isVisible ? "translateX(0)" : `translateX(${distance}px)`,
      },
      fadeInRight: {
        ...baseStyles,
        transform: isVisible ? "translateX(0)" : `translateX(-${distance}px)`,
      },
      scaleIn: {
        ...baseStyles,
        transform: isVisible ? "scale(1)" : "scale(0.9)",
      },
      slideInUp: {
        ...baseStyles,
        transform: isVisible
          ? "translateY(0)"
          : `translateY(${distance * 2}px)`,
        opacity: isVisible ? 1 : 0.3,
      },
    };

    return animationStyles[animationType] || animationStyles.fadeInUp;
  };

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <div
      ref={ref}
      className={`animated-wrapper scroll-animated ${className}`}
      style={getAnimationStyles()}
    >
      {children}
    </div>
  );
}
