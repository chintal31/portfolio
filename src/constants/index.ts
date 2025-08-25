import { NavigationItem, ContactInfo } from "@/types";

// Site configuration
export const SITE_CONFIG = {
  name: "Jashvi Sudra",
  title: "Jashvi Sudra - UX/UI Designer",
  description:
    "Portfolio showcasing my work and experience as a UX/UI Designer",
  url: "https://jashvi.me", // TODO: change to actual url
  ogImage: "/images/landing-page/flower.png",
  keywords: [
    "UX/UI Designer",
    "UX/UI Design",
    "UX/UI Design Work",
    "UX/UI Design Projects",
    "UX/UI Design Case Studies",
    "UX/UI Design Portfolio",
    "UX/UI Designer Portfolio",
    "UX/UI Designer Work",
  ],
};

// Navigation items
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/resume-jashvi-sudra.pdf", label: "Resume" },
];

// Contact information
export const CONTACT_INFO: ContactInfo = {
  email: "jashvi.sudra@gmail.com",
  location: "Mumbai, India",
  social: {
    linkedin: "https://www.linkedin.com/in/jashvisudra/",
    behance: "https://www.behance.net/jashvisudra",
    medium: "https://medium.com/@jashvisudra",
    portfolio: "https://jashvi.vercel.app",
  },
};

// Animation variants for framer-motion (if you decide to add it)
export const FADE_IN_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const SLIDE_IN_VARIANTS = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};
