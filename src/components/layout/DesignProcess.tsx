export default function DesignProcess() {
  const processSteps = [
    {
      number: "1",
      title: "Discovery & Problem Framing",
      description:
        "Mapped current workflows and pain points through stakeholder interviews.",
    },
    {
      number: "2",
      title: "Persona Definition",
      description:
        "Mapped distinct user roles, goals, and frustrations to guide role-based solutioning.",
    },
    {
      number: "3",
      title: "Lo-Fi Wireframing",
      description:
        "Explored structural layouts and user journeys through quick, low-fidelity sketches.",
    },
    {
      number: "4",
      title: "Hi-Fi Mockups & Design System",
      description:
        "Developed polished screens with a scalable design system focused on clarity and speed.",
    },
    {
      number: "5",
      title: "Interactive Prototypes",
      description:
        "Built clickable flows to simulate real product behavior for early feedback and alignment.",
    },
    {
      number: "6",
      title: "Usability Testing",
      description:
        "Conducted structured testing rounds with target users and internal teams to validate and iterate.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-12">
          <h2 className="font-display font-medium text-2xl md:text-3xl leading-tight md:leading-[43px] text-[#0C0C0C] mb-3">
            Design Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {processSteps.map((step, index) => (
            <div className="flex items-start gap-3 md:gap-4" key={index}>
              <div className="w-8 h-8 md:w-[42px] md:h-[42px] bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-open-sans font-semibold text-sm md:text-base leading-tight md:leading-[22px]">
                  {step.number}
                </span>
              </div>
              <div className="flex flex-col gap-2 md:gap-3">
                <h4 className="font-open-sans font-semibold text-sm md:text-base leading-tight md:leading-[22px] text-black">
                  {step.title}
                </h4>
                <p className="font-open-sans font-normal text-sm md:text-base leading-relaxed md:leading-[22px] text-black">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
