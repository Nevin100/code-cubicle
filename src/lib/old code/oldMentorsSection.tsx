"use client";

import ClientWrapper from "../../components/ClientWrapper";

const MentorsSection = () => {
  return (
    <section id="mentors" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Mentors & Judges
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <ClientWrapper key={i} delay={i * 0.1} className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4" />
              <h3 className="text-lg font-semibold">Mentor Name</h3>
              <p className="text-gray-600">Position</p>
            </ClientWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
