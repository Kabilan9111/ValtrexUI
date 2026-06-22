"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import clsx from "clsx";
import { ThemeRecommendation, useAppStore } from "@/store";
import { ThemeMiniDashboard } from "./ThemeMiniDashboard";

interface ThemeCardProps {
  theme: ThemeRecommendation;
  isSelected: boolean;
  onSelect: () => void;
  index: number;
}

export function ThemeCard({ theme, isSelected, onSelect, index }: ThemeCardProps) {
  const isTesla = theme.theme === "Tesla Luxury";
  const isApple = theme.theme === "Apple Glass";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={onSelect}
      className={clsx(
        "cursor-pointer rounded-2xl border-2 transition-all overflow-hidden bg-surface group",
        isSelected 
          ? "border-primary shadow-[0_0_20px_var(--glow-shadow)]" 
          : "border-border hover:border-primary/50"
      )}
    >
      <div 
        className="h-44 w-full relative p-2 overflow-hidden" 
        data-theme={theme.theme}
      >
        <ThemeMiniDashboard theme={theme as any} />
      </div>
      
      <div className="p-5 relative bg-background">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-text-primary">{theme.theme}</h3>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold">
            {theme.confidence}% Match
          </div>
        </div>
        <p className="text-sm text-text-secondary line-clamp-2">
          {theme.reason}
        </p>
        
        {isSelected && (
          <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
