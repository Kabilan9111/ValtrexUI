import { DNAThemeConfig } from './types';

// ===============================
// Category: Basic
// ===============================
export const minimalWhite: DNAThemeConfig = {
  id: "minimal-white",
  version: "2.0.0",
  metadata: {
    name: "Minimal White",
    category: "Basic",
    description: "Pure white background with thin borders and clean typography.",
    rating: 4.8,
    downloads: 154000,
    popularity: 100,
    componentsCount: 50,
    pagesCount: 10,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "minimal-dashboard",
    "card": "border",
    "navigation": "apple",
    "typography": "startup",
    "animation": "minimal",
    "color": "minimal-white"
  }
};

export const minimalDark: DNAThemeConfig = {
  id: "minimal-dark",
  version: "2.0.0",
  metadata: {
    name: "Minimal Dark",
    category: "Basic",
    description: "Charcoal black background with thin white borders and SaaS styling.",
    rating: 4.9,
    downloads: 182000,
    popularity: 100,
    componentsCount: 50,
    pagesCount: 10,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "minimal-dashboard",
    "card": "border",
    "navigation": "modern",
    "typography": "startup",
    "animation": "minimal",
    "color": "dark-premium"
  }
};

// ===============================
// Category: AI & Futuristic
// ===============================
export const teslaLuxury: DNAThemeConfig = {
  id: "tesla-luxury",
  version: "2.0.0",
  metadata: {
    name: "Tesla Luxury",
    category: "AI & Futuristic",
    description: "Premium DNA theme for AI & Futuristic use-cases.",
    rating: 4.7,
    downloads: 34336,
    popularity: 94,
    componentsCount: 33,
    pagesCount: 6,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "luxury-kpi",
    "card": "glass",
    "navigation": "modern",
    "typography": "futuristic",
    "animation": "premium",
    "color": "neon-purple"
}
};

export const neuralOs: DNAThemeConfig = {
  id: "neural-os",
  version: "2.0.0",
  metadata: {
    name: "Neural OS",
    category: "AI & Futuristic",
    description: "Premium DNA theme for AI & Futuristic use-cases.",
    rating: 4.5,
    downloads: 38835,
    popularity: 90,
    componentsCount: 44,
    pagesCount: 11,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "ai-chat",
    "card": "flat",
    "navigation": "apple",
    "typography": "futuristic",
    "animation": "minimal",
    "color": "cyberpunk"
}
};

export const quantumGrid: DNAThemeConfig = {
  id: "quantum-grid",
  version: "2.0.0",
  metadata: {
    name: "Quantum Grid",
    category: "AI & Futuristic",
    description: "Premium DNA theme for AI & Futuristic use-cases.",
    rating: 4.8,
    downloads: 42140,
    popularity: 96,
    componentsCount: 32,
    pagesCount: 13,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "ai-chat",
    "card": "neon",
    "navigation": "gaming",
    "typography": "futuristic",
    "animation": "futuristic",
    "color": "cyberpunk"
}
};

export const cyberMatrix: DNAThemeConfig = {
  id: "cyber-matrix",
  version: "2.0.0",
  metadata: {
    name: "Cyber Matrix",
    category: "AI & Futuristic",
    description: "Premium DNA theme for AI & Futuristic use-cases.",
    rating: 4.7,
    downloads: 39562,
    popularity: 87,
    componentsCount: 39,
    pagesCount: 14,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "ai-chat",
    "card": "border",
    "navigation": "gaming",
    "typography": "futuristic",
    "animation": "futuristic",
    "color": "cyberpunk"
}
};

export const synthwavePro: DNAThemeConfig = {
  id: "synthwave-pro",
  version: "2.0.0",
  metadata: {
    name: "Synthwave Pro",
    category: "AI & Futuristic",
    description: "Premium DNA theme for AI & Futuristic use-cases.",
    rating: 4.6,
    downloads: 42353,
    popularity: 98,
    componentsCount: 58,
    pagesCount: 14,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "ai-chat",
    "card": "gradient",
    "navigation": "modern",
    "typography": "startup",
    "animation": "premium",
    "color": "neon-purple"
}
};

