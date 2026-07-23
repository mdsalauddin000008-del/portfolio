import React, { useState } from 'react';
import { Project } from '../types';
import { X, Monitor, Smartphone, Tablet, CheckCircle, Code2, Sparkles, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOrderSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOrderSimilar }) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'preview' | 'specs' | 'highlights'>('preview');

  // Interactive state inside demo simulator
  const [demoState, setDemoState] = useState({
    saasUsers: 1420,
    cartItems: 2,
    aiOutputText: 'Gemini AI generated content sample ready for deployment.',
    aiPrompt: 'Create a high-conversion tagline for SaaS',
    crmStage: 'In Negotiation',
    tradingPair: 'BTC/USD $94,250'
  });

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#121212]/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl bg-[#121212] text-[#F4F1EA] border border-[#121212] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#121212] border-b border-[#F4F1EA]/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-[#F4F1EA] text-[#121212]">
              <Code2 className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-xl font-serif italic font-black text-white flex items-center gap-2">
                <span>{project.title}</span>
                {project.badge && (
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 bg-amber-400 text-[#121212]">
                    {project.badge}
                  </span>
                )}
              </h3>
              <p className="text-xs text-[#F4F1EA]/60">
                Category: {project.categoryLabel} • Delivery: {project.deliveryTime}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#F4F1EA]/60 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Device Switcher & Tabs Bar */}
        <div className="px-6 py-3 bg-[#1a1a1a] border-b border-[#F4F1EA]/10 flex flex-wrap items-center justify-between gap-3 shrink-0">
          
          {/* Main Content Tabs */}
          <div className="flex items-center gap-1 bg-[#121212] p-1 text-xs uppercase font-bold tracking-widest">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 transition-all ${activeTab === 'preview' ? 'bg-[#F4F1EA] text-[#121212]' : 'text-[#F4F1EA]/60 hover:text-white'}`}
            >
              Simulator
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-3 py-1.5 transition-all ${activeTab === 'specs' ? 'bg-[#F4F1EA] text-[#121212]' : 'text-[#F4F1EA]/60 hover:text-white'}`}
            >
              Specs
            </button>
            <button
              onClick={() => setActiveTab('highlights')}
              className={`px-3 py-1.5 transition-all ${activeTab === 'highlights' ? 'bg-[#F4F1EA] text-[#121212]' : 'text-[#F4F1EA]/60 hover:text-white'}`}
            >
              Deliverables
            </button>
          </div>

          {/* Responsive Device View Toggle */}
          {activeTab === 'preview' && (
            <div className="flex items-center gap-1 bg-[#121212] p-1 text-xs text-[#F4F1EA]/60">
              <button
                onClick={() => setDeviceView('desktop')}
                className={`p-1.5 transition-all ${deviceView === 'desktop' ? 'bg-[#1a1a1a] text-amber-300' : 'hover:text-white'}`}
                title="Desktop Frame"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceView('tablet')}
                className={`p-1.5 transition-all ${deviceView === 'tablet' ? 'bg-[#1a1a1a] text-amber-300' : 'hover:text-white'}`}
                title="Tablet Frame"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceView('mobile')}
                className={`p-1.5 transition-all ${deviceView === 'mobile' ? 'bg-[#1a1a1a] text-amber-300' : 'hover:text-white'}`}
                title="Mobile Frame"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {activeTab === 'preview' && (
            <div className="space-y-4">
              
              {/* Device Frame Simulator Container */}
              <div className="flex justify-center transition-all duration-300">
                <div 
                  className={`bg-[#121212] border border-[#F4F1EA]/20 p-4 shadow-2xl transition-all duration-300 ${
                    deviceView === 'desktop' ? 'w-full' : deviceView === 'tablet' ? 'w-[640px] max-w-full' : 'w-[360px] max-w-full'
                  }`}
                >
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F4F1EA]/10 text-xs font-mono text-[#F4F1EA]/60">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    </div>
                    <div className="px-3 py-1 bg-[#1a1a1a] text-[11px] text-amber-300 truncate max-w-[240px]">
                      https://demo.rexdeveloper.com/{project.id}
                    </div>
                    <span className="text-emerald-400 text-[10px]">99.8% Speed</span>
                  </div>

                  {/* Interactive Mock Interface based on demoType */}
                  <div className="bg-[#1a1a1a] p-4 min-h-[280px] border border-[#F4F1EA]/10 space-y-4">
                    
                    {/* Header of Simulated Demo */}
                    <div className="flex items-center justify-between border-b border-[#F4F1EA]/10 pb-3">
                      <div className="font-serif italic font-bold text-sm text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                        <span>{project.title} Preview</span>
                      </div>
                      <div className="text-xs text-[#F4F1EA]/60">Client: {project.clientName}</div>
                    </div>

                    {/* Interactive Widget per Demo Type */}
                    {project.demoType === 'analytics' && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-3">
                          <div className="p-3 bg-[#121212] border border-[#F4F1EA]/10">
                            <div className="text-[11px] text-[#F4F1EA]/60">Active Users</div>
                            <div className="text-xl font-bold text-white font-mono">{demoState.saasUsers.toLocaleString()}</div>
                          </div>
                          <div className="p-3 bg-[#121212] border border-[#F4F1EA]/10">
                            <div className="text-[11px] text-[#F4F1EA]/60">MRR</div>
                            <div className="text-xl font-bold text-amber-300 font-mono">$28,450</div>
                          </div>
                          <div className="p-3 bg-[#121212] border border-[#F4F1EA]/10">
                            <div className="text-[11px] text-[#F4F1EA]/60">Conversion</div>
                            <div className="text-xl font-bold text-emerald-400 font-mono">4.82%</div>
                          </div>
                        </div>

                        {/* Interactive Control */}
                        <div className="p-3 bg-[#121212] border border-[#F4F1EA]/10 flex items-center justify-between">
                          <span className="text-xs text-[#F4F1EA]/80">Simulate Traffic Surge:</span>
                          <button
                            onClick={() => setDemoState(prev => ({ ...prev, saasUsers: prev.saasUsers + 120 }))}
                            className="px-3 py-1 bg-amber-400 text-[#121212] font-bold text-xs hover:bg-amber-300"
                          >
                            + Traffic Boost
                          </button>
                        </div>
                      </div>
                    )}

                    {project.demoType === 'aicontent' && (
                      <div className="space-y-3">
                        <div className="text-xs text-[#F4F1EA]/80">Test Gemini AI Prompt Workflow:</div>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={demoState.aiPrompt}
                            onChange={(e) => setDemoState(prev => ({ ...prev, aiPrompt: e.target.value }))}
                            className="flex-1 bg-[#121212] border border-[#F4F1EA]/20 px-3 py-1.5 text-xs text-white"
                          />
                          <button
                            onClick={() => setDemoState(prev => ({
                              ...prev,
                              aiOutputText: `⚡ Gemini AI Output for "${prev.aiPrompt}": Rex Developer builds top-tier software with $89 Basic & $199 Premium plans.`
                            }))}
                            className="px-3 py-1.5 bg-amber-400 text-[#121212] font-bold text-xs hover:bg-amber-300 flex items-center gap-1"
                          >
                            <Sparkles className="w-3.5 h-3.5" /> Generate
                          </button>
                        </div>
                        <div className="p-3 bg-[#121212] border border-[#F4F1EA]/10 text-xs text-amber-300 font-mono">
                          {demoState.aiOutputText}
                        </div>
                      </div>
                    )}

                    {project.demoType === 'ecommerce' && (
                      <div className="space-y-3">
                        <div className="p-3 bg-[#121212] border border-[#F4F1EA]/10 flex items-center justify-between">
                          <div>
                            <div className="text-xs font-bold text-white">Apex Pro Wireless Headphones</div>
                            <div className="text-xs text-[#F4F1EA]/60">$189.00 • In Stock</div>
                          </div>
                          <button
                            onClick={() => setDemoState(prev => ({ ...prev, cartItems: prev.cartItems + 1 }))}
                            className="px-3 py-1.5 bg-amber-400 text-[#121212] font-bold text-xs hover:bg-amber-300"
                          >
                            Add to Cart ({demoState.cartItems})
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Generic fallback preview if not specific */}
                    {!['analytics', 'aicontent', 'ecommerce'].includes(project.demoType) && (
                      <div className="p-4 bg-[#121212] border border-[#F4F1EA]/10 space-y-3">
                        <p className="text-xs text-[#F4F1EA]/80 leading-relaxed">
                          {project.fullDesc}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.highlights.map((h, i) => (
                            <span key={i} className="px-2.5 py-1 bg-[#1a1a1a] border border-[#F4F1EA]/10 text-[11px] text-[#F4F1EA]/80 flex items-center gap-1">
                              <CheckCircle className="w-3 h-3 text-amber-300" /> {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              </div>

            </div>
          )}

          {activeTab === 'specs' && (
            <div className="space-y-4">
              <h4 className="text-sm font-serif italic font-bold text-white flex items-center gap-2">
                <Code2 className="w-4 h-4 text-amber-300" />
                Technical Stack & Specifications
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.techStack.map((tech, idx) => (
                  <div key={idx} className="p-3 bg-[#1a1a1a] border border-[#F4F1EA]/10 text-xs">
                    <span className="font-bold text-amber-300 font-mono">{tech}</span>
                    <div className="text-[10px] text-[#F4F1EA]/50 mt-0.5">Production Tested</div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#1a1a1a] border border-[#F4F1EA]/10 space-y-2">
                <div className="text-xs font-bold text-[#F4F1EA]/80">Performance Audits</div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-lg font-bold text-emerald-400 font-mono">{project.performanceScore}/100</div>
                    <div className="text-[11px] text-[#F4F1EA]/60">Performance</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-amber-300 font-mono">{project.seoScore}/100</div>
                    <div className="text-[11px] text-[#F4F1EA]/60">SEO Score</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-amber-400 font-mono">{project.deliveryTime}</div>
                    <div className="text-[11px] text-[#F4F1EA]/60">Turnaround</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'highlights' && (
            <div className="space-y-4">
              <h4 className="text-sm font-serif italic font-bold text-white">Feature Deliverables</h4>
              <ul className="space-y-2.5">
                {project.highlights.map((item, index) => (
                  <li key={index} className="p-3 bg-[#1a1a1a] border border-[#F4F1EA]/10 text-xs text-[#F4F1EA]/80 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Modal Footer CTA */}
        <div className="px-6 py-4 bg-[#121212] border-t border-[#F4F1EA]/10 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div>
            <div className="text-xs text-[#F4F1EA]/60">Ready to build your application?</div>
            <div className="text-xs font-serif italic font-bold text-amber-300">Basic Website $89 • Premium Packages from $199</div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#F4F1EA]/60 hover:text-white bg-[#1a1a1a] border border-[#F4F1EA]/10"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOrderSimilar(project.title);
              }}
              className="px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#121212] bg-amber-400 hover:bg-amber-300 flex items-center gap-1.5"
            >
              <span>Order Build</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

