export type ProjectCategory = 'all' | 'saas' | 'ecommerce' | 'ai' | 'webapp' | 'landing';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  badge?: string;
  featured: boolean;
  performanceScore: number;
  seoScore: number;
  deliveryTime: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  highlights: string[];
  demoType: 'analytics' | 'ecommerce' | 'aicontent' | 'crm' | 'trading' | 'fitness' | 'studio' | 'security';
  liveUrl?: string;
  clientName?: string;
  completionYear: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  pricePeriod?: string;
  popular?: boolean;
  tagline: string;
  turnaround: string;
  revisions: string;
  support: string;
  features: { text: string; included: boolean; note?: string }[];
  ctaText: string;
}

export interface AddonOption {
  id: string;
  title: string;
  price: number;
  description: string;
  category: 'performance' | 'features' | 'ai' | 'support';
}

export interface ScopeResult {
  tier: string;
  estimatedPrice: number;
  estimatedDays: number;
  techStack: string[];
  featuresList: { name: string; description: string }[];
  architectureAdvice: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  verifiedProject: string;
  metrics: string;
}

export interface TechStackItem {
  name: string;
  iconName: string;
  category: 'Frontend' | 'Backend & DB' | 'AI & Cloud' | 'Tools & DevOps';
  description: string;
  level: string;
}
