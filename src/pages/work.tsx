import Layout from "@/components/layout/Layout";
import NewsverseCaseStudy from "@/components/layout/NewsverseCaseStudy";

export default function Newsverse() {
  return (
    <Layout
      seo={{
        title: "Newsverse",
        description: "Newsverse case study.",
      }}
    >
      <NewsverseCaseStudy />
    </Layout>
  );
}
