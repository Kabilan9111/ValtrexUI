"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Search, Sparkles } from "lucide-react";
import { useAppStore } from "@/store";
import { ThemeCard } from "@/components/ui/ThemeCard";
import { TopNav } from "@/components/layout/TopNav";

export default function Marketplace() {
  const { selectedTheme, setSelectedTheme } = useAppStore();

  const marketplaceThemes = [
    { theme: "Tesla Luxury", confidence: 99, reason: "Premium AI Interface" },
    { theme: "Enterprise Elite", confidence: 99, reason: "Corporate Dashboards" },
    { theme: "Apple Glass", confidence: 99, reason: "Minimalist Productivity" },
    { theme: "Fintech Elite", confidence: 99, reason: "Financial Systems" },
    { theme: "Cyberpunk Red", confidence: 99, reason: "Gaming & Web3" },
    { theme: "Neon Sunset", confidence: 99, reason: "Creative Portfolios" },
  ];

  useEffect(() => {
    if (selectedTheme) {
      document.body.setAttribute('data-theme', selectedTheme);
    }
  }, [selectedTheme]);

  return (
    <div className="max-w-[1600px] mx-auto w-full relative">
      
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-text-primary mb-2 flex items-center gap-3 tracking-tight">
            <ShoppingBag className="w-8 h-8 text-primary" />
            Theme Marketplace
          </h1>
          <p className="text-text-secondary text-sm">
            Discover, preview, and apply premium AI-generated design systems.
          </p>
        </div>
        
        <div className="relative">
          <Search className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search themes..." 
            className="pl-9 pr-4 py-2 bg-background border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:border-primary w-64 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {marketplaceThemes.map((theme, idx) => (
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
  );
}
