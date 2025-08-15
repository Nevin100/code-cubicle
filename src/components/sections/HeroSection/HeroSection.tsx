"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useTheme } from "next-themes";
import RotatingCubeComponent from "@/components/Extra/3DModel/3DModel";

export default function HomePage() {
  const leftRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  const textColor = isDark ? "text-white" : "text-black";
  const subTextColor = isDark ? "text-gray-300" : "text-gray-700";
  const statTextColor = isDark ? "text-white" : "text-black";
  const statSubTextColor = isDark ? "text-gray-400" : "text-gray-500";

  return (
    <main
      id="hero"
      className={`min-h-screen sm:mt-14 px-6 md:px-32 py-16 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-center transition-colors duration-300 ${textColor}`}
    >
      {/* LEFT SIDE */}
      <div
        ref={leftRef}
        className="flex flex-col justify-center md:pl-10 lg:pl-20"
      >
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
        >
          Code Cubicle 5.0
        </motion.h1>

        <p
          className={`mt-6 sm:mt-8 text-[20px] sm:text-[22px] md:text-lg leading-relaxed max-w-2xl ${subTextColor}`}
        >
          CodeCubicle is a hub for{" "}
          <strong className={`font-semibold ${textColor}`}>
            innovation, collaboration, and technological advancement.
          </strong>{" "}
          We bring together brilliant minds to solve real-world problems and
          create impactful solutions. Our platform connects problem solvers,
          innovators, and organizations to foster a community driven by
          creativity and excellence.
        </p>

        {/* Stats Section */}
        <div className="mt-10 sm:mt-12 flex flex-wrap gap-8 sm:gap-12 items-start">
          <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col">
            <span className={`text-3xl sm:text-4xl font-bold ${statTextColor}`}>
              800+
            </span>
            <span className={`text-sm ${statSubTextColor} text-left`}>
              Registrations
            </span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col">
            <span className={`text-3xl sm:text-4xl font-bold ${statTextColor}`}>
              27th Sept 2025
            </span>
            <span className={`text-sm ${statSubTextColor} text-left`}>
              Date
            </span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col">
            <span className={`text-3xl sm:text-4xl font-bold ${statTextColor}`}>
              Microsoft Office - Bengaluru
            </span>
            <span className={`text-sm ${statSubTextColor} text-left`}>
              Venue
            </span>
          </motion.div>
        </div>

        {/* Register Button */}
        <div className="mt-8 sm:mt-12">
          <a
            href="https://unstop.com/hackathons/code-cubicle-5-geek-room-1537583"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 via-pink-700 to-purple-800 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 text-lg sm:text-2xl"
          >
            Register Now
          </a>
        </div>
      </div>

      {/* RIGHT SIDE - Responsive Cube */}
      <div className="flex justify-center items-center w-full md:ml-8 mt-8 md:mt-0">
        <div className="w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] aspect-square">
          <RotatingCubeComponent />
        </div>
      </div>
    </main>
  );
}
