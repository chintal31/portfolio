const statement =
  "Craft, to me, isn't polish – it's whether something communicates clearly, holds up at the edges, and earns trust the first time someone uses it. I'm always in the 'let me try this' mode – building fast, usually with AI, because I'd rather test an idea than defend one :)";

export default function CraftStatement() {
  return (
    <section
      className="bg-[#effcff] px-6 py-16 md:py-20 lg:py-24"
      aria-label="My approach to craft"
    >
      <div className="mx-auto max-w-[760px]">
        <p className="cursor-hover font-display text-[1.125rem] leading-[1.52] text-[#1462ad] sm:text-xl md:text-[1.35rem]">
          {statement}
        </p>
      </div>
    </section>
  );
}
