import { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AboutSection from "@/components/sections/AboutSection/AboutSection";
import PartnersSection from "@/components/sections/Partners/PartnersSection";
import TimelineSection from "@/components/sections/TimelineSection/TimelineSection";
import ProblemStatementsSection from "@/components/sections/ProblemStatements/ProblemStatementsSection";
import MentorsSection from "@/components/sections/Mentors/MentorsSection";
import SponsorsSection from "@/components/sections/SponsersSection/SponsorsSection";
import ContactSection from "@/components/sections/ContactSection/ContactSection";
import FAQSection from "@/components/sections/FAQSection/FAQSection";

export const metadata: Metadata = {
  title: "CodeCubicle - Innovation Hub",
  description: "Welcome to CodeCubicle - Where Innovation Meets Excellence",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutSection />
      <div className="flex items-center justify-evenly mt-10 gap-[-5px] max-w-7xl mx-auto"></div>
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
