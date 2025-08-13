import Image from "next/image";

export default function UserPersonas() {
  const personas = [
    {
      svg: "/images/pr.svg",
      title: "PR & Corporate Communications Lead",
      goals: [
        "Monitor media coverage volume",
        "Track misinformation mentions",
        "Analyze brand sentiment trends",
        "Follow key journalist coverage",
      ],
    },
    {
      svg: "/images/risk.svg",
      title: "Investor Relations / Risk Analyst",
      goals: [
        "Monitor stock-media impact",
        "Identify crisis triggers",
        "Track media tone on market dips",
        "Prepare investor communication",
      ],
    },
    {
      svg: "/images/brand.svg",
      title: "Brand & Marketing Manager",
      goals: [
        "Track campaign traction",
        "Analyze theme ownership",
        "Benchmark marketing buzz",
        "Follow key journalist coverage",
      ],
    },
    {
      svg: "/images/compliance.svg",
      title: "Compliance & Regulatory Officer",
      goals: [
        "Monitor fraud/breach flags",
        "Detect misinformation risk",
        "Assess compliance signals",
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-12">
          <h2 className="font-display font-medium text-3xl leading-[43px] text-[#0C0C0C] mb-3">
            User Personas
          </h2>
          <p className="font-open-sans font-normal text-lg leading-[25px] text-[#6A6A6A] max-w-5xl">
            Understanding our target audience was crucial in the design process.
            Here are our Personas with their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {personas.map((persona, index) => (
            <div key={index} className="flex flex-col gap-8">
              <div className="flex flex-col gap-3 h-32">
                <div className="w-24 h-24 bg-gray-100 rounded-lg flex text-4xl">
                  <Image
                    src={persona.svg}
                    alt={persona.title}
                    width={100}
                    height={100}
                    className="bg-white"
                  />
                </div>
                <h3 className="font-open-sans font-semibold text-base leading-[22px] text-black">
                  {persona.title}
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                {persona.goals.map((goal, goalIndex) => (
                  <p
                    key={goalIndex}
                    className="font-open-sans font-normal text-base leading-[22px] text-black"
                  >
                    {goal}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
