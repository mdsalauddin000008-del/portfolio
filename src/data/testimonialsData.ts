import { Testimonial, TechStackItem } from '../types';

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'Nexus SaaS Solutions',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    content: 'Rex Developer turned our complex SaaS wireframe into a blistering fast production web app in just 5 days. The code quality is top-tier, structured like a FAANG senior engineer built it.',
    rating: 5,
    verifiedProject: 'PulseAnalytics SaaS Engine ($199 Premium Build)',
    metrics: '+180% User Engagement'
  },
  {
    id: 't2',
    name: 'Elena Rostova',
    role: 'Managing Director',
    company: 'Velox Design Studio',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    content: 'I ordered the $89 Basic Website package expecting a simple page, but Rex delivered a stunning, ultra-responsive site with 100% Lighthouse performance! Best $89 I have ever spent on my business.',
    rating: 5,
    verifiedProject: 'Velox Studio Landing ($89 Basic Website)',
    metrics: '100/100 Speed Score'
  },
  {
    id: 't3',
    name: 'Dr. Julian Thorne',
    role: 'Head of Product',
    company: 'NeuroLabs AI',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'The Gemini AI integration built by Rex Developer was effortless. He configured server-side security, clean prompt streaming, and an intuitive UI that our clients absolutely love.',
    rating: 5,
    verifiedProject: 'NeuroFlow AI Studio ($199 Premium + AI Bot)',
    metrics: '250k AI generations/mo'
  }
];

export const TECH_STACK_DATA: TechStackItem[] = [
  {
    name: 'React 19',
    iconName: 'Code',
    category: 'Frontend',
    description: 'Modern component architecture, custom hooks, concurrent rendering, and server components.',
    level: 'Expert'
  },
  {
    name: 'TypeScript',
    iconName: 'FileCode',
    category: 'Frontend',
    description: 'Strict end-to-end type safety eliminating runtime bugs before deployment.',
    level: 'Expert'
  },
  {
    name: 'Tailwind CSS v4',
    iconName: 'Palette',
    category: 'Frontend',
    description: 'High-speed utility styling with zero bloat and fluid responsive design.',
    level: 'Expert'
  },
  {
    name: 'Node.js & Express',
    iconName: 'Server',
    category: 'Backend & DB',
    description: 'High-throughput REST APIs, middleware routing, and microservices.',
    level: 'Advanced'
  },
  {
    name: 'Gemini AI API',
    iconName: 'Bot',
    category: 'AI & Cloud',
    description: 'Server-side LLM integration, prompt engineering, structured JSON schemas, and function calling.',
    level: 'Specialist'
  },
  {
    name: 'PostgreSQL & Firestore',
    iconName: 'Database',
    category: 'Backend & DB',
    description: 'Scalable relational & document persistence for user data and SaaS platforms.',
    level: 'Advanced'
  },
  {
    name: 'Vite & esbuild',
    iconName: 'Zap',
    category: 'Tools & DevOps',
    description: 'Instant hot builds, bundler optimization, and minimal package footprint.',
    level: 'Expert'
  },
  {
    name: 'Docker & Cloud Run',
    iconName: 'Container',
    category: 'Tools & DevOps',
    description: 'Containerized deployment for reliable 99.99% uptime across production hosts.',
    level: 'Advanced'
  }
];
