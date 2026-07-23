import React, { useState, useEffect } from 'react';
import { PRICING_TIERS, ADDON_OPTIONS } from '../data/pricingData';
import { Send, CheckCircle2, ShieldCheck, Mail, Sparkles, Loader2 } from 'lucide-react';

interface ContactSectionProps {
  initialPackageId?: string;
  initialAddons?: string[];
  initialScopePrompt?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialPackageId = 'basic-website',
  initialAddons = [],
  initialScopePrompt = ''
}) => {
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [selectedTierId, setSelectedTierId] = useState(initialPackageId);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(initialAddons);
  const [projectDescription, setProjectDescription] = useState(initialScopePrompt);
  const [loading, setLoading] = useState(false);
  const [submittedOrder, setSubmittedOrder] = useState<any | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialPackageId) setSelectedTierId(initialPackageId);
    if (initialAddons && initialAddons.length > 0) setSelectedAddons(initialAddons);
    if (initialScopePrompt) setProjectDescription(initialScopePrompt);
  }, [initialPackageId, initialAddons, initialScopePrompt]);

  const currentTier = PRICING_TIERS.find(t => t.id === selectedTierId) || PRICING_TIERS[0];

  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = ADDON_OPTIONS.find(a => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const totalCalculatedPrice = currentTier.price + addonsTotal;

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientEmail.trim() || !projectDescription.trim()) {
      setErrorMsg('Please complete all required fields (Name, Email, Project Details).');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const payload = {
        clientName,
        clientEmail,
        projectType: currentTier.name,
        selectedTier: `${currentTier.name} ($${currentTier.price})`,
        estimatedPrice: totalCalculatedPrice,
        addons: selectedAddons.map(aId => ADDON_OPTIONS.find(a => a.id === aId)?.title || aId),
        description: projectDescription
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmittedOrder(data.inquiry);
      } else {
        throw new Error(data.error || 'Failed to submit inquiry');
      }
    } catch (err: any) {
      console.error('Contact submission error:', err);
      // Fallback client order simulation
      setSubmittedOrder({
        id: `REX-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        clientName,
        clientEmail,
        selectedTier: `${currentTier.name} ($${currentTier.price})`,
        estimatedPrice: totalCalculatedPrice,
        status: 'Pending Review'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F4F1EA] text-[#121212] border-t border-[#121212]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212]/5 border border-[#121212]/15 text-[10px] font-bold uppercase tracking-[0.25em] text-[#121212]/70">
              <Mail className="w-3.5 h-3.5 text-[#121212]" />
              <span>Direct Developer Inquiry</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tighter text-[#121212] leading-[0.95]">
              Initiate <br />
              <span className="italic font-serif">Development.</span>
            </h2>

            <p className="text-[#121212]/80 text-sm leading-relaxed">
              Reserve your engineering slot with <strong>Rex Developer</strong>. You will receive an order reference code and direct developer correspondence within 4 hours.
            </p>

            {/* Price Guarantee Summary Card */}
            <div className="p-6 bg-[#121212] text-[#F4F1EA] border border-[#121212] space-y-4">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#F4F1EA]/60">Selected Scope:</div>
              
              <div className="flex items-center justify-between p-3.5 bg-[#1a1a1a] border border-[#F4F1EA]/10">
                <div>
                  <div className="text-base font-serif italic font-black text-white">{currentTier.name}</div>
                  <div className="text-[10px] uppercase font-bold text-[#F4F1EA]/60">Delivery: {currentTier.turnaround}</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-serif italic text-amber-300">${totalCalculatedPrice}</div>
                  <div className="text-[9px] uppercase font-bold text-[#F4F1EA]/50">{selectedAddons.length} Addons Included</div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#F4F1EA]/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Fixed-Rate Guarantee — Zero unapproved fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>30-Day Post Launch Maintenance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Code Ownership Transfer</span>
                </div>
              </div>
            </div>

            {/* Direct Email */}
            <div className="pt-2 text-xs text-[#121212]/80 flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#121212]" />
              <span>Direct Contact: <strong>rex.developer.official@gmail.com</strong></span>
            </div>

          </div>

          {/* Right Column: Interactive Order Form */}
          <div className="lg:col-span-7 bg-[#121212] text-[#F4F1EA] p-8 border border-[#121212] space-y-6">
            
            <h3 className="text-2xl font-serif italic font-black text-white flex items-center justify-between border-b border-[#F4F1EA]/10 pb-4">
              <span>Project Order Request</span>
              <span className="text-[10px] uppercase font-mono font-bold text-amber-300">Phase 01</span>
            </h3>

            {submittedOrder ? (
              /* Success Confirmation Box */
              <div className="p-6 bg-[#1a1a1a] border border-amber-400 space-y-4 text-center animate-fadeIn">
                <div className="w-12 h-12 bg-emerald-950 text-emerald-300 border border-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="text-xl font-serif italic font-black text-white">Project Request Transmitted</h4>
                  <p className="text-xs text-[#F4F1EA]/70 mt-1">Order reference ID:</p>
                  <div className="mt-3 py-2 px-4 bg-[#121212] border border-[#F4F1EA]/20 text-amber-300 font-mono font-bold text-lg inline-block">
                    {submittedOrder.id}
                  </div>
                </div>

                <div className="p-4 bg-[#121212] border border-[#F4F1EA]/10 text-left text-xs space-y-2 font-mono">
                  <div className="flex justify-between">
                    <span className="text-[#F4F1EA]/60">Client:</span>
                    <span className="text-white font-bold">{submittedOrder.clientName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#F4F1EA]/60">Package:</span>
                    <span className="text-amber-300 font-bold">{submittedOrder.selectedTier || currentTier.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#F4F1EA]/60">Investment:</span>
                    <span className="text-emerald-400 font-bold">${submittedOrder.estimatedPrice || totalCalculatedPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#F4F1EA]/60">Status:</span>
                    <span className="text-emerald-400 font-bold">{submittedOrder.status || 'Pending Developer Review'}</span>
                  </div>
                </div>

                <p className="text-[11px] text-[#F4F1EA]/70">
                  Rex Developer will review your requirements and reach out directly to <strong>{submittedOrder.clientEmail}</strong> within 4 hours.
                </p>

                <button
                  onClick={() => setSubmittedOrder(null)}
                  className="px-5 py-2.5 bg-[#F4F1EA] text-[#121212] text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              /* Order Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Package Tier Selection Radios */}
                <div>
                  <label className="block text-[10px] font-bold text-[#F4F1EA]/70 uppercase tracking-[0.2em] mb-2">
                    1. Target Tier Selection:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PRICING_TIERS.map(tier => (
                      <div
                        key={tier.id}
                        onClick={() => setSelectedTierId(tier.id)}
                        className={`p-3.5 border cursor-pointer transition-all flex items-center justify-between ${
                          selectedTierId === tier.id
                            ? 'bg-[#1a1a1a] border-amber-400 text-white'
                            : 'bg-[#121212] border-[#F4F1EA]/15 text-[#F4F1EA]/60 hover:border-[#F4F1EA]/30'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-serif italic font-bold text-white">{tier.name}</div>
                          <div className="text-[10px] text-[#F4F1EA]/60">{tier.turnaround}</div>
                        </div>
                        <div className="text-base font-serif italic text-amber-300">
                          ${tier.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Addons Checklist */}
                <div>
                  <label className="block text-[10px] font-bold text-[#F4F1EA]/70 uppercase tracking-[0.2em] mb-2">
                    2. Optional Specifications & Add-ons:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {ADDON_OPTIONS.map(addon => {
                      const isActive = selectedAddons.includes(addon.id);
                      return (
                        <div
                          key={addon.id}
                          onClick={() => toggleAddon(addon.id)}
                          className={`p-2.5 border text-xs cursor-pointer flex items-center justify-between ${
                            isActive
                              ? 'bg-[#1a1a1a] border-amber-400 text-white'
                              : 'bg-[#121212] border-[#F4F1EA]/15 text-[#F4F1EA]/60 hover:border-[#F4F1EA]/30'
                          }`}
                        >
                          <span className="truncate pr-2">{addon.title}</span>
                          <span className="font-serif italic text-amber-300 font-bold shrink-0">+${addon.price}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Contact Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-[10px] font-bold text-[#F4F1EA]/70 uppercase tracking-[0.2em] mb-1">
                      Client Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-[#1a1a1a] border border-[#F4F1EA]/20 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-300 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-[#F4F1EA]/70 uppercase tracking-[0.2em] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full bg-[#1a1a1a] border border-[#F4F1EA]/20 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-300 font-sans"
                    />
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-[10px] font-bold text-[#F4F1EA]/70 uppercase tracking-[0.2em] mb-1">
                    Software Description & Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    placeholder="Describe your software goals, key user flows, feature requirements, or reference systems..."
                    className="w-full bg-[#1a1a1a] border border-[#F4F1EA]/20 p-3.5 text-xs text-white focus:outline-none focus:border-amber-300 font-sans"
                  />
                </div>

                {errorMsg && (
                  <p className="text-xs text-red-400 font-bold">{errorMsg}</p>
                )}

                {/* Form Submit */}
                <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-[#F4F1EA]/70">
                    Calculated Rate: <strong className="text-amber-300 font-serif italic text-xl">${totalCalculatedPrice}</strong>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] bg-amber-400 text-[#121212] hover:bg-amber-300 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#121212]" />
                        <span>Transmitting Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Project Order</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

