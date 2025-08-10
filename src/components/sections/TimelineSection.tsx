'use client';

import ClientWrapper from '../ClientWrapper';

const TimelineSection = () => {
  const timelineEvents = ['Registration', 'Kickoff', 'Development', 'Final Presentation'];

  return (
    <section id="timeline" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Event Timeline</h2>
        <div className="relative">
          {timelineEvents.map((phase, i) => (
            <ClientWrapper
              key={i}
              direction={i % 2 === 0 ? 'right' : 'left'}
              className="flex items-center mb-8"
            >
              <div className="w-full bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{phase}</h3>
                <p className="text-gray-600">Description for {phase.toLowerCase()} phase</p>
              </div>
            </ClientWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
