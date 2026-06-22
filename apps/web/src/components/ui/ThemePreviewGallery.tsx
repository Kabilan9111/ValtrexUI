"use client";

import React, { useState } from "react";
import { useAppStore } from "@/store";
import { Sparkles, ArrowRight, Columns } from "lucide-react";
import { ThemeMarketplace } from "./ThemeMarketplace";
import { ThemeComparisonView } from "./ThemeComparisonView";

interface ThemePreviewGalleryProps {
  onConfirm: () => void;
}

export function ThemePreviewGallery({ onConfirm }: ThemePreviewGalleryProps) {
  const { recommendedThemes, selectedThemeId } = useAppStore();
  const [showCompare, setShowCompare] = useState(false);

  if (!recommendedThemes || recommendedThemes.length === 0) return null;

  return (
    <>
      <div className="space-y-6 pt-4 relative">
        {selectedThemeId && (
          <div className="flex justify-end mb-4 absolute top-0 right-0 z-50">
            <button 
              onClick={onConfirm}
              className="px-6 py-2.5 gradient-button rounded-xl text-sm font-bold flex items-center gap-2 group shadow-xl"
            >
              Generate Frontend
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        <ThemeMarketplace />
      </div>
      
      {showCompare && (
        <ThemeComparisonView onClose={() => setShowCompare(false)} />
      )}
    </>
  );
}
