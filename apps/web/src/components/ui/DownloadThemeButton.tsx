"use client";

import React from "react";
import { Download } from "lucide-react";
import { useAppStore } from "@/store";

export function DownloadThemeButton() {
  const { selectedTheme } = useAppStore();

  const handleDownload = () => {
    if (!selectedTheme) return;

    const isTesla = selectedTheme === "Tesla Luxury";
    const isApple = selectedTheme === "Apple Glass";
    const isEnterprise = selectedTheme === "Enterprise Elite";
    
    // Build a highly detailed mock JSON token package based on theme selection
    const themeJson = {
      $schema: "https://valtrexui.com/schema/theme/v1.json",
      name: selectedTheme,
      version: "1.0.0",
      description: `Generated design system for ${selectedTheme}`,
      colors: {
        primary: isTesla ? "#8B5CF6" : isApple ? "#0071e3" : "#2563eb",
        secondary: isTesla ? "#EC4899" : isApple ? "#86868b" : "#475569",
        background: isTesla ? "#050812" : isApple ? "#ffffff" : "#f8fafc",
        surface: isTesla ? "rgba(255,255,255,0.02)" : isApple ? "rgba(255,255,255,0.7)" : "#ffffff",
        textPrimary: isTesla ? "#ffffff" : isApple ? "#1d1d1f" : "#0f172a",
        textSecondary: isTesla ? "rgba(255,255,255,0.6)" : isApple ? "#86868b" : "#475569",
        textMuted: isTesla ? "rgba(255,255,255,0.4)" : isApple ? "#d2d2d7" : "#94a3b8",
        border: isTesla ? "rgba(255,255,255,0.1)" : isApple ? "rgba(0,0,0,0.1)" : "#e2e8f0",
        accents: {
          blue: isTesla ? "#3B82F6" : isApple ? "#007aff" : "#3b82f6",
          pink: isTesla ? "#EC4899" : isApple ? "#ff2d55" : "#db2777"
        }
      },
      typography: {
        fontFamily: isTesla ? "'Inter', sans-serif" : isApple ? "'-apple-system', 'SF Pro Text', sans-serif" : "'Roboto', sans-serif",
        headingWeight: isTesla ? 800 : isApple ? 600 : 700,
        bodyWeight: 400,
        baseSize: "16px",
        lineHeight: "1.5"
      },
      spacing: {
        "3xs": "0.125rem",
        "2xs": "0.25rem",
        "xs": "0.5rem",
        "sm": "0.75rem",
        "md": "1rem",
        "lg": "1.5rem",
        "xl": "2rem",
        "2xl": "3rem"
      },
      shadows: {
        sm: isTesla ? "0 0 10px rgba(139,92,246,0.1)" : "0 1px 2px rgba(0,0,0,0.05)",
        md: isTesla ? "0 0 20px rgba(139,92,246,0.2)" : "0 4px 6px -1px rgba(0,0,0,0.1)",
        lg: isTesla ? "0 0 30px rgba(139,92,246,0.3)" : "0 10px 15px -3px rgba(0,0,0,0.1)",
        glow: isTesla ? "0 0 20px rgba(139,92,246,0.4)" : "0 0 10px rgba(0,113,227,0.3)"
      },
      borderRadius: {
        sm: isTesla ? "0.25rem" : isApple ? "6px" : "0.25rem",
        md: isTesla ? "0.5rem" : isApple ? "12px" : "0.5rem",
        lg: isTesla ? "1rem" : isApple ? "20px" : "0.75rem",
        full: "9999px"
      },
      components: {
        button: {
          padding: "0.5rem 1rem",
          borderRadius: "{borderRadius.md}",
          fontWeight: "{typography.headingWeight}"
        },
        card: {
          padding: "{spacing.lg}",
          borderRadius: "{borderRadius.lg}",
          background: "{colors.surface}",
          border: "1px solid {colors.border}"
        }
      },
      animations: {
        transitionFast: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
        transitionNormal: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        transitionSlow: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
      },
      exportTargets: [
        "tailwind.config.ts",
        "globals.css",
        "shadcn-ui-theme.json"
      ]
    };

    const blob = new Blob([JSON.stringify(themeJson, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedTheme.toLowerCase().replace(/\s+/g, "-")}-theme.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <button 
      onClick={handleDownload}
      className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors"
    >
      <Download className="w-4 h-4" />
      Export Theme
    </button>
  );
}
