import Layout from "@/components/layout/Layout";
import Hero from "@/components/layout/Hero";
import Milestones from "@/components/layout/Milestones";
import Brands from "@/components/layout/Brands";
import Collaboration from "@/components/layout/Collaboration";
import UXCaseStudies from "@/components/layout/UXCaseStudies";
import Testimonials from "@/components/layout/Testimonials";
import HomeScrollSnap from "@/components/layout/HomeScrollSnap";
import Highlights from "@/components/layout/Highlights";
import HowICreateValue from "@/components/layout/HowICreateValue";

export default function Home() {
  return (
    <Layout
      seo={{
        title: "Home",
        description:
          "Welcome to my portfolio showcasing my UX/UI Design work and experience",
      }}
    >
      <HomeScrollSnap>
        <Hero />
        <Milestones />
        <UXCaseStudies />
      </HomeScrollSnap>
      <HowICreateValue />
      <Highlights />
      <Brands />
      <Testimonials />
      <Collaboration />
    </Layout>
  );
}
