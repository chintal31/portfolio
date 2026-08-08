import { AnimatedWrapper } from "../ui";

const experience = [
  ["UX Lead", "Locobuzz Solutions Pvt. Ltd.", "2024 – 2026"],
  ["Manager - UX Design", "RBL Bank Ltd.", "2024"],
  ["Product Experience Designer", "Mindstix Software Pvt. Ltd.", "2021 – 2024"],
  ["UX/UI Designer", "Boho Procures Pvt. Ltd.", "2019 – 2020"],
];

export default function Experience() {
  return (
    <AnimatedWrapper delay={0} duration={0.6} animationType="fadeInUp">
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <p className="mb-7 font-open-sans text-xs uppercase tracking-wide text-[#8a8a8a] md:mb-8">
            My experience
          </p>
          <div>
            {experience.map(([role, company, period], index) => (
              <div
                className={`grid grid-cols-1 gap-1 py-5 font-open-sans text-sm leading-snug text-[#303030] first:pt-0 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_8rem] md:items-center md:gap-8 md:text-[15px] ${
                  index < experience.length - 1
                    ? "border-b border-[#e8e8e8]"
                    : "pb-0"
                }`}
                key={`${role}-${company}`}
              >
                <span>{role}</span>
                <span className="text-left">{company}</span>
                <span className="md:text-right">{period}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedWrapper>
  );
}
