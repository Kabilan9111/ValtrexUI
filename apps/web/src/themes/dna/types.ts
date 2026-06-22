export type LayoutDNA = 
  | 'floating-sidebar' 
  | 'fixed-sidebar' 
  | 'minimal-sidebar' 
  | 'top-navigation' 
  | 'hybrid-navigation' 
  | 'workspace-layout' 
  | 'analytics-layout' 
  | 'dashboard-layout' 
  | 'bento-layout' 
  | 'magazine-layout';

export type CardDNA = 
  | 'glass' 
  | 'elevated' 
  | 'flat' 
  | 'border' 
  | 'neon' 
  | 'gradient' 
  | 'soft-shadow' 
  | 'floating';

export type NavigationDNA = 
  | 'modern' 
  | 'apple' 
  | 'enterprise' 
  | 'gaming' 
  | 'finance';

export type TypographyDNA = 
  | 'corporate' 
  | 'startup' 
  | 'futuristic' 
  | 'luxury' 
  | 'editorial';

export type AnimationDNA = 
  | 'minimal' 
  | 'premium' 
  | 'luxury' 
  | 'gaming' 
  | 'futuristic';

export type ColorDNA = 
  | 'dark-premium' 
  | 'apple-glass' 
  | 'cyberpunk' 
  | 'enterprise-blue' 
  | 'fintech-green' 
  | 'luxury-gold' 
  | 'neon-purple' 
  | 'minimal-white';

export interface DNATemplate {
  layout: LayoutDNA;
  card: CardDNA;
  navigation: NavigationDNA;
  typography: TypographyDNA;
  animation: AnimationDNA;
  color: ColorDNA;
}

export interface DNAThemeConfig {
  id: string;
  version: string;
  metadata: {
    name: string;
    category: string;
    description: string;
    rating: number;
    downloads: number;
    popularity: number;
    componentsCount: number;
    pagesCount: number;
    lastUpdated: string;
  };
  dna: DNATemplate;
}
