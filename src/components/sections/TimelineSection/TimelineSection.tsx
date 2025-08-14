const changelog = [
  {
    title: "Grand Finale Round",
    description:
      "Offline Round – Code Cubicle 5.0 The Offline Grand Finale will take place on 27th September'2025 at the prestigious Microsoft Office, Bangalore. The top 15 teams from the online round will be invited to participate in an 8-hour on-site hackathon, where they’ll present impactful solutions to expert judges, and compete for exciting prizes.",
    version: "Offline",
    date: "2025-09-27",
  },
  {
    title: "Online Round",
    description:
      "The online round serves as the qualifier stage, where around 250 shortlisted teams will present their projects or prototypes live over Google Meet on 14th Sept'2025. Each team gets 5 minutes to pitch their idea followed by a 2-minute Q&A with the judging panel. Based on innovation, feasibility, and clarity of presentation, the top 15 teams will be selected for the on-site Grand Finale at Microsoft Office, Bangalore.",
    version: "Online",
    date: "2025-09-14",
  },
  {
    title: "Profile shortlisting round",
    description:
      "Before the online pitch round, participants will undergo an initial shortlisting based on their LinkedIn and GitHub profiles submitted during registration. This helps us identify passionate builders with a track record of projects, contributions, or community involvement. Only the top 250 teams will be selected to move forward to the online pitch round",
    version: "Online",
    date: "2025-08-09",
  },
];

export default function Timeline() {
  return (
    <div
      className="max-w-screen-sm md:mx-auto py-12 md:py-20 px-6"
      id="timeline"
    >
      {/* Title */}
      <h2
        className="mb-12 mt-12 text-center text-4xl font-extrabold leading-tight 
        text-gray-900 dark:text-gray-100 
        md:text-6xl md:leading-snug
        select-none
      "
      >
        TIMELINE
      </h2>

      <div className="relative">
        {changelog
          .slice() // clone array to avoid mutating original
          .reverse()
          .map(({ title, description, date, version }, index) => (
            <div key={index} className="group relative">
              <div className="flex items-start">
                <div className="mt-3 mr-5 flex flex-col gap-2 shrink-0 w-[75px] sm:w-[90px] text-end">
                  <h6 className="text-sm font-semibold text-primary dark:text-primary-light">
                    v{version}
                  </h6>
                  <span className="text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground-dark">
                    {date}
                  </span>
                </div>
                <div className="relative pb-10 border-l-2 border-primary dark:border-primary-light group-last:pb-4 pl-6 sm:pl-8 space-y-2">
                  {/* Timeline Dot */}
                  <div className="absolute h-3 w-3 -translate-x-1/2 -left-px top-4 rounded-full border-2 border-primary dark:border-primary-light bg-background dark:bg-background-dark" />

                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground dark:text-muted-foreground-dark">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
