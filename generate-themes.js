const fs = require('fs');
const path = require('path');

const categories = {
  "AI & Futuristic": [
    { name: "Tesla Luxury", id: "tesla-luxury", dna: { layout: 'floating-sidebar', card: 'glass', navigation: 'modern', typography: 'futuristic', animation: 'premium', color: 'neon-purple' } },
    { name: "Neural OS", id: "neural-os", dna: { layout: 'minimal-sidebar', card: 'flat', navigation: 'apple', typography: 'futuristic', animation: 'minimal', color: 'cyberpunk' } },
    { name: "Quantum Grid", id: "quantum-grid", dna: { layout: 'bento-layout', card: 'neon', navigation: 'gaming', typography: 'futuristic', animation: 'futuristic', color: 'cyberpunk' } },
    { name: "Cyber Matrix", id: "cyber-matrix", dna: { layout: 'dashboard-layout', card: 'border', navigation: 'gaming', typography: 'futuristic', animation: 'futuristic', color: 'cyberpunk' } },
    { name: "Synthwave Pro", id: "synthwave-pro", dna: { layout: 'top-navigation', card: 'gradient', navigation: 'modern', typography: 'startup', animation: 'premium', color: 'neon-purple' } },
    { name: "Hologram X", id: "hologram-x", dna: { layout: 'floating-sidebar', card: 'glass', navigation: 'modern', typography: 'futuristic', animation: 'premium', color: 'apple-glass' } },
    { name: "AI Command Center", id: "ai-command-center", dna: { layout: 'workspace-layout', card: 'elevated', navigation: 'enterprise', typography: 'corporate', animation: 'minimal', color: 'dark-premium' } }
  ],
  "SaaS": [
    { name: "Stripe Modern", id: "stripe-modern", dna: { layout: 'top-navigation', card: 'soft-shadow', navigation: 'modern', typography: 'startup', animation: 'premium', color: 'minimal-white' } },
    { name: "Linear Pro", id: "linear-pro", dna: { layout: 'fixed-sidebar', card: 'flat', navigation: 'apple', typography: 'startup', animation: 'minimal', color: 'dark-premium' } },
    { name: "Notion Workspace", id: "notion-workspace", dna: { layout: 'minimal-sidebar', card: 'flat', navigation: 'apple', typography: 'startup', animation: 'minimal', color: 'minimal-white' } },
    { name: "Vercel Dark", id: "vercel-dark", dna: { layout: 'top-navigation', card: 'border', navigation: 'modern', typography: 'startup', animation: 'premium', color: 'dark-premium' } },
    { name: "Growth OS", id: "growth-os", dna: { layout: 'dashboard-layout', card: 'elevated', navigation: 'modern', typography: 'startup', animation: 'premium', color: 'enterprise-blue' } },
    { name: "Founder Hub", id: "founder-hub", dna: { layout: 'hybrid-navigation', card: 'glass', navigation: 'modern', typography: 'startup', animation: 'premium', color: 'minimal-white' } },
    { name: "Startup Prime", id: "startup-prime", dna: { layout: 'floating-sidebar', card: 'gradient', navigation: 'modern', typography: 'startup', animation: 'premium', color: 'neon-purple' } }
  ],
  "Enterprise": [
    { name: "Enterprise Elite", id: "enterprise-elite", dna: { layout: 'fixed-sidebar', card: 'elevated', navigation: 'enterprise', typography: 'corporate', animation: 'minimal', color: 'enterprise-blue' } },
    { name: "IBM Carbon Inspired", id: "ibm-carbon", dna: { layout: 'dashboard-layout', card: 'flat', navigation: 'enterprise', typography: 'corporate', animation: 'minimal', color: 'dark-premium' } },
    { name: "Microsoft Fluent Inspired", id: "ms-fluent", dna: { layout: 'hybrid-navigation', card: 'glass', navigation: 'modern', typography: 'corporate', animation: 'premium', color: 'minimal-white' } },
    { name: "SAP Business Suite", id: "sap-business", dna: { layout: 'top-navigation', card: 'elevated', navigation: 'enterprise', typography: 'corporate', animation: 'minimal', color: 'enterprise-blue' } },
    { name: "Corporate Matrix", id: "corporate-matrix", dna: { layout: 'fixed-sidebar', card: 'border', navigation: 'enterprise', typography: 'corporate', animation: 'minimal', color: 'enterprise-blue' } },
    { name: "Executive Boardroom", id: "executive-boardroom", dna: { layout: 'workspace-layout', card: 'elevated', navigation: 'enterprise', typography: 'luxury', animation: 'premium', color: 'dark-premium' } }
  ],
  "Finance": [
    { name: "Bloomberg Terminal", id: "bloomberg-terminal", dna: { layout: 'dashboard-layout', card: 'flat', navigation: 'finance', typography: 'corporate', animation: 'minimal', color: 'cyberpunk' } }, // Hacker green vibes
    { name: "Fintech Elite", id: "fintech-elite", dna: { layout: 'floating-sidebar', card: 'soft-shadow', navigation: 'modern', typography: 'startup', animation: 'premium', color: 'fintech-green' } },
    { name: "Trading Pro", id: "trading-pro", dna: { layout: 'analytics-layout', card: 'border', navigation: 'finance', typography: 'corporate', animation: 'minimal', color: 'dark-premium' } },
    { name: "Wealth OS", id: "wealth-os", dna: { layout: 'fixed-sidebar', card: 'elevated', navigation: 'finance', typography: 'luxury', animation: 'luxury', color: 'luxury-gold' } },
    { name: "Banking Prime", id: "banking-prime", dna: { layout: 'top-navigation', card: 'elevated', navigation: 'finance', typography: 'corporate', animation: 'minimal', color: 'enterprise-blue' } },
    { name: "Hedge Fund UI", id: "hedge-fund-ui", dna: { layout: 'dashboard-layout', card: 'glass', navigation: 'finance', typography: 'luxury', animation: 'premium', color: 'dark-premium' } }
  ],
  "Luxury": [
    { name: "Apple Glass", id: "apple-glass", dna: { layout: 'minimal-sidebar', card: 'glass', navigation: 'apple', typography: 'startup', animation: 'premium', color: 'apple-glass' } },
    { name: "Apple Vision", id: "apple-vision", dna: { layout: 'floating-sidebar', card: 'glass', navigation: 'apple', typography: 'startup', animation: 'luxury', color: 'apple-glass' } },
    { name: "Porsche Luxury", id: "porsche-luxury", dna: { layout: 'bento-layout', card: 'flat', navigation: 'modern', typography: 'luxury', animation: 'premium', color: 'dark-premium' } },
    { name: "Monaco Gold", id: "monaco-gold", dna: { layout: 'fixed-sidebar', card: 'elevated', navigation: 'modern', typography: 'luxury', animation: 'luxury', color: 'luxury-gold' } },
    { name: "Rolex Black", id: "rolex-black", dna: { layout: 'workspace-layout', card: 'border', navigation: 'modern', typography: 'luxury', animation: 'luxury', color: 'dark-premium' } },
    { name: "Ferrari Red", id: "ferrari-red", dna: { layout: 'top-navigation', card: 'elevated', navigation: 'modern', typography: 'luxury', animation: 'premium', color: 'minimal-white' } }
  ],
  "Gaming": [
    { name: "Cyber Arena", id: "cyber-arena", dna: { layout: 'dashboard-layout', card: 'neon', navigation: 'gaming', typography: 'futuristic', animation: 'gaming', color: 'cyberpunk' } },
    { name: "Valorant Inspired", id: "valorant-inspired", dna: { layout: 'bento-layout', card: 'flat', navigation: 'gaming', typography: 'futuristic', animation: 'gaming', color: 'dark-premium' } },
    { name: "Esports Pro", id: "esports-pro", dna: { layout: 'floating-sidebar', card: 'gradient', navigation: 'gaming', typography: 'startup', animation: 'gaming', color: 'neon-purple' } },
    { name: "Neon Gaming", id: "neon-gaming", dna: { layout: 'top-navigation', card: 'neon', navigation: 'gaming', typography: 'futuristic', animation: 'gaming', color: 'neon-purple' } },
    { name: "Arcade X", id: "arcade-x", dna: { layout: 'minimal-sidebar', card: 'border', navigation: 'gaming', typography: 'futuristic', animation: 'futuristic', color: 'cyberpunk' } },
    { name: "Battle Station", id: "battle-station", dna: { layout: 'workspace-layout', card: 'elevated', navigation: 'gaming', typography: 'futuristic', animation: 'gaming', color: 'dark-premium' } }
  ],
  "Ecommerce": [
    { name: "Shopify Premium", id: "shopify-premium", dna: { layout: 'fixed-sidebar', card: 'soft-shadow', navigation: 'modern', typography: 'startup', animation: 'minimal', color: 'fintech-green' } },
    { name: "Marketplace X", id: "marketplace-x", dna: { layout: 'top-navigation', card: 'flat', navigation: 'modern', typography: 'startup', animation: 'minimal', color: 'minimal-white' } },
    { name: "Luxury Commerce", id: "luxury-commerce", dna: { layout: 'minimal-sidebar', card: 'glass', navigation: 'modern', typography: 'luxury', animation: 'luxury', color: 'luxury-gold' } },
    { name: "Fashion Elite", id: "fashion-elite", dna: { layout: 'magazine-layout', card: 'flat', navigation: 'apple', typography: 'editorial', animation: 'premium', color: 'minimal-white' } },
    { name: "Retail OS", id: "retail-os", dna: { layout: 'dashboard-layout', card: 'elevated', navigation: 'enterprise', typography: 'corporate', animation: 'minimal', color: 'enterprise-blue' } },
    { name: "D2C Growth", id: "d2c-growth", dna: { layout: 'floating-sidebar', card: 'gradient', navigation: 'modern', typography: 'startup', animation: 'premium', color: 'minimal-white' } }
  ],
  "Healthcare": [
    { name: "MedFlow", id: "medflow", dna: { layout: 'fixed-sidebar', card: 'elevated', navigation: 'enterprise', typography: 'corporate', animation: 'minimal', color: 'enterprise-blue' } },
    { name: "Clinical OS", id: "clinical-os", dna: { layout: 'workspace-layout', card: 'flat', navigation: 'enterprise', typography: 'corporate', animation: 'minimal', color: 'minimal-white' } },
    { name: "Health Pulse", id: "health-pulse", dna: { layout: 'dashboard-layout', card: 'soft-shadow', navigation: 'modern', typography: 'startup', animation: 'premium', color: 'fintech-green' } },
    { name: "Pharma Elite", id: "pharma-elite", dna: { layout: 'top-navigation', card: 'border', navigation: 'enterprise', typography: 'corporate', animation: 'minimal', color: 'enterprise-blue' } }
  ],
  "Education": [
    { name: "SkillForge", id: "skillforge", dna: { layout: 'bento-layout', card: 'elevated', navigation: 'modern', typography: 'startup', animation: 'premium', color: 'minimal-white' } },
    { name: "Learning Hub", id: "learning-hub", dna: { layout: 'fixed-sidebar', card: 'flat', navigation: 'modern', typography: 'corporate', animation: 'minimal', color: 'enterprise-blue' } },
    { name: "University LMS", id: "university-lms", dna: { layout: 'dashboard-layout', card: 'border', navigation: 'enterprise', typography: 'corporate', animation: 'minimal', color: 'dark-premium' } },
    { name: "Student OS", id: "student-os", dna: { layout: 'floating-sidebar', card: 'glass', navigation: 'apple', typography: 'startup', animation: 'premium', color: 'apple-glass' } }
  ],
  "Creative": [
    { name: "Behance Studio", id: "behance-studio", dna: { layout: 'magazine-layout', card: 'flat', navigation: 'modern', typography: 'editorial', animation: 'premium', color: 'minimal-white' } },
    { name: "Dribbble Pro", id: "dribbble-pro", dna: { layout: 'bento-layout', card: 'soft-shadow', navigation: 'apple', typography: 'startup', animation: 'premium', color: 'minimal-white' } },
    { name: "Creative Agency", id: "creative-agency", dna: { layout: 'floating-sidebar', card: 'glass', navigation: 'modern', typography: 'luxury', animation: 'luxury', color: 'dark-premium' } },
    { name: "Design Studio", id: "design-studio", dna: { layout: 'workspace-layout', card: 'border', navigation: 'apple', typography: 'editorial', animation: 'premium', color: 'apple-glass' } }
  ]
};

