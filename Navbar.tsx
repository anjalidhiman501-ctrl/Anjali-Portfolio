import React, { useState, useEffect } from 'react';
import { Bot, FileText, Menu, X, Sparkles, Send, Github, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from './portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenAiAssistant?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenAiAssistant }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'projects', 'skills', 'timeline', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3 shadow-2xl' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" id="nav-brand-logo" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-bold text-cyan-400 text-lg">
              AR
            </div>
          </div>
          <div>
            <div className="font-bold text-slate-100 tracking-wider text-base flex items-center gap-1.5">
              <span>ANJALI RANI</span>
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            </div>
            <div className="text-[10px] tracking-widest text-cyan-400/80 uppercase font-mono">
              AI Developer
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <nav id="desktop-nav-links" className="hidden md:flex items-center gap-1 glass-card px-4 py-1.5 rounded-full border-slate-800">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Resume Viewer/Downloader */}
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold hover:opacity-95 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 text-xs font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold shadow-lg shadow-cyan-500/20"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
