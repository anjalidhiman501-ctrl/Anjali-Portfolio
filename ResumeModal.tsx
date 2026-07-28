import React, { useRef } from 'react';
import { X, Download, Printer, FileText, CheckCircle2, Mail, MapPin, ExternalLink, Github, Globe } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, TIMELINE_ITEMS } from './portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const resumeRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const resumeText = `
================================================================
ANJALI RANI — AI DEVLOPER RESUME
================================================================
Location: Yamunanagar, Haryana, India
Email: anjalidhiman501@gmail.com
GitHub: https://github.com/anjalidhiman
Hugging Face: https://huggingface.co/anjalidhiman

SUMMARY:
Passionate AI Devloper specializing in Machine Learning, Deep Learning (CNN/ANN), NLP, and LLMs. Experienced in developing, training, and deploying production AI systems with high precision.

PRIMARY SKILLS:
- Languages & Frameworks: Python, TensorFlow, Scikit-learn, FastAPI, Pandas, NumPy
- NLP : Hugging Face Transformers, LLMs, Prompt Engineering
- Tools: Docker, Git, Render, Hugging Face Spaces

FEATURED DEPLOYED PROJECTS:
1. Potato Leaf Disease Classifier (CNN) - https://huggingface.co/spaces/anjalidhiman/Potato-Leaf-Disease-Classifier
   - 98.2% Validation Accuracy for agricultural crop disease identification.

2. Fashion MNIST Classifier (CNN) - https://fashion-mnist-project-qcmd.onrender.com
   - Deep CNN classifying 10 apparel categories deployed on Render.

3. Customer Churn Prediction App (ANN) - https://huggingface.co/spaces/anjalidhiman/churn_prediction_app
   - Artificial Neural Network estimating customer attrition risks with ROC-AUC 0.91.

4. House Price Prediction Engine - https://house-price-predition.onrender.com
   - Supervised ML ensemble algorithm estimating housing valuations.

5. Book Recommendation System - https://book-recommendation-system-2ak6.onrender.com
   - Hybrid recommendation engine utilizing matrix factorization and cosine similarity.

EDUCATION & CERTIFICATIONS:
- B.sc in (computer science) 
- Diploma in Artificial Intelligence Application
================================================================
`;
    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Anjali_Rani_AI_Developer_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl glass-card rounded-3xl border border-slate-700 shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Anjali Rani — Official Resume</h3>
              <p className="text-slate-400 text-xs font-mono">AI Developer • Curriculum Vitae</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs flex items-center gap-1.5 shadow-lg shadow-cyan-500/20 hover:opacity-90 transition"
            >
              <Download className="w-4 h-4" />
              <span>Download Text</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition ml-2"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div ref={resumeRef} className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-950 text-slate-200 print:bg-white print:text-slate-900 print:p-0">
          
          {/* Header Contact Block */}
          <div className="border-b border-slate-800 pb-6 print:border-slate-300">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white print:text-slate-900">ANJALI RANI</h1>
            <p className="text-cyan-400 font-mono text-sm sm:text-base font-bold print:text-cyan-700 mt-1">AI Developer | MACHINE LEARNING & DEEP LEARNING SPECIALIST</p>
            
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-300 print:text-slate-700">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.email}
              </span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-cyan-400 hover:underline">
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest font-mono print:text-slate-900">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Key Technical Skills Matrix */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest font-mono print:text-slate-900">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl print:bg-slate-100 print:border-slate-300">
                <strong className="text-white block mb-1 print:text-slate-900 font-mono">AI & Deep Learning:</strong>
                <span className="text-slate-300 print:text-slate-700">Python, TensorFlow, Scikit-learn, CNN, ANN, NLP, LLM</span>
              </div>
              <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl print:bg-slate-100 print:border-slate-300">
                <strong className="text-white block mb-1 print:text-slate-900 font-mono">NLP, LLMs & MLOps:</strong>
                <span className="text-slate-300 print:text-slate-700">Hugging Face, Transformers, Docker, FastAPI, Git, Cosine Similarity, Render</span>
              </div>
            </div>
          </div>

          {/* Deployed Projects */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest font-mono print:text-slate-900">
              Featured Deployed AI Projects
            </h2>

            <div className="space-y-3 text-xs">
              {PROJECTS.map((p) => (
                <div key={p.id} className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl print:bg-slate-50 print:border-slate-300 space-y-1.5">
                  <div className="flex items-center justify-between font-bold text-white print:text-slate-900">
                    <span className="text-sm text-cyan-300 print:text-cyan-800">{p.title} ({p.subcategory})</span>
                    <a href={p.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono text-cyan-400 underline">Live Link</a>
                  </div>
                  <p className="text-slate-300 print:text-slate-700">{p.fullDescription}</p>
                  <div className="text-[11px] font-mono text-slate-400 print:text-slate-600">
                    Tech Stack: {p.techStack.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest font-mono print:text-slate-900">
              Education & Certifications
            </h2>
            <div className="space-y-2 text-xs text-slate-300 print:text-slate-800">
              {TIMELINE_ITEMS.map((item) => (
                <div key={item.id} className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl print:bg-slate-100 print:border-slate-300 flex justify-between items-start">
                  <div>
                    <div className="font-bold text-white print:text-slate-900">{item.title}</div>
                    <div className="text-slate-400 print:text-slate-600">{item.organization} — {item.description}</div>
                  </div>
                  <span className="font-mono text-[11px] text-cyan-400 shrink-0 ml-2">{item.year}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
