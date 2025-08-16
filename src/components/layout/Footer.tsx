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

                {/* Instagram */}
                <a
                  href={CONTACT_INFO.social.instagram}
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
                      d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
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
                    src="/images/behance.svg"
                    alt="Behance"
                    width={20}
                    height={20}
                    className="md:w-6 md:h-6"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Center Section - Portfolio/Resume */}
          <div className="flex-1 flex justify-center">
            <div className="flex flex-col items-center gap-5 md:gap-7">
              <h3 className="font-display text-lg sm:text-xl md:text-xl lg:text-2xl text-gray-800 text-center">
                Want to see my work?
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-black rounded-lg flex items-center justify-center">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.67 4.5L18.5 9.33V20.5H6.5V4.5H13.67ZM14.5 2.5H6.5C5.4 2.5 4.5 3.4 4.5 4.5V20.5C4.5 21.6 5.4 22.5 6.5 22.5H18.5C19.6 22.5 20.5 21.6 20.5 20.5V8.5L14.5 2.5ZM12.5 14.5C13.6 14.5 14.5 13.6 14.5 12.5C14.5 11.4 13.6 10.5 12.5 10.5C11.4 10.5 10.5 11.4 10.5 12.5C10.5 13.6 11.4 14.5 12.5 14.5ZM16.5 17.93C16.5 17.12 16.02 16.4 15.28 16.08C14.43 15.71 13.49 15.5 12.5 15.5C11.51 15.5 10.57 15.71 9.72 16.08C8.98 16.4 8.5 17.12 8.5 17.93V18.5H16.5V17.93Z"
                      fill="white"
                    />
                  </svg>
                </div>
                {/* TODO: add resume link */}
                <span className="font-open-sans text-lg sm:text-xl md:text-xl lg:text-2xl text-gray-800">
                  Resume
                </span>
              </div>
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
                className="font-open-sans text-lg md:text-xl lg:text-2xl text-gray-800 hover:text-gray-600 transition-colors text-center md:text-right"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
