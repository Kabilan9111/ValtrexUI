import React from "react";
import clsx from "clsx";
import { Hash, Volume2, Mic, Headphones, Settings, Smile, PlusCircle, Gamepad2 } from "lucide-react";
import { DNAThemeConfig } from "@/themes/dna/types";
import { CARD_DNA_TOKENS, COLOR_DNA_TOKENS, TYPOGRAPHY_DNA_TOKENS } from "@/themes/dna/tokens";

interface Props {
  theme: DNAThemeConfig;
}

export function ArchetypeChat({ theme }: Props) {
  const colorClass = COLOR_DNA_TOKENS[theme.dna.color] || COLOR_DNA_TOKENS['neon-purple'];
  const cardClass = CARD_DNA_TOKENS[theme.dna.card] || CARD_DNA_TOKENS['neon'];
  const typoClass = TYPOGRAPHY_DNA_TOKENS[theme.dna.typography] || TYPOGRAPHY_DNA_TOKENS['futuristic'];

  return (
    <div className={clsx("w-full h-full flex pointer-events-none select-none text-[6px]", colorClass.background, typoClass.fontFamily, colorClass.text)}>
      {/* Server Sidebar (Thin) */}
      <div className={clsx("w-10 h-full flex flex-col items-center gap-2 py-2 border-r", colorClass.border, colorClass.card)}>
         <div className="w-6 h-6 rounded-2xl bg-primary flex items-center justify-center text-white shadow-[0_0_10px_rgba(var(--color-primary),0.5)]">
            <Gamepad2 className="w-3 h-3" />
         </div>
         <div className="w-4 h-[2px] bg-white/10 rounded-full" />
         {[...Array(4)].map((_, i) => (
           <div key={i} className="relative group">
              {i === 0 && <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-3 bg-white rounded-r-full" />}
              <div className={clsx("w-6 h-6 rounded-2xl bg-white/5 flex items-center justify-center transition-all", i === 0 ? "rounded-xl" : "rounded-3xl hover:rounded-xl")}>
                <span className="opacity-50">S{i}</span>
              </div>
           </div>
         ))}
      </div>

      {/* Channel Sidebar */}
      <div className={clsx("w-20 h-full flex flex-col border-r", colorClass.border, "bg-white/[0.02]")}>
         <div className="h-6 flex items-center px-2 font-bold shadow-sm">
            Server Name
         </div>
         <div className="flex-1 p-1 space-y-2 overflow-hidden">
            <div>
               <div className="text-[5px] font-bold uppercase opacity-50 px-1 mb-0.5">Text Channels</div>
               <div className="flex items-center gap-1 px-1 py-0.5 bg-white/10 rounded">
                 <Hash className="w-2 h-2 opacity-50" /> general
               </div>
               <div className="flex items-center gap-1 px-1 py-0.5 opacity-70">
                 <Hash className="w-2 h-2 opacity-50" /> memes
               </div>
            </div>
            <div>
               <div className="text-[5px] font-bold uppercase opacity-50 px-1 mb-0.5">Voice Channels</div>
               <div className="flex items-center gap-1 px-1 py-0.5 opacity-70">
                 <Volume2 className="w-2 h-2 opacity-50" /> Lounge
               </div>
               <div className="flex items-center gap-1 px-1 py-0.5 opacity-70">
                 <Volume2 className="w-2 h-2 opacity-50" /> Gaming
               </div>
            </div>
         </div>
         {/* User Controls */}
         <div className={clsx("h-8 border-t flex items-center px-1.5 justify-between bg-black/20", colorClass.border)}>
            <div className="flex items-center gap-1">
               <div className="w-4 h-4 rounded-full bg-primary relative">
                  <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-emerald-500 rounded-full border border-black"></div>
               </div>
               <div className="flex flex-col">
                  <span className="font-bold text-[5px]">User</span>
                  <span className="text-[4px] opacity-50">#1234</span>
               </div>
            </div>
            <div className="flex gap-0.5 opacity-70">
               <Mic className="w-2.5 h-2.5" />
               <Headphones className="w-2.5 h-2.5" />
               <Settings className="w-2.5 h-2.5" />
            </div>
         </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
         {/* Chat Header */}
         <div className={clsx("h-6 border-b flex items-center px-2 shadow-sm", colorClass.border)}>
            <div className="flex items-center gap-1 font-bold">
               <Hash className="w-3 h-3 opacity-50" /> general
            </div>
         </div>
         {/* Chat History */}
         <div className="flex-1 p-2 flex flex-col gap-2 justify-end">
            <div className="flex gap-1.5">
               <div className="w-5 h-5 rounded-full bg-emerald-500/20 shrink-0" />
               <div>
                  <div className="flex items-baseline gap-1">
                     <span className="font-bold text-emerald-500">PlayerOne</span>
                     <span className="text-[4px] opacity-50">Today at 10:42 AM</span>
                  </div>
                  <span className="opacity-90">Anyone up for a raid?</span>
               </div>
            </div>
            <div className="flex gap-1.5">
               <div className="w-5 h-5 rounded-full bg-primary/20 shrink-0" />
               <div>
                  <div className="flex items-baseline gap-1">
                     <span className="font-bold text-primary">User</span>
                     <span className="text-[4px] opacity-50">Today at 10:43 AM</span>
                  </div>
                  <span className="opacity-90">Give me 5 mins to log in!</span>
               </div>
            </div>
         </div>
         {/* Chat Input */}
         <div className="p-2 pt-0">
            <div className={clsx("h-6 rounded-lg bg-white/5 flex items-center px-2 gap-1.5", colorClass.border)}>
               <PlusCircle className="w-3 h-3 opacity-50" />
               <span className="flex-1 opacity-40">Message #general</span>
               <Smile className="w-3 h-3 opacity-50" />
            </div>
         </div>
      </div>
    </div>
  );
}
