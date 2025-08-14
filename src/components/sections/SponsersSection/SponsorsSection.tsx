/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

  const formatCategoryName = (name: string) =>
    name.replace(/([a-z])([A-Z])/g, "$1 $2");

  const partners = [
    { src: "/assets/devDisplay2.png" },
    { src: "/assets/kaizen.jpg" },
    { src: "/assets/Tech Savvy.png" },
    { src: "/assets/techLeads.png" },
    { src: "/assets/exploit.png" },
    { src: "/assets/thedevArmy.png" },
    { src: "/assets/webForge.png" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6">
      {/* Main Sponsors Heading */}
      <motion.h1
        id="sponsors"
        className="md:text-6xl mt-16 mb-16 font-bebas text-4xl text-pink font-bold text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={headingVariants}
      >
        SPONSORS
      </motion.h1>

      {Object.entries(categories).map(([category, sponsors]) => (
        <div
          key={category}
          className="w-full max-w-6xl mb-16 flex flex-col items-center"
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bebas font-bold mb-8 mt-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={headingVariants}
          >
            {formatCategoryName(category)}
          </motion.h2>

          <div
            className={`flex flex-wrap justify-center ${
              sponsors.length === 1 ? "items-center w-full" : "gap-4 sm:gap-6"
            }`}
          >
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                className={`relative rounded-3xl overflow-hidden shadow-lg ${
                  sponsors.length === 1
                    ? "w-full h-56 sm:w-96"
                    : "h-56 w-[45%] sm:w-80"
                }`}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                whileHover="hover"
                variants={cardVariants}
              >
                <a
                  href={sponsor.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <img
                    src={sponsor.src}
                    alt={`${category} Sponsor ${index + 1}`}
                    className="w-full p-5 h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-white/50 dark:bg-black/50 backdrop-blur-md flex items-center justify-center">
                    <span className="text-black dark:text-white font-bold text-lg">
                      Sponsors will be unlocked soon 😊
                    </span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {/* Partners Section */}
      <motion.h1
        className="md:text-6xl font-bebas text-4xl text-pink font-bold mb-16 mt-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={headingVariants}
      >
        PARTNERS
      </motion.h1>

      <div className="flex flex-wrap justify-center items-center mb-16 gap-4">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden flex items-center justify-center m-2 md:m-4 h-44 md:h-56 w-[calc(50%-1rem)] sm:w-80"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            whileHover="hover"
            variants={cardVariants}
          >
            <Image
              src={partner.src}
              height={200}
              width={200}
              alt={`partner ${index + 1}`}
              className="w-full p-3 md:p-5 h-full object-contain"
            />
            <div className="absolute inset-0 bg-white/50 dark:bg-black/50 backdrop-blur-md flex items-center justify-center">
              <span className="text-black dark:text-white font-bold text-lg">
                Partners will be unlocked soon 😊
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
