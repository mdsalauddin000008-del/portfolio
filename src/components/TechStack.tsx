import React from 'react';
import { TECH_STACK_DATA } from '../data/testimonialsData';
import { ShieldCheck, Cpu } from 'lucide-react';

export const TechStack: React.FC = () => {
  return (
    <section id="stack" className="py-16 md:py-24 bg-[#F4F1EA] text-[#121212] border-t border-[#121212]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212]/5 border border-[#121212]/15 text-[10px] font-bold uppercase tracking-[0.25em] text-[#121212]/70">
            <Cpu className="w-3.5 h-3.5 text-[#121212]" />
            <span>Infrastructure Standards</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tighter text-[#121212]">
            Engineering <span className="italic font-serif">Stack.</span>
          </h2>
          <p className="text-[#121212]/80 text-sm sm:text-base leading-relaxed">
            Rex Developer leverages production software frameworks and cloud engines to build resilient, fast, and scalable web applications.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_STACK_DATA.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-[#F4F1EA] border border-[#121212]/20 hover:border-[#121212] transition-all duration-300 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 bg-[#121212] text-[#F4F1EA]">
                  {item.category}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                  {item.level}
                </span>
              </div>

              <h3 className="text-xl font-serif italic font-black text-[#121212]">{item.name}</h3>

              <p className="text-xs text-[#121212]/70 leading-relaxed min-h-[48px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quality Guarantee Box */}
        <div className="mt-12 p-8 bg-[#121212] text-[#F4F1EA] border border-[#121212] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#1a1a1a] border border-[#F4F1EA]/10 text-amber-300 shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-serif italic font-black text-white">Clean Code & Zero Technical Debt</h4>
              <p className="text-xs text-[#F4F1EA]/70">Strict TypeScript typing, modular files, clean git history, and 100% full source code ownership upon delivery.</p>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-[#1a1a1a] px-5 py-3 border border-[#F4F1EA]/10 shrink-0">
            <span>✓ 100% Handover Included</span>
          </div>
        </div>

      </div>
    </section>
  );
};

