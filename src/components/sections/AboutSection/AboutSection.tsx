import MagicBento from "@/components/Extra/MagicBento/MagicBento";

const AboutSection = () => {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden">
        <MagicBento 
  textAutoHide={true}
  enableStars={true}
  enableSpotlight={true}
  enableBorderGlow={true}
  enableTilt={false}
  enableMagnetism={false}
  clickEffect={true}
  spotlightRadius={100}
  particleCount={12}
  glowColor="255,255,255"
/>
    </section>
  );
};

export default AboutSection;
