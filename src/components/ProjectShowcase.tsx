import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS_DATA } from '../data/projectsData';
import { Eye, ArrowUpRight, Zap, Layers } from 'lucide-react';

interface ProjectShowcaseProps {
  onSelectProject: (project: Project) => void;
  onOpenOrder: (packageId?: string) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onSelectProject, onOpenOrder }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects (8)' },
    { id: 'saas', label: 'SaaS Platforms' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'webapp', label: 'Web Applications' },
    { id: 'landing', label: 'High-Impact Sites' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-[#F4F1EA] text-[#121212] border-t border-[#121212]/10 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212]/5 border border-[#121212]/15 text-[10px] font-bold uppercase tracking-[0.25em] text-[#121212]/70">
            <Layers className="w-3.5 h-3.5 text-[#121212]" />
            <span>Archive & Selected Works</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tighter text-[#121212]">
            Recent <span className="italic font-serif">Deployments.</span>
          </h2>
          <p className="text-[#121212]/80 text-sm sm:text-base leading-relaxed">
            Curated production software applications, SaaS tools, and digital platforms engineered by Rex Developer. Every build adheres to strict 100% speed benchmarks and modular architecture.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-[#121212]/10 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#121212] text-[#F4F1EA]'
                  : 'bg-transparent text-[#121212]/70 hover:text-[#121212] border border-[#121212]/20 hover:border-[#121212]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#F4F1EA] border border-[#121212]/20 hover:border-[#121212] transition-all duration-300 flex flex-col justify-between"
            >
              
              {/* Card Image Banner */}
              <div className="relative h-52 overflow-hidden bg-[#121212] border-b border-[#121212]/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest bg-[#121212] text-[#F4F1EA]">
                    {project.categoryLabel}
                  </span>
                  {project.badge && (
                    <span className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest bg-amber-400 text-[#121212]">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Performance Badge */}
                <div className="absolute top-3 right-3 px-2 py-1 bg-emerald-950 text-emerald-300 border border-emerald-800 text-[9px] font-mono font-bold flex items-center gap-1">
                  <Zap className="w-3 h-3 text-emerald-400" />
                  <span>{project.performanceScore}% Speed</span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <div>
                  <h3 className="text-xl font-serif font-black italic text-[#121212] group-hover:underline flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#121212]/50 group-hover:text-[#121212]" />
                  </h3>
                  <p className="text-xs text-[#121212]/80 mt-2 leading-relaxed line-clamp-2">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Metrics Chips */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#121212]/10">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="bg-[#121212]/5 p-2 border border-[#121212]/10">
                      <div className="text-[9px] text-[#121212]/60 uppercase font-bold tracking-widest">{m.label}</div>
                      <div className="text-xs font-serif italic font-bold text-[#121212]">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 text-[9px] font-mono font-bold bg-[#121212]/10 text-[#121212]">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[9px] font-mono text-[#121212]/50 bg-[#121212]/5">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions Footer */}
                <div className="pt-4 border-t border-[#121212]/10 flex items-center gap-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex-1 py-2.5 text-[10px] font-bold uppercase tracking-widest bg-[#121212] text-[#F4F1EA] hover:bg-[#2a2a2a] transition-all flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-300" />
                    <span>Inspect & Demo</span>
                  </button>

                  <button
                    onClick={() => onOpenOrder('premium-package')}
                    className="px-3.5 py-2.5 text-[10px] font-bold uppercase tracking-widest border border-[#121212] text-[#121212] hover:bg-[#121212] hover:text-[#F4F1EA] transition-all"
                    title="Order similar app"
                  >
                    Build
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 bg-[#121212] text-[#F4F1EA] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-serif italic font-black text-white">Have a custom software vision or app idea?</h4>
            <p className="text-xs text-[#F4F1EA]/70">Basic Website for $89 flat or full Premium Web Application starting at $199.</p>
          </div>
          <button
            onClick={() => onOpenOrder()}
            className="px-6 py-3.5 bg-[#F4F1EA] text-[#121212] hover:bg-white text-[10px] font-bold uppercase tracking-[0.2em] transition-all whitespace-nowrap"
          >
            Initiate Project Request
          </button>
        </div>

      </div>
    </section>
  );
};

