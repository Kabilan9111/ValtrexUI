import React from "react";
import clsx from "clsx";
import { Search, Apple, Battery, Wifi, Maximize2, LayoutDashboard, Users, MessageCircle, Settings, Music } from "lucide-react";
import { DNAThemeConfig } from "@/themes/dna/types";
import { CARD_DNA_TOKENS, COLOR_DNA_TOKENS, TYPOGRAPHY_DNA_TOKENS } from "@/themes/dna/tokens";

interface Props {
  theme: DNAThemeConfig;
}

export function ArchetypeMacOS({ theme }: Props) {
  const colorClass = COLOR_DNA_TOKENS[theme.dna.color] || COLOR_DNA_TOKENS['minimal-white'];
  const cardClass = CARD_DNA_TOKENS[theme.dna.card] || CARD_DNA_TOKENS['glass'];
  const typoClass = TYPOGRAPHY_DNA_TOKENS[theme.dna.typography] || TYPOGRAPHY_DNA_TOKENS['corporate'];

  return (
    <div className={clsx("w-full h-full relative overflow-hidden flex flex-col pointer-events-none select-none", colorClass.background, typoClass.fontFamily)}>
      {/* Top Menu Bar */}
      <div className={clsx("h-5 w-full flex items-center justify-between px-2 backdrop-blur-md bg-white/10 border-b border-white/5", colorClass.text, "text-[6px] font-medium z-10")}>
        <div className="flex items-center gap-2">
           <span className="font-bold"></span>
           <span className="font-bold">Finder</span>
           <span>File</span>
           <span>Edit</span>
           <span>View</span>
           <span>Go</span>
           <span>Window</span>
           <span>Help</span>
        </div>
        <div className="flex items-center gap-1.5">
           <Wifi className="w-2 h-2" />
           <Search className="w-2 h-2" />
           <Battery className="w-2 h-2" />
           <span>100%</span>
           <span>Tue 9:41 AM</span>
        </div>
      </div>

      {/* Desktop Background Area */}
      <div className="flex-1 relative p-4 flex items-center justify-center">
         
         {/* Main App Window */}
         <div className={clsx("w-full h-full rounded-lg shadow-2xl flex flex-col overflow-hidden border", cardClass, colorClass.border)}>
            {/* Window Header */}
            <div className={clsx("h-6 flex items-center px-2 gap-2 border-b", colorClass.border, "bg-white/5 backdrop-blur-sm")}>
               <div className="flex items-center gap-1">
                 <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                 <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                 <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
               </div>
               <div className="flex-1 text-center font-bold text-[8px] opacity-70">Dashboard</div>
            </div>
            {/* Window Content */}
            <div className="flex-1 flex p-2 gap-2">
               {/* Sidebar */}
               <div className="w-16 flex flex-col gap-1 border-r border-white/10 pr-2">
                 <div className="font-bold text-[6px] opacity-50 mb-1">Favorites</div>
                 {['AirDrop', 'Recents', 'Applications', 'Downloads'].map((item, i) => (
                    <div key={i} className={clsx("px-1.5 py-1 rounded flex items-center gap-1 text-[6px]", i === 0 ? "bg-primary/20 text-primary" : "opacity-80")}>
                      <LayoutDashboard className="w-2 h-2" />
                      {item}
                    </div>
                 ))}
               </div>
               {/* Grid Content */}
               <div className="flex-1 grid grid-cols-3 grid-rows-3 gap-2">
                  {[...Array(6)].map((_, i) => (
                     <div key={i} className={clsx("rounded-md border flex flex-col items-center justify-center gap-1 shadow-sm", colorClass.border, "bg-white/5")}>
                       <div className="w-6 h-4 rounded bg-primary/20" />
                       <span className="text-[5px] opacity-70">Folder {i+1}</span>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      {/* Floating Dock */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-10 px-2 rounded-2xl flex items-center gap-2 backdrop-blur-xl bg-white/20 border border-white/20 shadow-xl z-20">
         {[LayoutDashboard, Users, MessageCircle, Music, Settings].map((Icon, i) => (
            <div key={i} className={clsx("w-6 h-6 rounded-xl flex items-center justify-center bg-gradient-to-b from-white/40 to-white/10 shadow-inner border border-white/30", colorClass.text)}>
              <Icon className="w-3.5 h-3.5" />
            </div>
         ))}
         <div className="w-px h-5 bg-white/20 mx-0.5"></div>
         <div className={clsx("w-6 h-6 rounded-xl flex items-center justify-center bg-gradient-to-b from-white/40 to-white/10 shadow-inner border border-white/30", colorClass.text)}>
            <div className="w-4 h-4 rounded-lg overflow-hidden flex flex-wrap gap-0.5 p-0.5">
              <div className="w-1 h-1 bg-red-400 rounded-sm"></div>
              <div className="w-1 h-1 bg-blue-400 rounded-sm"></div>
            </div>
         </div>
      </div>
    </div>
  );
}
