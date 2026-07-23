import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In-memory store for project inquiries
interface Inquiry {
  id: string;
  clientName: string;
  clientEmail: string;
  projectType: string;
  selectedTier: string;
  estimatedPrice: number;
  addons: string[];
  description: string;
  status: "Pending Review" | "Approved" | "In Development" | "Delivered";
  createdAt: string;
}

const inquiriesStore: Inquiry[] = [
  {
    id: "REX-2026-1001",
    clientName: "Sarah Jenkins",
    clientEmail: "sarah@nexusfintech.co",
    projectType: "Custom SaaS Landing Page",
    selectedTier: "Basic Website ($89)",
    estimatedPrice: 89,
    addons: ["Lightning SEO Optimization"],
    description: "High-converting single page landing for our new AI fintech app with newsletter integration.",
    status: "Delivered",
    createdAt: "2026-07-20T10:15:00Z"
  },
  {
    id: "REX-2026-1002",
    clientName: "David Miller",
    clientEmail: "david@apexfit.com",
    projectType: "Full Web App & Dashboard",
    selectedTier: "Premium Package ($199)",
    estimatedPrice: 249,
    addons: ["Gemini AI Chatbot Integration", "Custom CMS Integration"],
    description: "Web application for workout tracking with client dashboard, Stripe checkout, and automated AI meal plan generator.",
    status: "In Development",
    createdAt: "2026-07-22T14:30:00Z"
  }
];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", appName: "Rex Developer API" });
  });

  // Get current inquiries list
  app.get("/api/inquiries", (req, res) => {
    res.json({ success: true, inquiries: inquiriesStore });
  });

  // Submit new project request
  app.post("/api/contact", (req, res) => {
    const { clientName, clientEmail, projectType, selectedTier, estimatedPrice, addons, description } = req.body;

    if (!clientName || !clientEmail || !description) {
      return res.status(400).json({ error: "Missing required fields (name, email, description)." });
    }

    const newInquiry: Inquiry = {
      id: `REX-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      clientName,
      clientEmail,
      projectType: projectType || "Custom Software Project",
      selectedTier: selectedTier || "Basic Website ($89)",
      estimatedPrice: Number(estimatedPrice) || 89,
      addons: Array.isArray(addons) ? addons : [],
      description,
      status: "Pending Review",
      createdAt: new Date().toISOString()
    };

    inquiriesStore.unshift(newInquiry);

    res.json({
      success: true,
      message: "Inquiry received successfully!",
      inquiry: newInquiry
    });
  });

  // Gemini AI Project Scope Estimator
  app.post("/api/scope-estimator", async (req, res) => {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Please provide a valid project description." });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // Fallback deterministic response if API key is not yet set
      return res.json({
        tier: prompt.toLowerCase().includes("database") || prompt.toLowerCase().includes("auth") || prompt.toLowerCase().includes("dashboard") ? "Premium Package ($199+)" : "Basic Website ($89)",
        estimatedPrice: prompt.toLowerCase().includes("database") || prompt.toLowerCase().includes("ai") ? 199 : 89,
        estimatedDays: prompt.toLowerCase().includes("ai") ? 5 : 3,
        techStack: ["React 19", "Tailwind CSS v4", "TypeScript", "Vite", "Node.js / Express"],
        featuresList: [
          { name: "Responsive Modern Layout", description: "Pixel-perfect desktop and mobile rendering." },
          { name: "High Performance Baseline", description: "98+ Lighthouse speed and optimized asset loading." },
          { name: "Interactive UI Components", description: "Smooth transitions and custom dynamic controls." }
        ],
        architectureAdvice: "This project can be delivered swiftly using our high-performance React + Express stack, ensuring modular extensibility."
      });
    }

    try {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          }
        }
      });

      const systemInstruction = `You are the lead software architect for "Rex Developer", an elite web software engineering consultancy. 
Rex Developer offers two primary packages:
1. Basic Website ($89): High-speed, responsive 1-3 section single-page landing or portfolio site, SEO ready, delivered in 2-3 days.
2. Premium Package (Starting at $199): Full web application, interactive custom dashboards, database/auth/API integrations, Gemini AI features, e-commerce, custom backends, delivered in 4-6 days.

Analyze the user's project request and provide a structured scope and estimate in valid JSON matching the schema.
Be realistic, accurate, and encouraging. If it's a simple landing page or showcase site, recommend the $89 tier. If it requires auth, database, backend logic, APIs, or complex tools, recommend $199 or a custom tier starting at $199.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          systemInstruction,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              tier: { type: Type.STRING, description: "Recommended package name, e.g., 'Basic Website ($89)' or 'Premium Package ($199)' or 'Premium Custom ($249)'" },
              estimatedPrice: { type: Type.NUMBER, description: "Total recommended price in USD, minimum 89 for basic, 199+ for premium" },
              estimatedDays: { type: Type.NUMBER, description: "Estimated completion days, e.g. 3 or 5" },
              techStack: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "List of key technologies recommended (e.g., React 19, TypeScript, Express, Tailwind CSS, Gemini API, PostgreSQL, Vite)"
              },
              featuresList: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    description: { type: Type.STRING }
                  },
                  required: ["name", "description"]
                },
                description: "Key feature modules included in this scope"
              },
              architectureAdvice: { type: Type.STRING, description: "A concise 2-sentence software architect advice on why this stack and structure fits best." }
            },
            required: ["tier", "estimatedPrice", "estimatedDays", "techStack", "featuresList", "architectureAdvice"]
          }
        }
      });

      const text = response.text || "";
      const result = JSON.parse(text);
      return res.json(result);
    } catch (err: any) {
      console.error("Gemini scope estimator error:", err);
      // Return clear fallback estimate so UI never breaks
      return res.json({
        tier: "Basic Website ($89)",
        estimatedPrice: 89,
        estimatedDays: 3,
        techStack: ["React 19", "Tailwind CSS v4", "TypeScript", "Vite", "Express"],
        featuresList: [
          { name: "Custom Responsive Design", description: "Mobile-first, high contrast typography and layout." },
          { name: "Fast Turnaround", description: "Delivered within 3 business days." },
          { name: "SEO & Speed Suite", description: "Optimized for search engines and instant load time." }
        ],
        architectureAdvice: "Our standardized architecture ensures instant spin-up and long-term scalability for your project."
      });
    }
  });

  // Vite Middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Rex Developer Server listening at http://0.0.0.0:${PORT}`);
  });
}

startServer();
