import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Download, Eye, CheckCircle2, ChevronRight, Layout, LayoutTemplate } from 'lucide-react';
import { useAppStore } from '@/store';
import { allThemes } from '@/themes';
import clsx from 'clsx';
import { ThemeMiniDashboard } from './ThemeMiniDashboard';

export function ThemeMarketplace() {
  const { recommendedThemes, selectedThemeId, setSelectedThemeId, setIsDownloadCenterOpen } = useAppStore();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Filter themes based on AI recommendations if available, otherwise show all
  const displayThemes = recommendedThemes.length > 0 
    ? recommendedThemes.map(rt => {
        const fullTheme = allThemes.find(t => t.id === rt.themeId);
        return { ...fullTheme, ai: rt };
      }).filter(t => t.id) // remove undefined
    : allThemes.map(t => ({ ...t, ai: null }));

  const categories = ['All', ...Array.from(new Set(allThemes.map(t => t.metadata.category)))];

  const filteredThemes = activeCategory === 'All' 
    ? displayThemes 
    : displayThemes.filter(t => t.metadata?.category === activeCategory);

  return (
    <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-text-primary mb-2">Theme Marketplace</h2>
          <p className="text-text-secondary">Discover, preview, and apply premium design systems generated for your project.</p>
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                "px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition-all",
                activeCategory === cat 
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-surface border border-border text-text-secondary hover:text-text-primary hover:border-primary/50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {filteredThemes.map((themeData: any, idx: number) => {
          const t = themeData;
          const ai = themeData.ai;
          const isSelected = selectedThemeId === t.id;

          return (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              key={t.id} 
              className={clsx(
                "flex flex-col rounded-2xl overflow-hidden transition-all duration-300",
                isSelected 
                  ? "ring-2 ring-primary shadow-[0_0_30px_rgba(139,92,246,0.15)] bg-primary/5" 
                  : "border border-border bg-surface hover:border-primary/50 hover:shadow-xl"
              )}
            >
              {/* Preview Header - we scope data-theme locally to render the mini dashboard in that theme */}
              <div 
                className="h-[240px] w-full relative overflow-hidden bg-black/5"
                data-theme={t.id}
              >
                <div className="absolute inset-0 p-4 pb-0 pointer-events-none transform scale-95 origin-bottom">
                   <ThemeMiniDashboard theme={t as any} />
                </div>
                
                {/* Overlay gradients to make it look like a framed preview */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface to-transparent z-10" />
                
                <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
                  <div className="px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border text-xs font-bold text-text-primary flex items-center gap-1.5 shadow-sm">
                     <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                     {t.metadata.rating}
                  </div>
                </div>

                {isSelected && (
                  <div className="absolute top-3 left-3 z-20 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Active Theme
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1 z-20 bg-surface">
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
                      <div className="text-[10px] uppercase tracking-wider font-bold text-text-muted mt-0.5">Match Score</div>
                    </div>
                  )}
                </div>

                {ai && (
                  <p className="text-sm text-text-secondary line-clamp-2 mb-5 min-h-[40px]">
                    {ai.reason || t.metadata.description}
                  </p>
                )}

                <div className="grid grid-cols-2 gap-3 mb-6">
                   <div className="bg-background rounded-lg p-3 border border-border">
                     <div className="flex items-center gap-2 text-text-muted mb-1">
                       <LayoutTemplate className="w-4 h-4" />
                       <span className="text-xs font-bold uppercase tracking-wider">Components</span>
                     </div>
                     <div className="text-lg font-black text-text-primary">{t.metadata.componentsCount}+</div>
                   </div>
                   <div className="bg-background rounded-lg p-3 border border-border">
                     <div className="flex items-center gap-2 text-text-muted mb-1">
                       <Layout className="w-4 h-4" />
                       <span className="text-xs font-bold uppercase tracking-wider">Pages</span>
                     </div>
                     <div className="text-lg font-black text-text-primary">{t.metadata.pagesCount}</div>
                   </div>
                   <div className="bg-background rounded-lg p-3 border border-border col-span-2 flex justify-between items-center">
                     <div className="flex items-center gap-2 text-text-muted">
                       <Download className="w-4 h-4" />
                       <span className="text-xs font-bold uppercase tracking-wider">Downloads</span>
                     </div>
                     <div className="text-sm font-bold text-text-primary">{(t.metadata.downloads / 1000).toFixed(1)}k</div>
                   </div>
                </div>

                <div className="mt-auto grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => setSelectedThemeId(t.id)}
                    className={clsx(
                      "py-2.5 rounded-xl text-sm font-bold transition-all",
                      isSelected 
                        ? "bg-primary/20 text-primary border border-primary/30"
                        : "bg-surface border border-border text-text-primary hover:bg-background"
                    )}
                  >
                    {isSelected ? "Currently Active" : "Apply Theme"}
                  </button>
                  <button 
                    onClick={() => {
                       setSelectedThemeId(t.id);
                       setIsDownloadCenterOpen(true);
                    }}
                    className="py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  );
}
