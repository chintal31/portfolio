import Layout from "@/components/layout/Layout";
import Hero from "@/components/layout/Hero";
import Brands from "@/components/layout/Brands";
import Collaboration from "@/components/layout/Collaboration";

export default function Home() {
  return (
    <Layout
      seo={{
        title: "Home",
        description: "Welcome to my portfolio showcasing my UX/UI Design work and experience",
      }}
    >
      <Hero />
      <Brands />
      <Collaboration />
    </Layout>
  );
}
