/* eslint-disable @next/next/no-img-element */
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const Sponsors = () => {
  const categories = {
    Title: [{ src: "/assets/Reactive.png", url: "https://reactive.network" }],
    PoweredBy: [{ src: "/assets/GROQ.jpg", url: "https://groq.com/" }],
    Platinum: [{ src: "/assets/pathway.png", url: "https://www.pathway.com" }],
    Gold: [
      { src: "/assets/aihello.png", url: "https://www.aihello.com" },
      { src: "/assets/neoappAI.png", url: "https://neoapps.ai/" },
      { src: "/assets/GitHub.png", url: "https://github.com" },
      { src: "/assets/cloudCraft.jpg" },
      { src: "/assets/reinaiScience.jpg" },
    ],
    Silver: [
      { src: "/assets/wolfram.png", url: "https://www.wolfram.com" },
      { src: "/assets/appwrite.png", url: "https://appwrite.io" },
      { src: "/assets/quilshield.png", url: "https://shield.quillai.network/" },
    ],
    Bronze: [
      { src: "/assets/aptos.png", url: "https://aptosfoundation.org" },
      { src: "/assets/balamsiq.png", url: "https://balsamiq.com" },
      { src: "/assets/beeceptor.png", url: "https://www.beeceptor.com" },
      { src: "/assets/ethindia.png", url: "https://ethindia.devfolio.co" },
      { src: "/assets/interview buddy.png", url: "https://interviewbuddy.net" },
      { src: "/assets/polygon.png", url: "https://www.polygon.technology" },
      { src: "/assets/unifest.png", url: "https://www.unifest.in" },
      { src: "/assets/codecrafter.svg", url: "https://codecrafters.io/" },
    ],
  };

  const formatCategoryName = (name: string) => {
    return name.replace(/([a-z])([A-Z])/g, "$1 $2");
  };

  const partners = [
    { src: "/assets/devDisplay2.png" },
    { src: "/assets/kaizen.jpg" },
    { src: "/assets/Tech Savvy.png" },
    { src: "/assets/techLeads.png" },
    { src: "/assets/exploit.png" },
    { src: "/assets/thedevArmy.png" },
    { src: "/assets/webForge.png" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="md:text-6xl mt-12 font-bebas text-4xl text-pink font-bold mb-12 text-center">
        SPONSORS
      </h1>

      {Object.entries(categories).map(([category, sponsors]) => (
        <div
          key={category}
          className="w-full max-w-6xl px-4 sm:px-6 mb-12 flex flex-col items-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bebas text-pink mb-6 text-center">
            {formatCategoryName(category)}
          </h2>
          <div
            className={`flex flex-wrap justify-center ${
              sponsors.length === 1 ? "items-center w-full" : "gap-4 sm:gap-6"
            }`}
          >
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white rounded-3xl shadow-lg overflow-hidden flex items-center justify-center ${
                  sponsors.length === 1
                    ? "w-full h-56 sm:w-96"
                    : "h-56 w-[45%] sm:w-80"
                }`}
              >
                <img
                  src={sponsor.src}
                  alt={`${category} Sponsor ${index + 1}`}
                  className="w-full p-5 h-full object-contain hover:scale-110 transition-all duration-300 ease-in-out"
                />
              </a>
            ))}
          </div>
        </div>
      ))}

      <h1 className="md:text-6xl font-bebas text-4xl text-pink font-bold mb-12  text-center mt-14">
        PARTNERS
      </h1>

      <div className="flex justify-center items-center mb-2">
        <div className="w-full h-48 sm:h-52 bg-white rounded-3xl shadow-lg overflow-hidden p-14">
          <Image
            src="/assets/mlh-logo-color.png"
            alt={`Partner MLH`}
            height={200}
            width={200}
            className="w-full h-full object-contain hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
      <div className="my-2 space-x-3 text-white mb-12">
        <a
          href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <span className="font-bold">Read the MLH Code of Conduct</span>
          <FaExternalLinkAlt />
        </a>
      </div>

      <div className="w-full px-4 sm:px-6 mb-12 flex flex-wrap items-center justify-center">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden flex items-center justify-center m-2 md:m-4  h-44 md:h-56 w-[calc(50%-1rem)] sm:w-80"
          >
            <Image
              src={partner.src}
              height={200}
              width={200}
              alt={`partner ${index + 1}`}
              className="w-full  p-3 md:p-5  h-full object-contain hover:scale-110 transition-all duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
