import { create } from 'zustand';

export type GenerationState = 'idle' | 'analyzing' | 'detecting_theme' | 'theme_recommendation' | 'generating_blueprint' | 'generating_frontend' | 'frontend_preview' | 'complete';

export interface Blueprint {
  projectName: string;
  industry: string;
  theme: string;
  pages: string[];
  roles: string[];
}

export interface ThemeRecommendation {
  themeId: string; // Refers to the registry ID
  themeName: string;
  category: string;
  reason: string;
  compatibilityScore: number;
  industryMatch: string;
  complexityMatch: string;
}

interface AppState {
  prompt: string;
  generationState: GenerationState;
  detectedIndustry: string | null;
  recommendedThemes: ThemeRecommendation[];
  selectedThemeId: string | null;
  blueprint: Blueprint | null;
  generatedFrontend: any | null;
  isDownloadCenterOpen: boolean;
  
  setPrompt: (prompt: string) => void;
  setGenerationState: (state: GenerationState) => void;
  setDetectedIndustry: (industry: string) => void;
  setRecommendedThemes: (themes: ThemeRecommendation[]) => void;
  setSelectedThemeId: (themeId: string) => void;
  setBlueprint: (blueprint: Blueprint) => void;
  setGeneratedFrontend: (frontend: any) => void;
  setIsDownloadCenterOpen: (isOpen: boolean) => void;
  reset: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  prompt: '',
  generationState: 'idle',
  detectedIndustry: null,
  recommendedThemes: [],
  selectedThemeId: null,
  blueprint: null,
  generatedFrontend: null,
  isDownloadCenterOpen: false,

  setPrompt: (prompt) => set({ prompt }),
  setGenerationState: (state) => set({ generationState: state }),
  setDetectedIndustry: (industry) => set({ detectedIndustry: industry }),
  setRecommendedThemes: (themes) => set({ recommendedThemes: themes }),
  setSelectedThemeId: (themeId) => set({ selectedThemeId: themeId }),
  setBlueprint: (blueprint) => set({ blueprint }),
  setGeneratedFrontend: (frontend) => set({ generatedFrontend: frontend }),
  setIsDownloadCenterOpen: (isOpen) => set({ isDownloadCenterOpen: isOpen }),
  reset: () => set({ 
    prompt: '', 
    generationState: 'idle', 
    detectedIndustry: null, 
    recommendedThemes: [],
    selectedThemeId: null,
    blueprint: null,
    generatedFrontend: null,
    isDownloadCenterOpen: false
  }),
}));

