import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/sections/AboutSection';
import PartnersSection from '@/components/sections/PartnersSection';
import TimelineSection from '@/components/sections/TimelineSection';
import ProblemStatementsSection from '@/components/sections/ProblemStatementsSection';
import MentorsSection from '@/components/sections/MentorsSection';
import SponsorsSection from '@/components/sections/SponsorsSection';
import ContactSection from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'CodeCubicle - Innovation Hub',
  description: 'Welcome to CodeCubicle - Where Innovation Meets Excellence',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutSection />
      <PartnersSection />
      <TimelineSection />
      <ProblemStatementsSection />
      <MentorsSection />
      <SponsorsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}