export const hologramX: DNAThemeConfig = {
  id: "hologram-x",
  version: "2.0.0",
  metadata: {
    name: "Hologram X",
    category: "AI & Futuristic",
    description: "Premium DNA theme for AI & Futuristic use-cases.",
    rating: 4.8,
    downloads: 35954,
    popularity: 93,
    componentsCount: 39,
    pagesCount: 9,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "ai-chat",
    "card": "glass",
    "navigation": "modern",
    "typography": "futuristic",
    "animation": "premium",
    "color": "apple-glass"
}
};

export const aiCommandCenter: DNAThemeConfig = {
  id: "ai-command-center",
  version: "2.0.0",
  metadata: {
    name: "AI Command Center",
    category: "AI & Futuristic",
    description: "Premium DNA theme for AI & Futuristic use-cases.",
    rating: 4.7,
    downloads: 27837,
    popularity: 91,
    componentsCount: 37,
    pagesCount: 7,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "ai-chat",
    "card": "elevated",
    "navigation": "enterprise",
    "typography": "corporate",
    "animation": "minimal",
    "color": "dark-premium"
}
};

// ===============================
// Category: SaaS
// ===============================
export const stripeModern: DNAThemeConfig = {
  id: "stripe-modern",
  version: "2.0.0",
  metadata: {
    name: "Stripe Modern",
    category: "SaaS",
    description: "Premium DNA theme for SaaS use-cases.",
    rating: 4.5,
    downloads: 19928,
    popularity: 96,
    componentsCount: 38,
    pagesCount: 5,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "mac-os",
    "card": "soft-shadow",
    "navigation": "modern",
    "typography": "startup",
    "animation": "premium",
    "color": "minimal-white"
}
};

export const linearPro: DNAThemeConfig = {
  id: "linear-pro",
  version: "2.0.0",
  metadata: {
    name: "Linear Pro",
    category: "SaaS",
    description: "Premium DNA theme for SaaS use-cases.",
    rating: 4.7,
    downloads: 39573,
    popularity: 87,
    componentsCount: 40,
    pagesCount: 7,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "mac-os",
    "card": "flat",
    "navigation": "apple",
    "typography": "startup",
    "animation": "minimal",
    "color": "dark-premium"
}
};

export const notionWorkspace: DNAThemeConfig = {
  id: "notion-workspace",
  version: "2.0.0",
  metadata: {
    name: "Notion Workspace",
    category: "SaaS",
    description: "Premium DNA theme for SaaS use-cases.",
    rating: 4.7,
    downloads: 28796,
    popularity: 85,
    componentsCount: 50,
    pagesCount: 9,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "document-editor",
    "card": "flat",
    "navigation": "apple",
    "typography": "startup",
    "animation": "minimal",
    "color": "minimal-white"
}
};

export const vercelDark: DNAThemeConfig = {
  id: "vercel-dark",
  version: "2.0.0",
  metadata: {
    name: "Vercel Dark",
    category: "SaaS",
    description: "Premium DNA theme for SaaS use-cases.",
    rating: 4.8,
    downloads: 39919,
    popularity: 96,
    componentsCount: 40,
    pagesCount: 5,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "mac-os",
    "card": "border",
    "navigation": "modern",
    "typography": "startup",
    "animation": "premium",
    "color": "dark-premium"
}
};

export const growthOs: DNAThemeConfig = {
  id: "growth-os",
  version: "2.0.0",
  metadata: {
    name: "Growth OS",
    category: "SaaS",
    description: "Premium DNA theme for SaaS use-cases.",
    rating: 4.7,
    downloads: 24553,
    popularity: 96,
    componentsCount: 56,
    pagesCount: 7,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "mac-os",
    "card": "elevated",
    "navigation": "modern",
    "typography": "startup",
    "animation": "premium",
    "color": "enterprise-blue"
}
};

export const founderHub: DNAThemeConfig = {
  id: "founder-hub",
  version: "2.0.0",
  metadata: {
    name: "Founder Hub",
    category: "SaaS",
    description: "Premium DNA theme for SaaS use-cases.",
    rating: 4.6,
    downloads: 24047,
    popularity: 94,
    componentsCount: 47,
    pagesCount: 12,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "mac-os",
    "card": "glass",
    "navigation": "modern",
    "typography": "startup",
    "animation": "premium",
    "color": "minimal-white"
}
};

