import { Blueprint } from "@/store";
import { analyzePrompt, AIAnalysisResult } from "./ai-engine/analyzer";
import { recommendThemes } from "./ai-engine/scorer";

export const analyzeAndRecommend = async (
  prompt: string,
  onProgress: (stage: 'analyzing' | 'generating_blueprint' | 'theme_recommendation', data?: any) => void
) => {
  // STEP 1: AI ANALYSIS
  onProgress('analyzing');
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const analysis: AIAnalysisResult = analyzePrompt(prompt);

  // STEP 2: BLUEPRINT GENERATION
  onProgress('generating_blueprint');
  await new Promise(resolve => setTimeout(resolve, 1500));

  let roles = [analysis.userType, "Admin"];
  if (analysis.userType === "General Users") roles = ["User", "Admin"];

  const blueprint: Blueprint = {
    projectName: analysis.industry + " Platform",
    industry: analysis.industry,
    theme: "", // Will be assigned later
    pages: analysis.features,
    roles
  };

  // STEP 3: THEME RECOMMENDATION
  onProgress('theme_recommendation');
  await new Promise(resolve => setTimeout(resolve, 1500));

  const recommendations = recommendThemes(analysis);

  const formattedRecommendations = recommendations.map(rec => ({
    themeId: rec.theme.id,
    themeName: rec.theme.metadata.name,
    category: rec.theme.metadata.category,
    reason: rec.reasons[0] || "A strong DNA match.",
    compatibilityScore: rec.score,
    industryMatch: rec.theme.metadata.category === analysis.industry ? "Excellent" : "Good",
    complexityMatch: "Standard"
  }));

  return { blueprint, recommendedThemes: formattedRecommendations };
};

export const generateFrontendMock = async (
  blueprint: Blueprint,
  selectedThemeId: string,
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
