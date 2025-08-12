"use client";

import ClientWrapper from "@/components/ClientWrapper";

const AboutSection = () => {
  return (
    <section id="about" className="pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ClientWrapper className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            About CodeCubicle
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            CodeCubicle is a hub for innovation, collaboration, and
            technological advancement. We bring together brilliant minds to
            solve real-world problems and create impactful solutions.
          </p>
        </ClientWrapper>
      </div>
    </section>
  );
};

export default AboutSection;
