'use client';

import ClientWrapper from '../ClientWrapper';

const ProblemStatementsSection = () => {
  return (
    <section id="problems" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Problem Statements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <ClientWrapper
              key={i}
              delay={i * 0.1}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">Problem {i + 1}</h3>
              <p className="text-gray-600">Description of the problem statement goes here.</p>
            </ClientWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatementsSection;
