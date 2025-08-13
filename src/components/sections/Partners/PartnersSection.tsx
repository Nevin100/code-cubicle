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

const PartnersSection = () => {
  return (
    <div className="md:mt-16 md:mb-13 flex items-center justify-center px-6">
      <div>
        <h2
          className="mb-12 text-center text-4xl font-extrabold leading-tight 
        text-gray-900 dark:text-gray-100 
        md:text-6xl md:leading-snug
        select-none
      "
        >
          ALL PARTNERS
        </h2>
        <p className="text-center text-xl">
          We&apos;re proud to partner with industry leaders who share our vision
          for a tech-empowered future.
        </p>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-14 gap-y-10 max-w-screen-lg">
          <Logo01 />
          <Logo02 />
          <Logo03 />
          <Logo04 />
          <Logo05 />
          <Logo06 />
          <Logo07 />
          <Logo08 />
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
