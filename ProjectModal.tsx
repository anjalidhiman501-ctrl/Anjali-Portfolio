import React from 'react';
import { X, ExternalLink, Github, Cpu, Layers, CheckCircle, BarChart3, ShieldCheck } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-xl animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl glass-card rounded-3xl border border-slate-700 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/80 sticky top-0 z-20 backdrop-blur-md">
          <div>
            <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
              {project.subcategory}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          
          {/* Image Banner */}
          <div className="relative rounded-2xl overflow-hidden aspect-video border border-slate-800 group">
            <img
              src={project.imageUrl}
              alt={project.imageAlt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300 bg-slate-900/90 px-3 py-1 rounded-lg border border-slate-700">
                Model: {project.modelType}
              </span>
              
              <div className="flex gap-2">
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400 flex items-center gap-1.5 shadow-lg"
                >
                  <span>Launch App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Full Description */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider font-mono">
              Project Architecture & Overview
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Performance Metrics Grid */}
          <div className="grid grid-cols-3 gap-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800 text-center">
                <div className="text-lg font-extrabold text-cyan-400">{m.value}</div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Neural Architecture Flow */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold">
              <Layers className="w-4 h-4" />
              <span>Layer Pipeline & Data Transformation</span>
            </div>
            <div className="font-mono text-xs text-slate-300 bg-slate-950 p-3 rounded-xl border border-slate-800/80 overflow-x-auto">
              {project.architecture}
            </div>
          </div>

          {/* Key Features & Achievements */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider font-mono">
              Key Engineering Features
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <h4 className="text-xs font-mono text-slate-400">Technologies Utilized</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 text-cyan-300 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-slate-800 bg-slate-900/80 flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-2 transition"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>

          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:opacity-95 transition"
          >
            <span>Open Live Application</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
