import Image from "next/image";

interface CategoryTagProps {
  label: string;
  color: string;
}

function CategoryTag({ label, color }: CategoryTagProps) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span className="font-noto-sans font-medium text-sm leading-5 text-center text-[#1A1A1A] tracking-[0.1px]">
        {label}
      </span>
    </div>
  );
}

export default function AmwayCaseStudy() {
  const categories = [
    { label: "E-Commerce", color: "#730FD6" },
    { label: "UX Revamp", color: "#C93F03" },
    { label: "B2C & B2B", color: "#8FA715" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[541px] bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 h-full">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[541px] py-20 gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="flex flex-col gap-11 w-full lg:w-auto lg:max-w-[471px] order-2 lg:order-1">
              {/* Title */}
              <h2 className="font-display font-normal text-[clamp(2rem,5vw,3rem)] leading-[1.33] text-[#272727]">
                Improving Amway&apos;s Product Discovery
              </h2>

              {/* Category Tags */}
              <div className="flex flex-wrap items-start gap-8 w-full max-w-[347px]">
                {categories.map((category, index) => (
                  <CategoryTag
                    key={index}
                    label={category.label}
                    color={category.color}
                  />
                ))}
              </div>

              {/* CTA Button */}
              <button className="flex items-center justify-center py-3 px-5 w-[171px] h-[51px] border border-[#ACACAC] rounded-[30px] hover:border-[#730FD6] hover:bg-[#730FD6] hover:text-white transition-all duration-300 group">
                <span className="font-open-sans font-normal text-xl leading-[1.35] text-[#272727] group-hover:text-white">
                  Check live site
                </span>
              </button>
            </div>

            {/* Right: Device Frames - Responsive grid layout */}
            <div className="order-1 lg:order-2 w-full lg:w-auto flex justify-center lg:justify-end mb-8 lg:mb-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {/* Search Frame */}
                <div className="relative w-[215px] h-[87px] border border-dashed border-[#DCDCDC] rounded-lg p-1">
                  <div className="w-full h-full bg-gray-100 border border-[#EAEAEA] rounded-md flex items-center justify-center">
                    <span className="text-xs text-gray-500">Search</span>
                  </div>
                </div>

                {/* PDP Frame */}
                <div className="relative w-[213px] h-[399px] border border-[#DCDCDC] rounded-t-[27px] p-1">
                  <div className="w-full h-full bg-gray-100 border border-[#EAEAEA] rounded-t-[25px] flex items-center justify-center">
                    <span className="text-xs text-gray-500">PDP</span>
                  </div>
                </div>

                {/* Search Frame 2 */}
                <div className="relative w-[213px] h-[401px] border border-[#DCDCDC] rounded-t-[27px] p-1">
                  <div className="w-full h-full bg-gray-100 border border-[#EAEAEA] rounded-t-[20px] flex items-center justify-center">
                    <span className="text-xs text-gray-500">Search</span>
                  </div>
                </div>

                {/* DS/Carousel Frame */}
                <div className="relative w-[209px] h-[88px] border border-dashed border-[#DCDCDC] rounded-lg p-1">
                  <div className="w-full h-full bg-gray-100 border border-[#EAEAEA] rounded-md flex items-center justify-center">
                    <span className="text-xs text-gray-500">DS/Carousel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="w-full bg-[#F2F8FF] py-11 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col gap-8 lg:gap-10">
            <h3 className="font-display font-medium text-2xl leading-8 text-black">
              Context
            </h3>
            <p className="font-open-sans font-normal text-xl leading-8 text-[#393939] max-w-4xl">
              Redesigned Amway Thailand&apos;s product discovery journey across
              Search, Product Pages (PLPs + PDPs), and Navigation. Focused on
              improving usability, accessibility, and business flexibility
              through a frontend-backend integrated UX approach.
            </p>
            <p className="font-open-sans font-italic font-normal text-base leading-7 text-[#4D4D4D] max-w-4xl">
              [This project is based on my work for Amway Thailand. All views
              and designs shared here are my own and do not reflect confidential
              business information]
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="w-full bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="flex flex-col gap-2">
              <h3 className="font-display font-medium text-lg leading-6 text-[#272727]">
                Role
              </h3>
              <p className="font-open-sans font-normal text-lg leading-[25px] text-[#272727]">
                UX Designer, UX Researcher - Product Pod
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-display font-medium text-lg leading-6 text-[#272727]">
                Team
              </h3>
              <p className="font-open-sans font-normal text-lg leading-[25px] text-[#272727]">
                1 PM, 12 Developers, 3 Designers
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-display font-medium text-lg leading-6 text-[#272727]">
                Timeline
              </h3>
              <p className="font-open-sans font-normal text-lg leading-[25px] text-[#272727]">
                12 months | Mar 2023 – Mar 2024
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-display font-medium text-lg leading-6 text-[#272727]">
                Platform
              </h3>
              <p className="font-open-sans font-normal text-lg leading-[25px] text-[#272727]">
                Web Responsive (B2C)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="w-full bg-[#FAFAFA] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col gap-11 lg:gap-12">
            <h3 className="font-display font-medium text-3xl leading-[43px] text-[#0C0C0C]">
              Design Process
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-18">
              {/* Left Column */}
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-3">
                  <div className="w-[42px] h-[42px] bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-open-sans font-semibold text-base leading-[22px]">
                      1
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-open-sans font-semibold text-base leading-[22px] text-black">
                      Research & Discovery
                    </h4>
                    <p className="font-open-sans font-normal text-base leading-[22px] text-black">
                      I led user research for Search including benchmarking and
                      analysing stakeholder interviews. For PDP, PLPs, I built
                      on earlier research and contextualized findings for Thai
                      users.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-[42px] h-[42px] bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-open-sans font-semibold text-base leading-[22px]">
                      3
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-open-sans font-semibold text-base leading-[22px] text-black">
                      Continuous Iteration
                    </h4>
                    <p className="font-open-sans font-normal text-base leading-[22px] text-black">
                      Design and testing ran in parallel. I balanced future
                      sprint work while incorporating live insights and aligning
                      design intent with evolving business priorities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-3">
                  <div className="w-[42px] h-[42px] bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-open-sans font-semibold text-base leading-[22px]">
                      2
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-open-sans font-semibold text-base leading-[22px] text-black">
                      Usability Testing
                    </h4>
                    <p className="font-open-sans font-normal text-base leading-[22px] text-black">
                      We invited beta users to test early designs, where I
                      created test scenarios, observed behavior, and noted pain
                      points. Their feedback helped shape design direction
                      sprint-by-sprint.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-[42px] h-[42px] bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-open-sans font-semibold text-base leading-[22px]">
                      4
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-open-sans font-semibold text-base leading-[22px] text-black">
                      User Flows & Edge Cases
                    </h4>
                    <p className="font-open-sans font-normal text-base leading-[22px] text-black">
                      I created detailed UX flows covering complex product
                      logic—stock status, price visibility, multilingual
                      support—ensuring the frontend and back-office UX worked
                      seamlessly together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Personas Section */}
      <section className="w-full bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col gap-6 lg:gap-11">
            <div className="flex flex-col gap-3">
              <h3 className="font-display font-normal text-[21px] leading-7 text-black">
                Amway focuses on two key users
              </h3>
              <p className="font-open-sans font-normal text-base leading-[22px] text-[#272727]">
                And the first step was to understand who are we designing for
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Customer Persona */}
              <div className="flex flex-col items-center gap-5">
                <div className="relative">
                  <div className="w-[133px] h-[133px] border border-[#66798F] rounded-full flex items-center justify-center">
                    <div className="w-[67px] h-[67px] bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-xs text-gray-600">🛒</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="absolute -top-1 -right-20 bg-[#EAFFD6] border border-[#7ED27F] rounded-[20px] px-3 py-1.5">
                    <span className="font-open-sans font-normal text-xs leading-[11px] text-black">
                      Easy Product Discovery
                    </span>
                  </div>
                  <div className="absolute top-16 -right-16 bg-[#EAFFD6] border border-[#7ED27F] rounded-[20px] px-3 py-1.5">
                    <span className="font-open-sans font-normal text-xs leading-[11px] text-black">
                      Offers & Discounts
                    </span>
                  </div>
                  <div className="absolute top-14 -left-20 bg-[#EAFFD6] border border-[#7ED27F] rounded-[20px] px-3 py-1.5">
                    <span className="font-open-sans font-normal text-xs leading-[11px] text-black">
                      Learn about products
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="font-open-sans font-bold text-base leading-[22px] text-black mb-1">
                    Amway Customers
                  </h4>
                  <p className="font-open-sans font-normal text-base leading-[22px] text-[#272727]">
                    Who purchases Amway products
                  </p>
                </div>
              </div>

              {/* ABO Persona */}
              <div className="flex flex-col items-center gap-5">
                <div className="relative">
                  <div className="w-[133px] h-[133px] border border-[#967A44] rounded-full flex items-center justify-center">
                    <div className="w-[53px] h-[53px] bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-xs text-gray-600">💼</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="absolute -top-1 -right-20 bg-[#FFEBD6] border border-[#D2A97E] rounded-[20px] px-3 py-1.5">
                    <span className="font-open-sans font-normal text-xs leading-[11px] text-black">
                      Managing Multiple Orders
                    </span>
                  </div>
                  <div className="absolute top-12 -left-16 bg-[#FFEBD6] border border-[#D2A97E] rounded-[20px] px-3 py-1.5">
                    <span className="font-open-sans font-normal text-xs leading-[11px] text-black">
                      Personalised Experience
                    </span>
                  </div>
                  <div className="absolute top-30 -right-8 bg-[#FFEBD6] border border-[#D2A97E] rounded-[20px] px-3 py-1.5">
                    <span className="font-open-sans font-normal text-xs leading-[11px] text-black">
                      Actionable Insights & Dashboards
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="font-open-sans font-bold text-base leading-[22px] text-black mb-1">
                    Amway Business Owners (ABOs)
                  </h4>
                  <p className="font-open-sans font-normal text-base leading-[22px] text-[#272727]">
                    Who builds businesses by selling Amway products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Interviews Section */}
      <section className="w-full bg-[#FAFAFA] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col gap-10 lg:gap-12">
            <div className="flex flex-col gap-3">
              <h3 className="font-display font-normal text-[21px] leading-7 text-black">
                User Interviews
              </h3>
              <p className="font-open-sans font-normal text-base leading-[22px] text-[#272727] max-w-2xl">
                As a part of User Research, our primary method was to conduct
                User Interviews. It was done by our in-house expert researchers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                "Unresponsive Buttons",
                "Cluttered Layout",
                "Complex Menu Structure",
                "Inconsistent Design Elements",
                "Search Functionality Issues",
                "Hover and Click States",
              ].map((issue, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg"
                >
                  <div className="w-[53px] h-[53px] bg-[#FFD6F4] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🔍</span>
                  </div>
                  <span className="font-open-sans font-bold text-base leading-[22px] text-[#272727]">
                    {issue}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Heuristic Analysis Section */}
      <section className="w-full bg-[#FAFAFA] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col gap-11 lg:gap-12">
            <div className="flex flex-col gap-3">
              <h3 className="font-display font-normal text-[21px] leading-7 text-black">
                Heuristic Analysis
              </h3>
              <p className="font-open-sans font-normal text-base leading-[22px] text-[#272727] max-w-2xl">
                We decided to look inwards & see what&apos;s missing in the
                existing experience. We achieved this by analysing Amway
                Thailand&apos;s current experience with 10 Heuristic principles
                of UX.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column - Issues */}
              <div className="flex flex-col gap-7">
                {[
                  "Categorisation needs a refresh, as it lacks proper product grouping and clear hierarchy for important information.",
                  "Value discovery is limited as the current search can&apos;t identify user intent, context, or keyword synonyms to deliver personalised results.",
                  "Inconsistent visual hierarchy exists across the storefront",
                  "Lacks essential features like Wishlist/ Save for later capabilities, Category-specific filters, Product Recommender, etc.",
                ].map((issue, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-[53px] h-[53px] bg-[#D6EDFF] rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">📋</span>
                    </div>
                    <p className="font-open-sans font-bold text-base leading-[22px] text-[#272727]">
                      {issue}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Column - Image */}
              <div className="w-full h-[385px] bg-[#D6EDFF] rounded-[13px] flex items-center justify-center">
                <div className="w-full h-full bg-gray-200 rounded-[16px] flex items-center justify-center">
                  <span className="text-lg text-gray-600">
                    Heuristic Analysis Image
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="w-full bg-[#272727] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-15">
            <div className="w-full lg:w-[200px] h-[218px] bg-gray-400 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-4xl">⚠️</span>
            </div>

            <div className="flex flex-col gap-6 flex-1">
              <h3 className="font-display font-medium text-2xl leading-8 text-white">
                Problem Statement
              </h3>
              <p className="font-open-sans font-semibold text-xl leading-8 text-white">
                Amway Thailand&apos;s digital storefront posed serious friction
                across key discovery and browsing journeys. The existing
                experience suffered from fragmented categorization,
                unintelligent search, and inconsistent visual hierarchy - making
                it difficult for customers to find the right products and for
                business owners (ABOs) to support their downlines effectively.
                Essential features like wishlist, contextual filtering, or
                semantic recognition were missing. Additionally, backend-driven
                use cases like stock availability and language-specific pricing
                lacked proper front-end visibility, eroding user trust. A
                unified, scalable, and role-aware UX solution was urgently
                needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key UX Solutions Section */}
      <section className="w-full bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col gap-18">
            <h3 className="font-display font-medium text-3xl leading-[43px] text-[#0C0C0C]">
              Key UX Solutions
            </h3>

            {/* Solution 1: Semantic Search */}
            <div className="flex flex-col lg:flex-row items-center gap-11">
              <div className="flex flex-col gap-6 w-full lg:w-[577px]">
                <h4 className="font-open-sans font-semibold text-2xl leading-[33px] text-black">
                  Semantic Search with Smart Filters
                </h4>
                <p className="font-open-sans font-normal text-base leading-[22px] text-black">
                  Implemented a semantic search experience by configuring
                  backend logic to handle synonyms, spelling variations, and
                  user intent. On the frontend, I designed a responsive
                  interface with: Quick filters in the form of pill-shaped
                  components on the search results page (SRP) for popular
                  categories Advanced filters supporting detailed refinement
                  across categories, solutions, and brands—structured to mimic
                  intuitive navigation Placeholder text in the search bar using
                  market-recommended keywords to help guide users from their
                  first interaction
                </p>
              </div>

              <div className="w-full lg:w-[547px] h-[550px] bg-[#F3FFE8] rounded-[20px] flex items-center justify-center">
                <div className="w-full h-full bg-gray-200 rounded-[20px] flex items-center justify-center">
                  <span className="text-lg text-gray-600">
                    Auto Complete Image
                  </span>
                </div>
              </div>
            </div>

            {/* Solution 2: Product Pages */}
            <div className="flex flex-col lg:flex-row items-center gap-11">
              <div className="w-full lg:w-[517px] h-[562px] bg-[#F7ECFC] rounded-[16px] flex items-center justify-center gap-9 p-8">
                <div className="w-[207px] h-[495px] bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-sm text-gray-600">PDP</span>
                </div>
                <div className="w-[212px] h-[499px] bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-sm text-gray-600">PLP</span>
                </div>
              </div>

              <div className="flex flex-col gap-6 w-full lg:w-[607px]">
                <h4 className="font-open-sans font-semibold text-2xl leading-[33px] text-black">
                  Redesigned Product Listing & Detail Pages (PLP/PDP)
                </h4>
                <p className="font-open-sans font-normal text-base leading-[22px] text-black">
                  Enhanced the card UX for PLPs to improve visual clarity,
                  product comparison, and CTA visibility. Key design
                  improvements: Optimized card density to show more products per
                  fold Applied accessibility standards (contrast, spacing, and
                  hierarchy) Supported stock-unavailable scenarios with
                  meaningful messaging and visual cues.
                </p>
              </div>
            </div>

            {/* Solution 3: Categorization */}
            <div className="flex flex-col lg:flex-row items-center gap-11">
              <div className="flex flex-col gap-6 w-full lg:w-[345px]">
                <h4 className="font-open-sans font-semibold text-2xl leading-[33px] text-black">
                  Solution-Based Categorization for Navigation
                </h4>
                <p className="font-open-sans font-normal text-base leading-[22px] text-black">
                  Replaced the traditional product hierarchy with user-centered
                  categories aligned to user goals (e.g., "Anti-Ageing" vs.
                  "Serums"). This made navigation faster for new customers and
                  easier for ABOs to guide their downlines.
                </p>
              </div>

              <div className="w-full lg:w-[779px] h-[562px] bg-[#FFF2D9] rounded-[16px] flex items-center justify-center">
                <div className="w-full h-full bg-gray-200 rounded-[16px] flex items-center justify-center">
                  <span className="text-lg text-gray-600">
                    Categorization Image
                  </span>
                </div>
              </div>
            </div>

            {/* Solution 4: Backend-Driven UX */}
            <div className="flex flex-col lg:flex-row items-center gap-11">
              <div className="w-full lg:w-[779px] h-[562px] bg-[#E8F3FA] rounded-[21px] flex items-center justify-center">
                <div className="w-full h-full bg-gray-200 rounded-[21px] flex items-center justify-center">
                  <span className="text-lg text-gray-600">
                    Backend UX Image
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-6 w-full lg:w-[345px]">
                <h4 className="font-open-sans font-semibold text-2xl leading-[33px] text-black">
                  Backend-Driven UX Edge Case Handling
                </h4>
                <p className="font-open-sans font-normal text-base leading-[22px] text-black">
                  Collaborated with backend teams to design for real-world
                  scenarios like: Dynamic stock status (in stock, out of stock,
                  limited stock) Semantic search set up Back Office
                  configuration support without breaking UX The frontend was
                  structured to adapt based on these backend inputs without
                  degrading user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="w-full bg-[#272727] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col gap-11 lg:gap-12">
            <h3 className="font-display font-medium text-3xl leading-[43px] text-white">
              Outcomes
            </h3>

            <div className="w-full">
              <p className="font-open-sans font-normal text-2xl leading-9 text-white text-center max-w-4xl mx-auto">
                Enabled faster detection and internal escalation of
                misinformation events within minutes Supported SEBI compliance
                by streamlining structured alert creation and reporting Improved
                cross-functional coordination between PR, Compliance, and CXOs
                Internal testing showed 94% success rate in alert setup for
                misinformation events
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learning Section */}
      <section className="w-full bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col gap-11 lg:gap-12">
            <h3 className="font-display font-medium text-3xl leading-[43px] text-[#0C0C0C]">
              Key Learning
            </h3>

            <div className="w-full">
              <p className="font-open-sans font-normal text-2xl leading-9 text-black text-center max-w-4xl mx-auto">
                Designing for multiple personas requires strict information
                hierarchy Complex AI outputs need transparent, explainable UI
                layers Testing early helped reduce rework and align teams faster
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
