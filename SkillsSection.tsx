import React, { useState } from 'react';
import { Cpu, BrainCircuit, Server, Sparkles, Code2, ShieldCheck, Terminal, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from './portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(SKILL_CATEGORIES[0].id);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const selectedCat = SKILL_CATEGORIES.find(c => c.id === activeCategory) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/90">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono uppercase tracking-widest">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 id="skills-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            AI Engineering & <span className="gradient-text">Core Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Proficiency across deep neural frameworks, LLM, and data science libraries.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`p-4 rounded-2xl border transition-all duration-300 flex items-center gap-3 text-left ${
                  isActive
                    ? 'glass-card border-cyan-500/50 bg-cyan-950/20 text-white shadow-xl shadow-cyan-500/10'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${
                  isActive ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  {getCategoryIcon(cat.iconName)}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{cat.name}</div>
                  <div className="text-[11px] text-slate-400">{cat.skills.length} Technical Skills</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Skills Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {selectedCat.skills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4 hover:border-slate-700 transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>{skill.name}</span>
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">Experience: {skill.experience}</span>
                </div>

                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
                  {skill.badge}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Proficiency Mastery</span>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Tech Badge Cloud */}
        <div className="mt-16 p-6 rounded-3xl glass-card border border-slate-800 text-center space-y-3">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center justify-center gap-2">
            <Terminal className="w-4 h-4" />
            <span>All Specified Technologies & Frameworks</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              'Python', 'TensorFlow', 'Scikit-learn', 'Hugging Face', 'Docker',
              'Git', 'AWS', 'FastAPI', 'Machine Learning', 'Deep Learning', 'NLP', 'LLMs',
              'Pandas', 'NumPy', 'Render', 'Streamlit'
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono hover:border-cyan-500/50 hover:text-cyan-300 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
