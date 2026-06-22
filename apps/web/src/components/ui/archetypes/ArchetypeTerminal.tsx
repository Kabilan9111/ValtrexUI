import React from "react";
import clsx from "clsx";
import { LineChart, Activity, DollarSign, TrendingUp, TrendingDown, AlignLeft } from "lucide-react";
import { DNAThemeConfig } from "@/themes/dna/types";
import { CARD_DNA_TOKENS, COLOR_DNA_TOKENS, TYPOGRAPHY_DNA_TOKENS } from "@/themes/dna/tokens";

interface Props {
  theme: DNAThemeConfig;
}

export function ArchetypeTerminal({ theme }: Props) {
  const colorClass = COLOR_DNA_TOKENS[theme.dna.color] || COLOR_DNA_TOKENS['cyberpunk'];
  const cardClass = CARD_DNA_TOKENS[theme.dna.card] || CARD_DNA_TOKENS['flat'];
  const typoClass = TYPOGRAPHY_DNA_TOKENS[theme.dna.typography] || TYPOGRAPHY_DNA_TOKENS['futuristic'];

  return (
    <div className={clsx("w-full h-full p-1 flex flex-col gap-1 pointer-events-none select-none text-[5px] uppercase", colorClass.background, typoClass.fontFamily, colorClass.text)}>
      {/* Top Header */}
      <div className={clsx("h-4 flex justify-between items-center px-1 border-b", colorClass.border)}>
        <div className="flex gap-2 font-bold tracking-widest text-primary text-[6px]">
          <span>PRMD</span>
          <span className="text-emerald-500">SYS_OK</span>
        </div>
        <div className="flex gap-2">
           <span>VOL: 23.4M</span>
           <span>RNG: 104.2</span>
           <span>09:41:22 EST</span>
        </div>
      </div>

      <div className="flex-1 flex gap-1">
        {/* Left Ticker Panel */}
        <div className={clsx("w-16 border flex flex-col p-1 gap-1", colorClass.border, colorClass.card)}>
           <div className={clsx("font-bold border-b pb-0.5", colorClass.border)}>WATCHLIST</div>
           {[...Array(8)].map((_, i) => (
             <div key={i} className="flex justify-between items-center py-0.5 border-b border-white/5">
                <span className="font-bold opacity-80">SYM{i}</span>
                <span className={i % 2 === 0 ? "text-emerald-500" : "text-rose-500"}>{i % 2 === 0 ? "+1.2%" : "-0.4%"}</span>
             </div>
           ))}
        </div>

        {/* Center Main Panels */}
        <div className="flex-1 flex flex-col gap-1">
           {/* Chart Area */}
           <div className={clsx("flex-1 border p-1 relative flex flex-col", colorClass.border, colorClass.card)}>
              <div className="flex justify-between mb-1 opacity-70 font-bold">
                 <span>MAIN CHART / 1D</span>
                 <div className="flex gap-1">
                   <span className="bg-primary/20 text-primary px-0.5 rounded">IND</span>
                   <span className="bg-primary/20 text-primary px-0.5 rounded">CMP</span>
                 </div>
              </div>
              <div className="flex-1 flex items-end gap-0.5 mt-2 relative">
                 {/* Grid lines */}
                 <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
                    <div className="border-t border-white/50 w-full" />
                    <div className="border-t border-white/50 w-full" />
                    <div className="border-t border-white/50 w-full" />
                    <div className="border-t border-white/50 w-full" />
                 </div>
                 {/* Candlesticks */}
                 {[...Array(14)].map((_, i) => {
                    const isUp = i % 3 !== 0;
                    const height = 30 + Math.random() * 40;
                    return (
                      <div key={i} className="flex-1 flex justify-center items-end h-full relative">
                         <div className={clsx("w-[1px] absolute top-[20%] bottom-[10%]", isUp ? "bg-emerald-500" : "bg-rose-500")} />
                         <div className={clsx("w-[80%] z-10", isUp ? "bg-emerald-500" : "bg-rose-500")} style={{ height: `${height}%`, marginBottom: `${Math.random()*20}%` }} />
                      </div>
                    )
                 })}
              </div>
           </div>

           {/* Bottom Data Grid */}
           <div className="h-1/3 flex gap-1">
              <div className={clsx("flex-1 border p-1", colorClass.border, colorClass.card)}>
                 <div className={clsx("font-bold border-b pb-0.5 mb-0.5", colorClass.border)}>ORDER BOOK</div>
                 <div className="grid grid-cols-2 gap-1">
                    <div className="flex flex-col gap-0.5 text-emerald-500 opacity-80">
                       <div className="flex justify-between"><span>104.22</span><span>400</span></div>
                       <div className="flex justify-between"><span>104.21</span><span>1K</span></div>
                       <div className="flex justify-between"><span>104.20</span><span>8K</span></div>
                    </div>
                    <div className="flex flex-col gap-0.5 text-rose-500 opacity-80">
                       <div className="flex justify-between"><span>104.24</span><span>200</span></div>
                       <div className="flex justify-between"><span>104.25</span><span>3K</span></div>
                       <div className="flex justify-between"><span>104.27</span><span>5K</span></div>
                    </div>
                 </div>
              </div>
              <div className={clsx("w-1/3 border p-1", colorClass.border, colorClass.card)}>
                 <div className={clsx("font-bold border-b pb-0.5 mb-0.5", colorClass.border)}>EXECUTION</div>
                 <div className="bg-emerald-500/20 text-emerald-500 border border-emerald-500/50 rounded py-1 text-center font-bold mb-0.5">BUY LMT</div>
                 <div className="bg-rose-500/20 text-rose-500 border border-rose-500/50 rounded py-1 text-center font-bold">SELL MKT</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
