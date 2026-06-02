"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Layers, Users, Map, Cpu } from "lucide-react";
import { useAppStore } from "@/store";

export function BlueprintPanel() {
  const { recommendedThemes, detectedIndustry, blueprint, generationState } = useAppStore();
  const topTheme = recommendedThemes?.[0];

  if (generationState === "idle" || generationState === "analyzing") {
    return null;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass-card rounded-2xl p-6 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10" />
      
      <div className="flex items-center gap-2 mb-6 border-b border-border pb-4">
        <Cpu className="w-5 h-5 text-primary" />
        <h3 className="text-sm font-bold text-text-primary">AI Blueprint Analysis</h3>
      </div>

      <div className="space-y-6 relative z-10">
        
        {topTheme && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-text-muted uppercase tracking-wider">Detected Theme</span>
              <span className="text-xs font-bold text-accent-pink bg-accent-pink/10 px-2 py-0.5 rounded flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> {topTheme.confidence}% Match
              </span>
            </div>
            <div className="p-3 rounded-lg bg-surface border border-border">
              <div className="text-sm font-bold text-text-primary mb-1">{topTheme.theme}</div>
              <div className="text-[11px] text-text-muted">{topTheme.reason}</div>
            </div>
          </div>
        )}

        {detectedIndustry && (
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-text-muted uppercase tracking-wider">Industry & Sector</span>
            <div className="flex items-center gap-2 text-sm font-medium text-text-primary p-2 bg-white/5 rounded border border-border/50">
              <Shield className="w-4 h-4 text-accent-blue" />
              {detectedIndustry}
            </div>
          </div>
        )}

        {blueprint && (
          <>
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-text-muted uppercase tracking-wider">Project Architecture</span>
              <div className="p-3 rounded-lg bg-surface border border-border space-y-3">
                
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-text-primary mb-2">
                    <Map className="w-3.5 h-3.5 text-primary" /> Pages
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {blueprint.pages.map((page, i) => (
                      <span key={i} className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/10 text-text-secondary">{page}</span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-border">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-text-primary mb-2">
                    <Users className="w-3.5 h-3.5 text-primary" /> Roles
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {blueprint.roles.map((role, i) => (
                      <span key={i} className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/10 text-text-secondary">{role}</span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </>
        )}

        {generationState === 'detecting_theme' && !topTheme && (
          <div className="animate-pulse flex space-x-4">
             <div className="flex-1 space-y-4 py-1">
               <div className="h-2 bg-white/10 rounded"></div>
               <div className="space-y-2">
                 <div className="h-2 bg-white/10 rounded"></div>
                 <div className="h-2 bg-white/10 rounded w-5/6"></div>
               </div>
             </div>
          </div>
        )}
        
        {generationState === 'generating_blueprint' && !blueprint && (
           <div className="text-xs text-text-muted animate-pulse flex items-center gap-2">
             <Layers className="w-4 h-4 text-primary animate-spin" />
             Constructing Architecture...
           </div>
        )}

      </div>
    </motion.div>
  );
}
