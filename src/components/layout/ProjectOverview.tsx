export default function ProjectOverview() {
  const projectDetails = [
    {
      title: "Role",
      description: "Product Strategist, UX Designer, Design QA",
    },
    {
      title: "Timeline",
      description: "6 months | Feb 2024 - July 2024",
    },
    {
      title: "Team",
      description: "1 PM, 7 Developers, 1 Designer",
    },
    {
      title: "Platform",
      description: "Web app (B2B SaaS)",
    },
  ];

  return (
    <section className="w-full bg-[#FAF6FF] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projectDetails.map((detail, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h3 className="font-display font-medium text-lg leading-6 text-[#272727]">
                {detail.title}
              </h3>
              <p className="font-open-sans font-normal text-lg leading-[25px] text-[#272727]">
                {detail.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
