"use client";

import React from "react";
import clsx from "clsx";
import { LayoutDashboard, Users, Activity, Settings, Bell, Search, ArrowUpRight, DollarSign } from "lucide-react";

export function ThemeMiniDashboard() {
  return (
    <div className="w-full h-full bg-background rounded-xl border border-border overflow-hidden flex flex-col pointer-events-none select-none text-[8px]">
      
      {/* Top Header */}
      <div className="h-6 border-b border-border bg-surface flex items-center justify-between px-2">
        <div className="flex items-center gap-1.5 text-text-primary font-bold">
          <div className="w-3 h-3 rounded-full primary-gradient flex items-center justify-center">
             <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
          Acme Corp
        </div>
        <div className="flex items-center gap-2 text-text-muted">
          <div className="flex items-center gap-1 bg-background border border-border px-1.5 py-0.5 rounded text-[6px]">
            <Search className="w-2 h-2" /> Search...
          </div>
          <Bell className="w-2.5 h-2.5" />
          <div className="w-4 h-4 rounded-full bg-primary/20 border border-primary/30"></div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-16 border-r border-border bg-surface p-1.5 space-y-1">
          {[
            { icon: LayoutDashboard, active: true },
            { icon: Users, active: false },
            { icon: Activity, active: false },
            { icon: Settings, active: false }
          ].map((item, i) => (
             <div 
               key={i} 
               className={clsx(
                 "flex items-center gap-1.5 p-1 rounded transition-colors",
                 item.active ? "bg-primary text-white" : "text-text-muted"
               )}
             >
               <item.icon className="w-2.5 h-2.5" />
               {item.active && <div className="w-6 h-1 rounded bg-white/50"></div>}
             </div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-background p-2 flex flex-col gap-2">
          
          <div className="flex items-center justify-between">
             <div className="font-bold text-text-primary text-[10px]">Overview</div>
             <div className="px-1.5 py-0.5 rounded bg-primary text-white font-bold">Export</div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 gap-2">
             <div className="glass-card border border-border rounded p-1.5 shadow-sm">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-text-muted">Total Revenue</div>
                  <DollarSign className="w-2.5 h-2.5 text-primary" />
                </div>
                <div className="font-bold text-text-primary text-[10px]">$45,231</div>
                <div className="flex items-center gap-0.5 text-emerald-500 mt-0.5 text-[6px]">
                  <ArrowUpRight className="w-2 h-2" /> +20%
                </div>
             </div>
             
             <div className="glass-card border border-border rounded p-1.5 shadow-sm">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-text-muted">Active Users</div>
                  <Users className="w-2.5 h-2.5 text-accent-pink" />
                </div>
                <div className="font-bold text-text-primary text-[10px]">2,405</div>
                <div className="flex items-center gap-0.5 text-emerald-500 mt-0.5 text-[6px]">
                  <ArrowUpRight className="w-2 h-2" /> +12%
                </div>
             </div>
          </div>

          {/* Chart Area */}
          <div className="glass-card border border-border rounded p-1.5 flex-1 shadow-sm flex flex-col">
             <div className="text-text-primary font-bold mb-1">Analytics</div>
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
