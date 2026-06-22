"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { useAppStore } from "@/store";
import { ThemeMiniDashboard } from "./ThemeMiniDashboard";
import { allThemes } from "@/themes";

interface ThemeComparisonViewProps {
  onClose: () => void;
}

export function ThemeComparisonView({ onClose }: ThemeComparisonViewProps) {
  const { recommendedThemes, setSelectedThemeId } = useAppStore();
  
  if (!recommendedThemes || recommendedThemes.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-8 bg-background/90 backdrop-blur-2xl"
      >
        <div className="w-full max-w-7xl bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
          
          <div className="flex items-center justify-between p-6 border-b border-border bg-background">
            <div>
              <h2 className="text-2xl font-bold text-text-primary">Compare Design Systems</h2>
              <p className="text-sm text-text-secondary">Visually compare how the generated architecture looks across different design languages.</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-lg bg-surface hover:bg-white/10 text-text-muted transition-colors border border-border"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-auto p-8 bg-background">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {recommendedThemes.slice(0, 3).map((themeRec, idx) => {
                const fullTheme = allThemes.find(t => t.id === themeRec.themeId);
                return (
                <div key={themeRec.themeId} className="flex flex-col gap-4">
                  <div className="flex items-center justify-between px-2">
                    <h3 className="font-bold text-text-primary text-lg">{themeRec.themeName}</h3>
                    <span className="text-xs font-bold px-2 py-1 rounded bg-primary/20 text-primary border border-primary/30">
                      {themeRec.compatibilityScore}% Match
                    </span>
                  </div>
                  
                  {/* The actual preview box */}
                  <div 
                    className="aspect-[4/3] rounded-xl border border-border overflow-hidden bg-background relative group shadow-xl shadow-black/20"
                    data-theme={themeRec.themeId}
                  >
                    <ThemeMiniDashboard theme={fullTheme as any} />
                    
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 backdrop-blur-none group-hover:backdrop-blur-sm transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <button 
                        onClick={() => {
                          setSelectedThemeId(themeRec.themeId);
                          onClose();
                        }}
                        className="px-6 py-3 rounded-xl bg-primary text-white font-bold shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all"
                      >
                        Apply this Theme <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-sm text-text-secondary px-2 min-h-[40px]">
                    {themeRec.reason}
                  </p>
                </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
