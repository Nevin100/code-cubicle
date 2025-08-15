import ChromaGrid from "@/components/Extra/ChromaGrid/ChromaGrid";

const items = [
  {
    image: "https://i.pravatar.cc/300?img=8",
    title: "Alex Rivera",
    subtitle: "Full Stack Developer",
    handle: "@alexrivera",
    borderColor: "#4F46E5",
    gradient: "linear-gradient(145deg,#4F46E5,#000)",
    url: "https://github.com/",
  },
  {
    image: "https://i.pravatar.cc/300?img=11",
    title: "Jordan Chen",
    subtitle: "DevOps Engineer",
    handle: "@jordanchen",
    borderColor: "#10B981",
    gradient: "linear-gradient(210deg,#10B981,#000)",
    url: "https://linkedin.com/in/",
  },
  {
    image: "https://i.pravatar.cc/300?img=3",
    title: "Morgan Blake",
    subtitle: "UI/UX Designer",
    handle: "@morganblake",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(165deg,#F59E0B,#000)",
    url: "https://dribbble.com/",
  },
  {
    image: "https://i.pravatar.cc/300?img=16",
    title: "Casey Park",
    subtitle: "Data Scientist",
    handle: "@caseypark",
    borderColor: "#EF4444",
    gradient: "linear-gradient(195deg,#EF4444,#000)",
    url: "https://kaggle.com/",
  },
  {
    image: "https://i.pravatar.cc/300?img=25",
    title: "Sam Kim",
    subtitle: "Mobile Developer",
    handle: "@thesamkim",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(225deg,#8B5CF6,#000)",
    url: "https://github.com/",
  },
  {
    image: "https://i.pravatar.cc/300?img=60",
    title: "Tyler Rodriguez",
    subtitle: "Cloud Architect",
    handle: "@tylerrod",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(135deg,#06B6D4,#000)",
    url: "https://aws.amazon.com/",
  },
];

const JudgesSection = () => {
  return (
    <section
      id="judges"
      className="flex flex-col justify-center py-8 sm:py-16 px-6 lg:px-8 max-w-screen-xl mx-auto"
    >
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="mt-12 mb-12 md:mb-14 text-4xl md:text-6xl sm:text-6xl font-bold">
          JUDGES
        </h2>
      </div>

      {/* ChromaGrid Animation */}
      <div className="relative max-w-6xl mx-auto md:h-[800px] h-full mb-10 md:mb-20 sm:h-[600px] transition-all duration-500 ease-out">
        <ChromaGrid
          items={items}
          radius={600}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
    </section>
  );
};

export default JudgesSection;