export const startupPrime: DNAThemeConfig = {
  id: "startup-prime",
  version: "2.0.0",
  metadata: {
    name: "Startup Prime",
    category: "SaaS",
    description: "Premium DNA theme for SaaS use-cases.",
    rating: 4.8,
    downloads: 29431,
    popularity: 90,
    componentsCount: 53,
    pagesCount: 7,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "mac-os",
    "card": "gradient",
    "navigation": "modern",
    "typography": "startup",
    "animation": "premium",
    "color": "neon-purple"
}
};

// ===============================
// Category: Enterprise
// ===============================
export const enterpriseElite: DNAThemeConfig = {
  id: "enterprise-elite",
  version: "2.0.0",
  metadata: {
    name: "Enterprise Elite",
    category: "Enterprise",
    description: "Premium DNA theme for Enterprise use-cases.",
    rating: 4.7,
    downloads: 37897,
    popularity: 99,
    componentsCount: 45,
    pagesCount: 7,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "enterprise-erp",
    "card": "elevated",
    "navigation": "enterprise",
    "typography": "corporate",
    "animation": "minimal",
    "color": "enterprise-blue"
}
};

export const ibmCarbon: DNAThemeConfig = {
  id: "ibm-carbon",
  version: "2.0.0",
  metadata: {
    name: "IBM Carbon Inspired",
    category: "Enterprise",
    description: "Premium DNA theme for Enterprise use-cases.",
    rating: 4.5,
    downloads: 45384,
    popularity: 88,
    componentsCount: 32,
    pagesCount: 8,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "enterprise-erp",
    "card": "flat",
    "navigation": "enterprise",
    "typography": "corporate",
    "animation": "minimal",
    "color": "dark-premium"
}
};

export const msFluent: DNAThemeConfig = {
  id: "ms-fluent",
  version: "2.0.0",
  metadata: {
    name: "Microsoft Fluent Inspired",
    category: "Enterprise",
    description: "Premium DNA theme for Enterprise use-cases.",
    rating: 4.7,
    downloads: 35282,
    popularity: 94,
    componentsCount: 31,
    pagesCount: 7,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "enterprise-erp",
    "card": "glass",
    "navigation": "modern",
    "typography": "corporate",
    "animation": "premium",
    "color": "minimal-white"
}
};

export const sapBusiness: DNAThemeConfig = {
  id: "sap-business",
  version: "2.0.0",
  metadata: {
    name: "SAP Business Suite",
    category: "Enterprise",
    description: "Premium DNA theme for Enterprise use-cases.",
    rating: 4.7,
    downloads: 31720,
    popularity: 91,
    componentsCount: 52,
    pagesCount: 7,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "enterprise-erp",
    "card": "elevated",
    "navigation": "enterprise",
    "typography": "corporate",
    "animation": "minimal",
    "color": "enterprise-blue"
}
};

export const corporateMatrix: DNAThemeConfig = {
  id: "corporate-matrix",
  version: "2.0.0",
  metadata: {
    name: "Corporate Matrix",
    category: "Enterprise",
    description: "Premium DNA theme for Enterprise use-cases.",
    rating: 4.7,
    downloads: 17399,
    popularity: 92,
    componentsCount: 55,
    pagesCount: 5,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "enterprise-erp",
    "card": "border",
    "navigation": "enterprise",
    "typography": "corporate",
    "animation": "minimal",
    "color": "enterprise-blue"
}
};

export const executiveBoardroom: DNAThemeConfig = {
  id: "executive-boardroom",
  version: "2.0.0",
  metadata: {
    name: "Executive Boardroom",
    category: "Enterprise",
    description: "Premium DNA theme for Enterprise use-cases.",
    rating: 4.6,
    downloads: 29646,
    popularity: 96,
    componentsCount: 50,
    pagesCount: 11,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "enterprise-erp",
    "card": "elevated",
    "navigation": "enterprise",
    "typography": "luxury",
    "animation": "premium",
    "color": "dark-premium"
}
};

