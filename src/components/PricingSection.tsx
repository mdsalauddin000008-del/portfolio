import React, { useState } from 'react';
import { PRICING_TIERS, ADDON_OPTIONS } from '../data/pricingData';
import { Check, X, Sparkles, ArrowRight, DollarSign, Clock } from 'lucide-react';

interface PricingSectionProps {
  onOpenOrderWithAddons: (packageId: string, selectedAddons: string[], totalPrice: number) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenOrderWithAddons }) => {
  const [selectedPackage, setSelectedPackage] = useState<string>('basic-website');
  const [activeAddons, setActiveAddons] = useState<string[]>([]);

  const currentTier = PRICING_TIERS.find(t => t.id === selectedPackage) || PRICING_TIERS[0];

  const addonsTotal = activeAddons.reduce((sum, addonId) => {
    const addon = ADDON_OPTIONS.find(a => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const finalCalculatedPrice = currentTier.price + addonsTotal;

  const toggleAddon = (addonId: string) => {
    setActiveAddons(prev =>
      prev.includes(addonId) ? prev.filter(id => id !== addonId) : [...prev, addonId]
    );
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#F4F1EA] text-[#121212] border-t border-[#121212]/10 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212]/5 border border-[#121212]/15 text-[10px] font-bold uppercase tracking-[0.25em] text-[#121212]/70">
            <DollarSign className="w-3.5 h-3.5" />
            <span>Investment Guide</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tighter text-[#121212]">
            Transparent <span className="italic font-serif">Rate Structure.</span>
          </h2>
          <p className="text-[#121212]/80 text-sm sm:text-base leading-relaxed">
            Flat-rate pricing with zero hidden markups. Select a high-speed Basic Website for <strong className="font-bold">$89</strong> flat or an expansive Premium Web Application starting at <strong className="font-bold">$199</strong>.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">
          {PRICING_TIERS.map((tier) => {
            const isSelected = selectedPackage === tier.id;
            return (
              <div
                key={tier.id}
                onClick={() => setSelectedPackage(tier.id)}
                className={`relative p-8 border transition-all cursor-pointer flex flex-col justify-between ${
                  tier.popular
                    ? 'bg-[#121212] text-[#F4F1EA] border-[#121212] shadow-2xl'
                    : 'bg-[#F4F1EA] text-[#121212] border-[#121212]/20 hover:border-[#121212]'
                }`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-3.5 right-6 px-3 py-1 bg-amber-400 text-[#121212] text-[9px] font-bold uppercase tracking-[0.2em]">
                    Recommended Choice
                  </div>
                )}

                <div className="space-y-6">
                  
                  {/* Header & Price */}
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className={`text-2xl font-serif italic font-black ${tier.popular ? 'text-white' : 'text-[#121212]'}`}>
                        {tier.name}
                      </h3>
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 border ${
                        tier.popular ? 'border-[#F4F1EA]/20 text-[#F4F1EA]/70' : 'border-[#121212]/20 text-[#121212]/70'
                      }`}>
                        <Clock className="w-3 h-3 inline mr-1" />
                        {tier.turnaround}
                      </span>
                    </div>

                    <p className={`text-xs mt-2 min-h-[36px] ${tier.popular ? 'text-[#F4F1EA]/70' : 'text-[#121212]/70'}`}>
                      {tier.tagline}
                    </p>

                    <div className={`mt-4 pt-4 border-t flex items-baseline gap-2 ${
                      tier.popular ? 'border-[#F4F1EA]/10' : 'border-[#121212]/10'
                    }`}>
                      <span className="text-4xl sm:text-5xl font-serif italic font-black">
                        ${tier.price}
                      </span>
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${
                        tier.popular ? 'text-[#F4F1EA]/50' : 'text-[#121212]/50'
                      }`}>
                        one-time flat rate
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-2">
                    <div className={`text-[10px] font-bold uppercase tracking-widest ${
                      tier.popular ? 'text-[#F4F1EA]/50' : 'text-[#121212]/50'
                    }`}>Included Scope:</div>
                    <ul className="space-y-2.5 text-xs">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          {feat.included ? (
                            <Check className={`w-4 h-4 shrink-0 mt-0.5 ${tier.popular ? 'text-emerald-400' : 'text-emerald-800'}`} />
                          ) : (
                            <X className={`w-4 h-4 shrink-0 mt-0.5 ${tier.popular ? 'text-[#F4F1EA]/30' : 'text-[#121212]/30'}`} />
                          )}
                          <span className={feat.included ? '' : 'line-through opacity-40'}>
                            {feat.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Card CTA */}
                <div className={`pt-6 mt-6 border-t ${tier.popular ? 'border-[#F4F1EA]/10' : 'border-[#121212]/10'}`}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPackage(tier.id);
                      onOpenOrderWithAddons(tier.id, activeAddons, finalCalculatedPrice);
                    }}
                    className={`w-full py-3.5 px-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${
                      tier.popular
                        ? 'bg-[#F4F1EA] text-[#121212] hover:bg-white'
                        : 'bg-[#121212] text-[#F4F1EA] hover:bg-[#2a2a2a]'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Interactive Add-on Price Configurator */}
        <div className="mt-16 bg-[#121212] text-[#F4F1EA] p-8 border border-[#121212]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#F4F1EA]/10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-amber-300 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Interactive Estimator</span>
              </div>
              <h3 className="text-2xl font-serif italic font-black text-white">Customize Scope with Optional Features</h3>
              <p className="text-xs text-[#F4F1EA]/70 mt-1">Select add-ons to configure your exact delivery parameters.</p>
            </div>

            <div className="p-4 bg-[#1a1a1a] border border-[#F4F1EA]/10 text-right shrink-0">
              <div className="text-[10px] uppercase font-bold tracking-widest text-[#F4F1EA]/60">Total Estimated Rate</div>
              <div className="text-3xl font-serif italic text-amber-300">${finalCalculatedPrice}</div>
              <div className="text-[9px] uppercase font-bold text-[#F4F1EA]/40">Includes {currentTier.name}</div>
            </div>
          </div>

          {/* Addons List Grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
            {ADDON_OPTIONS.map((addon) => {
              const isActive = activeAddons.includes(addon.id);
              return (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-4 border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                    isActive
                      ? 'bg-[#1a1a1a] border-amber-400 text-white'
                      : 'bg-[#121212] border-[#F4F1EA]/15 text-[#F4F1EA]/70 hover:border-[#F4F1EA]/40'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                      <span>{addon.title}</span>
                      <span className="text-xs text-amber-300 font-serif italic font-bold">+${addon.price}</span>
                    </div>
                    <p className="text-[11px] text-[#F4F1EA]/60 leading-snug">{addon.description}</p>
                  </div>

                  <div className={`w-5 h-5 border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    isActive ? 'bg-amber-400 border-amber-400 text-[#121212]' : 'border-[#F4F1EA]/30'
                  }`}>
                    {isActive && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Configured Build Button */}
          <div className="mt-8 pt-6 border-t border-[#F4F1EA]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#F4F1EA]/70">
              Package: <strong className="text-white">{currentTier.name} (${currentTier.price})</strong> • Addons: <strong className="text-amber-300">{activeAddons.length} selected (+${addonsTotal})</strong>
            </div>

            <button
              onClick={() => onOpenOrderWithAddons(selectedPackage, activeAddons, finalCalculatedPrice)}
              className="w-full sm:w-auto px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] bg-amber-400 text-[#121212] hover:bg-amber-300 transition-all flex items-center justify-center gap-2"
            >
              <span>Order Configured Build (${finalCalculatedPrice})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

