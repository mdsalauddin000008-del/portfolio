import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'pulse-analytics',
    title: 'PulseAnalytics SaaS Engine',
    category: 'saas',
    categoryLabel: 'SaaS Platform',
    shortDesc: 'Real-time telemetry and user behavior analytics dashboard with predictive churn detection.',
    fullDesc: 'PulseAnalytics is an end-to-end SaaS application featuring high-frequency WebSocket data streams, multi-tenant workspace architecture, custom charting via Recharts & D3, and an integrated Gemini AI anomaly detection engine.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    badge: 'Flagship SaaS',
    featured: true,
    performanceScore: 100,
    seoScore: 99,
    deliveryTime: '5 Days',
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Recharts', 'Gemini AI'],
    metrics: [
      { label: 'Data Throughput', value: '50k ops/sec' },
      { label: 'Lighthouse Score', value: '100 / 100' },
      { label: 'Conversion Lift', value: '+184%' }
    ],
    highlights: [
      'Sub-millisecond WebSocket data pipeline for live event telemetry.',
      'Server-side Gemini AI summarization for hourly event anomalies.',
      'Custom dark/light sleek dashboard UI built with pure Tailwind utilities.',
      'Exportable CSV, PDF, and automated weekly email digests.'
    ],
    demoType: 'analytics',
    clientName: 'Pulse Digital Inc.',
    completionYear: '2026'
  },
  {
    id: 'neuroflow-ai',
    title: 'NeuroFlow AI Content Studio',
    category: 'ai',
    categoryLabel: 'AI & Automation',
    shortDesc: 'AI-powered content generation suite with custom prompt workflows and multi-modal export.',
    fullDesc: 'A powerful AI creative platform designed for content marketers and agencies. Built on top of Gemini 3.6 Flash, featuring custom template pipelines, real-time SEO scoring, and automated social media post formatting.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    badge: 'AI Powered',
    featured: true,
    performanceScore: 99,
    seoScore: 100,
    deliveryTime: '6 Days',
    techStack: ['React 19', 'Gemini 3.6 API', 'Tailwind CSS', 'TypeScript', 'Node.js'],
    metrics: [
      { label: 'Generation Speed', value: '1.2 seconds' },
      { label: 'User Satisfaction', value: '4.9 / 5.0' },
      { label: 'Monthly Output', value: '250k posts' }
    ],
    highlights: [
      'Server-side Gemini API prompt chaining with structured JSON schemas.',
      'Interactive rich-text editor with instant tone and length adjusters.',
      'Export directly to WordPress, LinkedIn, Twitter, and Medium.',
      'Built-in AI plagiarism checker and readability score indicator.'
    ],
    demoType: 'aicontent',
    clientName: 'NeuroLabs Studio',
    completionYear: '2026'
  },
  {
    id: 'apex-commerce',
    title: 'Apex Headless E-Commerce',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    shortDesc: 'Ultra-fast storefront with 3D product previewer, instant search, and seamless Stripe checkout.',
    fullDesc: 'Apex E-Commerce redefines online retail speed with sub-50ms page transitions, instant client-side cart management, Stripe checkout integration, and dynamic inventory sync.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    badge: 'High Speed',
    featured: true,
    performanceScore: 98,
    seoScore: 100,
    deliveryTime: '4 Days',
    techStack: ['React 19', 'Tailwind CSS', 'Stripe API', 'TypeScript', 'Vite', 'Express'],
    metrics: [
      { label: 'Page Load', value: '280ms' },
      { label: 'Cart Conversion', value: '+62%' },
      { label: 'Mobile Score', value: '100 / 100' }
    ],
    highlights: [
      'Lightning-fast product filter engine with zero layout shifts.',
      'Embedded interactive 3D model viewer and color customizer.',
      'Integrated Stripe payment gateway with guest checkout and Apple Pay.',
      'Order status tracking dashboard with SMS/email notifications.'
    ],
    demoType: 'ecommerce',
    clientName: 'Apex Goods Co.',
    completionYear: '2026'
  },
  {
    id: 'finedge-terminal',
    title: 'FinEdge Algorithmic Trading Hub',
    category: 'webapp',
    categoryLabel: 'Web Application',
    shortDesc: 'Financial market terminal with candle charts, order book order simulation, and news feeds.',
    fullDesc: 'A high-performance stock and cryptocurrency market monitoring app featuring canvas-rendered financial charts, live ticker streams, custom alert thresholds, and automated portfolio rebalancing simulation.',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80',
    badge: 'FinTech',
    featured: false,
    performanceScore: 99,
    seoScore: 98,
    deliveryTime: '5 Days',
    techStack: ['React 19', 'D3.js', 'TypeScript', 'Tailwind CSS', 'WebSockets'],
    metrics: [
      { label: 'Frame Rate', value: '60 FPS Smooth' },
      { label: 'Tick Latency', value: '< 15ms' },
      { label: 'Active Users', value: '12,000+' }
    ],
    highlights: [
      'High-performance technical indicator calculations (RSI, MACD, Bollinger Bands).',
      'Custom drag-and-drop workspace layout with persistent state.',
      'News sentiment analyzer highlighting bullish/bearish market catalysts.',
      'Paper trading simulator with historical backtesting engine.'
    ],
    demoType: 'trading',
    clientName: 'FinEdge Capital',
    completionYear: '2025'
  },
  {
    id: 'omni-crm',
    title: 'OmniCRM Enterprise Hub',
    category: 'saas',
    categoryLabel: 'SaaS Platform',
    shortDesc: 'Multi-channel customer relationship pipeline with drag-and-drop deal stages and contact sync.',
    fullDesc: 'OmniCRM gives sales teams full visibility over deal pipelines, automated email drip campaigns, lead scoring, and team activity logs in a clean, uncluttered user interface.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    performanceScore: 100,
    seoScore: 98,
    deliveryTime: '5 Days',
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Express', 'Lucide React'],
    metrics: [
      { label: 'Sales Velocity', value: '+35%' },
      { label: 'Onboarding Time', value: '10 Mins' },
      { label: 'System Uptime', value: '99.99%' }
    ],
    highlights: [
      'Kanban pipeline with intuitive drag-and-drop stage updates.',
      'Activity timeline tracking emails, calls, and meeting notes.',
      'Smart lead scoring algorithm highlighting hot sales prospects.',
      'Role-based permissions and granular team workspace management.'
    ],
    demoType: 'crm',
    clientName: 'OmniGlobal Corp',
    completionYear: '2026'
  },
  {
    id: 'velox-agency',
    title: 'Velox Creative Agency Landing',
    category: 'landing',
    categoryLabel: 'High-Impact Landing',
    shortDesc: 'Bespoke agency showcase site with fluid scroll effects, interactive portfolio grid, and booking flow.',
    fullDesc: 'An ultra-refined creative landing page built for a design & motion studio. Delivered under our $89 Basic Package baseline, proving that affordable pricing never compromises luxury visual craft.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    badge: '$89 Basic Showcase',
    featured: true,
    performanceScore: 100,
    seoScore: 100,
    deliveryTime: '2 Days',
    techStack: ['React 19', 'Motion', 'Tailwind CSS', 'TypeScript', 'Vite'],
    metrics: [
      { label: 'Build Cost', value: '$89 Flat' },
      { label: 'Turnaround', value: '48 Hours' },
      { label: 'Lighthouse Score', value: '100 / 100' }
    ],
    highlights: [
      'Smooth scroll transitions powered by lightweight framer/motion.',
      'Responsive photo and video portfolio showcase grid.',
      'Instant booking form with email confirmation integration.',
      'Zero bloated dependencies — 100% clean custom CSS utility code.'
    ],
    demoType: 'studio',
    clientName: 'Velox Design Studio',
    completionYear: '2026'
  },
  {
    id: 'apex-fitness-pwa',
    title: 'Apex Workout & Nutrition PWA',
    category: 'webapp',
    categoryLabel: 'Web Application',
    shortDesc: 'Progressive Web App with live workout timer, biometric tracking graphs, and offline sync.',
    fullDesc: 'A fitness tracker app with offline-first client storage, interactive workout routine builder, biometric progress charts, and streak gamification.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    performanceScore: 98,
    seoScore: 99,
    deliveryTime: '4 Days',
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'IndexedDB', 'Recharts'],
    metrics: [
      { label: 'Offline Support', value: '100% Native' },
      { label: 'Workout Logged', value: '150,000+' },
      { label: 'App Install Rate', value: '48%' }
    ],
    highlights: [
      'PWA installation manifest for home screen app launch.',
      'Interactive rest timer with voice chime audio cue.',
      'Body weight & volume progressive overload tracking charts.',
      'Custom workout routines generator with video movement guides.'
    ],
    demoType: 'fitness',
    clientName: 'Apex Health',
    completionYear: '2025'
  },
  {
    id: 'cloudvault-security',
    title: 'CloudVault Encrypted Workspace',
    category: 'webapp',
    categoryLabel: 'Web Application',
    shortDesc: 'End-to-end encrypted document sharing vault with audit logs and access control.',
    fullDesc: 'A secure cloud vault application featuring client-side file encryption, time-limited share links, IP restriction controls, and instant PDF preview.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    performanceScore: 99,
    seoScore: 97,
    deliveryTime: '5 Days',
    techStack: ['React 19', 'Web Crypto API', 'Tailwind CSS', 'Express', 'TypeScript'],
    metrics: [
      { label: 'Security Grade', value: 'A+ Rated' },
      { label: 'Encryption', value: 'AES-256-GCM' },
      { label: 'Audit Trail', value: 'Real-Time' }
    ],
    highlights: [
      'In-browser Web Crypto AES-256 key generation before server transit.',
      'Self-destructing secure file link sharing with passcodes.',
      'Granular team permission levels (Viewer, Editor, Admin).',
      'Real-time access audit logs with geographical IP detection.'
    ],
    demoType: 'security',
    clientName: 'CloudVault Legal',
    completionYear: '2026'
  }
];
