export interface UXCaseStudy {
  id: number;
  title: string;
  backgroundColor: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  tags?: string[];
  tagBgColor: string;
  svg?: string;
  svgPosition?: "tag" | "topRight";
}

/** Homepage case study order; used by UXCaseStudies and MoreProjects. */
export const UX_CASE_STUDIES: UXCaseStudy[] = [
  {
    id: 1,
    title: "Streamlining Media Monitoring for Enterprises",
    backgroundColor: "#FFEAD4",
    imageSrc: "/images/landing-page/case-study/newsverse.png",
    imageAlt: "AI Media Intelligence Interface",
    href: "/newsverse",
    tags: ["AI", "Media Intelligence", "B2B SaaS"],
    tagBgColor: "#FFD5AA",
    svg: "/images/landing-page/case-study/AI.svg",
    svgPosition: "tag",
  },
  {
    id: 2,
    title: "Improving Amway's Product Discovery",
    backgroundColor: "#F5E1FF",
    imageSrc: "/images/landing-page/case-study/amway.png",
    imageAlt: "Amway Product Discovery",
    href: "/amway",
    tags: ["E2E Responsive", "B2C", "E-Commerce"],
    tagBgColor: "#EAB8FF",
  },
  {
    id: 3,
    title: "Improving Home Building & Buying Journeys",
    backgroundColor: "#DAF3FF",
    imageSrc: "/images/landing-page/case-study/home-buying-exp.png",
    imageAlt: "Lennar Employee Portal",
    href: "https://luminous-galaxy-47d.notion.site/Home-Buying-Experience-8342de601ef4446e935ece5709eb7a71",
    tags: ["UX Research", "B2B Saas", "Real Estate"],
    tagBgColor: "#C5EAFF",
  },
  {
    id: 4,
    title: "Gamifying Sustainability for Individuals",
    backgroundColor: "#30B0A0",
    imageSrc: "/images/landing-page/case-study/sus-2.png",
    imageAlt: "Sustainability Gamification",
    href: "https://www.behance.net/gallery/153216047/IMPACT-APP-Designathon",
    tags: ["Designathon", "E2E", "Sustainability"],
    tagBgColor: "#96FFD0",
    svg: "/images/landing-page/case-study/runnersup.svg",
    svgPosition: "topRight",
  },
];

/** Next entries in `UX_CASE_STUDIES` after the one matching `currentHref` (no wrap). */
export function getFollowingCaseStudies(
  currentHref: string,
  count = 2
): UXCaseStudy[] {
  const idx = UX_CASE_STUDIES.findIndex(cs => cs.href === currentHref);
  if (idx === -1) return [];
  return UX_CASE_STUDIES.slice(idx + 1, idx + 1 + count);
}
