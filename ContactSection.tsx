import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, CheckCircle2, Calendar, Sparkles, AlertCircle, Loader2, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sendContactEmail, validateContactForm, ContactFormData, EMAILJS_CONFIG } from '../services/emailService';

interface ContactSectionProps {
  onOpenResume: () => void;
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume, prefilledService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: prefilledService ? `Inquiry regarding ${prefilledService}` : '',
    message: prefilledService ? `Hi Anjali,\nI would like to discuss a project involving ${prefilledService}.` : '',
    type: 'Full-time Hire'
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validate inputs
    const { valid, errors } = validateContactForm(formData);
    if (!valid) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        setSubmittedMessage(result.message);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          type: 'Full-time Hire'
        });
      } else {
        setErrorMessage(result.message);
      }
    } catch (err: any) {
      console.error("EmailJS dispatch error:", err);
      setErrorMessage(err?.message || "An unexpected error occurred while delivering your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5" />
            <span>Let's Connect & Collaborate</span>
          </div>
          <h2 id="contact-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get in Touch with <span className="gradient-text">Anjali Rani</span>
          </h2>
          
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Info & Next Steps Panel */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Contact Information</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                
                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">Direct Email</div>
                    <div className="text-white font-semibold group-hover:text-cyan-300 transition">{PERSONAL_INFO.email}</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">Location</div>
                    <div className="text-white font-semibold">{PERSONAL_INFO.location}</div>
                  </div>
                </div>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-slate-950 transition">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">GitHub Profile</div>
                    <div className="text-white font-semibold group-hover:text-purple-300 transition">github.com/anjalidhiman</div>
                  </div>
                </a>

              </div>
            </div>

            {/* EmailJS Integration Details */}
            <div className="glass-card p-6 rounded-3xl border border-cyan-500/20 bg-slate-900/60 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>EmailJS Dispatch Engine</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Messages sent through this form are dispatched directly to <strong className="text-slate-200">{EMAILJS_CONFIG.recipientEmail}</strong> via EmailJS API.
              </p>
            </div>

            {/* Next Steps Quick Action Grid */}
            <div className="glass-card p-6 rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-slate-950 via-indigo-950/20 to-slate-950 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Next Steps & Quick Actions</span>
              </h4>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={onOpenResume}
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-200 text-center font-medium transition"
                >
                  Download Resume
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Schedule%20a%20Meeting%20with%20Anjali%20Rani`}
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-cyan-300 text-center font-medium transition"
                >
                  Schedule a Meeting
                </a>
              </div>
            </div>

          </div>

          {/* Right Form Panel */}
          <div className="lg:col-span-7 glass-card p-8 rounded-3xl border border-slate-800">
            {submittedMessage ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Dispatched!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  {submittedMessage}
                </p>
                <button
                  onClick={() => {
                    setSubmittedMessage(null);
                    setErrorMessage(null);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">Send a Message</h3>
                  <p className="text-slate-400 text-xs">
                    Fill in your inquiry details below. Messages are routed directly to <span className="text-cyan-400 font-mono">anjalidhiman501@gmail.com</span>.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>{errorMessage}</div>
                  </div>
                )}

                {/* Collaboration Type Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Collaboration Type</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Full-time Hire', 'Contract / AI Consulting', 'Research / Project'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, type })}
                        className={`py-2 px-2 rounded-xl text-[11px] font-medium transition ${
                          formData.type === type
                            ? 'bg-cyan-500 text-slate-950 font-bold'
                            : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                      }}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full bg-slate-900 border ${formErrors.name ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500'} rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-600 outline-none transition`}
                    />
                    {formErrors.name && (
                      <p className="text-[11px] text-rose-400 font-sans">{formErrors.name}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Your Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                      }}
                      placeholder="sarah@techcompany.com"
                      className={`w-full bg-slate-900 border ${formErrors.email ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500'} rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-600 outline-none transition`}
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-rose-400 font-sans">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. AI Engineer Position / Project Opportunity"
                    className="w-full bg-slate-900 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-600 outline-none transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (formErrors.message) setFormErrors({ ...formErrors, message: undefined });
                    }}
                    placeholder="Describe your project, open position, or collaboration proposal..."
                    className={`w-full bg-slate-900 border ${formErrors.message ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500'} rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-600 outline-none transition resize-none`}
                  />
                  {formErrors.message && (
                    <p className="text-[11px] text-rose-400 font-sans">{formErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-cyan-500/20 hover:opacity-95 transition flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Dispatching via EmailJS...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message to Anjali Rani</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

