"use client";

import React from "react";
import clsx from "clsx";
import { LayoutDashboard, Users, Activity, Settings, Bell, Search, ArrowUpRight, DollarSign, Menu } from "lucide-react";
import { DNAThemeConfig } from "@/themes/dna/types";
import { CARD_DNA_TOKENS, COLOR_DNA_TOKENS, TYPOGRAPHY_DNA_TOKENS } from "@/themes/dna/tokens";

interface ThemeMiniDashboardProps {
  theme?: DNAThemeConfig;
}

export function ThemeMiniDashboard({ theme }: ThemeMiniDashboardProps) {
  // Defaults if no theme is passed
  const layout = theme?.dna?.layout || 'fixed-sidebar';
  const cardToken = theme?.dna?.card || 'elevated';
  const colorToken = theme?.dna?.color || 'dark-premium';
  const typoToken = theme?.dna?.typography || 'corporate';

  const cardClass = CARD_DNA_TOKENS[cardToken];
  const colorClass = COLOR_DNA_TOKENS[colorToken];
  const typoClass = TYPOGRAPHY_DNA_TOKENS[typoToken];

  const NavItems = () => (
    <>
      {[
        { icon: LayoutDashboard, active: true, label: "Home" },
        { icon: Users, active: false, label: "Team" },
        { icon: Activity, active: false, label: "Stats" },
        { icon: Settings, active: false, label: "Config" }
      ].map((item, i) => (
        <div 
          key={i} 
          className={clsx(
            "flex items-center gap-1.5 p-1 rounded transition-colors",
            item.active ? "bg-primary text-white" : colorClass.muted
          )}
        >
          <item.icon className="w-2.5 h-2.5" />
          {(layout === 'top-navigation' || layout === 'hybrid-navigation') && <span className="text-[7px]">{item.label}</span>}
          {item.active && layout !== 'top-navigation' && layout !== 'hybrid-navigation' && <div className="w-6 h-1 rounded bg-white/50 hidden"></div>}
        </div>
      ))}
    </>
  );

  return (
    <div className={clsx(
      "w-full h-full rounded-xl border overflow-hidden flex flex-col pointer-events-none select-none text-[8px]",
      colorClass.background,
      colorClass.border,
      typoClass.fontFamily
    )}>
      
      {/* Top Navigation based on Layout DNA */}
      {(layout === 'top-navigation' || layout === 'hybrid-navigation' || layout === 'workspace-layout') && (
        <div className={clsx("h-7 border-b flex items-center justify-between px-2", colorClass.border, colorClass.card)}>
          <div className={clsx("flex items-center gap-1.5 font-bold", typoClass.headingClass, colorClass.primary)}>
            <div className="w-3 h-3 rounded-full bg-primary flex items-center justify-center">
               <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            Acme
          </div>
          
          <div className="flex items-center gap-2">
            <NavItems />
          </div>

          <div className={clsx("flex items-center gap-2", colorClass.muted)}>
            <Bell className="w-2.5 h-2.5" />
            <div className="w-4 h-4 rounded-full bg-primary/20 border border-primary/30"></div>
          </div>
        </div>
      )}

      {/* Default Header for sidebars */}
      {(layout === 'fixed-sidebar' || layout === 'floating-sidebar' || layout === 'minimal-sidebar' || layout === 'dashboard-layout') && (
        <div className={clsx("h-6 border-b flex items-center justify-between px-2", colorClass.border, colorClass.card)}>
          <div className={clsx("flex items-center gap-1.5 font-bold", typoClass.headingClass, colorClass.primary)}>
            {layout === 'minimal-sidebar' && <Menu className="w-3 h-3" />}
            Acme Corp
          </div>
          <div className={clsx("flex items-center gap-2", colorClass.muted)}>
            <div className={clsx("flex items-center gap-1 border px-1.5 py-0.5 rounded text-[6px]", colorClass.border, colorClass.background)}>
              <Search className="w-2 h-2" /> Search...
            </div>
            <Bell className="w-2.5 h-2.5" />
            <div className="w-4 h-4 rounded-full bg-primary/20 border border-primary/30"></div>
          </div>
        </div>
      )}

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar based on Layout DNA */}
        {(layout === 'fixed-sidebar' || layout === 'floating-sidebar' || layout === 'minimal-sidebar' || layout === 'dashboard-layout') && (
          <div className={clsx(
            "border-r p-1.5 space-y-1 flex flex-col items-center", 
            colorClass.border, 
            colorClass.card,
            layout === 'floating-sidebar' ? 'm-1 rounded-lg border h-[calc(100%-8px)]' : 'h-full',
            layout === 'minimal-sidebar' ? 'w-8' : 'w-16'
          )}>
            <NavItems />
          </div>
        )}

        {/* Main Content Area */}
        <div className={clsx("flex-1 p-2 flex flex-col gap-2", colorClass.background)}>
          
          <div className="flex items-center justify-between">
             <div className={clsx("font-bold text-[10px]", typoClass.headingClass, colorClass.text)}>Overview</div>
             <div className="px-1.5 py-0.5 rounded bg-primary text-white font-bold">Export</div>
          </div>

          {/* KPI Cards dynamically styled */}
          <div className={clsx(
            "grid gap-2",
            layout === 'bento-layout' ? 'grid-cols-1' : 'grid-cols-2'
          )}>
             <div className={clsx("p-1.5 flex flex-col justify-between", cardClass)}>
                <div className="flex justify-between items-center mb-1">
                  <div className={colorClass.muted}>Total Revenue</div>
                  <DollarSign className="w-2.5 h-2.5 text-primary" />
                </div>
                <div className={clsx("font-bold text-[10px]", colorClass.text)}>$45,231</div>
                <div className="flex items-center gap-0.5 text-emerald-500 mt-0.5 text-[6px]">
                  <ArrowUpRight className="w-2 h-2" /> +20%
                </div>
             </div>
             
             <div className={clsx("p-1.5 flex flex-col justify-between", cardClass)}>
                <div className="flex justify-between items-center mb-1">
                  <div className={colorClass.muted}>Active Users</div>
                  <Users className="w-2.5 h-2.5 text-accent-pink" />
                </div>
                <div className={clsx("font-bold text-[10px]", colorClass.text)}>2,405</div>
                <div className="flex items-center gap-0.5 text-emerald-500 mt-0.5 text-[6px]">
                  <ArrowUpRight className="w-2 h-2" /> +12%
                </div>
             </div>
          </div>

          {/* Chart Area */}
          <div className={clsx("p-1.5 flex-1 flex flex-col", cardClass)}>
             <div className={clsx("font-bold mb-1", colorClass.text)}>Analytics</div>
             <div className="flex-1 flex items-end gap-1 w-full pt-1">
                {[30, 50, 40, 80, 60, 90, 70].map((h, i) => (
                  <div key={i} className="flex-1 bg-primary/40 rounded-t-[2px] transition-all" style={{ height: `${h}%` }}>
                     <div className="w-full bg-primary/80 rounded-t-[2px] h-1" />
                  </div>
                ))}
             </div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}
