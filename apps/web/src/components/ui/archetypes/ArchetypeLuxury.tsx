import React from "react";
import clsx from "clsx";
import { BatteryCharging, Map, ShieldCheck, Thermometer, Wind, Music, Zap, Settings } from "lucide-react";
import { DNAThemeConfig } from "@/themes/dna/types";
import { CARD_DNA_TOKENS, COLOR_DNA_TOKENS, TYPOGRAPHY_DNA_TOKENS } from "@/themes/dna/tokens";

interface Props {
  theme: DNAThemeConfig;
}

export function ArchetypeLuxury({ theme }: Props) {
  const colorClass = COLOR_DNA_TOKENS[theme.dna.color] || COLOR_DNA_TOKENS['luxury-gold'];
  const typoClass = TYPOGRAPHY_DNA_TOKENS[theme.dna.typography] || TYPOGRAPHY_DNA_TOKENS['luxury'];

  return (
    <div className={clsx("w-full h-full flex flex-col pointer-events-none select-none text-[6px] relative overflow-hidden", colorClass.background, typoClass.fontFamily, colorClass.text)}>
      {/* Background Gradient/Image Hint */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black to-[#1a1a1a] z-0"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl z-0 pointer-events-none"></div>

      {/* Main UI Container */}
      <div className="relative z-10 flex flex-col h-full p-2 gap-2">
         
         {/* Top Header */}
         <div className="flex justify-between items-center">
            <div className={clsx("text-[10px] tracking-[0.2em] uppercase", typoClass.headingClass)}>Model X</div>
            <div className="flex items-center gap-2 opacity-70">
               <div className="flex items-center gap-1"><Thermometer className="w-2.5 h-2.5" /> 68°F</div>
               <div className="flex items-center gap-1"><ShieldCheck className="w-2.5 h-2.5" /> Sentry On</div>
               <Settings className="w-3 h-3" />
            </div>
         </div>

         {/* Center Visualization Area */}
         <div className="flex-1 flex items-center justify-center relative">
            {/* Mock Car Silhouette */}
            <div className="absolute w-3/4 h-1/2 opacity-20 border-b-2 border-primary rounded-[100%] shadow-[0_10px_30px_rgba(var(--color-primary),0.3)]"></div>
            
            {/* Core KPI */}
            <div className="text-center">
               <div className={clsx("text-3xl tracking-tighter mb-1", typoClass.headingClass, colorClass.primary)}>342<span className="text-lg opacity-50">mi</span></div>
               <div className="flex items-center justify-center gap-1 text-[5px] text-emerald-500 uppercase tracking-widest font-bold">
                  <BatteryCharging className="w-2.5 h-2.5" /> 84% Remaining
               </div>
            </div>
         </div>

         {/* Bottom Action Cards */}
         <div className="h-14 grid grid-cols-4 gap-2">
            
            <div className="col-span-1 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-md flex flex-col items-center justify-center gap-1 hover:bg-white/10 transition-colors">
               <Wind className="w-4 h-4 opacity-70" />
               <span className="opacity-50 tracking-widest uppercase">Climate</span>
            </div>

            <div className="col-span-2 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-md p-2 flex items-center justify-between">
               <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/10 rounded overflow-hidden flex items-center justify-center">
                    <Music className="w-4 h-4 opacity-50" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                     <span className="font-bold opacity-90 text-[7px]">Midnight City</span>
                     <span className="opacity-50 text-[5px]">M83</span>
                  </div>
               </div>
               <div className="flex gap-1.5 opacity-70">
                  <div className="w-1.5 h-1.5 rounded-full bg-current" />
                  <div className="w-1.5 h-1.5 rounded-full bg-current" />
                  <div className="w-1.5 h-1.5 rounded-full bg-current" />
               </div>
            </div>

            <div className="col-span-1 rounded-xl bg-primary/20 border border-primary/30 text-primary backdrop-blur-md flex flex-col items-center justify-center gap-1 shadow-[0_0_15px_rgba(var(--color-primary),0.2)]">
               <Zap className="w-4 h-4" />
               <span className="tracking-widest uppercase font-bold">Charge</span>
            </div>

         </div>

      </div>
    </div>
  );
}
