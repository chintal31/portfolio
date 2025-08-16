import Layout from "@/components/layout/Layout";
import NewsverseCaseStudy from "@/components/layout/NewsverseCaseStudy";

export default function Newsverse() {
  return (
    <Layout
      seo={{
        title: "Newsverse - UX Strategy for AI-Powered Media Intelligence",
        description:
          "A comprehensive UX strategy case study for an AI-powered media intelligence platform, focusing on user experience optimization and interface design.",
      }}
    >
      <NewsverseCaseStudy />
    </Layout>
  );
}