// ===============================
// Category: Finance
// ===============================
export const bloombergTerminal: DNAThemeConfig = {
  id: "bloomberg-terminal",
  version: "2.0.0",
  metadata: {
    name: "Bloomberg Terminal",
    category: "Finance",
    description: "Premium DNA theme for Finance use-cases.",
    rating: 4.8,
    downloads: 16631,
    popularity: 98,
    componentsCount: 48,
    pagesCount: 5,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "dense-terminal",
    "card": "flat",
    "navigation": "finance",
    "typography": "corporate",
    "animation": "minimal",
    "color": "cyberpunk"
}
};

export const fintechElite: DNAThemeConfig = {
  id: "fintech-elite",
  version: "2.0.0",
  metadata: {
    name: "Fintech Elite",
    category: "Finance",
    description: "Premium DNA theme for Finance use-cases.",
    rating: 4.9,
    downloads: 11415,
    popularity: 89,
    componentsCount: 52,
    pagesCount: 8,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "banking-portal",
    "card": "soft-shadow",
    "navigation": "modern",
    "typography": "startup",
    "animation": "premium",
    "color": "fintech-green"
}
};

export const tradingPro: DNAThemeConfig = {
  id: "trading-pro",
  version: "2.0.0",
  metadata: {
    name: "Trading Pro",
    category: "Finance",
    description: "Premium DNA theme for Finance use-cases.",
    rating: 4.9,
    downloads: 49663,
    popularity: 85,
    componentsCount: 41,
    pagesCount: 14,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "dense-terminal",
    "card": "border",
    "navigation": "finance",
    "typography": "corporate",
    "animation": "minimal",
    "color": "dark-premium"
}
};

export const wealthOs: DNAThemeConfig = {
  id: "wealth-os",
  version: "2.0.0",
  metadata: {
    name: "Wealth OS",
    category: "Finance",
    description: "Premium DNA theme for Finance use-cases.",
    rating: 4.7,
    downloads: 43273,
    popularity: 85,
    componentsCount: 51,
    pagesCount: 13,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "banking-portal",
    "card": "elevated",
    "navigation": "finance",
    "typography": "luxury",
    "animation": "luxury",
    "color": "luxury-gold"
}
};

export const bankingPrime: DNAThemeConfig = {
  id: "banking-prime",
  version: "2.0.0",
  metadata: {
    name: "Banking Prime",
    category: "Finance",
    description: "Premium DNA theme for Finance use-cases.",
    rating: 4.9,
    downloads: 17306,
    popularity: 99,
    componentsCount: 38,
    pagesCount: 12,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "banking-portal",
    "card": "elevated",
    "navigation": "finance",
    "typography": "corporate",
    "animation": "minimal",
    "color": "enterprise-blue"
}
};

export const hedgeFundUi: DNAThemeConfig = {
  id: "hedge-fund-ui",
  version: "2.0.0",
  metadata: {
    name: "Hedge Fund UI",
    category: "Finance",
    description: "Premium DNA theme for Finance use-cases.",
    rating: 4.7,
    downloads: 39468,
    popularity: 92,
    componentsCount: 57,
    pagesCount: 7,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "banking-portal",
    "card": "glass",
    "navigation": "finance",
    "typography": "luxury",
    "animation": "premium",
    "color": "dark-premium"
}
};

// ===============================
// Category: Luxury
// ===============================
export const appleGlass: DNAThemeConfig = {
  id: "apple-glass",
  version: "2.0.0",
  metadata: {
    name: "Apple Glass",
    category: "Luxury",
    description: "Premium DNA theme for Luxury use-cases.",
    rating: 4.7,
    downloads: 20456,
    popularity: 87,
    componentsCount: 36,
    pagesCount: 12,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "mac-os",
    "card": "glass",
    "navigation": "apple",
    "typography": "startup",
    "animation": "premium",
    "color": "apple-glass"
}
};

export const appleVision: DNAThemeConfig = {
  id: "apple-vision",
  version: "2.0.0",
  metadata: {
    name: "Apple Vision",
    category: "Luxury",
    description: "Premium DNA theme for Luxury use-cases.",
    rating: 4.7,
    downloads: 41886,
    popularity: 98,
    componentsCount: 36,
    pagesCount: 14,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "luxury-kpi",
    "card": "glass",
    "navigation": "apple",
    "typography": "startup",
    "animation": "luxury",
    "color": "apple-glass"
}
};

