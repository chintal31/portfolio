import { AnimatedWrapper } from "../ui";

export default function KeyUXSolutions() {
  const solutions = [
    {
      title: "Misinformation Detection Interface",
      problem:
        "Users couldn't easily differentiate credible vs. misleading news, leading to delayed action and risk exposure.",
      solution:
        "Designed an interface that flags potential misinformation using contextual explanations and contradiction cues. Users can quickly understand why a claim may be inaccurate through clear reasoning - enabling faster, more confident decisions.",
      bgColor: "bg-[#F5ECFC]",
      image: "/images/newsverse.png",
    },
    {
      title: "Alert Trigger System",
      problem:
        "Most teams react to misinformation after the damage is done - by then, share prices drop, media pressure builds, or SEBI scrutiny begins. While alert systems exist in other tools, they typically follow rigid, linear workflows, limiting how teams can adapt to the fast, chaotic nature of misinformation spread.",
      solution:
        'Designed a modular alert builder that mirrors how real signals behave — by grouping conditions into Time, Volume, and Event Attributes. This flexible logic system enables teams to define what "risk momentum" looks like for them (e.g., 5 negative posts about frauds within 15 minutes), so they can act before an issue escalates. The result: a shift from reactive monitoring to proactive signal-driven intervention - built for high-stakes communication.',
      bgColor: "bg-[#FEF4E3]",
      image: "/images/newsverse.png",
    },
    {
      title: "Share Market Impact",
      problem:
        "Most teams monitor media sentiment, but they lack visibility into its probable effect on share prices. This gap makes it hard to judge whether a spike in news is just noise - or something that's genuinely moving the market. Without this correlation, teams either overreact or miss critical moments.",
      solution:
        "We enabled teams to see live share price and volume movements as an event unfolds, so they can instantly assess market sensitivity. This helps differentiate real threats from noise, making interventions more timely and evidence-backed. It also supports compliance teams in aligning with SEBI's mandate to report misinformation that affects investor sentiment or share prices.",
      bgColor: "bg-[#FEE7E3]",
      image: "/images/newsverse.png",
    },
    {
      title: "NV Score Visualization",
      problem:
        "With high volumes of news and posts, teams struggled to distinguish which events needed urgent attention - often reacting to noise instead of signal.",
      solution:
        "Enhanced and visualized the in-house proprietary NV Score developed by Locobuzz - a dynamic metric that evaluates each news event based on multiple attributes like source type, sentiment, velocity, credibility, and business relevance. All key events are sorted using NV Score, giving users an immediate understanding of impact, and helping them respond to the most critical developments first.",
      bgColor: "bg-[#E8F3FA]",
      image: "/images/newsverse.png",
    },
    {
      title: "Theme Categorization",
      problem:
        "Users felt overwhelmed by unstructured feeds of news and posts.",
      solution:
        "Introduced Insight Themes - a set of 10 key categories that every signal is sorted into, like PR Watch, Compliance View, and Leadership Movement. Each theme contains events, and each event contains the related articles or posts, helping users see the bigger picture at a glance. This layered setup turns a noisy feed into a clear, organized view of what's unfolding and why it matters.",
      bgColor: "bg-[#F2FEE3]",
      image: "/images/newsverse.png",
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
              animationType="fadeInRight"
              distance={80}
              key={index}
            >
              <div
                className={`flex flex-col md:flex-row items-center gap-8 lg:gap-12 p-8 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}

                <div className="flex-1 max-w-lg lg:w-[40%] lg:max-w-none">
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

                {/* Image/Video */}

                <div
                  className={`lg:w-[60%] flex justify-center lg:justify-end rounded-2xl border border-[#E0E0E0] ${solution.bgColor}`}
                >
                  <div className="w-full max-w-md h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-sm">
                      Demo/Screenshot Placeholder
                    </span>
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
