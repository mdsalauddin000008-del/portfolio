import React, { useState } from 'react';
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenOrder: (packageId?: string) => void;
  onScrollToSection: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOrder, onScrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onScrollToSection(id);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F4F1EA]/95 backdrop-blur-md border-b border-[#121212]/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('hero')} 
          className="flex items-end gap-3 group text-left focus:outline-none"
        >
          <div className="flex flex-col">
            <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-[#121212]/50 mb-0.5">
              Studio & Architecture
            </span>
            <div className="flex items-center gap-2">
              <span className="font-serif italic font-black text-2xl sm:text-3xl tracking-tight text-[#121212]">
                Rex Developer
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-emerald-950/10 text-emerald-800 border border-emerald-800/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 animate-pulse"></span>
                Available
              </span>
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#121212]/80">
          <button 
            onClick={() => handleNavClick('portfolio')} 
            className="hover:line-through transition-all py-1"
          >
            Selected Works
          </button>
          
          <button 
            onClick={() => handleNavClick('pricing')} 
            className="hover:line-through transition-all py-1 flex items-center gap-2"
          >
            <span>Packages</span>
            <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#121212] text-[#F4F1EA]">
              From $89
            </span>
          </button>

          <button 
            onClick={() => handleNavClick('ai-estimator')} 
            className="hover:line-through transition-all py-1 flex items-center gap-1.5 text-[#121212]"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>AI Estimator</span>
          </button>

          <button 
            onClick={() => handleNavClick('stack')} 
            className="hover:line-through transition-all py-1"
          >
            Tech Stack
          </button>

          <button 
            onClick={() => handleNavClick('process')} 
            className="hover:line-through transition-all py-1"
          >
            Methodology
          </button>
        </nav>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onOpenOrder('basic-website')}
            className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#121212] bg-transparent border border-[#121212]/30 hover:border-[#121212] transition-colors"
          >
            Basic ($89)
          </button>
          <button
            onClick={() => onOpenOrder('premium-package')}
            className="px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-[#F4F1EA] bg-[#121212] hover:bg-[#2a2a2a] transition-colors flex items-center gap-2"
          >
            <span>Initiate ($199+)</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F4F1EA]" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#121212] border border-[#121212]/20 hover:border-[#121212]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#121212]/20 bg-[#F4F1EA] px-6 pt-4 pb-6 space-y-4">
          <div className="flex flex-col space-y-3 text-[11px] font-bold uppercase tracking-widest text-[#121212]">
            <button 
              onClick={() => handleNavClick('portfolio')}
              className="text-left py-2 border-b border-[#121212]/10"
            >
              Selected Works
            </button>
            <button 
              onClick={() => handleNavClick('pricing')}
              className="text-left py-2 border-b border-[#121212]/10 flex items-center justify-between"
            >
              <span>Packages & Pricing</span>
              <span className="text-[10px] text-amber-800 font-serif italic">$89 / $199+</span>
            </button>
            <button 
              onClick={() => handleNavClick('ai-estimator')}
              className="text-left py-2 border-b border-[#121212]/10 flex items-center gap-2 text-amber-900"
            >
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>AI Scope & Cost Calculator</span>
            </button>
            <button 
              onClick={() => handleNavClick('stack')}
              className="text-left py-2 border-b border-[#121212]/10"
            >
              Tech Stack
            </button>
            <button 
              onClick={() => handleNavClick('process')}
              className="text-left py-2"
            >
              Methodology
            </button>
          </div>

          <div className="pt-2 grid grid-cols-2 gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenOrder('basic-website'); }}
              className="w-full py-3 text-[10px] font-bold uppercase tracking-widest text-center border border-[#121212] text-[#121212]"
            >
              Basic ($89)
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenOrder('premium-package'); }}
              className="w-full py-3 text-[10px] font-bold uppercase tracking-widest text-center bg-[#121212] text-[#F4F1EA]"
            >
              Premium ($199+)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

