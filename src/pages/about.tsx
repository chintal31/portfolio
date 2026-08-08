import Layout from "@/components/layout/Layout";
import AboutHero from "@/components/layout/AboutHero";
import DesignerBuilder from "@/components/layout/DesignerBuilder";
import Experience from "@/components/layout/Experience";
import WhatImGoodAt from "@/components/layout/WhatImGoodAt";
import OutsideWork from "@/components/layout/OutsideWork";
import HowICreateValue from "@/components/layout/HowICreateValue";

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
      <DesignerBuilder />
      <WhatImGoodAt />
      <HowICreateValue />
      <Experience />
      <OutsideWork />
    </Layout>
  );
}
