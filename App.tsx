import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroAbout } from './components/IntroAbout';
import { Projects } from './components/Projects';
import { SkillsSection } from './components/SkillsSection';
import { TimelineSection } from './components/TimelineSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);

  const handleSelectService = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* About Profile */}
      <IntroAbout />

      {/* Featured AI/ML Projects ("My Work") */}
      <Projects />

      {/* Technical Skill Matrices */}
      <SkillsSection />

      {/* Interactive Career Timeline */}
      <TimelineSection />

      {/* Services & Offerings */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* Contact Form */}
      <ContactSection
        onOpenResume={() => setIsResumeOpen(true)}
        prefilledService={prefilledService}
      />

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