let output = `import { DNAThemeConfig } from './types';\n\n`;

const allThemes = [];

for (const [category, themes] of Object.entries(categories)) {
  output += `// ===============================\n// Category: ${category}\n// ===============================\n`;
  for (const theme of themes) {
    const varName = theme.id.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    allThemes.push(varName);
    output += `export const ${varName}: DNAThemeConfig = {
  id: "${theme.id}",
  version: "2.0.0",
  metadata: {
    name: "${theme.name}",
    category: "${category}",
    description: "Premium DNA theme for ${category} use-cases.",
    rating: ${(4.5 + Math.random() * 0.4).toFixed(1)},
    downloads: ${Math.floor(Math.random() * 40000) + 10000},
    popularity: ${Math.floor(Math.random() * 15) + 85},
    componentsCount: ${Math.floor(Math.random() * 30) + 30},
    pagesCount: ${Math.floor(Math.random() * 10) + 5},
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  dna: ${JSON.stringify(theme.dna, null, 4)}
};\n\n`;
  }
}

output += `export const allDNAThemes: DNAThemeConfig[] = [\n  ${allThemes.join(',\n  ')}\n];\n`;

fs.writeFileSync(path.join(__dirname, 'apps/web/src/themes/dna/registry.ts'), output);
console.log('Successfully generated apps/web/src/themes/dna/registry.ts');
