"use client";

import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
} from "@/components/sections/Partners/logos";

const logosRow1 = [Logo01, Logo02, Logo03, Logo04];
const logosRow2 = [Logo05, Logo06, Logo07, Logo08];

const PartnersSection = () => {
  return (
    <div
      className="md:mt-16 md:mb-13 flex flex-col items-center justify-center px-2 sm:px-6 w-full overflow-x-hidden"
      id="partners"
    >
      <div className="w-full max-w-full md:max-w-screen-lg mx-auto">
        <h2
          className="mb-12 text-center text-4xl font-extrabold leading-tight 
          text-gray-900 dark:text-gray-100 
          md:text-6xl md:leading-snug
          select-none"
        >
          ALL PARTNERS
        </h2>
        <p className="text-center text-xl">
          We&apos;re proud to partner with industry leaders who share our vision
          for a tech-empowered future.
        </p>

        <div className="mt-20 space-y-10 w-full overflow-hidden">
          {/* Row 1 - Left to Right */}
          <div className="flex overflow-hidden w-full">
            <div className="flex animate-scroll-ltr gap-x-8 sm:gap-x-14">
              {logosRow1.concat(logosRow1).map((Logo, i) => (
                <Logo key={`row1-${i}`} />
              ))}
            </div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="flex mt-20 overflow-hidden w-full">
            <div className="flex animate-scroll-rtl gap-x-8 sm:gap-x-14">
              {logosRow2.concat(logosRow2).map((Logo, i) => (
                <Logo key={`row2-${i}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
