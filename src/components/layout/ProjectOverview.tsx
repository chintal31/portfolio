interface ProjectDetail {
  title: string;
  description: string;
}

interface ProjectOverviewProps {
  projectDetails: ProjectDetail[];
  bgColor?: string;
}

export default function ProjectOverview({
  projectDetails,
  bgColor = "#FAF6FF",
}: ProjectOverviewProps) {
  return (
    <section
      className={`w-full py-16 md:py-20`}
      style={{ backgroundColor: bgColor }}
    >
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
