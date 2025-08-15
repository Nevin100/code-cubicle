import { Metadata } from "next";
import Footer from "@/components/Footer/Footer";
import PartnersSection from "@/components/sections/Partners/PartnersSection";
import ProblemStatementsSection from "@/components/sections/ProblemStatements/ProblemStatementsSection";
import MentorsSection from "@/components/sections/Mentors/MentorsSection";
import SponsorsSection from "@/components/sections/SponsersSection/SponsorsSection";
import ContactSection from "@/components/sections/ContactSection/ContactSection";
import Navbar from "@/components/Navbar/Navbar";
import TimelineSection from "@/components/sections/TimelineSection/TimelineSection";
import FAQSection from "@/components/sections/FAQSection/FAQSection";
import HeroSection from "@/components/sections/HeroSection/HeroSection";
import Galaxy from "@/components/Extra/Background/Background";

export const metadata: Metadata = {
  title: "CodeCubicle - Innovation Hub",
  description: "Welcome to CodeCubicle - Where Innovation Meets Excellence",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <div style={{ width: "100%", position: "relative" }}>
        <Galaxy
          mouseRepulsion={false}
          mouseInteraction={false}
          density={0.8}
          glowIntensity={0.1}
          saturation={0.1}
          repulsionStrength={0.4}
          rotationSpeed={0.02}
          autoCenterRepulsion={0.4}
        />
      </div>
      <Navbar

        items={[
          { label: "Home", href: "#hero" },
          { label: "Partners", href: "#partners" },
          { label: "Timeline", href: "#timeline" },
          { label: "Problems", href: "#problems" },
          { label: "Mentors", href: "#mentors" },
          { label: "Sponsors", href: "#sponsors" },
          { label: "Contact", href: "#contact" },
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
      <HeroSection />
      <PartnersSection />
      <TimelineSection />
      <ProblemStatementsSection />
      <MentorsSection />
      <SponsorsSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
