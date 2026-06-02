"use client";

import React from "react";
import { useAppStore } from "@/store";
import { motion } from "framer-motion";
import { Layout, Users, List, Sparkles } from "lucide-react";

export function ThemeRecommendationPanel() {
  const { blueprint, recommendedThemes } = useAppStore();

  if (!blueprint) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass-card rounded-2xl p-6 border-white/5 shadow-2xl"
    >
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-bold text-text-primary tracking-tight">AI Analysis</h3>
      </div>

      <div className="space-y-6">
        <div>
          <div className="text-[11px] font-bold text-text-muted uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Layout className="w-3 h-3" /> Industry / Type
          </div>
          <div className="font-semibold text-text-primary">{blueprint.projectName}</div>
          <div className="text-sm text-text-secondary">{blueprint.industry}</div>
        </div>

        <div>
          <div className="text-[11px] font-bold text-text-muted uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Users className="w-3 h-3" /> User Roles
          </div>
          <div className="flex flex-wrap gap-2">
            {blueprint.roles.map(role => (
              <span key={role} className="px-2 py-1 rounded bg-primary/10 border border-primary/20 text-primary text-xs font-bold">
                {role}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[11px] font-bold text-text-muted uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <List className="w-3 h-3" /> Detected Features
          </div>
          <div className="flex flex-wrap gap-2">
            {blueprint.pages.map(page => (
              <span key={page} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-text-secondary text-xs font-medium">
                {page}
              </span>
            ))}
          </div>
        </div>
        
        {recommendedThemes && recommendedThemes.length > 0 && (
           <div className="pt-4 border-t border-border mt-4">
             <div className="text-[11px] font-bold text-text-muted uppercase tracking-wider mb-3">
               Top Match
             </div>
             <div className="flex items-center justify-between p-3 rounded-lg bg-surface-light border border-primary/30">
                <div className="font-bold text-text-primary text-sm">{recommendedThemes[0].theme}</div>
                <div className="text-xs font-bold text-emerald-400">{recommendedThemes[0].confidence}%</div>
             </div>
           </div>
        )}
      </div>
    </motion.div>
  );
}
