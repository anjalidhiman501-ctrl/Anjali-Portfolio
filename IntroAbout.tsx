import React from 'react';
import { Brain, Cpu, Sparkles, Target, Compass, Award, Rocket, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from './portfolioData';

export const IntroAbout: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/80">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Brain className="w-3.5 h-3.5" />
            <span>AI Developer Profile</span>
          </div>
          <h2 id="about-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            AI Engineer & <span className="gradient-text">Machine Learning Innovation</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Bridging theoretical computer science with high-impact, real-world Machine Learning deployments.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Story & Mindset Column */}
          <div className="lg:col-span-7 glass-card p-8 rounded-3xl border border-slate-800 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-cyan-400" />
                <span>Professional Story</span>
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                As an AI Developer based in Yamunanagar, Haryana, my passion lies at the intersection of deep neural networks, and natural language understanding. I specialize in building end-to-end intelligent pipelines—from dataset preprocessing and feature scaling to deep learning model optimization and production web deployment.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether it is diagnosing agricultural crop diseases using Convolutional Neural Networks (CNNs), predicting customer attrition using Artificial Neural Networks (ANNs), or building vector space recommendation systems, I approach every challenge with mathematical rigor, clean engineering principles, and a relentless focus on model precision.
              </p>
            </div>

            {/* Core Values & Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
              <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-1">
                <div className="text-cyan-400 font-semibold text-sm flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  <span>Problem-Solving Mindset</span>
                </div>
                <p className="text-slate-400 text-xs">
                  Deconstructing complex real-world data issues into clean mathematical learning objectives.
                </p>
              </div>

              <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-1">
                <div className="text-indigo-400 font-semibold text-sm flex items-center gap-2">
                  <Compass className="w-4 h-4" />
                  <span>Future AI Vision</span>
                </div>
                <p className="text-slate-400 text-xs">
                  Empowering industries through responsible, explainable, and hyper-scalable AI model architectures.
                </p>
              </div>
            </div>

          </div>

          {/* Right Highlights & Domains Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Expertise Domains Card */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-purple-400" />
                <span>Core Expertise Domains</span>
              </h4>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Deep Learning & Neural Networks</strong>
                    <span className="text-slate-400 text-xs">CNNs, ANNs, TensorFlow</span>
                  </div>
                </li>

                <li className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">NLP & LLM Architectures</strong>
                    <span className="text-slate-400 text-xs">Transformers, Prompt Engineering</span>
                  </div>
                </li>

                <li className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Classification</strong>
                  </div>
                </li>

                <li className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 text-xs">Docker, FastAPI, Render, AWS, Hugging Face Spaces</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Career Objective Banner */}
            <div className="glass-card p-6 rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/40 via-slate-950 to-slate-950 space-y-2">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
                <Rocket className="w-4 h-4" />
                <span>Career Objective</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
