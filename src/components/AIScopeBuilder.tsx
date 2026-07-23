import React, { useState } from 'react';
import { ScopeResult } from '../types';
import { Sparkles, Bot, ArrowRight, Loader2, CheckCircle2, Zap } from 'lucide-react';

interface AIScopeBuilderProps {
  onApplyScopeToOrder: (scope: ScopeResult, customPrompt: string) => void;
}

export const AIScopeBuilder: React.FC<AIScopeBuilderProps> = ({ onApplyScopeToOrder }) => {
  const [promptInput, setPromptInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [scopeResult, setScopeResult] = useState<ScopeResult | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const samplePrompts = [
    "I need an e-commerce website for handmade jewelry with Stripe checkout and an admin inventory panel.",
    "I want a modern portfolio landing page for my architecture firm with 100% speed score.",
    "Build a SaaS fitness app where users track daily workouts, view progress charts, and generate AI meal plans.",
    "A real estate booking platform with interactive maps, inquiry form, and mobile optimization."
  ];

  const handleEstimate = async (textToSubmit?: string) => {
    const queryText = textToSubmit || promptInput;
    if (!queryText.trim()) {
      setErrorMsg('Please describe your project idea first.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/scope-estimator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: queryText })
      });

      if (!response.ok) {
        throw new Error('Failed to generate scope estimate.');
      }

      const data: ScopeResult = await response.json();
      setScopeResult(data);
    } catch (err: any) {
      console.error('Scope estimation error:', err);
      // Fallback
      setScopeResult({
        tier: queryText.toLowerCase().includes('database') || queryText.toLowerCase().includes('saas') ? 'Premium Package ($199+)' : 'Basic Website ($89)',
        estimatedPrice: queryText.toLowerCase().includes('database') || queryText.toLowerCase().includes('ai') ? 199 : 89,
        estimatedDays: 3,
        techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Express'],
        featuresList: [
          { name: 'Custom Responsive Layout', description: 'Optimized for mobile, tablet, and desktop viewports.' },
          { name: 'SEO & Speed Engine', description: '98+ Google Lighthouse performance score guaranteed.' },
          { name: 'Lead Capture Form', description: 'Instant email inquiry routing and confirmation.' }
        ],
        architectureAdvice: 'Our high-performance React + Express stack ensures instant load speeds and easy modular expansion.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-estimator" className="py-16 md:py-24 bg-[#F4F1EA] text-[#121212] border-t border-[#121212]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212]/5 border border-[#121212]/15 text-[10px] font-bold uppercase tracking-[0.25em] text-[#121212]/70">
            <Sparkles className="w-3.5 h-3.5 text-[#121212]" />
            <span>AI Project Architect</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tighter text-[#121212]">
            Instant <span className="italic font-serif">Scope Estimate.</span>
          </h2>
          <p className="text-[#121212]/80 text-sm sm:text-base leading-relaxed">
            Outline your software requirements. Our AI engine powered by Gemini will evaluate your parameters, recommend the tier ($89 Basic vs $199 Premium), and generate a technical blueprint.
          </p>
        </div>

        {/* Input Form Box */}
        <div className="mt-10 max-w-3xl p-8 bg-[#121212] text-[#F4F1EA] border border-[#121212] space-y-5">
          
          <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#F4F1EA]/70">
            Define Software Specifications:
          </label>

          <textarea
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
            placeholder="e.g. I need a modern web application for an online bakery where customers can customize cakes, pay with Stripe, and get automated email order receipts..."
            rows={4}
            className="w-full bg-[#1a1a1a] border border-[#F4F1EA]/20 p-4 text-xs sm:text-sm text-[#F4F1EA] placeholder-[#F4F1EA]/30 focus:outline-none focus:border-amber-300 font-sans"
          />

          {errorMsg && (
            <p className="text-xs text-red-400 font-bold">{errorMsg}</p>
          )}

          {/* Quick Preset Buttons */}
          <div className="space-y-2 pt-1">
            <div className="text-[10px] uppercase font-bold tracking-widest text-[#F4F1EA]/50">Or sample an archetype:</div>
            <div className="flex flex-wrap gap-2">
              {samplePrompts.map((sample, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setPromptInput(sample);
                    handleEstimate(sample);
                  }}
                  className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-[#1a1a1a] text-[#F4F1EA]/70 hover:text-amber-300 border border-[#F4F1EA]/15 hover:border-amber-300/50 text-left truncate max-w-xs"
                >
                  "{sample.substring(0, 42)}..."
                </button>
              ))}
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-3 flex justify-end">
            <button
              onClick={() => handleEstimate()}
              disabled={loading}
              className="w-full sm:w-auto px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] bg-[#F4F1EA] text-[#121212] hover:bg-white disabled:opacity-50 transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#121212]" />
                  <span>Evaluating Scope with Gemini...</span>
                </>
              ) : (
                <>
                  <Bot className="w-4 h-4" />
                  <span>Generate Scope & Blueprint</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* AI Result Card */}
        {scopeResult && (
          <div className="mt-10 max-w-3xl bg-[#121212] text-[#F4F1EA] border-2 border-amber-400 p-8 space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#F4F1EA]/10">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Blueprint Generated
                </div>
                <h3 className="text-2xl font-serif italic font-black text-white">Recommended Scope</h3>
              </div>

              <div className="p-4 bg-[#1a1a1a] border border-[#F4F1EA]/10 text-right">
                <div className="text-[9px] uppercase font-bold text-[#F4F1EA]/60">Tier Allocation</div>
                <div className="text-xl font-serif italic text-amber-300">{scopeResult.tier}</div>
                <div className="text-xs text-emerald-400 font-mono font-bold">${scopeResult.estimatedPrice} Flat • {scopeResult.estimatedDays} Days</div>
              </div>
            </div>

            {/* Architecture Advice */}
            <div className="p-4 bg-[#1a1a1a] border border-[#F4F1EA]/10 space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-widest text-amber-300 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" /> Technical Recommendation:
              </div>
              <p className="text-xs text-[#F4F1EA]/80 leading-relaxed">
                {scopeResult.architectureAdvice}
              </p>
            </div>

            {/* Recommended Stack */}
            <div className="space-y-2">
              <div className="text-[10px] uppercase font-bold tracking-widest text-[#F4F1EA]/50">Engineered Technology Stack:</div>
              <div className="flex flex-wrap gap-2">
                {scopeResult.techStack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-[#1a1a1a] text-amber-300 border border-[#F4F1EA]/10 text-xs font-mono font-bold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Feature Modules */}
            <div className="space-y-3">
              <div className="text-[10px] uppercase font-bold tracking-widest text-[#F4F1EA]/50">Scope Deliverables:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {scopeResult.featuresList.map((feat, idx) => (
                  <div key={idx} className="p-3 bg-[#1a1a1a] border border-[#F4F1EA]/10 space-y-1">
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                      <span>{feat.name}</span>
                    </div>
                    <p className="text-[11px] text-[#F4F1EA]/60 leading-snug pl-5">{feat.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4 border-t border-[#F4F1EA]/10 flex justify-end">
              <button
                onClick={() => onApplyScopeToOrder(scopeResult, promptInput)}
                className="w-full sm:w-auto px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] bg-amber-400 text-[#121212] hover:bg-amber-300 flex items-center justify-center gap-2 transition-all"
              >
                <span>Attach Scope to Order</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

