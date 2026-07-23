import React from 'react';
import { Code2 } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (id: string) => void;
  onOpenOrder: (packageId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToSection, onOpenOrder }) => {
  return (
    <footer className="bg-[#121212] text-[#F4F1EA] text-xs py-12 border-t border-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#F4F1EA]/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#F4F1EA] text-[#121212] flex items-center justify-center">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-serif italic font-black text-xl text-white">
                Rex Developer
              </span>
            </div>

            <p className="text-[#F4F1EA]/70 text-xs leading-relaxed max-w-sm">
              Full-stack software engineering, web application architecture, and bespoke technical execution. Transparent $89 Basic Website and $199 Premium Packages with 100% source code transfer.
            </p>

            <div className="flex items-center gap-2 pt-1 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for New Projects</span>
            </div>
          </div>

          {/* Nav Column 1 */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F4F1EA]/60">Index</div>
            <ul className="space-y-1.5 text-[#F4F1EA]/80 font-serif italic text-sm">
              <li>
                <button onClick={() => onScrollToSection('hero')} className="hover:text-amber-300 transition-colors">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('portfolio')} className="hover:text-amber-300 transition-colors">
                  Software Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('pricing')} className="hover:text-amber-300 transition-colors">
                  Pricing ($89 / $199+)
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('ai-estimator')} className="hover:text-amber-300 transition-colors">
                  AI Scope Estimator
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Column 2 */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F4F1EA]/60">Packages</div>
            <div className="p-4 bg-[#1a1a1a] border border-[#F4F1EA]/10 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-white font-bold">Basic Website Package</span>
                <span className="text-amber-300 font-serif italic font-bold">$89 Flat</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-white font-bold">Premium Web Application</span>
                <span className="text-amber-300 font-serif italic font-bold">From $199</span>
              </div>
              <button
                onClick={() => onOpenOrder('basic-website')}
                className="w-full py-2 bg-[#F4F1EA] text-[#121212] hover:bg-white text-[10px] font-bold uppercase tracking-widest transition-colors mt-2"
              >
                Request Custom Order
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase font-mono text-[#F4F1EA]/50">
          <div>
            © {new Date().getFullYear()} Rex Developer. Engineered for extreme performance.
          </div>
          <div className="flex items-center gap-4 text-[#F4F1EA]/70">
            <span>React 19</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Express</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

