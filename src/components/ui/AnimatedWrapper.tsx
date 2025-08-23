import React from "react";
import { useScrollAnimation } from "@/hooks";

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
  const { elementRef, isVisible } = useScrollAnimation(threshold);

  // Get animation styles based on type and visibility
  const getAnimationStyles = () => {
    const baseStyles = {
      opacity: isVisible ? 1 : 0,
      transition: `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
      willChange: "opacity, transform",
      backfaceVisibility: "hidden" as const,
      transform: "translateZ(0)",
    };

    const animationStyles = {
      fadeInUp: {
        ...baseStyles,
        transform: isVisible
          ? "translateY(0) translateZ(0)"
          : `translateY(${distance}px) translateZ(0)`,
      },
      fadeInDown: {
        ...baseStyles,
        transform: isVisible
          ? "translateY(0) translateZ(0)"
          : `translateY(-${distance}px) translateZ(0)`,
      },
      fadeInLeft: {
        ...baseStyles,
        transform: isVisible
          ? "translateX(0) translateZ(0)"
          : `translateX(${distance}px) translateZ(0)`,
      },
      fadeInRight: {
        ...baseStyles,
        transform: isVisible
          ? "translateX(0) translateZ(0)"
          : `translateX(-${distance}px) translateZ(0)`,
      },
      scaleIn: {
        ...baseStyles,
        transform: isVisible
          ? "scale(1) translateZ(0)"
          : "scale(0.9) translateZ(0)",
      },
      slideInUp: {
        ...baseStyles,
        transform: isVisible
          ? "translateY(0) translateZ(0)"
          : `translateY(${distance * 2}px) translateZ(0)`,
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
      ref={elementRef}
      className={`animated-wrapper ${className}`}
      style={getAnimationStyles()}
    >
      {children}
    </div>
  );
}
