"use client";

import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Star, Download, Eye, CheckCircle2, ChevronRight, Layout, LayoutTemplate, Sparkles, TrendingUp, Clock, Crown } from 'lucide-react';
import { useAppStore } from '@/store';
import { allThemes } from '@/themes';
import clsx from 'clsx';
import { ThemeMiniDashboard } from './ThemeMiniDashboard';

function MagneticButton({ children, className, onClick }: any) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

function ThemeCard({ themeData, idx }: any) {
  const { selectedThemeId, setSelectedThemeId, setIsDownloadCenterOpen } = useAppStore();
  const t = themeData;
  const ai = themeData.ai;
  const isSelected = selectedThemeId === t.id;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.05 }}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "flex flex-col rounded-2xl overflow-hidden transition-all duration-300 relative group h-full cursor-pointer",
        isSelected 
          ? "ring-2 ring-primary shadow-[0_0_30px_rgba(139,92,246,0.15)] bg-primary/5" 
          : "border border-border bg-surface hover:border-primary/50 hover:shadow-2xl"
      )}
      onClick={() => setSelectedThemeId(t.id)}
    >
      <div 
        className="h-[260px] w-full relative overflow-hidden bg-black/10"
        data-theme={t.id}
      >
        <div className="absolute inset-0 p-4 pb-0 transform group-hover:scale-105 transition-transform duration-700 ease-out origin-bottom">
           <ThemeMiniDashboard theme={t as any} />
        </div>
        
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface to-transparent z-10" />
        
        <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
          <div className="px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border text-xs font-bold text-text-primary flex items-center gap-1.5 shadow-sm">
             <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
             {t.metadata.rating}
          </div>
        </div>

        {isSelected && (
          <div className="absolute top-3 left-3 z-20 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Active
          </div>
        )}

        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
      </div>

      <div className="p-5 flex flex-col flex-1 z-20 bg-surface/80 backdrop-blur-md">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors flex items-center gap-2">
              {t.metadata.name}
            </h3>
            <div className="text-sm text-text-muted mt-1">{t.metadata.category}</div>
          </div>
          {ai && (
            <div className="text-right">
              <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                {ai.compatibilityScore}%
              </div>
              <div className="text-[10px] uppercase tracking-wider font-bold text-text-muted mt-0.5">Match</div>
            </div>
          )}
        </div>

        {ai ? (
          <p className="text-sm text-text-secondary line-clamp-2 mb-5 min-h-[40px]">
            {ai.reason}
          </p>
        ) : (
          <p className="text-sm text-text-secondary line-clamp-2 mb-5 min-h-[40px]">
            {t.metadata.description}
          </p>
        )}

        <div className="mt-auto flex items-center gap-2">
          <MagneticButton 
            onClick={(e: any) => {
              e.stopPropagation();
              setSelectedThemeId(t.id);
            }}
            className={clsx(
              "flex-1 py-2.5 rounded-xl text-sm font-bold transition-all relative overflow-hidden",
              isSelected 
                ? "bg-primary/20 text-primary border border-primary/30"
                : "bg-background border border-border text-text-primary hover:bg-surface"
            )}
          >
            {isSelected ? "Active" : "Apply"}
          </MagneticButton>
          <MagneticButton 
            onClick={(e: any) => {
               e.stopPropagation();
               setSelectedThemeId(t.id);
               setIsDownloadCenterOpen(true);
            }}
            className="flex-1 py-2.5 rounded-xl bg-primary text-white text-sm font-bold shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export
          </MagneticButton>
        </div>
      </div>
    </motion.div>
  );
}

export function ThemeMarketplace() {
  const { recommendedThemes } = useAppStore();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // We should create sections.
  const aiThemes = recommendedThemes.length > 0 
    ? recommendedThemes.map(rt => {
        const fullTheme = allThemes.find(t => t.id === rt.themeId);
        return { ...fullTheme, ai: rt };
      }).filter(t => t.id)
    : [];

  const trendingThemes = allThemes.filter(t => t.metadata.popularity >= 95).slice(0, 4);
  const newReleases = [...allThemes].sort((a, b) => new Date(b.metadata.lastUpdated).getTime() - new Date(a.metadata.lastUpdated).getTime()).slice(0, 4);
  const mostDownloaded = [...allThemes].sort((a, b) => b.metadata.downloads - a.metadata.downloads).slice(0, 4);
  const luxuryCollection = allThemes.filter(t => t.metadata.category === 'Luxury').slice(0, 4);

  const categories = ['All', ...Array.from(new Set(allThemes.map(t => t.metadata.category)))];
  const isFiltered = activeCategory !== 'All';
  const filteredThemes = isFiltered 
    ? allThemes.filter(t => t.metadata?.category === activeCategory)
    : [];

  const sections = [
    ...(aiThemes.length > 0 ? [{ title: 'AI Recommended', icon: <Sparkles className="w-5 h-5 text-emerald-400" />, items: aiThemes }] : []),
    { title: 'Trending Now', icon: <TrendingUp className="w-5 h-5 text-rose-400" />, items: trendingThemes },
    { title: 'New Releases', icon: <Clock className="w-5 h-5 text-blue-400" />, items: newReleases },
    { title: 'Premium Collection', icon: <Crown className="w-5 h-5 text-yellow-400" />, items: luxuryCollection },
    { title: 'Most Downloaded', icon: <Download className="w-5 h-5 text-primary" />, items: mostDownloaded },
  ];

  return (
    <div className="w-full space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-secondary mb-3">
            Theme Marketplace
          </h2>
          <p className="text-text-secondary text-lg">Discover, preview, and export premium production-ready design systems.</p>
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                "px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all",
                activeCategory === cat 
                  ? "bg-primary text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                  : "bg-surface/50 border border-border text-text-secondary hover:text-text-primary hover:border-primary/50 hover:bg-surface"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {isFiltered ? (
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-border pb-4">
             <LayoutTemplate className="w-6 h-6 text-primary" />
             <h3 className="text-2xl font-bold text-text-primary">{activeCategory} Themes</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {filteredThemes.map((t, idx) => (
              <ThemeCard key={t.id} themeData={t} idx={idx} />
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-16">
          {sections.map((section, sIdx) => (
            <div key={section.title} className="space-y-6">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                {section.icon}
                <h3 className="text-2xl font-bold text-text-primary">{section.title}</h3>
                <button className="ml-auto text-sm font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                  View All <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {section.items.map((t, idx) => (
                  <ThemeCard key={t.id} themeData={t} idx={idx} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
