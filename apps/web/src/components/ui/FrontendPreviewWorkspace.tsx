"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Monitor, Tablet, Smartphone, Sparkles, Code2, Download } from "lucide-react";
import { useAppStore } from "@/store";
import clsx from "clsx";
import { DashboardPreview } from "./mocks/DashboardPreview";
import { AnalyticsPreview } from "./mocks/AnalyticsPreview";
import { SettingsPreview } from "./mocks/SettingsPreview";
import { AgentPreview } from "./mocks/AgentPreview";
import { BusinessPlanPreview } from "./mocks/BusinessPlanPreview";
import { DownloadThemeButton } from "./DownloadThemeButton";

export function FrontendPreviewWorkspace() {
  const { blueprint, selectedTheme, setGenerationState } = useAppStore();
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [activeTab, setActiveTab] = useState<string>(blueprint?.pages[0] || "Dashboard");

  if (!blueprint || !selectedTheme) return null;

  // Map blueprint page names to available mock components
  const renderMockPage = (pageName: string) => {
    const p = pageName.toLowerCase();
    if (p.includes("dashboard")) return <DashboardPreview />;
    if (p.includes("analytic")) return <AnalyticsPreview />;
    if (p.includes("setting")) return <SettingsPreview />;
    if (p.includes("agent") || p.includes("bot")) return <AgentPreview />;
    if (p.includes("plan") || p.includes("editor") || p.includes("document")) return <BusinessPlanPreview />;
    return <DashboardPreview />; // Fallback
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full flex flex-col gap-6 pt-10"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-text-primary mb-2 flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-primary" /> Live Frontend Preview
          </h2>
          <p className="text-text-secondary text-sm">
            Experience your generated architecture rendered in <span className="text-primary font-bold">{selectedTheme}</span>.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex bg-surface p-1 rounded-xl border border-border">
            {[
              { id: "desktop", icon: Monitor },
              { id: "tablet", icon: Tablet },
              { id: "mobile", icon: Smartphone }
            ].map((mode) => (
              <button
                key={mode.id}
                onClick={() => setDevice(mode.id as any)}
                className={clsx(
                  "p-2 rounded-lg transition-all",
                  device === mode.id ? "bg-primary text-white shadow-md" : "text-text-muted hover:text-text-primary hover:bg-white/5"
                )}
              >
                <mode.icon className="w-4 h-4" />
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <button 
              onClick={() => setGenerationState("theme_recommendation")}
              className="px-4 py-2 bg-surface border border-border rounded-xl text-sm font-medium hover:bg-white/5 transition-colors"
            >
              Change Theme
            </button>
            <DownloadThemeButton />
          </div>
        </div>
      </div>

      <div className="flex gap-2 p-2 bg-surface border border-border rounded-2xl overflow-x-auto w-full">
         {blueprint.pages.map(page => (
            <button
              key={page}
              onClick={() => setActiveTab(page)}
              className={clsx(
                 "px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all",
                 activeTab === page ? "bg-background border border-border shadow-sm text-primary" : "text-text-secondary hover:text-text-primary"
              )}
            >
              {page}
            </button>
         ))}
      </div>

      <div className="flex justify-center w-full">
        <div 
          className={clsx(
            "transition-all duration-500 origin-top flex border border-border bg-background rounded-2xl overflow-hidden shadow-2xl relative",
            device === "desktop" ? "w-full aspect-[16/9]" :
            device === "tablet" ? "w-[768px] aspect-[4/3]" :
            "w-[375px] h-[812px]"
          )}
          style={{ 
            maxHeight: '1000px'
          }}
        >
          {/* Ensure the preview container has the theme data attribute so it inherits variables */}
          <div className="w-full h-full relative" data-theme={selectedTheme}>
            {renderMockPage(activeTab)}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