export const porscheLuxury: DNAThemeConfig = {
  id: "porsche-luxury",
  version: "2.0.0",
  metadata: {
    name: "Porsche Luxury",
    category: "Luxury",
    description: "Premium DNA theme for Luxury use-cases.",
    rating: 4.7,
    downloads: 17040,
    popularity: 86,
    componentsCount: 45,
    pagesCount: 14,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "luxury-kpi",
    "card": "flat",
    "navigation": "modern",
    "typography": "luxury",
    "animation": "premium",
    "color": "dark-premium"
}
};

export const monacoGold: DNAThemeConfig = {
  id: "monaco-gold",
  version: "2.0.0",
  metadata: {
    name: "Monaco Gold",
    category: "Luxury",
    description: "Premium DNA theme for Luxury use-cases.",
    rating: 4.7,
    downloads: 39380,
    popularity: 94,
    componentsCount: 49,
    pagesCount: 7,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "luxury-kpi",
    "card": "elevated",
    "navigation": "modern",
    "typography": "luxury",
    "animation": "luxury",
    "color": "luxury-gold"
}
};

export const rolexBlack: DNAThemeConfig = {
  id: "rolex-black",
  version: "2.0.0",
  metadata: {
    name: "Rolex Black",
    category: "Luxury",
    description: "Premium DNA theme for Luxury use-cases.",
    rating: 4.7,
    downloads: 14068,
    popularity: 99,
    componentsCount: 46,
    pagesCount: 11,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "luxury-kpi",
    "card": "border",
    "navigation": "modern",
    "typography": "luxury",
    "animation": "luxury",
    "color": "dark-premium"
}
};

export const ferrariRed: DNAThemeConfig = {
  id: "ferrari-red",
  version: "2.0.0",
  metadata: {
    name: "Ferrari Red",
    category: "Luxury",
    description: "Premium DNA theme for Luxury use-cases.",
    rating: 4.9,
    downloads: 37370,
    popularity: 91,
    componentsCount: 49,
    pagesCount: 7,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "luxury-kpi",
    "card": "elevated",
    "navigation": "modern",
    "typography": "luxury",
    "animation": "premium",
    "color": "minimal-white"
}
};

// ===============================
// Category: Gaming
// ===============================
export const cyberArena: DNAThemeConfig = {
  id: "cyber-arena",
  version: "2.0.0",
  metadata: {
    name: "Cyber Arena",
    category: "Gaming",
    description: "Premium DNA theme for Gaming use-cases.",
    rating: 4.8,
    downloads: 10865,
    popularity: 86,
    componentsCount: 47,
    pagesCount: 13,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "gaming-hub",
    "card": "neon",
    "navigation": "gaming",
    "typography": "futuristic",
    "animation": "gaming",
    "color": "cyberpunk"
}
};

export const valorantInspired: DNAThemeConfig = {
  id: "valorant-inspired",
  version: "2.0.0",
  metadata: {
    name: "Valorant Inspired",
    category: "Gaming",
    description: "Premium DNA theme for Gaming use-cases.",
    rating: 4.8,
    downloads: 34973,
    popularity: 97,
    componentsCount: 34,
    pagesCount: 14,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "gaming-hub",
    "card": "flat",
    "navigation": "gaming",
    "typography": "futuristic",
    "animation": "gaming",
    "color": "dark-premium"
}
};

export const esportsPro: DNAThemeConfig = {
  id: "esports-pro",
  version: "2.0.0",
  metadata: {
    name: "Esports Pro",
    category: "Gaming",
    description: "Premium DNA theme for Gaming use-cases.",
    rating: 4.5,
    downloads: 10746,
    popularity: 93,
    componentsCount: 44,
    pagesCount: 9,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "gaming-hub",
    "card": "gradient",
    "navigation": "gaming",
    "typography": "startup",
    "animation": "gaming",
    "color": "neon-purple"
}
};

export const neonGaming: DNAThemeConfig = {
  id: "neon-gaming",
  version: "2.0.0",
  metadata: {
    name: "Neon Gaming",
    category: "Gaming",
    description: "Premium DNA theme for Gaming use-cases.",
    rating: 4.9,
    downloads: 36985,
    popularity: 97,
    componentsCount: 53,
    pagesCount: 9,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "gaming-hub",
    "card": "neon",
    "navigation": "gaming",
    "typography": "futuristic",
    "animation": "gaming",
    "color": "neon-purple"
}
};

