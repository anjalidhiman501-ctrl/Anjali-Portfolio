import React, { useState } from 'react';
import { ExternalLink, Github, Code, Sparkles, Layers, ArrowUpRight, Cpu } from 'lucide-react';
import { PROJECTS } from './portfolioData';
import { Project } from './types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Deep Learning', 'Machine Learning', 'NLP & Recommenders', 'Transformer', 'LLM'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>Featured Portfolio & Deployed AI Systems</span>
          </div>
          <h2 id="projects-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            My Production <span className="gradient-text">AI / ML Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Live deployed Deep Learning models, CNN/ANN classifiers, and intelligent ML recommendation engines.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-slate-800/80 flex flex-col justify-between group"
            >
              {/* Image Thumbnail Header */}
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 border-b border-slate-800">
                  <img
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  {/* Subcategory Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-slate-700 text-cyan-400 text-[11px] font-mono backdrop-blur-md">
                      {project.subcategory}
                    </span>
                  </div>

                  {/* Live Launcher Hover Icon */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:scale-110 transition shadow-lg flex items-center justify-center"
                      title="Launch Live Demo"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Card Info Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Highlights Metric Chips */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="bg-slate-900/90 p-2 rounded-xl border border-slate-800/80 text-center">
                        <div className="text-xs font-bold text-cyan-400 font-mono">{m.value}</div>
                        <div className="text-[10px] text-slate-400 font-mono truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-[10px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-medium text-slate-300 hover:text-cyan-400 flex items-center gap-1 transition"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Specs & Architecture</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition"
                    title="View GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 text-cyan-300 text-xs font-semibold flex items-center gap-1 transition"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
