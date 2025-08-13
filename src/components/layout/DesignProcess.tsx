export default function DesignProcess() {
  const processSteps = [
    {
      number: "1",
      title: "Discovery & Problem Framing",
    },
    {
      number: "2",
      title: "Persona Definition",
    },
    {
      number: "3",
      title: "Lo-Fi Wireframing",
    },
    {
      number: "4",
      title: "Hi-Fi Mockups & Design System",
    },
    {
      number: "5",
      title: "Interactive Prototypes",
    },
    {
      number: "6",
      title: "Usability Testing",
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
            <div
              key={index}
              className="bg-white border border-[#DDDDDD] rounded-lg p-6 md:p-8 flex items-center gap-3"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-open-sans font-semibold text-sm md:text-base leading-tight md:leading-[22px] text-white">
                  {step.number}
                </span>
              </div>
              <div className="flex-1 flex items-center">
                <h3 className="font-open-sans font-semibold text-sm md:text-base leading-tight md:leading-[22px] text-black">
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
