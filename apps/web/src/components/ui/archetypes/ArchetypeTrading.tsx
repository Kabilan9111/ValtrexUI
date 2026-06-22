import React from "react";
import clsx from "clsx";
import { BarChart2, Maximize, Settings, Plus, Play, Pause } from "lucide-react";
import { DNAThemeConfig } from "@/themes/dna/types";
import { CARD_DNA_TOKENS, COLOR_DNA_TOKENS, TYPOGRAPHY_DNA_TOKENS } from "@/themes/dna/tokens";

interface Props {
  theme: DNAThemeConfig;
}

export function ArchetypeTrading({ theme }: Props) {
  const colorClass = COLOR_DNA_TOKENS[theme.dna.color] || COLOR_DNA_TOKENS['enterprise-blue'];
  const cardClass = CARD_DNA_TOKENS[theme.dna.card] || CARD_DNA_TOKENS['flat'];
  const typoClass = TYPOGRAPHY_DNA_TOKENS[theme.dna.typography] || TYPOGRAPHY_DNA_TOKENS['corporate'];

  return (
    <div className={clsx("w-full h-full flex flex-col pointer-events-none select-none text-[5px] uppercase font-bold", colorClass.background, typoClass.fontFamily, colorClass.text)}>
      {/* Top Toolbar */}
      <div className={clsx("h-5 border-b flex items-center justify-between px-1", colorClass.border, colorClass.card)}>
         <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
               <span className="text-[6px] tracking-widest text-primary">BTCUSDT</span>
               <span className="opacity-50">1D</span>
               <span className="opacity-50">BINANCE</span>
            </div>
            <div className="w-px h-3 bg-white/10 mx-1"></div>
            <div className="flex gap-1 text-emerald-500">
               <span>O 64201.2</span>
               <span>H 65120.0</span>
               <span>L 63900.5</span>
               <span>C 64850.1</span>
               <span>+1.02%</span>
            </div>
         </div>
         <div className="flex items-center gap-1 opacity-70">
            <BarChart2 className="w-2.5 h-2.5" />
            <Settings className="w-2.5 h-2.5" />
            <Maximize className="w-2.5 h-2.5" />
         </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
         {/* Left Drawing Tools */}
         <div className={clsx("w-6 h-full border-r flex flex-col items-center py-1 gap-1.5 opacity-50", colorClass.border, colorClass.card)}>
            <div className="w-3 h-px bg-current my-0.5" />
            <div className="w-3 h-3 border border-current rounded-full" />
            <div className="w-3 h-3 border-t border-r border-current" />
            <div className="w-3 h-3 bg-current opacity-20" />
            <Plus className="w-3 h-3 mt-auto" />
         </div>

         {/* Main Chart Area */}
         <div className="flex-1 flex flex-col relative bg-black/5 dark:bg-white/5">
            {/* Chart Canvas */}
            <div className="flex-1 relative overflow-hidden flex items-end px-4 gap-1">
               {/* Background Grid */}
               <div className="absolute inset-0 pointer-events-none opacity-5">
                  {[...Array(6)].map((_, i) => <div key={`h${i}`} className="w-full border-b border-current absolute" style={{top: `${i*20}%`}} />)}
                  {[...Array(10)].map((_, i) => <div key={`v${i}`} className="h-full border-r border-current absolute" style={{left: `${i*10}%`}} />)}
               </div>

               {/* Candlesticks & Volume */}
               {[...Array(20)].map((_, i) => {
                  const isUp = Math.sin(i) > 0;
                  const height = 20 + Math.abs(Math.sin(i*0.5) * 60);
                  const vol = 10 + Math.random() * 20;
                  return (
                    <div key={i} className="flex-1 flex flex-col justify-end items-center h-full relative">
                       {/* Candle */}
                       <div className="absolute w-full flex justify-center items-center" style={{ bottom: `${height}%`, height: `${Math.random()*10 + 5}%` }}>
                          <div className={clsx("w-px h-[150%] absolute", isUp ? "bg-emerald-500" : "bg-rose-500")} />
                          <div className={clsx("w-[80%] h-full z-10", isUp ? "bg-emerald-500" : "bg-rose-500")} />
                       </div>
                       {/* Volume Bar */}
                       <div className={clsx("w-[80%] opacity-30 mt-auto", isUp ? "bg-emerald-500" : "bg-rose-500")} style={{ height: `${vol}%` }} />
                    </div>
                  )
               })}
            </div>

            {/* Price Scale Right */}
            <div className={clsx("absolute right-0 top-0 bottom-6 w-10 border-l bg-background/80 flex flex-col justify-between py-4 items-center text-[4px] opacity-50", colorClass.border)}>
               <span>70000</span>
               <span>68000</span>
               <span className="bg-primary/20 text-primary px-1 rounded border border-primary/50 w-full text-center">64850.1</span>
               <span>60000</span>
               <span>58000</span>
            </div>

            {/* Time Scale Bottom */}
            <div className={clsx("h-6 border-t flex justify-between px-10 items-center opacity-50", colorClass.border)}>
               <span>12:00</span>
               <span>16:00</span>
               <span>20:00</span>
               <span>00:00</span>
               <span>04:00</span>
            </div>
         </div>

         {/* Right Watchlist Panel */}
         <div className={clsx("w-24 h-full border-l flex flex-col", colorClass.border, colorClass.card)}>
            <div className={clsx("h-6 border-b flex items-center justify-center gap-2", colorClass.border)}>
               <span className="text-primary">Watchlist</span>
               <span className="opacity-50">Details</span>
               <span className="opacity-50">Alerts</span>
            </div>
            <div className="flex-1 p-1 flex flex-col gap-0.5 overflow-hidden">
               <div className="flex justify-between opacity-50 text-[4px] mb-1">
                 <span>Symbol</span>
                 <span>Last</span>
                 <span>Chg%</span>
               </div>
               {[
                 { sym: 'AAPL', p: '173.50', c: '+1.2', up: true },
                 { sym: 'TSLA', p: '185.20', c: '-0.8', up: false },
                 { sym: 'NVDA', p: '870.10', c: '+2.4', up: true },
                 { sym: 'MSFT', p: '420.55', c: '+0.5', up: true },
                 { sym: 'META', p: '480.00', c: '-1.1', up: false },
               ].map((t, i) => (
                 <div key={i} className="flex justify-between items-center py-0.5">
                    <span className="font-bold">{t.sym}</span>
                    <span>{t.p}</span>
                    <span className={clsx("w-6 text-right", t.up ? "text-emerald-500" : "text-rose-500")}>{t.c}</span>
                 </div>
               ))}
               <div className={clsx("mt-auto p-1.5 border rounded flex flex-col gap-1 items-center", colorClass.border)}>
                  <div className="text-[4px] opacity-50">Market Status</div>
                  <div className="flex items-center gap-1 text-emerald-500"><Play className="w-2 h-2" /> Open</div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
