'use client';

import ClientWrapper from '../ClientWrapper';

const PartnersSection = () => {
  return (
    <section id="partners" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Partners</h2>
        <ClientWrapper className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-20 bg-gray-200 rounded flex items-center justify-center">
                Partner {i + 1}
              </div>
            </div>
          ))}
        </ClientWrapper>
      </div>
    </section>
  );
};

export default PartnersSection;