export const arcadeX: DNAThemeConfig = {
  id: "arcade-x",
  version: "2.0.0",
  metadata: {
    name: "Arcade X",
    category: "Gaming",
    description: "Premium DNA theme for Gaming use-cases.",
    rating: 4.6,
    downloads: 12889,
    popularity: 88,
    componentsCount: 43,
    pagesCount: 10,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "gaming-hub",
    "card": "border",
    "navigation": "gaming",
    "typography": "futuristic",
    "animation": "futuristic",
    "color": "cyberpunk"
}
};

export const battleStation: DNAThemeConfig = {
  id: "battle-station",
  version: "2.0.0",
  metadata: {
    name: "Battle Station",
    category: "Gaming",
    description: "Premium DNA theme for Gaming use-cases.",
    rating: 4.8,
    downloads: 36703,
    popularity: 86,
    componentsCount: 41,
    pagesCount: 13,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "gaming-hub",
    "card": "elevated",
    "navigation": "gaming",
    "typography": "futuristic",
    "animation": "gaming",
    "color": "dark-premium"
}
};

// ===============================
// Category: Ecommerce
// ===============================
export const shopifyPremium: DNAThemeConfig = {
  id: "shopify-premium",
  version: "2.0.0",
  metadata: {
    name: "Shopify Premium",
    category: "Ecommerce",
    description: "Premium DNA theme for Ecommerce use-cases.",
    rating: 4.7,
    downloads: 31579,
    popularity: 87,
    componentsCount: 34,
    pagesCount: 13,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "ecommerce-admin",
    "card": "soft-shadow",
    "navigation": "modern",
    "typography": "startup",
    "animation": "minimal",
    "color": "fintech-green"
}
};

export const marketplaceX: DNAThemeConfig = {
  id: "marketplace-x",
  version: "2.0.0",
  metadata: {
    name: "Marketplace X",
    category: "Ecommerce",
    description: "Premium DNA theme for Ecommerce use-cases.",
    rating: 4.7,
    downloads: 37793,
    popularity: 95,
    componentsCount: 30,
    pagesCount: 13,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "ecommerce-admin",
    "card": "flat",
    "navigation": "modern",
    "typography": "startup",
    "animation": "minimal",
    "color": "minimal-white"
}
};

export const luxuryCommerce: DNAThemeConfig = {
  id: "luxury-commerce",
  version: "2.0.0",
  metadata: {
    name: "Luxury Commerce",
    category: "Ecommerce",
    description: "Premium DNA theme for Ecommerce use-cases.",
    rating: 4.6,
    downloads: 40266,
    popularity: 96,
    componentsCount: 53,
    pagesCount: 12,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "ecommerce-admin",
    "card": "glass",
    "navigation": "modern",
    "typography": "luxury",
    "animation": "luxury",
    "color": "luxury-gold"
}
};

export const fashionElite: DNAThemeConfig = {
  id: "fashion-elite",
  version: "2.0.0",
  metadata: {
    name: "Fashion Elite",
    category: "Ecommerce",
    description: "Premium DNA theme for Ecommerce use-cases.",
    rating: 4.6,
    downloads: 12899,
    popularity: 96,
    componentsCount: 53,
    pagesCount: 7,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "ecommerce-admin",
    "card": "flat",
    "navigation": "apple",
    "typography": "editorial",
    "animation": "premium",
    "color": "minimal-white"
}
};

export const retailOs: DNAThemeConfig = {
  id: "retail-os",
  version: "2.0.0",
  metadata: {
    name: "Retail OS",
    category: "Ecommerce",
    description: "Premium DNA theme for Ecommerce use-cases.",
    rating: 4.8,
    downloads: 33248,
    popularity: 92,
    componentsCount: 41,
    pagesCount: 12,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "ecommerce-admin",
    "card": "elevated",
    "navigation": "enterprise",
    "typography": "corporate",
    "animation": "minimal",
    "color": "enterprise-blue"
}
};

