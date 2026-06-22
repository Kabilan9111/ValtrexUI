import { DNAThemeConfig } from '../../themes/dna/types';
import { allDNAThemes } from '../../themes/dna/registry';
import { AIAnalysisResult } from './analyzer';

export interface ThemeRecommendation {
  theme: DNAThemeConfig;
  score: number; // 0-100
  reasons: string[];
}

export function recommendThemes(analysis: AIAnalysisResult): ThemeRecommendation[] {
  const recommendations: ThemeRecommendation[] = allDNAThemes.map(theme => {
    let score = 50; // Base score
    const reasons: string[] = [];

    // Industry Match
    if (theme.metadata.category === analysis.industry) {
      score += 30;
      reasons.push(`Matches your industry: ${analysis.industry}`);
    } else if (
      (analysis.industry === 'AI & Futuristic' && theme.metadata.category === 'SaaS') ||
      (analysis.industry === 'Enterprise' && theme.metadata.category === 'Finance')
    ) {
      score += 15;
      reasons.push(`Strong cross-category fit for ${analysis.industry}`);
    }

    // UX Style Match mapping based on DNA
    if (analysis.uxStyle === 'Dark & Neon' && (theme.dna.color === 'cyberpunk' || theme.dna.color === 'neon-purple')) {
      score += 10;
      reasons.push('Perfect color DNA for dark futuristic vibes');
    }
    if (analysis.uxStyle === 'Premium & Minimal' && (theme.dna.color === 'luxury-gold' || theme.dna.color === 'apple-glass')) {
      score += 10;
      reasons.push('Premium visual aesthetics match');
    }
    if (analysis.uxStyle === 'Dense & Professional' && theme.dna.typography === 'corporate') {
      score += 10;
      reasons.push('Corporate typography suits dense professional layouts');
    }
    
    // Add some random fuzziness so it's not strictly deterministic
    score += Math.floor(Math.random() * 5);

    // Cap at 99 for realism
    score = Math.min(99, score);

    return { theme, score, reasons };
  });

  return recommendations.sort((a, b) => b.score - a.score).slice(0, 10);
}
