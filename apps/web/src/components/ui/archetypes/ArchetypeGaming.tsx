import React from "react";
import clsx from "clsx";
import { Gamepad2, Trophy, Swords, User, Users, Crosshair, Star, Shield, PlayCircle } from "lucide-react";
import { DNAThemeConfig } from "@/themes/dna/types";
import { CARD_DNA_TOKENS, COLOR_DNA_TOKENS, TYPOGRAPHY_DNA_TOKENS } from "@/themes/dna/tokens";

interface Props {
  theme: DNAThemeConfig;
}

export function ArchetypeGaming({ theme }: Props) {
  const colorClass = COLOR_DNA_TOKENS[theme.dna.color] || COLOR_DNA_TOKENS['neon-purple'];
  const typoClass = TYPOGRAPHY_DNA_TOKENS[theme.dna.typography] || TYPOGRAPHY_DNA_TOKENS['futuristic'];

  return (
    <div className={clsx("w-full h-full flex flex-col pointer-events-none select-none text-[5px] bg-[#09090b] text-white overflow-hidden relative", typoClass.fontFamily)}>
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[40px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-[40px] pointer-events-none"></div>

      {/* Top Navigation */}
      <div className="h-7 border-b border-white/10 flex items-center justify-between px-3 z-10 bg-black/40 backdrop-blur-md">
         <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 font-bold tracking-widest text-[6px]">
               <Gamepad2 className="w-4 h-4 text-primary" />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-fuchsia-500 drop-shadow-[0_0_5px_rgba(var(--color-primary),0.8)]">NEXUS</span>
            </div>
            <div className="flex gap-2 text-white/60 font-bold tracking-widest uppercase text-[4px]">
               <span className="text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Play</span>
               <span>Armory</span>
               <span>Store</span>
               <span>Social</span>
            </div>
         </div>
         <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-white/10 px-1.5 py-0.5 rounded border border-white/20">
               <Trophy className="w-2.5 h-2.5 text-amber-400" />
               <span className="font-bold text-amber-400 text-[4px]">14.2K</span>
            </div>
            <div className="w-5 h-5 rounded border-2 border-primary overflow-hidden flex items-center justify-center bg-zinc-800 relative group">
               {/* Mock Avatar */}
               <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white/20"></div>
               <div className="w-2.5 h-2.5 bg-white/80 rounded-full mb-1"></div>
            </div>
         </div>
      </div>

      <div className="flex-1 flex p-2 gap-2 z-10 overflow-hidden">
         {/* Center Large Feature */}
         <div className="flex-[2] flex flex-col gap-2 relative">
            <div className="flex-1 rounded-xl border border-white/10 bg-black/40 overflow-hidden relative flex flex-col justify-end p-3 group">
               {/* Hero Image Mock */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/50 to-transparent z-10"></div>
               <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, var(--color-primary) 0%, transparent 70%)' }}></div>
               
               <div className="z-20">
                  <div className="flex items-center gap-1 mb-1">
                     <span className="px-1.5 py-0.5 bg-rose-500/20 text-rose-500 border border-rose-500/50 rounded font-bold uppercase tracking-widest text-[3px]">Live Event</span>
                     <span className="px-1.5 py-0.5 bg-white/10 rounded font-bold uppercase tracking-widest text-[3px]">Ranked Season 4</span>
                  </div>
                  <h1 className={clsx("text-[14px] font-black italic tracking-tighter uppercase mb-0.5 text-white drop-shadow-md", typoClass.headingClass)}>Operation Zero</h1>
                  <p className="text-[5px] text-white/60 mb-2 max-w-[80%]">Join the battle in the new arctic map. Exclusive rewards await the top 500 players.</p>
                  
                  <div className="flex gap-2">
                     <button className="px-4 py-1.5 bg-primary hover:bg-primary/80 text-white font-bold uppercase tracking-widest text-[4px] rounded flex items-center gap-1 shadow-[0_0_15px_rgba(var(--color-primary),0.5)] transition-all">
                        <PlayCircle className="w-3 h-3" /> Play Now
                     </button>
                     <button className="px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-widest text-[4px] rounded border border-white/20 transition-all">
                        Details
                     </button>
                  </div>
               </div>
            </div>

            {/* Mode Selection */}
            <div className="h-14 grid grid-cols-3 gap-2">
               {[
                 { t: 'Ranked', i: <Swords className="w-3 h-3 text-rose-400" />, d: 'Competitive 5v5' },
                 { t: 'Unrated', i: <Users className="w-3 h-3 text-blue-400" />, d: 'Casual Play' },
                 { t: 'Deathmatch', i: <Crosshair className="w-3 h-3 text-amber-400" />, d: 'Warmup Mode' },
               ].map((m, i) => (
                 <div key={i} className="rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 p-1.5 flex flex-col justify-center items-center text-center transition-all cursor-pointer">
                    {m.i}
                    <span className="font-bold uppercase tracking-widest text-[4px] mt-0.5">{m.t}</span>
                    <span className="text-[3px] text-white/50 uppercase">{m.d}</span>
                 </div>
               ))}
            </div>
         </div>

         {/* Right Sidebar - Friends & Stats */}
         <div className="flex-1 flex flex-col gap-2">
            
            {/* Player Stats Mini */}
            <div className="rounded-xl bg-white/5 border border-white/10 p-2 relative overflow-hidden">
               <div className="absolute right-0 top-0 w-16 h-16 bg-primary/20 blur-xl"></div>
               <div className="flex justify-between items-start relative z-10">
                  <div>
                     <div className="text-[3px] uppercase tracking-widest text-white/50 mb-0.5">Current Rank</div>
                     <div className="font-black text-primary text-[8px] uppercase tracking-wider flex items-center gap-1">
                        <Shield className="w-3 h-3 fill-current" /> Diamond II
                     </div>
                  </div>
                  <div className="text-right">
                     <div className="text-[3px] uppercase tracking-widest text-white/50 mb-0.5">Win Rate</div>
                     <div className="font-black text-emerald-400 text-[6px]">54.2%</div>
                  </div>
               </div>
               <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden relative z-10">
                  <div className="h-full bg-gradient-to-r from-primary to-fuchsia-500 w-[70%]"></div>
               </div>
               <div className="text-center text-[3px] text-white/50 mt-1 relative z-10">70 RR to Next Rank</div>
            </div>

            {/* Friends List */}
            <div className="flex-1 rounded-xl bg-white/5 border border-white/10 flex flex-col overflow-hidden">
               <div className="p-2 border-b border-white/10 flex justify-between items-center bg-black/20">
                  <span className="font-bold uppercase tracking-widest text-[4px] text-white/80">Social</span>
                  <span className="text-[3px] bg-white/10 px-1 rounded text-white/60">3 Online</span>
               </div>
               <div className="flex-1 p-1 flex flex-col gap-0.5 overflow-y-auto">
                  {[
                    { n: 'ViperX', s: 'In Game - Ranked', c: 'emerald' },
                    { n: 'GhostRider', s: 'Online', c: 'blue' },
                    { n: 'ShadowNinja', s: 'Away', c: 'amber' },
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-1.5 p-1 rounded hover:bg-white/5 cursor-pointer">
                       <div className="relative">
                          <div className="w-5 h-5 bg-white/10 rounded flex items-center justify-center">
                             <User className="w-3 h-3 text-white/50" />
                          </div>
                          <div className={clsx("absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 rounded-full border border-[#09090b]", `bg-${f.c}-500`)}></div>
                       </div>
                       <div className="flex flex-col">
                          <span className="font-bold text-[5px]">{f.n}</span>
                          <span className={clsx("text-[3px]", f.c === 'emerald' ? "text-emerald-400" : "text-white/50")}>{f.s}</span>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

         </div>
      </div>
    </div>
  );
}