export const d2cGrowth: DNAThemeConfig = {
  id: "d2c-growth",
  version: "2.0.0",
  metadata: {
    name: "D2C Growth",
    category: "Ecommerce",
    description: "Premium DNA theme for Ecommerce use-cases.",
    rating: 4.7,
    downloads: 16442,
    popularity: 86,
    componentsCount: 35,
    pagesCount: 5,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "ecommerce-admin",
    "card": "gradient",
    "navigation": "modern",
    "typography": "startup",
    "animation": "premium",
    "color": "minimal-white"
}
};

// ===============================
// Category: Healthcare
// ===============================
export const medflow: DNAThemeConfig = {
  id: "medflow",
  version: "2.0.0",
  metadata: {
    name: "MedFlow",
    category: "Healthcare",
    description: "Premium DNA theme for Healthcare use-cases.",
    rating: 4.5,
    downloads: 14938,
    popularity: 85,
    componentsCount: 48,
    pagesCount: 6,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "healthcare-portal",
    "card": "elevated",
    "navigation": "enterprise",
    "typography": "corporate",
    "animation": "minimal",
    "color": "enterprise-blue"
}
};

export const clinicalOs: DNAThemeConfig = {
  id: "clinical-os",
  version: "2.0.0",
  metadata: {
    name: "Clinical OS",
    category: "Healthcare",
    description: "Premium DNA theme for Healthcare use-cases.",
    rating: 4.6,
    downloads: 18340,
    popularity: 99,
    componentsCount: 53,
    pagesCount: 13,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "healthcare-portal",
    "card": "flat",
    "navigation": "enterprise",
    "typography": "corporate",
    "animation": "minimal",
    "color": "minimal-white"
}
};

export const healthPulse: DNAThemeConfig = {
  id: "health-pulse",
  version: "2.0.0",
  metadata: {
    name: "Health Pulse",
    category: "Healthcare",
    description: "Premium DNA theme for Healthcare use-cases.",
    rating: 4.6,
    downloads: 11309,
    popularity: 91,
    componentsCount: 52,
    pagesCount: 12,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "healthcare-portal",
    "card": "soft-shadow",
    "navigation": "modern",
    "typography": "startup",
    "animation": "premium",
    "color": "fintech-green"
}
};

export const pharmaElite: DNAThemeConfig = {
  id: "pharma-elite",
  version: "2.0.0",
  metadata: {
    name: "Pharma Elite",
    category: "Healthcare",
    description: "Premium DNA theme for Healthcare use-cases.",
    rating: 4.6,
    downloads: 32069,
    popularity: 88,
    componentsCount: 33,
    pagesCount: 5,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "healthcare-portal",
    "card": "border",
    "navigation": "enterprise",
    "typography": "corporate",
    "animation": "minimal",
    "color": "enterprise-blue"
}
};

// ===============================
// Category: Education
// ===============================
export const skillforge: DNAThemeConfig = {
  id: "skillforge",
  version: "2.0.0",
  metadata: {
    name: "SkillForge",
    category: "Education",
    description: "Premium DNA theme for Education use-cases.",
    rating: 4.5,
    downloads: 45174,
    popularity: 89,
    componentsCount: 57,
    pagesCount: 14,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "education-hub",
    "card": "elevated",
    "navigation": "modern",
    "typography": "startup",
    "animation": "premium",
    "color": "minimal-white"
}
};

export const learningHub: DNAThemeConfig = {
  id: "learning-hub",
  version: "2.0.0",
  metadata: {
    name: "Learning Hub",
    category: "Education",
    description: "Premium DNA theme for Education use-cases.",
    rating: 4.9,
    downloads: 45067,
    popularity: 91,
    componentsCount: 59,
    pagesCount: 10,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "education-hub",
    "card": "flat",
    "navigation": "modern",
    "typography": "corporate",
    "animation": "minimal",
    "color": "enterprise-blue"
}
};

export const universityLms: DNAThemeConfig = {
  id: "university-lms",
  version: "2.0.0",
  metadata: {
    name: "University LMS",
    category: "Education",
    description: "Premium DNA theme for Education use-cases.",
    rating: 4.5,
    downloads: 25654,
    popularity: 89,
    componentsCount: 48,
    pagesCount: 11,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "education-hub",
    "card": "border",
    "navigation": "enterprise",
    "typography": "corporate",
    "animation": "minimal",
    "color": "dark-premium"
}
};

