import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Sparkles, Terminal, Code2, Bot, MapPin, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenAiAssistant?: () => void;
}

const TYPING_PHRASES = [
  "AI & Deep Learning Engineer",
  "NLP",
  "Transformer and LLM",
  "FastAPI"
];

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenAiAssistant }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[textIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Cinematic Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-mono shadow-xl backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 font-semibold">{PERSONAL_INFO.statusBadge}</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Main Title & Typewriter */}
            <div className="space-y-3">
              <h1 id="hero-heading" className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                Hi, I'm <span className="gradient-text">Anjali Rani</span>
              </h1>
              
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start font-mono text-lg sm:text-2xl text-cyan-400">
                <Terminal className="w-5 h-5 mr-2 text-indigo-400 shrink-0" />
                <span>{TYPING_PHRASES[textIndex].substring(0, charIndex)}</span>
                <span className="animate-pulse ml-1 inline-block w-2.5 h-6 bg-cyan-400" />
              </div>
            </div>

            {/* Professional Tagline */}
            <p id="hero-tagline" className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {PERSONAL_INFO.tagline}
            </p>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                id="hero-cta-projects"
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                id="hero-cta-resume"
                onClick={onOpenResume}
                className="px-6 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-slate-500 text-slate-200 font-medium text-sm hover:bg-slate-800 transition-all duration-300 flex items-center gap-2 backdrop-blur-md active:scale-95"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <a
                id="hero-cta-contact"
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-slate-900/60 border border-cyan-500/30 text-cyan-300 font-medium text-sm hover:bg-cyan-950/40 hover:border-cyan-400 transition-all duration-300 flex items-center gap-2 active:scale-95"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Hero Profile Showcase */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative group max-w-sm w-full">
              
              {/* Outer Glowing Cyber Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow" />

              {/* Main Card */}
              <div className="relative bg-slate-950 rounded-3xl p-4 border border-slate-800 shadow-2xl backdrop-blur-xl">
                
                {/* Image Frame */}
                <div className="relative rounded-2xl overflow-hidden aspect-square border border-slate-800/80">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.profileImageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

                  {/* Tech Floating Badge Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl glass-card border border-white/10 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-slate-200 font-semibold">
                        <Code2 className="w-4 h-4 text-cyan-400" />
                        <span>CNN • ANN • LLM • NLP</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[10px]">
                         TF
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Sub-stats */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                  <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    <div className="text-lg font-bold text-white">5+ Deployed</div>
                    <div className="text-[11px] text-slate-400">AI / ML Projects</div>
                  </div>
                  <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    <div className="text-lg font-bold text-cyan-400">88.4%</div>
                    <div className="text-[11px] text-slate-400">Avg Model Accuracy</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Ticker Bar */}
        <div id="hero-stats-ticker" className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="glass-card p-4 rounded-2xl border border-slate-800/80 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-white">{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
