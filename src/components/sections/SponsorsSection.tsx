'use client';

import ClientWrapper from '../ClientWrapper';

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <ClientWrapper
              key={i}
              delay={i * 0.1}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="h-20 bg-gray-200 rounded flex items-center justify-center">
                Sponsor {i + 1}
              </div>
            </ClientWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