export const studentOs: DNAThemeConfig = {
  id: "student-os",
  version: "2.0.0",
  metadata: {
    name: "Student OS",
    category: "Education",
    description: "Premium DNA theme for Education use-cases.",
    rating: 4.6,
    downloads: 21391,
    popularity: 92,
    componentsCount: 53,
    pagesCount: 5,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "education-hub",
    "card": "glass",
    "navigation": "apple",
    "typography": "startup",
    "animation": "premium",
    "color": "apple-glass"
}
};

// ===============================
// Category: Creative
// ===============================
export const behanceStudio: DNAThemeConfig = {
  id: "behance-studio",
  version: "2.0.0",
  metadata: {
    name: "Behance Studio",
    category: "Creative",
    description: "Premium DNA theme for Creative use-cases.",
    rating: 4.6,
    downloads: 49003,
    popularity: 85,
    componentsCount: 42,
    pagesCount: 14,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "design-canvas",
    "card": "flat",
    "navigation": "modern",
    "typography": "editorial",
    "animation": "premium",
    "color": "minimal-white"
}
};

export const dribbblePro: DNAThemeConfig = {
  id: "dribbble-pro",
  version: "2.0.0",
  metadata: {
    name: "Dribbble Pro",
    category: "Creative",
    description: "Premium DNA theme for Creative use-cases.",
    rating: 4.5,
    downloads: 24375,
    popularity: 99,
    componentsCount: 37,
    pagesCount: 5,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "design-canvas",
    "card": "soft-shadow",
    "navigation": "apple",
    "typography": "startup",
    "animation": "premium",
    "color": "minimal-white"
}
};

export const creativeAgency: DNAThemeConfig = {
  id: "creative-agency",
  version: "2.0.0",
  metadata: {
    name: "Creative Agency",
    category: "Creative",
    description: "Premium DNA theme for Creative use-cases.",
    rating: 4.6,
    downloads: 11850,
    popularity: 98,
    componentsCount: 45,
    pagesCount: 14,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "design-canvas",
    "card": "glass",
    "navigation": "modern",
    "typography": "luxury",
    "animation": "luxury",
    "color": "dark-premium"
}
};

export const designStudio: DNAThemeConfig = {
  id: "design-studio",
  version: "2.0.0",
  metadata: {
    name: "Design Studio",
    category: "Creative",
    description: "Premium DNA theme for Creative use-cases.",
    rating: 4.7,
    downloads: 31618,
    popularity: 89,
    componentsCount: 31,
    pagesCount: 13,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: {
    "layout": "design-canvas",
    "card": "border",
    "navigation": "apple",
    "typography": "editorial",
    "animation": "premium",
    "color": "apple-glass"
}
};

export const allDNAThemes: DNAThemeConfig[] = [
  minimalWhite,
  minimalDark,
  teslaLuxury,
  neuralOs,
  quantumGrid,
  cyberMatrix,
  synthwavePro,
  hologramX,
  aiCommandCenter,
  stripeModern,
  linearPro,
  notionWorkspace,
  vercelDark,
  growthOs,
  founderHub,
  startupPrime,
  enterpriseElite,
  ibmCarbon,
  msFluent,
  sapBusiness,
  corporateMatrix,
  executiveBoardroom,
  bloombergTerminal,
  fintechElite,
  tradingPro,
  wealthOs,
  bankingPrime,
  hedgeFundUi,
  appleGlass,
  appleVision,
  porscheLuxury,
  monacoGold,
  rolexBlack,
  ferrariRed,
  cyberArena,
  valorantInspired,
  esportsPro,
  neonGaming,
  arcadeX,
  battleStation,
  shopifyPremium,
  marketplaceX,
  luxuryCommerce,
  fashionElite,
  retailOs,
  d2cGrowth,
  medflow,
  clinicalOs,
  healthPulse,
  pharmaElite,
  skillforge,
  learningHub,
  universityLms,
  studentOs,
  behanceStudio,
  dribbblePro,
  creativeAgency,
  designStudio
];
