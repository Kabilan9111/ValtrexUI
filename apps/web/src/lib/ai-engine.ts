import { Blueprint, ThemeRecommendation } from "@/store";

export const analyzeAndRecommend = async (
  prompt: string,
  onProgress: (stage: 'analyzing' | 'generating_blueprint' | 'theme_recommendation', data?: any) => void
) => {
  const lowerPrompt = prompt.toLowerCase();
  
  // STEP 1: AI ANALYSIS
  onProgress('analyzing');
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  let industry = "SaaS";
  let roles = ["Admin", "User"];
  let features = ["Dashboard", "Settings"];
  
  if (lowerPrompt.includes("startup") || lowerPrompt.includes("plan")) {
    industry = "AI SaaS";
    roles = ["Founder", "Startup Owner", "Admin"];
    features = ["AI Agents", "Business Plans", "Templates", "Analytics"];
  } else if (lowerPrompt.includes("crm") || lowerPrompt.includes("enterprise")) {
    industry = "Enterprise";
    roles = ["Manager", "Sales", "Admin"];
    features = ["Leads Tracking", "Customer Management", "Billing", "Reports"];
  } else if (lowerPrompt.includes("note") || lowerPrompt.includes("productivity")) {
    industry = "Productivity";
    roles = ["Creator", "User"];
    features = ["Notebooks", "Rich Text Editor", "Tags", "Sharing"];
  }

  // STEP 2: BLUEPRINT GENERATION
  onProgress('generating_blueprint');
  await new Promise(resolve => setTimeout(resolve, 1500));

  let pages = ["Dashboard", "Settings"];
  if (industry === "AI SaaS") {
    pages = ["Dashboard", "Projects", "AI Agents", "Business Plans", "Templates", "Analytics", "Settings"];
  } else if (industry === "Productivity") {
    pages = ["Home", "Notebooks", "Tags", "Shared", "Templates", "Settings"];
  } else if (industry === "Enterprise") {
    pages = ["Dashboard", "Leads", "Customers", "Billing", "Reports", "Settings"];
  }

  const blueprint: Blueprint = {
    projectName: industry + " Platform",
    industry,
    theme: "", // Will be assigned later
    pages,
    roles
  };

  // STEP 3: THEME RECOMMENDATION
  onProgress('theme_recommendation');
  await new Promise(resolve => setTimeout(resolve, 1500));

  let recommendedThemes: ThemeRecommendation[] = [
    { theme: "Tesla Luxury", confidence: 96, reason: "Best for AI and futuristic products." },
    { theme: "Enterprise Elite", confidence: 72, reason: "Good for data heavy dashboards." },
    { theme: "Apple Glass", confidence: 48, reason: "Alternative minimal option." }
  ];

  if (industry === "Productivity") {
    recommendedThemes = [
      { theme: "Apple Glass", confidence: 92, reason: "Perfect for clean, minimal productivity tools." },
      { theme: "Enterprise Elite", confidence: 60, reason: "Standard utility design." },
      { theme: "Tesla Luxury", confidence: 35, reason: "Too dark for standard note taking." }
    ];
  } else if (industry === "Enterprise") {
    recommendedThemes = [
      { theme: "Enterprise Elite", confidence: 88, reason: "Standard for corporate and CRM tools." },
      { theme: "Apple Glass", confidence: 70, reason: "Clean alternative for modern teams." },
      { theme: "Tesla Luxury", confidence: 45, reason: "May be too stylized for conservative users." }
    ];
  }

  return { blueprint, recommendedThemes };
};

export const generateFrontendMock = async (
  blueprint: Blueprint,
  selectedTheme: string,
  onProgress: (stage: 'generating_frontend' | 'frontend_preview', data?: any) => void
) => {
  onProgress('generating_frontend');
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const frontendData: Record<string, any> = {};
  
  blueprint.pages.forEach(page => {
    if (page === "Dashboard" || page === "Home") {
      frontendData[page] = ["RevenueCards", "MainChart", "ActivityFeed"];
    } else if (page === "Leads" || page === "Customers") {
      frontendData[page] = ["DataTable", "Filters", "Search"];
    } else if (page === "Reports" || page === "Analytics") {
      frontendData[page] = ["AnalyticsCharts", "KPICards"];
    } else {
      frontendData[page] = ["GenericList", "SettingsForm"];
    }
  });

  onProgress('frontend_preview', { frontendData });
  return frontendData;
};
