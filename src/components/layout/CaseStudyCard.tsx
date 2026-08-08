import Image from "next/image";
import Link from "next/link";
import type { UXCaseStudy } from "@/data/uxCaseStudies";
import { AnimatedWrapper } from "../ui";

export interface CaseStudyCardProps extends UXCaseStudy {
  className?: string;
  /** Light cards on the homepage vs titles for the dark “More projects” band. */
  variant?: "default" | "onDark";
}

export default function CaseStudyCard({
  title,
  backgroundColor,
  imageSrc,
  imageAlt,
  className = "",
  href,
  tags = [],
  tagBgColor,
  svg,
  svgPosition = "topRight",
  variant = "default",
}: CaseStudyCardProps) {
  const isExternalLink =
    href.startsWith("http://") || href.startsWith("https://");

  const titleClassName =
    variant === "onDark"
      ? `font-display font-normal text-[1.5rem] md:text-[1.875rem] leading-tight md:leading-[43px] text-white lg:group-hover:text-[#E8E8E8] transition-colors duration-300 lg:group-hover:underline decoration-[#E8E8E8] decoration-0 underline-offset-4`
      : "font-display font-normal text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.3] text-[#222222] lg:group-hover:text-[#444444] transition-colors duration-300 lg:group-hover:underline decoration-[#444444] decoration-0 underline-offset-4";

  const CardContent = () => (
    <AnimatedWrapper
      delay={0}
      duration={0.8}
      animationType="fadeInUp"
      distance={80}
    >
      <div
        className={`flex w-full flex-col gap-3 md:gap-4 lg:gap-5 ${className} cursor-pointer group`}
      >
        <div
          className="w-full h-[330px] rounded-[20px] relative overflow-hidden"
          style={{ backgroundColor }}
        >
          {imageSrc && (
            <div className={`absolute inset-0 pl-15 pt-15`}>
              <div className="relative w-full h-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt || title}
                  fill
                  className={`object-cover scale-100 lg:group-hover:scale-130 transition-transform duration-500 ease-out object-top-left origin-top-left`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          )}

          {tags.length > 0 && (
            <div className="absolute top-0 left-0 right-0 p-4 md:p-6 flex flex-nowrap gap-1 md:gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-1.5 py-0.5 md:px-2 md:py-1 bg-opacity-90 text-[#222222] text-[10px] md:text-xs font-normal rounded-md shadow-sm flex items-center gap-1 whitespace-nowrap flex-shrink-0 border-0 outline-none"
                  style={{ backgroundColor: tagBgColor }}
                >
                  {index === 0 && svg && svgPosition === "tag" && (
                    <Image
                      src={svg}
                      alt={tag}
                      width={12}
                      height={12}
                      className="md:w-4 md:h-4"
                    />
                  )}
                  {tag}
                </span>
              ))}
            </div>
          )}

          {svg && svgPosition === "topRight" && (
            <div className="absolute top-4 right-4 md:top-6 md:right-6">
              <Image src={svg} alt="Award icon" width={100} height={100} />
            </div>
          )}
        </div>
        {variant === "onDark" ? (
          <p className={titleClassName}>{title}</p>
        ) : (
          <h3 className={titleClassName}>{title}</h3>
        )}
      </div>
    </AnimatedWrapper>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block"
        {...(isExternalLink
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}
