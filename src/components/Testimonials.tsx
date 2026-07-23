import React from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';
import { Star, Award } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F1EA] text-[#121212] border-t border-[#121212]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212]/5 border border-[#121212]/15 text-[10px] font-bold uppercase tracking-[0.25em] text-[#121212]/70">
            <Award className="w-3.5 h-3.5 text-[#121212]" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tighter text-[#121212]">
            Client <span className="italic font-serif">Testimonials.</span>
          </h2>
          <p className="text-[#121212]/80 text-sm sm:text-base leading-relaxed">
            Verified feedback from founders, agency leaders, and engineering directors who partnered with Rex Developer.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-6 bg-[#F4F1EA] border border-[#121212]/20 hover:border-[#121212] flex flex-col justify-between space-y-4 transition-all"
            >
              <div className="space-y-3">
                
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-700">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-600 text-amber-600" />
                  ))}
                </div>

                <p className="text-xs text-[#121212]/90 leading-relaxed font-serif italic text-sm">
                  "{t.content}"
                </p>

              </div>

              <div className="pt-4 border-t border-[#121212]/10 space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 object-cover border border-[#121212]/20"
                  />
                  <div>
                    <h4 className="text-xs font-serif font-black text-[#121212]">{t.name}</h4>
                    <p className="text-[10px] font-bold uppercase text-[#121212]/60">{t.role}, {t.company}</p>
                  </div>
                </div>

                <div className="p-2 bg-[#121212] text-[#F4F1EA] flex items-center justify-between text-[9px] font-bold uppercase tracking-widest">
                  <span className="text-[#F4F1EA]/70 truncate max-w-[180px]">{t.verifiedProject}</span>
                  <span className="text-amber-300">{t.metrics}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

