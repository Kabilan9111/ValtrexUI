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
  theme: string;
  reason: string;
  confidence: number;
}

interface AppState {
  prompt: string;
  generationState: GenerationState;
  detectedIndustry: string | null;
  recommendedThemes: ThemeRecommendation[];
  selectedTheme: string | null;
  blueprint: Blueprint | null;
  generatedFrontend: any | null;
  
  setPrompt: (prompt: string) => void;
  setGenerationState: (state: GenerationState) => void;
  setDetectedIndustry: (industry: string) => void;
  setRecommendedThemes: (themes: ThemeRecommendation[]) => void;
  setSelectedTheme: (theme: string) => void;
  setBlueprint: (blueprint: Blueprint) => void;
  setGeneratedFrontend: (frontend: any) => void;
  reset: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  prompt: '',
  generationState: 'idle',
  detectedIndustry: null,
  recommendedThemes: [],
  selectedTheme: null,
  blueprint: null,
  generatedFrontend: null,

  setPrompt: (prompt) => set({ prompt }),
  setGenerationState: (state) => set({ generationState: state }),
  setDetectedIndustry: (industry) => set({ detectedIndustry: industry }),
  setRecommendedThemes: (themes) => set({ recommendedThemes: themes }),
  setSelectedTheme: (theme) => set({ selectedTheme: theme }),
  setBlueprint: (blueprint) => set({ blueprint }),
  setGeneratedFrontend: (frontend) => set({ generatedFrontend: frontend }),
  reset: () => set({ 
    prompt: '', 
    generationState: 'idle', 
    detectedIndustry: null, 
    recommendedThemes: [],
    selectedTheme: null,
    blueprint: null,
    generatedFrontend: null
  }),
}));
