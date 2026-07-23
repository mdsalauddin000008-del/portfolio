import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, CheckCircle } from 'lucide-react';

interface HeroProps {
  onOpenOrder: (packageId?: string) => void;
  onScrollToSection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder, onScrollToSection }) => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'lighthouse' | 'architecture'>('terminal');

  return (
    <section id="hero" className="relative pt-10 pb-16 md:pt-20 md:pb-28 bg-[#F4F1EA] text-[#121212]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Hero Typography */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Top Category Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212]/5 border border-[#121212]/15 text-[10px] font-bold uppercase tracking-[0.25em] text-[#121212]/70">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 animate-pulse"></span>
              <span>Software Architecture & Engineering</span>
              <span className="text-[#121212]/30">•</span>
              <span>Est. 2024</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-[#121212] tracking-tighter leading-[0.92]">
              High Fidelity <br />
              <span className="italic font-serif font-black bg-gradient-to-r from-[#121212] via-[#2d2d2d] to-[#404040] bg-clip-text text-transparent">
                Digital Systems.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#121212]/80 max-w-xl font-sans leading-relaxed">
              Rex Developer specializes in the intersection of technical robustness and visual precision. We build high-performance React web applications, custom platforms, and fast websites engineered for lasting growth.
            </p>

            {/* Direct Pricing Highlights Box */}
            <div className="p-5 rounded-none bg-[#121212] text-[#F4F1EA] border-l-4 border-[#121212] shadow-xl max-w-xl">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F4F1EA]/60 mb-3 flex items-center justify-between border-b border-[#F4F1EA]/15 pb-2">
                <span>Investment Structure</span>
                <span className="text-amber-300 flex items-center gap-1 font-sans text-xs">
                  <Zap className="w-3 h-3 text-amber-300" /> Transparent Pricing
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 border-l border-[#F4F1EA]/20 bg-[#121212] flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#F4F1EA]/60">Basic Website</div>
                    <div className="text-2xl font-serif italic text-[#F4F1EA]">$89 <span className="text-xs font-sans not-italic text-[#F4F1EA]/50">flat</span></div>
                  </div>
                  <button 
                    onClick={() => onOpenOrder('basic-website')}
                    className="text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 bg-[#F4F1EA] text-[#121212] hover:bg-white transition-all"
                  >
                    Select
                  </button>
                </div>

                <div className="p-3 border-l border-[#F4F1EA]/20 bg-[#121212] flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#F4F1EA]/60">Premium Build</div>
                    <div className="text-2xl font-serif italic text-amber-300">$199<span className="text-sm">+</span></div>
                  </div>
                  <button 
                    onClick={() => onOpenOrder('premium-package')}
                    className="text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 bg-amber-400 text-[#121212] hover:bg-amber-300 transition-all"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
              <button
                onClick={() => onScrollToSection('portfolio')}
                className="w-full sm:w-auto px-7 py-4 bg-[#121212] text-[#F4F1EA] text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#2a2a2a] transition-all flex items-center justify-center gap-2"
              >
                <span>Selected Works</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onScrollToSection('ai-estimator')}
                className="w-full sm:w-auto px-7 py-4 border border-[#121212] text-[#121212] text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#121212] hover:text-[#F4F1EA] transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>AI Scope Estimator</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-[10px] font-bold uppercase tracking-wider text-[#121212]/70">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-800" />
                <span>100% Code Ownership</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-800" />
                <span>30-Day Post Launch Support</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-800" />
                <span>98+ Speed Score</span>
              </div>
            </div>

          </div>

          {/* Right Column: Developer Console & Interactive Blueprint */}
          <div className="lg:col-span-5">
            <div className="bg-[#121212] text-[#F4F1EA] border border-[#121212] shadow-2xl overflow-hidden">
              
              {/* Header */}
              <div className="px-5 py-3.5 bg-[#1a1a1a] border-b border-[#F4F1EA]/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F4F1EA]/20 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F4F1EA]/20 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F4F1EA]/20 inline-block"></span>
                  <span className="ml-2 font-mono text-[11px] text-[#F4F1EA]/60 uppercase tracking-widest">architecture.ts</span>
                </div>

                <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest">
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 transition-colors ${activeTab === 'terminal' ? 'bg-[#F4F1EA] text-[#121212]' : 'text-[#F4F1EA]/60 hover:text-white'}`}
                  >
                    Code
                  </button>
                  <button
                    onClick={() => setActiveTab('lighthouse')}
                    className={`px-2.5 py-1 transition-colors ${activeTab === 'lighthouse' ? 'bg-[#F4F1EA] text-[#121212]' : 'text-[#F4F1EA]/60 hover:text-white'}`}
                  >
                    Scores
                  </button>
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`px-2.5 py-1 transition-colors ${activeTab === 'architecture' ? 'bg-[#F4F1EA] text-[#121212]' : 'text-[#F4F1EA]/60 hover:text-white'}`}
                  >
                    Stack
                  </button>
                </div>
              </div>

              {/* Terminal Body Content */}
              <div className="p-6 font-mono text-xs leading-relaxed min-h-[300px]">
                
                {activeTab === 'terminal' && (
                  <div className="space-y-3 text-[#F4F1EA]/80">
                    <div className="text-[#F4F1EA]/40">// Rex Developer Software Pipeline</div>
                    <div>
                      <span className="text-amber-300">import</span> &#123; <span className="text-emerald-300">Architect</span> &#125; <span className="text-amber-300">from</span> <span className="text-emerald-200">'@rex/core'</span>;
                    </div>
                    <div>
                      <span className="text-amber-300">const</span> <span className="text-cyan-300">system</span> = <span className="text-amber-300">new</span> <span className="text-emerald-300">Architect</span>(&#123;
                    </div>
                    <div className="pl-4 border-l border-[#F4F1EA]/10 space-y-1">
                      <div><span className="text-[#F4F1EA]/50">engineer:</span> <span className="text-emerald-300">'Rex Developer'</span>,</div>
                      <div><span className="text-[#F4F1EA]/50">packages:</span> [<span className="text-amber-300">'$89 Basic'</span>, <span className="text-amber-300">'$199+ Premium'</span>],</div>
                      <div><span className="text-[#F4F1EA]/50">stack:</span> [<span className="text-cyan-300">'React 19'</span>, <span className="text-cyan-300">'Express'</span>, <span className="text-cyan-300">'Gemini AI'</span>],</div>
                      <div><span className="text-[#F4F1EA]/50">standard:</span> <span className="text-emerald-300">'High Fidelity Clean Code'</span></div>
                    </div>
                    <div>&#125;);</div>
                    <div className="text-emerald-400 pt-3 flex items-center gap-2 text-[11px]">
                      <span>✓</span>
                      <span>System Initialized. Ready for deployment.</span>
                    </div>
                  </div>
                )}

                {activeTab === 'lighthouse' && (
                  <div className="space-y-4">
                    <div className="text-[10px] uppercase font-bold tracking-widest text-[#F4F1EA]/50">Lighthouse Performance Audit</div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 border border-[#F4F1EA]/20 bg-[#1a1a1a] text-center">
                        <div className="text-3xl font-serif italic text-emerald-400">100</div>
                        <div className="text-[9px] uppercase font-bold tracking-widest text-[#F4F1EA]/60 mt-1">Performance</div>
                      </div>
                      <div className="p-4 border border-[#F4F1EA]/20 bg-[#1a1a1a] text-center">
                        <div className="text-3xl font-serif italic text-emerald-400">100</div>
                        <div className="text-[9px] uppercase font-bold tracking-widest text-[#F4F1EA]/60 mt-1">SEO Rating</div>
                      </div>
                      <div className="p-4 border border-[#F4F1EA]/20 bg-[#1a1a1a] text-center">
                        <div className="text-3xl font-serif italic text-emerald-400">100</div>
                        <div className="text-[9px] uppercase font-bold tracking-widest text-[#F4F1EA]/60 mt-1">Accessibility</div>
                      </div>
                      <div className="p-4 border border-[#F4F1EA]/20 bg-[#1a1a1a] text-center">
                        <div className="text-3xl font-serif italic text-emerald-400">100</div>
                        <div className="text-[9px] uppercase font-bold tracking-widest text-[#F4F1EA]/60 mt-1">Best Practices</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'architecture' && (
                  <div className="space-y-3 text-[#F4F1EA]/80">
                    <div className="text-[10px] uppercase font-bold tracking-widest text-amber-300 mb-2">Core Tech Specifications</div>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between p-2 border border-[#F4F1EA]/10">
                        <span className="text-[#F4F1EA]/60">Frontend</span>
                        <span className="text-white font-bold">React 19 + TypeScript</span>
                      </div>
                      <div className="flex justify-between p-2 border border-[#F4F1EA]/10">
                        <span className="text-[#F4F1EA]/60">Styling</span>
                        <span className="text-white font-bold">Tailwind CSS v4</span>
                      </div>
                      <div className="flex justify-between p-2 border border-[#F4F1EA]/10">
                        <span className="text-[#F4F1EA]/60">Backend</span>
                        <span className="text-white font-bold">Node.js + Express</span>
                      </div>
                      <div className="flex justify-between p-2 border border-[#F4F1EA]/10">
                        <span className="text-[#F4F1EA]/60">AI Intelligence</span>
                        <span className="text-amber-300 font-bold">Gemini 3.6 API</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Status footer */}
              <div className="px-5 py-3 bg-[#1a1a1a] border-t border-[#F4F1EA]/10 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[#F4F1EA]/50">
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active Build Pipeline
                </span>
                <span>Port 3000 • SSL</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Metrics Grid */}
        <div className="mt-16 pt-8 border-t border-[#121212]/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-serif italic font-black text-[#121212]">40+</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-[#121212]/60">Projects Deployed</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-serif italic font-black text-[#121212]">$89 / $199</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-[#121212]/60">Transparent Packages</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-serif italic font-black text-[#121212]">2-3 Days</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-[#121212]/60">Average Turnaround</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-serif italic font-black text-emerald-800">99.8%</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-[#121212]/60">Client Satisfaction</div>
          </div>
        </div>

      </div>
    </section>
  );
};
