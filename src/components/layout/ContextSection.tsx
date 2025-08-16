export default function ContextSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-5xl">
          <h2 className="font-display font-medium text-xl md:text-2xl leading-tight md:leading-8 text-black mb-4 md:mb-6">
            Context
          </h2>
          <div className="flex flex-col gap-3 md:gap-4">
            <p className="font-open-sans font-normal text-base md:text-lg lg:text-xl leading-relaxed md:leading-8 text-[#393939]">
              Today&apos;s business landscape demands more than just news
              monitoring - it calls for{" "}
              <span className="font-bold">real-time media intelligence</span>{" "}
              tailored to the
              <span className="font-bold"> companies that matter to you </span>.
              This platform was designed to help teams track high-velocity
              events - not only from top-tier news outlets, but also from X
              (Twitter) and LinkedIn posts by key people in your selected
              companies.
            </p>
            <p className="font-open-sans font-normal text-base md:text-lg lg:text-xl leading-relaxed md:leading-8 text-[#393939]">
              Whether you&apos;re in compliance, strategy, or PR, the goal is
              simple:{" "}
              <span className="font-bold">
                surface what&apos;s relevant, filter the noise, and enable
                confident, fast decision-making.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
