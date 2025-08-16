import Layout from "@/components/layout/Layout";
import AboutHero from "@/components/layout/AboutHero";
import MyStory from "@/components/layout/MyStory";
import Experience from "@/components/layout/Experience";
import StillGrowing from "@/components/layout/StillGrowing";
import OutsideWork from "@/components/layout/OutsideWork";

export default function AboutMe() {
  return (
    <Layout
      seo={{
        title: "About Me",
        description:
          "Learn more about my background, skills, and experience as a UX/UI Designer",
      }}
    >
      <AboutHero />
      <MyStory />
      <Experience />
      <StillGrowing />
      <OutsideWork />
    </Layout>
  );
}
