"use client";

import ClientWrapper from "@/components/ClientWrapper";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden md:mt-[-6rem] py-16"
      id="about"
    >
      {/* Animated Background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12",
          "pointer-events-none"
        )}
      />

      <section id="about" className="pt-20 pb-16 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid-gray-100 opacity-40 pointer-events-none dark:bg-grid-gray-900 dark:opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ClientWrapper>
            <div className="flex items-center justify-center px-6">
              {/* Left Content */}
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-bold !leading-[1.2] ">
                  CODE CUBICLE - 5.0
                </h1>

                <p className="mt-6 text-[25px] md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  CodeCubicle is a hub for{" "}
                  <strong className="font-semibold text-gray-900 dark:text-gray-100">
                    innovation, collaboration, and technological advancement.
                  </strong>{" "}
                  We bring together brilliant minds to solve real-world problems
                  and create impactful solutions. Our platform connects problem
                  solvers, innovators, and organizations to foster a community
                  driven by creativity and excellence.
                </p>
              </div>
            </div>
          </ClientWrapper>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
