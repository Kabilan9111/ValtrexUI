"use client";

import React, { useState } from "react";
import { useAppStore } from "@/store";
import { ThemeCard } from "./ThemeCard";
import { Sparkles, ArrowRight, Columns } from "lucide-react";
import { ThemeComparisonView } from "./ThemeComparisonView";

interface ThemePreviewGalleryProps {
  onConfirm: () => void;
}

export function ThemePreviewGallery({ onConfirm }: ThemePreviewGalleryProps) {
  const { recommendedThemes, selectedTheme, setSelectedTheme } = useAppStore();
  const [showCompare, setShowCompare] = useState(false);

  if (!recommendedThemes || recommendedThemes.length === 0) return null;

  return (
    <>
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-1 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              AI Theme Recommendations
            </h2>
            <p className="text-sm text-text-secondary">
              Based on your requirements, here are the best design systems for your product.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowCompare(true)}
              className="px-4 py-2.5 bg-surface border border-border hover:bg-white/5 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors"
            >
              <Columns className="w-4 h-4" /> Compare Themes
            </button>
            {selectedTheme && (
              <button 
                onClick={onConfirm}
                className="px-6 py-2.5 gradient-button rounded-xl text-sm font-bold flex items-center gap-2 group"
              >
                Generate Frontend
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendedThemes.map((theme, idx) => (
            <ThemeCard
              key={theme.theme}
              theme={theme}
              index={idx}
              isSelected={selectedTheme === theme.theme}
              onSelect={() => setSelectedTheme(theme.theme)}
            />
          ))}
        </div>
      </div>
      
      {showCompare && (
        <ThemeComparisonView onClose={() => setShowCompare(false)} />
      )}
    </>
  );
}
