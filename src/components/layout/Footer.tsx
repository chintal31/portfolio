import Image from "next/image";
import { CONTACT_INFO } from "@/constants";

export default function Footer() {
  return (
    <footer id="resume" className="bg-gray-100 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
          {/* Left Section - Social Media */}
          <div className="flex-1 flex justify-center md:justify-start">
            <div className="flex flex-col items-center md:items-start gap-4 md:gap-5">
              <h3 className="font-display text-xl md:text-2xl text-gray-800 text-center md:text-left">
                Find me on
              </h3>
              <div className="flex items-center gap-3 md:gap-4">
                {/* LinkedIn */}
                <a
                  href={CONTACT_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 md:w-8 md:h-8 bg-[#0077B5] rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                      fill="#0077B5"
                    />
                    <path
                      d="M11.3076 24.1465H7.68164V13.252H11.3076V24.1465ZM20.209 12.9961C22.5948 12.9962 24.3836 14.5535 24.3838 17.8994V24.1465H20.7578V18.3174C20.7577 16.8536 20.2324 15.8545 18.9199 15.8545C17.9185 15.8547 17.3216 16.5283 17.0596 17.1787C16.9637 17.4118 16.9404 17.7369 16.9404 18.0625V24.1465H13.3145C13.3147 24.0956 13.3621 14.2716 13.3145 13.252H16.9404V14.7949C17.4217 14.0531 18.2841 12.9961 20.209 12.9961ZM9.51855 8C10.7587 8.00018 11.5224 8.81376 11.5459 9.88184C11.5459 10.9279 10.7584 11.7646 9.49414 11.7646H9.4707C8.25362 11.7645 7.46682 10.9278 7.4668 9.88184C7.4668 8.81364 8.27814 8 9.51855 8Z"
                      fill="white"
                    />
                  </svg>
                </a>

                {/* Medium */}
                <a
                  href={CONTACT_INFO.social.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"
                      fill="white"
                    />
                  </svg>
                </a>

                {/* Behance */}
                <a
                  href={CONTACT_INFO.social.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 md:w-8 md:h-8 bg-[#1769FF] rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/images/footer/behance.svg"
                    alt="Behance"
                    width={20}
                    height={20}
                    className="md:w-6 md:h-6"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Center Section - Resume */}
          <div className="flex-1 flex justify-center">
            <div className="flex flex-col items-center gap-5 md:gap-6">
              <h3 className="font-display text-xl md:text-2xl text-gray-800 text-center">
                Want to see details?
              </h3>
              <a
                href="/resume-jashvi-sudra.pdf"
                download="Senior Product Designer | Jashvi Dholakiya.pdf"
                className="inline-flex items-center rounded-full border border-[#d8d8d8] bg-white px-5 py-2.5 font-open-sans text-[15px] font-semibold tracking-wide text-gray-800 transition-colors hover:border-gray-800 hover:bg-gray-800 hover:text-white"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Section - Contact */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="flex flex-col items-center md:items-end gap-5 md:gap-6">
              <h3 className="font-display text-xl md:text-2xl text-gray-900 text-center md:text-right">
                Contact
              </h3>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="font-open-sans font-semibold text-[20px] text-gray-800 hover:text-gray-600 transition-colors text-center md:text-right"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>
        </div>
        <p className="mt-10 font-open-sans text-sm text-left text-gray-600 md:mt-12">
          Designed and built with love by Jashvi Dholakiya (Sudra) © 2026.
        </p>
      </div>
    </footer>
  );
}
