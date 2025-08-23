import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageTransition({
  children,
  className = "",
}: PageTransitionProps) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsTransitioning(true);
    };

    const handleRouteChangeComplete = () => {
      // Small delay to ensure smooth transition
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    };

    const handleRouteChangeError = () => {
      setIsTransitioning(false);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, [router]);

  return (
    <div
      className={`page-transition ${className}`}
      style={{
        opacity: isTransitioning ? 0.8 : 1,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      {children}
    </div>
  );
}
