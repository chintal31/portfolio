import Layout from "@/components/layout/Layout";
import Hero from "@/components/layout/Hero";

export default function Home() {
  return (
    <Layout
      seo={{
        title: "Home",
        description: "Welcome to my portfolio showcasing my UX/UI Design work and experience",
      }}
    >
      <Hero />
    </Layout>
  );
}
