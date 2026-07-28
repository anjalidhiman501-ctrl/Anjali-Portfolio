import React from 'react';
import { ArrowUp, Github, Mail, FileText, Heart, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from './portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenAiAssistant?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenAiAssistant }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-bold text-cyan-400 text-lg">
                  AR
                </div>
              </div>
              <div>
                <div className="font-bold text-white tracking-wider text-base">ANJALI RANI</div>
                <div className="text-[10px] tracking-widest text-cyan-400 font-mono">AI Developer</div>
              </div>
            </a>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Architecting high-accuracy Neural Networks, Scalable LLM Pipelines, and Production-Ready Computer Vision Systems based in Yamunanagar, Haryana, India.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 transition"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 transition"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 transition"
                title="Resume"
              >
                <FileText className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-cyan-300 transition">About Profile</a></li>
              <li><a href="#projects" className="hover:text-cyan-300 transition">Featured AI Projects</a></li>
              <li><a href="#skills" className="hover:text-cyan-300 transition">Skill Matrices</a></li>
              <li><a href="#timeline" className="hover:text-cyan-300 transition">Career Milestones</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition">Services & Offerings</a></li>
              <li><a href="#contact" className="hover:text-cyan-300 transition">Contact Me</a></li>
            </ul>
          </div>

          {/* Deployed Apps Shortcuts */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">Live AI Deployments</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-mono">
              <li>
                <a href="https://huggingface.co/spaces/anjalidhiman/Potato-Leaf-Disease-Classifier" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition">
                  • Potato Leaf Disease Classifier (CNN)
                </a>
              </li>
              <li>
                <a href="https://fashion-mnist-project-qcmd.onrender.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition">
                  • Fashion MNIST Classifier (Render)
                </a>
              </li>
              <li>
                <a href="https://huggingface.co/spaces/anjalidhiman/churn_prediction_app" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition">
                  • Customer Churn Predictor (ANN)
                </a>
              </li>
              <li>
                <a href="https://house-price-predition.onrender.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition">
                  • House Price Prediction Engine
                </a>
              </li>
              <li>
                <a href="https://book-recommendation-system-2ak6.onrender.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition">
                  • Book Recommendation System
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Sub-footer bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Anjali Rani. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span>Engineered with Precision & Intelligence</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 transition flex items-center gap-1.5"
            title="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
