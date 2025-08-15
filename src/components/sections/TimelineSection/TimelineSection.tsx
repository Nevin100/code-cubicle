import Timeline from "./Timeline";

const changelog = [
  {
    title: "Grand Finale Round",
    description:
      "The top 15 teams from the online round will participate in an 8-hour on-site hackathon at the Microsoft Office, Bangalore.",
    version: "Offline",
    date: "2025-09-27",
  },
  {
    title: "Online Round",
    description:
      "250 shortlisted teams will present their projects live over Google Meet. The top 15 teams will be selected for the Grand Finale.",
    version: "Online",
    date: "2025-09-14",
  },
  {
    title: "Profile Shortlisting",
    description:
      "Initial shortlisting based on LinkedIn and GitHub profiles. The top 250 teams will move to the online pitch round.",
    version: "Online",
    date: "2025-08-09",
  },
];

export default function TimelineSection() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center  p-4 pt-16 sm:p-8 md:pt-24 md:mb-14">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center mb-16 px-4">
          <h1 className="text-4xl md:text-6xl mt-6 font-bold text-primary mb-10 md:mb-12 font-headline">
            Code Cubicle 5.0 Timeline
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto md:mb-8 mb-6">
            Follow the journey of Code Cubicle 5.0 from initial shortlisting to
            the grand finale. Here are the key dates and milestones.
          </p>
        </header>
        <Timeline events={changelog} />
      </div>
    </main>
  );
}
