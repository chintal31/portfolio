import { AnimatedWrapper } from "../ui";
import Image from "next/image";

export default function KeyUXSolutions() {
  const solutions = [
    {
      title: "Misinformation Detection Interface",
      problem:
        "Users couldn't easily differentiate credible vs. misleading news, leading to delayed action and risk exposure.",
      solution:
        "Designed an interface that flags potential misinformation using contextual explanations and contradiction cues. Users can quickly understand why a claim may be inaccurate through clear reasoning - enabling faster, more confident decisions.",
      bgColor: "bg-[#F5ECFC]",
      gif: "/videos/Misinformation-detection-interface.gif",
    },
    {
      title: "Alert Trigger System",
      problem:
        "Most teams react to misinformation after the damage is done - by then, share prices drop, media pressure builds, or SEBI scrutiny begins. While alert systems exist in other tools, they typically follow rigid, linear workflows, limiting how teams can adapt to the fast, chaotic nature of misinformation spread.",
      solution:
        'Designed a modular alert builder that mirrors how real signals behave — by grouping conditions into Time, Volume, and Event Attributes. This flexible logic system enables teams to define what "risk momentum" looks like for them (e.g., 5 negative posts about frauds within 15 minutes), so they can act before an issue escalates. The result: a shift from reactive monitoring to proactive signal-driven intervention - built for high-stakes communication.',
      bgColor: "bg-[#FEF4E3]",
      gif: "/videos/Alert-trigger-system.gif",
    },
    {
      title: "Share Market Impact",
      problem:
        "Most teams monitor media sentiment, but they lack visibility into its probable effect on share prices. This gap makes it hard to judge whether a spike in news is just noise - or something that's genuinely moving the market. Without this correlation, teams either overreact or miss critical moments.",
      solution:
        "We enabled teams to see live share price and volume movements as an event unfolds, so they can instantly assess market sensitivity. This helps differentiate real threats from noise, making interventions more timely and evidence-backed. It also supports compliance teams in aligning with SEBI's mandate to report misinformation that affects investor sentiment or share prices.",
      bgColor: "bg-[#FEE7E3]",
      gif: "/videos/Share-market-impact.gif",
    },
    {
      title: "Event Card Visualization",
      problem:
        "With numerous attributes demanded by stakeholders - such as event category, NV Score, sentiment, market impact, social traction, and action tools - event cards risked becoming overwhelming.",
      solution:
        "Designed a two-state event card that balances completeness with clarity. In the default state, only the most critical information (headline, NV Score, sentiment, market movement, company) is shown, ensuring a clean and scannable view. On hover, secondary details like metrics and user actions providing depth without sacrificing simplicity. This layered approach keeps the interface minimal by default but powerful on demand, giving users immediate impact awareness while still fulfilling stakeholder needs.",
      bgColor: "bg-[#E8F3FA]",
      gif: "/videos/Event-card-visualization.gif",
    },
    {
      title: "Theme Categorization",
      problem:
        "Users felt overwhelmed by unstructured feeds of news and posts.",
      solution:
        "Introduced Insight Themes - a set of 10 key categories that every signal is sorted into, like PR Watch, Compliance View, and Leadership Movement. Each theme contains events, and each event contains the related articles or posts, helping users see the bigger picture at a glance. This layered setup turns a noisy feed into a clear, organized view of what's unfolding and why it matters.",
      bgColor: "bg-[#F2FEE3]",
      gif: "/videos/Theme-categorization.gif",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-16">
          <AnimatedWrapper
            delay={0}
            duration={0.8}
            animationType="fadeInUp"
            distance={80}
          >
            <h2 className="font-display font-medium text-3xl leading-[43px] text-[#0C0C0C]">
              Key UX Solutions
            </h2>
          </AnimatedWrapper>
        </div>

        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <AnimatedWrapper
              delay={0}
              duration={0.8}
              animationType="fadeInUp"
              distance={80}
              key={index}
            >
              <div
                className={`flex flex-col lg:flex-row items-start gap-8 lg:gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="w-full lg:flex-1 lg:max-w-lg xl:w-[40%] xl:max-w-none">
                  <h3 className="font-open-sans font-semibold text-2xl leading-[33px] text-black mb-6">
                    {solution.title}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-open-sans font-semibold text-base leading-[22px] text-black mb-3">
                        Problem:
                      </h4>
                      <p className="font-open-sans font-normal text-base leading-[22px] text-black">
                        {solution.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-open-sans font-semibold text-base leading-[22px] text-black mb-3">
                        Solution:
                      </h4>
                      <p className="font-open-sans font-normal text-base leading-[22px] text-black">
                        {solution.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* GIF */}
                <div
                  className={`w-full lg:w-[60%] h-[280px] sm:h-[320px] md:h-[350px] lg:h-[380px] rounded-xl sm:rounded-2xl border border-[#E0E0E0] ${solution.bgColor} relative overflow-hidden order-1 lg:order-2`}
                >
                  <div className="absolute inset-0 p-3 sm:p-4 md:p-6 lg:p-8">
                    <div className="relative w-full h-full">
                      <Image
                        src={solution.gif}
                        alt={`${solution.title} demonstration`}
                        className="w-full h-full rounded-lg object-cover"
                        loading="lazy"
                        width={1000}
                        height={1000}
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
