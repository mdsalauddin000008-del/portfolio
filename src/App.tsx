import React, { useState } from 'react';
import { Project, ScopeResult } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ProjectModal } from './components/ProjectModal';
import { PricingSection } from './components/PricingSection';
import { AIScopeBuilder } from './components/AIScopeBuilder';
import { TechStack } from './components/TechStack';
import { ClientProcess } from './components/ClientProcess';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // State to pre-fill ContactSection form when user selects package, add-ons, or AI scope
  const [orderPackageId, setOrderPackageId] = useState<string>('basic-website');
  const [orderAddons, setOrderAddons] = useState<string[]>([]);
  const [orderScopePrompt, setOrderScopePrompt] = useState<string>('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenOrder = (packageId?: string) => {
    if (packageId) {
      setOrderPackageId(packageId);
    }
    scrollToSection('contact');
  };

  const handleOpenOrderWithAddons = (packageId: string, selectedAddons: string[], totalPrice: number) => {
    setOrderPackageId(packageId);
    setOrderAddons(selectedAddons);
    scrollToSection('contact');
  };

  const handleApplyScopeToOrder = (scope: ScopeResult, customPrompt: string) => {
    const isPremium = scope.tier.toLowerCase().includes('premium') || scope.estimatedPrice >= 199;
    setOrderPackageId(isPremium ? 'premium-package' : 'basic-website');
    
    const formattedPrompt = `[AI Scope Blueprint Recommendation]
Target Tier: ${scope.tier} ($${scope.estimatedPrice})
Estimated Turnaround: ${scope.estimatedDays} Days
Recommended Tech Stack: ${scope.techStack.join(', ')}

Client Vision: ${customPrompt}

Architecture Advice: ${scope.architectureAdvice}`;

    setOrderScopePrompt(formattedPrompt);
    scrollToSection('contact');
  };

  const handleOrderSimilarProject = (projectTitle: string) => {
    setOrderPackageId('premium-package');
    setOrderScopePrompt(`Requesting a custom software project inspired by "${projectTitle}".`);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#121212] font-sans selection:bg-[#121212] selection:text-[#F4F1EA]">
      
      {/* Navigation Bar */}
      <Header 
        onOpenOrder={handleOpenOrder} 
        onScrollToSection={scrollToSection} 
      />

      {/* Hero Banner */}
      <Hero 
        onOpenOrder={handleOpenOrder} 
        onScrollToSection={scrollToSection} 
      />

      {/* Featured Software Projects Showcase */}
      <ProjectShowcase 
        onSelectProject={(project) => setSelectedProject(project)} 
        onOpenOrder={handleOpenOrder}
      />

      {/* Transparent Pricing ($89 Basic Website / $199 Premium Packages) */}
      <PricingSection 
        onOpenOrderWithAddons={handleOpenOrderWithAddons}
      />

      {/* Gemini AI Scope & Price Estimator */}
      <AIScopeBuilder 
        onApplyScopeToOrder={handleApplyScopeToOrder}
      />

      {/* Tech Stack & Engineering Standards */}
      <TechStack />

      {/* How It Works Process */}
      <ClientProcess />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Interactive Project Request Form */}
      <ContactSection 
        initialPackageId={orderPackageId}
        initialAddons={orderAddons}
        initialScopePrompt={orderScopePrompt}
      />

      {/* Footer */}
      <Footer 
        onScrollToSection={scrollToSection} 
        onOpenOrder={handleOpenOrder}
      />

      {/* Project Inspector & Live Simulator Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        onOrderSimilar={handleOrderSimilarProject}
      />

    </div>
  );
}
