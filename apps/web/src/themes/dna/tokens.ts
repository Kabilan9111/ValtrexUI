import { CardDNA, ColorDNA, TypographyDNA, AnimationDNA, LayoutDNA, NavigationDNA } from './types';

// ==========================================
// CARD DNA
// ==========================================
export const CARD_DNA_TOKENS: Record<CardDNA, string> = {
  glass: 'bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]',
  elevated: 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xl',
  flat: 'bg-zinc-100 dark:bg-zinc-900 rounded-lg',
  border: 'bg-transparent border-2 border-zinc-200 dark:border-zinc-800 rounded-xl',
  neon: 'bg-zinc-950 border border-purple-500/30 rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.4)]',
  gradient: 'bg-gradient-to-br from-white to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-lg',
  'soft-shadow': 'bg-white dark:bg-zinc-900 rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)]',
  floating: 'bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 dark:border-white/5'
};

// ==========================================
// COLOR DNA (Primary, Background, Text styles)
// ==========================================
export const COLOR_DNA_TOKENS: Record<ColorDNA, {
  background: string;
  card: string;
  primary: string;
  text: string;
  muted: string;
  border: string;
}> = {
  'dark-premium': {
    background: 'bg-[#050505]',
    card: 'bg-[#111111]',
    primary: 'text-zinc-100',
    text: 'text-zinc-300',
    muted: 'text-zinc-500',
    border: 'border-zinc-800'
  },
  'apple-glass': {
    background: 'bg-[#F5F5F7]',
    card: 'bg-white/70',
    primary: 'text-[#0071E3]',
    text: 'text-[#1D1D1F]',
    muted: 'text-[#86868B]',
    border: 'border-black/5'
  },
  'cyberpunk': {
    background: 'bg-[#09090B]',
    card: 'bg-[#18181B]',
    primary: 'text-[#00E5FF]',
    text: 'text-[#E4E4E7]',
    muted: 'text-[#A1A1AA]',
    border: 'border-[#27272A]'
  },
  'enterprise-blue': {
    background: 'bg-[#F8FAFC]',
    card: 'bg-white',
    primary: 'text-[#2563EB]',
    text: 'text-[#0F172A]',
    muted: 'text-[#64748B]',
    border: 'border-[#E2E8F0]'
  },
  'fintech-green': {
    background: 'bg-[#F8FAFC]',
    card: 'bg-white',
    primary: 'text-[#059669]',
    text: 'text-[#0F172A]',
    muted: 'text-[#64748B]',
    border: 'border-[#E2E8F0]'
  },
  'luxury-gold': {
    background: 'bg-[#0A0A0A]',
    card: 'bg-[#141414]',
    primary: 'text-[#D4AF37]',
    text: 'text-[#FDFCF0]',
    muted: 'text-[#A3A3A3]',
    border: 'border-[#262626]'
  },
  'neon-purple': {
    background: 'bg-[#050812]',
    card: 'bg-white/5',
    primary: 'text-[#8B5CF6]',
    text: 'text-white',
    muted: 'text-white/40',
    border: 'border-white/10'
  },
  'minimal-white': {
    background: 'bg-white',
    card: 'bg-white',
    primary: 'text-black',
    text: 'text-black',
    muted: 'text-zinc-400',
    border: 'border-zinc-100'
  }
};

// ==========================================
// TYPOGRAPHY DNA
// ==========================================
export const TYPOGRAPHY_DNA_TOKENS: Record<TypographyDNA, {
  fontFamily: string;
  headingClass: string;
  bodyClass: string;
}> = {
  corporate: {
    fontFamily: 'font-sans',
    headingClass: 'font-bold tracking-tight',
    bodyClass: 'font-normal leading-relaxed'
  },
  startup: {
    fontFamily: 'font-sans', // Assuming Inter or Outfit via tailwind config
    headingClass: 'font-extrabold tracking-tighter',
    bodyClass: 'font-medium leading-relaxed'
  },
  futuristic: {
    fontFamily: 'font-mono', // Or Space Grotesk
    headingClass: 'font-bold uppercase tracking-widest',
    bodyClass: 'font-normal leading-loose'
  },
  luxury: {
    fontFamily: 'font-serif', // Playfair Display
    headingClass: 'font-semibold tracking-normal',
    bodyClass: 'font-normal leading-loose'
  },
  editorial: {
    fontFamily: 'font-serif',
    headingClass: 'font-medium tracking-tight',
    bodyClass: 'font-serif leading-relaxed'
  }
};

// ==========================================
// ANIMATION DNA
// ==========================================
export const ANIMATION_DNA_TOKENS: Record<AnimationDNA, string> = {
  minimal: 'transition-all duration-150 ease-in-out',
  premium: 'transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1)',
  luxury: 'transition-all duration-500 ease-in-out',
  gaming: 'transition-all duration-200 cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  futuristic: 'transition-all duration-75 linear' // Snappy
};

// ==========================================
// LAYOUT & NAV DNA 
// (These typically dictate which Component to render, not just classes)
// ==========================================
// We'll map them to generic structural class hints if needed, 
// but they are mostly used by the Generator/Preview Engine to pick templates.
