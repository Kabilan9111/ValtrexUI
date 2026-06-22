import React from "react";
import clsx from "clsx";
import { LayoutDashboard, Users, Activity, Settings, Search, Bell, ArrowUpRight, DollarSign } from "lucide-react";
import { DNAThemeConfig } from "@/themes/dna/types";
import { CARD_DNA_TOKENS, COLOR_DNA_TOKENS, TYPOGRAPHY_DNA_TOKENS } from "@/themes/dna/tokens";

interface Props {
  theme: DNAThemeConfig;
}

export function ArchetypeMinimal({ theme }: Props) {
  const colorClass = COLOR_DNA_TOKENS[theme.dna.color] || COLOR_DNA_TOKENS['minimal-white'];
  const cardClass = CARD_DNA_TOKENS[theme.dna.card] || CARD_DNA_TOKENS['border'];
  const typoClass = TYPOGRAPHY_DNA_TOKENS[theme.dna.typography] || TYPOGRAPHY_DNA_TOKENS['corporate'];

  return (
    <div className={clsx("w-full h-full flex pointer-events-none select-none text-[6px]", colorClass.background, typoClass.fontFamily, colorClass.text)}>
      
      {/* Sidebar */}
      <div className={clsx("w-16 h-full flex flex-col border-r", colorClass.border, colorClass.card)}>
         <div className="h-8 flex items-center px-2 font-bold text-[7px] border-b border-transparent">
            Acme Inc
         </div>
         <div className="flex-1 px-1 py-2 space-y-0.5">
            {[
               { i: <LayoutDashboard className="w-3 h-3" />, t: 'Home', a: true },
               { i: <Users className="w-3 h-3" />, t: 'Team', a: false },
               { i: <Activity className="w-3 h-3" />, t: 'Analytics', a: false },
               { i: <Settings className="w-3 h-3" />, t: 'Settings', a: false },
            ].map((n, i) => (
               <div key={i} className={clsx("flex items-center gap-1.5 px-1.5 py-1 rounded transition-colors", n.a ? "bg-primary text-white" : "hover:bg-black/5 dark:hover:bg-white/5 opacity-70")}>
                  {n.i}
                  <span className="font-medium">{n.t}</span>
               </div>
            ))}
         </div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
         {/* Top Header */}
         <div className={clsx("h-8 flex items-center justify-between px-3 border-b", colorClass.border)}>
            <div className={clsx("flex items-center gap-1.5 px-2 py-1 rounded bg-black/5 dark:bg-white/5")}>
               <Search className="w-2.5 h-2.5 opacity-50" />
               <span className="opacity-50 text-[5px]">Search...</span>
            </div>
            <div className="flex items-center gap-2">
               <Bell className="w-3 h-3 opacity-50" />
               <div className="w-4 h-4 rounded-full bg-primary/20" />
            </div>
         </div>

         {/* Main Content */}
         <div className="flex-1 p-3 flex flex-col gap-3 overflow-y-auto">
            <div className="flex justify-between items-end">
               <div>
                  <h1 className={clsx("text-[12px] font-bold", typoClass.headingClass)}>Dashboard</h1>
                  <p className="opacity-60 mt-0.5">Welcome back. Here's your overview.</p>
               </div>
               <div className="px-2 py-1 bg-primary text-white rounded font-medium">Export</div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-2 shrink-0">
               <div className={clsx("p-2 rounded-lg flex flex-col gap-1", cardClass)}>
                  <div className="flex justify-between items-center opacity-70">
                     <span>Total Revenue</span>
                     <DollarSign className="w-3 h-3 text-primary" />
                  </div>
                  <div className="text-[12px] font-bold mt-1">$45,231</div>
                  <div className="flex items-center gap-1 text-emerald-500 font-medium">
                     <ArrowUpRight className="w-2.5 h-2.5" /> +20.1%
                  </div>
               </div>
               <div className={clsx("p-2 rounded-lg flex flex-col gap-1", cardClass)}>
                  <div className="flex justify-between items-center opacity-70">
                     <span>Active Users</span>
                     <Users className="w-3 h-3 text-primary" />
                  </div>
                  <div className="text-[12px] font-bold mt-1">+2,350</div>
                  <div className="flex items-center gap-1 text-emerald-500 font-medium">
                     <ArrowUpRight className="w-2.5 h-2.5" /> +18.2%
                  </div>
               </div>
            </div>

            {/* Chart Placeholder */}
            <div className={clsx("flex-1 rounded-lg p-2 flex flex-col", cardClass)}>
               <div className="font-bold opacity-80 mb-2">Overview</div>
               <div className="flex-1 flex items-end gap-1">
                  {[40, 70, 45, 90, 65, 85, 100, 60, 80].map((h, i) => (
                     <div key={i} className="flex-1 bg-primary/20 rounded-t transition-all hover:bg-primary/40 relative group">
                        <div className="absolute bottom-0 w-full bg-primary rounded-t" style={{ height: `${h}%` }}></div>
                     </div>
                  ))}
               </div>
            </div>

         </div>
      </div>
    </div>
  );
}
