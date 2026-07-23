import { PricingTier, AddonOption } from '../types';

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'basic-website',
    name: 'Basic Website Package',
    price: 89,
    tagline: 'Ideal for small businesses, personal portfolios, product landing pages, or event launches.',
    turnaround: '2 - 3 Days',
    revisions: '2 Rounds Included',
    support: '14 Days Post-Launch Support',
    popular: false,
    ctaText: 'Get Started ($89)',
    features: [
      { text: 'Sleek Single-Page or 3-Section Layout', included: true },
      { text: '100% Mobile & Tablet Responsive Design', included: true },
      { text: 'Lightning 98+ Google Speed & Lighthouse Score', included: true },
      { text: 'Interactive Contact / Lead Capture Form', included: true },
      { text: 'On-Page SEO Optimization & OpenGraph Tags', included: true },
      { text: 'Free SSL Configuration & Domain Deployment', included: true },
      { text: 'Clean Hand-Crafted Code (React + Tailwind)', included: true },
      { text: 'Custom Backend API & Database', included: false, note: 'Available in Premium' },
      { text: 'Gemini AI Assistant / Chatbot Integration', included: false, note: 'Available as Add-on or Premium' },
      { text: 'User Accounts & Authentication', included: false, note: 'Available in Premium' }
    ]
  },
  {
    id: 'premium-package',
    name: 'Premium Custom Package',
    price: 199,
    pricePeriod: 'starting at',
    tagline: 'For businesses needing full-stack web apps, custom dashboards, dynamic APIs, e-commerce, or AI features.',
    turnaround: '4 - 6 Days',
    revisions: 'Unlimited Revisions',
    support: '30 Days Priority Support',
    popular: true,
    ctaText: 'Build Premium App ($199+)',
    features: [
      { text: 'Multi-Page Dynamic React / Web Application', included: true },
      { text: 'Custom Express Backend & REST API Routes', included: true },
      { text: 'Database Setup (PostgreSQL / Firestore / Mongo)', included: true },
      { text: 'User Authentication & Role-Based Access', included: true },
      { text: 'Stripe / Payment Gateway Checkout Flow', included: true },
      { text: 'Gemini AI Integration (Chatbot / Auto-Content)', included: true },
      { text: 'Interactive Dashboards & Analytics Charts', included: true },
      { text: '100% Source Code Ownership & GitHub Handover', included: true },
      { text: '24/7 Priority Developer Communication Channel', included: true },
      { text: 'Dedicated 30-Day Post-Launch Maintenance', included: true }
    ]
  }
];

export const ADDON_OPTIONS: AddonOption[] = [
  {
    id: 'gemini-ai-bot',
    title: 'Gemini AI Chatbot / Smart Assistant',
    price: 40,
    description: 'Embed a custom AI chatbot that answers customer questions, captures leads, and quotes services 24/7.',
    category: 'ai'
  },
  {
    id: 'cms-integration',
    title: 'Custom Content Management (CMS)',
    price: 35,
    description: 'Easily update blog posts, portfolio items, or product catalog without writing code.',
    category: 'features'
  },
  {
    id: 'stripe-checkout',
    title: 'Stripe Payment / E-Commerce Upgrade',
    price: 45,
    description: 'Accept credit card payments, digital subscriptions, or digital product downloads directly.',
    category: 'features'
  },
  {
    id: 'speed-booster',
    title: 'Ultra Speed & Asset Optimization Pass',
    price: 20,
    description: 'Image compression, lazy loading, script deferred bundle tuning for guaranteed 99+ score.',
    category: 'performance'
  },
  {
    id: 'express-delivery',
    title: '24-Hour Rush Rush Delivery',
    price: 50,
    description: 'Move your project to top priority queue with 24-48 hour guaranteed delivery.',
    category: 'support'
  }
];
