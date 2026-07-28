import React, { useState } from 'react';
import { GraduationCap, Award, Briefcase, Milestone, CheckCircle2, Calendar } from 'lucide-react';
import { TIMELINE_ITEMS } from '../data/portfolioData';

export const TimelineSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredItems = filter === 'all'
    ? TIMELINE_ITEMS
    : TIMELINE_ITEMS.filter(item => item.type === filter);

  const getItemIcon = (type: string) => {
    switch (type) {
      case 'education': return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case 'certification': return <Award className="w-5 h-5 text-purple-400" />;
    
      default: return <Milestone className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="timeline" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-widest">
            <Milestone className="w-3.5 h-3.5" />
            <span>Career Milestones & Background</span>
          </div>
          <h2 id="timeline-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education, Experience & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Academic achievements, professional certifications, industry internships, and open-source milestones.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Milestones' },
            { id: 'education', label: 'Education' },
            { id: 'certification', label: 'Certifications' },
            
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                filter === tab.id
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto space-y-8 before:absolute before:inset-0 before:left-6 sm:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-indigo-500 before:to-purple-600">
          {filteredItems.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={item.id}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node Point */}
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-950 border border-slate-700 shadow-xl shrink-0 z-10 absolute left-0 sm:left-1/2 -translate-x-1/2 group-hover:border-cyan-400 transition-colors">
                  {getItemIcon(item.type)}
                </div>

                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] sm:w-[calc(50%-2.5rem)] ml-16 sm:ml-0 glass-card p-6 rounded-3xl border border-slate-800 hover:border-slate-700 transition">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                      <Calendar className="w-3 h-3" />
                      {item.year}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>

                  <div className="text-xs font-mono text-slate-400 mb-3">
                    {item.organization}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <ul className="space-y-1.5 pt-2 border-t border-slate-800">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
