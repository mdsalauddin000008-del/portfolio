import React from 'react';
import { Compass, Layout, Code2, Rocket } from 'lucide-react';

export const ClientProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Scope & Package Selection',
      desc: 'Select either the $89 Basic Website or $199 Premium Package. Use our AI Estimator or submit custom requirements.',
      icon: Compass,
      time: 'Day 1'
    },
    {
      num: '02',
      title: 'UI Design & Wireframe',
      desc: 'Rex Developer creates a sleek, accessible, high-contrast prototype tailored to your brand identity.',
      icon: Layout,
      time: 'Day 1 - 2'
    },
    {
      num: '03',
      title: 'High-Performance Build',
      desc: 'Full development using React 19, Express, TypeScript, and Tailwind. Zero lag, 98+ Lighthouse speed guaranteed.',
      icon: Code2,
      time: 'Day 2 - 4'
    },
    {
      num: '04',
      title: 'Review, Deploy & Handover',
      desc: 'Live staging preview review, final adjustments, custom domain deployment, and full GitHub source code transfer.',
      icon: Rocket,
      time: 'Day 3 - 5'
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-[#F4F1EA] text-[#121212] border-t border-[#121212]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212]/5 border border-[#121212]/15 text-[10px] font-bold uppercase tracking-[0.25em] text-[#121212]/70">
            <span>Workflow Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tighter text-[#121212]">
            Engineering <span className="italic font-serif">Workflow.</span>
          </h2>
          <p className="text-[#121212]/80 text-sm sm:text-base leading-relaxed">
            From project inception to live production deployment in 2-5 days with complete transparency.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className="relative p-6 bg-[#F4F1EA] border border-[#121212]/20 hover:border-[#121212] space-y-4 flex flex-col justify-between transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-serif italic font-black text-[#121212]">{step.num}</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 bg-[#121212] text-[#F4F1EA]">
                      {step.time}
                    </span>
                  </div>

                  <div className="p-3 w-12 h-12 bg-[#121212] text-[#F4F1EA] flex items-center justify-center">
                    <IconComp className="w-5 h-5 text-amber-300" />
                  </div>

                  <h3 className="text-lg font-serif font-black text-[#121212]">{step.title}</h3>
                  <p className="text-xs text-[#121212]/70 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

