import FullscreenImage from "@/components/layout/FullscreenImage";
import Layout from "@/components/layout/Layout";
import MoreProjects from "@/components/layout/MoreProjects";
import ProjectOverview from "@/components/layout/ProjectOverview";
import { AnimatedWrapper } from "@/components/ui";
import Image from "next/image";

interface CategoryTagProps {
  label: string;
  color: string;
}

function CategoryTag({ label, color }: CategoryTagProps) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span className="font-noto-sans text-center text-sm font-medium leading-5 tracking-[0.1px] text-[#1A1A1A]">
        {label}
      </span>
    </div>
  );
}

const projectDetails = [
  {
    title: "Role",
    description: "Product Experience Designer",
  },
  {
    title: "Focus",
    description: "Service design, UX research & experience strategy",
  },
  {
    title: "Industry",
    description: "Home building & real estate",
  },
  {
    title: "Platform",
    description: "Internal tools and customer-facing home-closing experience",
  },
];

const mission = [
  "Establish an end-to-end home-closing process and make its cross-functional interactions visible.",
  "Analyse regional differences and create a more consistent internal process.",
  "Empower Concierges and New Home Consultants to meet home-closing goals.",
  "Create a clearer, more reassuring closing experience for home buyers.",
];

const learnings = [
  {
    title: "Design around real people",
    text: "Putting users' needs, expectations, and preferences at the centre of the process is essential for a seamless, intuitive experience.",
  },
  {
    title: "Make room for individual needs",
    text: "Personalisation and customisation can make a complex process feel more relevant and manageable for each person involved.",
  },
  {
    title: "Treat mobile as part of the experience",
    text: "Mobile optimisation matters when people need to check progress and stay informed away from their desks.",
  },
];

