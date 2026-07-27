import Layout from "@/components/layout/Layout";
import Hero from "@/components/layout/Hero";
import Milestones from "@/components/layout/Milestones";
import Brands from "@/components/layout/Brands";
import Collaboration from "@/components/layout/Collaboration";
import UXCaseStudies from "@/components/layout/UXCaseStudies";
import Testimonials from "@/components/layout/Testimonials";

export default function Home() {
  return (
    <Layout
      seo={{
        title: "Home",
        description:
          "Welcome to my portfolio showcasing my UX/UI Design work and experience",
      }}
    >
      <Hero />
      <Milestones />
      <UXCaseStudies />
      <Brands />
      <Testimonials />
      <Collaboration />
    </Layout>
  );
}
