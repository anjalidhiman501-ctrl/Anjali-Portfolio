import React, { useState } from 'react';
import { Sparkles, TrendingUp, Eye, MessageSquareText, Bot, BarChart3, ShieldCheck, CloudUpload, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { Service } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-cyan-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      case 'Eye': return <Eye className="w-6 h-6 text-indigo-400" />;
      case 'MessageSquareText': return <MessageSquareText className="w-6 h-6 text-purple-400" />;
      case 'Bot': return <Bot className="w-6 h-6 text-cyan-400" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'CloudUpload': return <CloudUpload className="w-6 h-6 text-indigo-400" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950/90">
      {/* Background Orbs */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Professional Offerings</span>
          </div>
          <h2 id="services-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Specialized <span className="gradient-text">AI & ML Services</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Custom neural software engineering, LLM pipeline development, computer vision models, and MLOps deployments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="glass-card glass-card-hover p-6 rounded-3xl border border-slate-800/80 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 w-fit group-hover:scale-110 transition-transform">
                  {getServiceIcon(srv.iconName)}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {srv.shortDesc}
                  </p>
                </div>

                {/* Deliverables checklist */}
                <div className="space-y-1.5 pt-2">
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Key Deliverables:</div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {srv.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-slate-800/80 mt-6">
                <button
                  onClick={() => onSelectService(srv.title)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 text-cyan-300 text-xs font-semibold flex items-center justify-center gap-2 transition"
                >
                  <span>Inquire Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