export default function HomeBuying() {
  const categories = [
    { label: "UX Research", color: "#730FD6" },
    { label: "B2B SaaS", color: "#C93F03" },
    { label: "Real Estate", color: "#8FA715" },
  ];

  return (
    <Layout
      seo={{
        title: "Improving Home Building & Buying Journeys",
        description:
          "A product design case study on creating role-level visibility and a more consistent home-buying and closing experience.",
        canonicalUrl: "https://jashvisudra.com/home-buying",
      }}
    >
      <section className="relative w-full min-h-[528px] overflow-hidden bg-white">
        <div className="relative z-10 mx-auto h-full max-w-7xl px-6 sm:px-8 md:px-12">
          <div className="flex min-h-[528px] flex-col items-center justify-between gap-8 pb-0 pt-16 md:flex-row md:gap-12">
            <AnimatedWrapper
              delay={0}
              duration={0.8}
              animationType="fadeInUp"
              distance={80}
            >
              <div className="order-1 flex w-full flex-col gap-8 md:order-2 md:max-w-[clamp(400px,55vw,600px)] md:gap-11">
                <h1 className="font-display text-[clamp(1.5rem,4vw,2.5rem)] font-normal leading-[1.2] text-[#272727]">
                  <span className="block">Improving Home Building</span>
                  <span className="block">& Buying Journeys</span>
                </h1>

                <div className="flex w-full max-w-full flex-wrap items-start gap-6 md:max-w-[407px] md:gap-8">
                  {categories.map(category => (
                    <CategoryTag key={category.label} {...category} />
                  ))}
                </div>
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper
              delay={0}
              duration={0.8}
              animationType="fadeInRight"
              distance={80}
            >
              <div className="order-1 mb-8 flex w-full justify-center md:order-2 md:mb-0 md:w-auto md:justify-start">
                <Image
                  src="/images/landing-page/case-study/home-buying-exp.png"
                  alt="Home buying experience interface"
                  width={800}
                  height={600}
                  className="h-auto w-full max-w-xl object-contain md:max-w-2xl lg:max-w-4xl"
                  priority
                />
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </section>

      <ProjectOverview projectDetails={projectDetails} bgColor="#F4FBFE" />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <AnimatedWrapper
            delay={0}
            duration={0.8}
            animationType="fadeInUp"
            distance={80}
          >
            <div className="max-w-4xl">
              <h2 className="font-display text-2xl md:text-3xl leading-tight text-[#0C0C0C] mb-5">
                Overview
              </h2>
              <p className="font-open-sans text-lg md:text-xl leading-relaxed text-[#393939]">
                A home-building company serving a variety of lifestyles needed a
                more consistent way to manage home buying across divisions. The
                work focused on bringing role-level visibility to the internal
                process while giving customers a simple way to track their own
                home closing.
              </p>
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <AnimatedWrapper
            delay={0}
            duration={0.8}
            animationType="fadeInUp"
            distance={80}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
              <div>
                <h2 className="font-display text-2xl md:text-3xl leading-tight text-[#0C0C0C] mb-5">
                  Mission
                </h2>
                <p className="font-open-sans text-lg leading-relaxed text-[#393939]">
                  Align the people and touchpoints involved in home closing so
                  the process is easier to run internally and easier to follow
                  externally.
                </p>
              </div>
              <ul className="space-y-5">
                {mission.map(item => (
                  <li
                    key={item}
                    className="flex gap-4 font-open-sans text-base md:text-lg leading-relaxed text-[#252525]"
                  >
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#16728E]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <AnimatedWrapper
            delay={0}
            duration={0.8}
            animationType="fadeInUp"
            distance={80}
          >
            <h2 className="font-display text-2xl md:text-3xl leading-tight text-[#0C0C0C] mb-8 md:mb-12">
              Process & timeline
            </h2>
            <div className="space-y-10 md:space-y-14">
              <Image
                src="/images/home-buying/design-process.png"
                alt="Discover, define, design and deliver process"
                width={1840}
                height={872}
                className="w-full h-auto rounded-xl border border-[#E6E6E6]"
              />
              <Image
                src="/images/home-buying/project-timeline.png"
                alt="Sixteen-week project timeline"
                width={1772}
                height={864}
                className="w-full h-auto rounded-xl border border-[#E6E6E6]"
              />
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <AnimatedWrapper
            delay={0}
            duration={0.8}
            animationType="fadeInUp"
            distance={80}
          >
            <div className="mb-12 max-w-4xl md:mb-16">
              <p className="mb-4 font-open-sans text-sm font-semibold uppercase tracking-[0.16em] text-[#16728E]">
                01
              </p>
              <h2 className="mb-5 font-display text-3xl leading-tight text-[#0C0C0C] md:text-4xl">
                Discover
              </h2>
              <h3 className="mb-3 font-display text-xl leading-tight text-[#0C0C0C] md:text-2xl">
                Initial research
              </h3>
              <p className="font-open-sans text-lg leading-relaxed text-[#393939]">
                User interviews were the primary research method, helping us
                understand a day in the life of each participant: their roles,
                responsibilities, and involvement in the home-building process.
              </p>
            </div>

            <div className="space-y-8 md:space-y-12">
              <Image
                src="/images/home-buying/discover/Screenshot_2023-07-15_at_10.52.51_AM.png"
                alt="Research participant and stakeholder overview"
                width={2000}
                height={1106}
                className="h-auto w-full rounded-xl border border-[#E6E6E6]"
              />
              <Image
                src="/images/home-buying/discover/Screenshot_2023-07-11_at_7.47.55_PM.png"
                alt="Home-building research findings"
                width={1978}
                height={1094}
                className="h-auto w-full rounded-xl border border-[#E6E6E6]"
              />
            </div>

            <div className="mt-16 grid grid-cols-1 items-center gap-10 md:mt-20 md:grid-cols-2 md:gap-16">
              <div>
                <h3 className="mb-3 font-display text-xl leading-tight text-[#0C0C0C] md:text-2xl">
                  Deep dive
                </h3>
                <p className="font-open-sans text-lg leading-relaxed text-[#393939]">
                  We mapped the frustrations and challenges users faced with
                  existing systems and processes to identify where the
                  experience was breaking down.
                </p>
              </div>
              <FullscreenImage
                src="/images/home-buying/discover/Frame_1000001015.png"
                alt="Research insights and pain points"
                width={928}
                height={888}
                className="h-auto w-full rounded-xl border border-[#E6E6E6]"
              />
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      <section className="bg-[#F4FBFE] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <AnimatedWrapper
            delay={0}
            duration={0.8}
            animationType="fadeInUp"
            distance={80}
          >
            <div className="mb-12 max-w-4xl md:mb-16">
              <p className="mb-4 font-open-sans text-sm font-semibold uppercase tracking-[0.16em] text-[#16728E]">
                02
              </p>
              <h2 className="font-display text-3xl leading-tight text-[#0C0C0C] md:text-4xl">
                Define
              </h2>
            </div>

            <div className="space-y-16 md:space-y-24">
              <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
                <div>
                  <h3 className="mb-3 font-display text-xl leading-tight text-[#0C0C0C] md:text-2xl">
                    User personas
                  </h3>
                  <p className="font-open-sans text-lg leading-relaxed text-[#393939]">
                    Personas clarified who we were designing for. They captured
                    the personalities, behaviours, goals, frustrations, and
                    tools used by the primary stakeholders in the Lennar
                    environment.
                  </p>
                </div>
                <FullscreenImage
                  src="/images/home-buying/define/Frame_1000001015_(4).png"
                  alt="Home-buying stakeholder personas"
                  width={903}
                  height={967}
                  className="h-auto w-full rounded-xl border border-[#D9E8ED] bg-white"
                />
              </div>

              <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
                <div className="order-2 md:order-1">
                  <Image
                    src="/images/home-buying/define/Screenshot_2023-07-15_at_10.39.14_AM.png"
                    alt="Problem statement framework"
                    width={690}
                    height={798}
                    className="h-auto w-full rounded-xl border border-[#D9E8ED] bg-white"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="mb-3 font-display text-xl leading-tight text-[#0C0C0C] md:text-2xl">
                    Problem statement
                  </h3>
                  <p className="mb-5 border-l-4 border-[#16728E] pl-5 font-open-sans text-lg font-semibold leading-relaxed text-[#252525]">
                    Empower cross-functional teams with a transparent system,
                    while allowing customers to track and stay on top of their
                    home closing.
                  </p>
                  <p className="font-open-sans text-lg leading-relaxed text-[#393939]">
                    Fragmented systems made daily operations difficult for
                    Concierges and New Home Consultants. The opportunity was a
                    connected platform with actionable insights, milestone
                    nudges, and integration with existing systems—alongside a
                    customer view of progress, milestones, and dependencies.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-6 font-display text-xl leading-tight text-[#0C0C0C] md:text-2xl">
                  User journey map
                </h3>
                <FullscreenImage
                  src="/images/home-buying/define/Current_User_Journey_Concierge_(2).png"
                  alt="Current concierge user journey"
                  width={1875}
                  height={782}
                  className="h-auto w-full rounded-xl border border-[#D9E8ED] bg-white"
                />
              </div>

              <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
                <div>
                  <h3 className="mb-3 font-display text-xl leading-tight text-[#0C0C0C] md:text-2xl">
                    Ecosystem map
                  </h3>
                  <p className="font-open-sans text-lg leading-relaxed text-[#393939]">
                    The ecosystem map surfaced the stakeholders, resources,
                    touchpoints, and dependencies that shape a customer&apos;s
                    home buying journey and contribute to the closing process.
                  </p>
                </div>
                <FullscreenImage
                  src="/images/home-buying/define/Ecosystem_Map_(3).png"
                  alt="Home buying ecosystem map"
                  width={816}
                  height={838}
                  className="h-auto w-full rounded-xl border border-[#D9E8ED] bg-white"
                />
              </div>

              <div>
                <h3 className="mb-6 font-display text-xl leading-tight text-[#0C0C0C] md:text-2xl">
                  Service blueprint
                </h3>
                <FullscreenImage
                  src="/images/home-buying/define/Screenshot_2023-07-15_at_10.17.06_AM.png"
                  alt="Home closing service blueprint"
                  width={1652}
                  height={706}
                  className="h-auto w-full rounded-xl border border-[#D9E8ED] bg-white"
                />
              </div>

              <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
                <FullscreenImage
                  src="/images/home-buying/define/Frame_1000001015_(1).png"
                  alt="Information architecture for customer and concierge experiences"
                  width={1263}
                  height={961}
                  className="h-auto w-full rounded-xl border border-[#D9E8ED] bg-white"
                />
                <div>
                  <h3 className="mb-3 font-display text-xl leading-tight text-[#0C0C0C] md:text-2xl">
                    Information architecture
                  </h3>
                  <p className="font-open-sans text-lg leading-relaxed text-[#393939]">
                    We created a mobile experience for customers to track their
                    home-buying process, and a web experience for Concierges to
                    manage exceptions, meetings, stakeholders, and overall
                    home-closing progress.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <AnimatedWrapper
            delay={0}
            duration={0.8}
            animationType="fadeInUp"
            distance={80}
          >
            <div className="mb-12 max-w-4xl md:mb-16">
              <p className="mb-4 font-open-sans text-sm font-semibold uppercase tracking-[0.16em] text-[#16728E]">
                03
              </p>
              <h2 className="font-display text-3xl leading-tight text-[#0C0C0C] md:text-4xl">
                Design
              </h2>
            </div>

            <div className="space-y-16 md:space-y-24">
              <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
                <div>
                  <h3 className="mb-5 font-display text-xl leading-tight text-[#0C0C0C] md:text-2xl">
                    Concierge workspace
                  </h3>
                  <ul className="space-y-3 font-open-sans text-lg leading-relaxed text-[#393939]">
                    <li>
                      Insights and metrics for active customers, pending
                      exceptions, and weekly closings.
                    </li>
                    <li>System-generated action items arranged by priority.</li>
                    <li>
                      Upcoming meetings, shareable resources, and a personal
                      note-taking space.
                    </li>
                  </ul>
                </div>
                <FullscreenImage
                  src="/images/home-buying/design/Frame_1000001015_(2).png"
                  alt="Concierge workspace concept"
                  width={1084}
                  height={900}
                  className="h-auto w-full rounded-xl border border-[#E6E6E6]"
                />
              </div>

              <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
                <FullscreenImage
                  src="/images/home-buying/design/Frame_1000001015_(3).png"
                  alt="Closing calendar phase and timeline views"
                  width={1280}
                  height={1024}
                  className="h-auto w-full rounded-xl border border-[#E6E6E6]"
                />
                <div>
                  <h3 className="mb-5 font-display text-xl leading-tight text-[#0C0C0C] md:text-2xl">
                    Closing calendar
                  </h3>
                  <ul className="space-y-3 font-open-sans text-lg leading-relaxed text-[#393939]">
                    <li>
                      Phase and timeline views to track progress, requirements,
                      and priority action items.
                    </li>
                    <li>
                      An overview of active customers organised by closing date.
                    </li>
                    <li>
                      Community-level distribution of customers and homes.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_0.72fr] md:gap-16">
                <div>
                  <h3 className="mb-5 font-display text-xl leading-tight text-[#0C0C0C] md:text-2xl">
                    Customer app experience
                  </h3>
                  <ul className="space-y-3 font-open-sans text-lg leading-relaxed text-[#393939]">
                    <li>
                      A virtual assistant for customer questions and support.
                    </li>
                    <li>
                      Current-phase progress, recent construction photos, and
                      milestone to-dos.
                    </li>
                    <li>
                      Chat with assigned associates and updates on upcoming
                      appointments.
                    </li>
                  </ul>
                </div>
                <FullscreenImage
                  src="/images/home-buying/design/iPhone_11_Pro_Mockup_(1).png"
                  alt="Customer mobile app concept"
                  width={427}
                  height={850}
                  className="mx-auto h-auto w-full max-w-[320px]"
                />
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      <section className="bg-[#F4FBFE] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <AnimatedWrapper
            delay={0}
            duration={0.8}
            animationType="fadeInUp"
            distance={80}
          >
            <h2 className="font-display text-2xl md:text-3xl leading-tight text-[#0C0C0C] mb-8 md:mb-12">
              Key learnings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {learnings.map(learning => (
                <div
                  key={learning.title}
                  className="rounded-2xl bg-white p-6 md:p-7"
                >
                  <h3 className="font-display text-xl leading-tight text-[#0C0C0C] mb-3">
                    {learning.title}
                  </h3>
                  <p className="font-open-sans text-base leading-relaxed text-[#393939]">
                    {learning.text}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      <MoreProjects currentHref="/home-buying" />
    </Layout>
  );
}
