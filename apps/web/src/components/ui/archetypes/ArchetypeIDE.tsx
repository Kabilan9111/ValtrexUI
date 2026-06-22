import React from "react";
import clsx from "clsx";
import { Folder, File, ChevronRight, Terminal, Search, Settings, Sparkles, Play } from "lucide-react";
import { DNAThemeConfig } from "@/themes/dna/types";
import { CARD_DNA_TOKENS, COLOR_DNA_TOKENS, TYPOGRAPHY_DNA_TOKENS } from "@/themes/dna/tokens";

interface Props {
  theme: DNAThemeConfig;
}

export function ArchetypeIDE({ theme }: Props) {
  const colorClass = COLOR_DNA_TOKENS[theme.dna.color] || COLOR_DNA_TOKENS['cyberpunk'];
  const typoClass = TYPOGRAPHY_DNA_TOKENS[theme.dna.typography] || TYPOGRAPHY_DNA_TOKENS['futuristic'];

  return (
    <div className={clsx("w-full h-full flex flex-col pointer-events-none select-none text-[5px]", colorClass.background, typoClass.fontFamily, colorClass.text)}>
      
      {/* Top Title Bar */}
      <div className={clsx("h-5 w-full flex items-center justify-center border-b relative", colorClass.border)}>
         <div className="absolute left-2 flex gap-1 opacity-50">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
         </div>
         <span className="opacity-70 font-bold tracking-wide text-[4px]">workspace - page.tsx</span>
         <div className="absolute right-2 flex items-center gap-1.5 opacity-60">
            <Play className="w-2.5 h-2.5" />
            <Settings className="w-2.5 h-2.5" />
         </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
         {/* Activity Bar */}
         <div className={clsx("w-8 h-full flex flex-col items-center py-2 gap-3 border-r bg-black/10 dark:bg-white/[0.02]", colorClass.border)}>
            <Folder className="w-3.5 h-3.5 text-primary" />
            <Search className="w-3.5 h-3.5 opacity-50" />
            <Sparkles className="w-3.5 h-3.5 opacity-50" />
            <Settings className="w-3.5 h-3.5 opacity-50 mt-auto" />
         </div>

         {/* File Explorer */}
         <div className={clsx("w-24 h-full border-r bg-black/5 dark:bg-white/[0.01]", colorClass.border)}>
            <div className="h-5 flex items-center px-1.5 text-[4px] font-bold opacity-60 uppercase tracking-widest">Explorer</div>
            <div className="px-1 py-0.5 flex flex-col gap-0.5">
               <div className="flex items-center gap-0.5 px-0.5 py-0.5 hover:bg-white/5 rounded">
                 <ChevronRight className="w-2 h-2 opacity-70" />
                 <Folder className="w-2 h-2 text-blue-400" />
                 <span>src</span>
               </div>
               <div className="flex flex-col ml-3">
                  <div className="flex items-center gap-0.5 px-0.5 py-0.5 hover:bg-white/5 rounded">
                     <ChevronRight className="w-2 h-2 opacity-70" />
                     <Folder className="w-2 h-2 text-blue-400" />
                     <span>components</span>
                  </div>
                  <div className="flex flex-col ml-3">
                     <div className="flex items-center gap-0.5 px-0.5 py-0.5 bg-primary/20 text-primary rounded">
                        <File className="w-2 h-2" />
                        <span>Button.tsx</span>
                     </div>
                     <div className="flex items-center gap-0.5 px-0.5 py-0.5 hover:bg-white/5 rounded opacity-70">
                        <File className="w-2 h-2 text-yellow-400" />
                        <span>types.ts</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Editor & Terminal */}
         <div className="flex-1 flex flex-col">
            {/* Editor Tabs */}
            <div className={clsx("h-5 flex border-b bg-black/10 dark:bg-white/[0.02]", colorClass.border)}>
               <div className={clsx("px-2 h-full flex items-center gap-1 border-r border-t-2 border-t-primary bg-background", colorClass.border)}>
                 <File className="w-2 h-2 text-blue-400" />
                 <span className="text-primary font-bold">Button.tsx</span>
               </div>
               <div className={clsx("px-2 h-full flex items-center gap-1 border-r opacity-50", colorClass.border)}>
                 <File className="w-2 h-2 text-yellow-400" />
                 <span>types.ts</span>
               </div>
            </div>
            {/* Code Area */}
            <div className="flex-1 p-2 font-mono text-[5px] leading-relaxed relative">
               <div className="text-purple-400">import <span className="text-blue-300">React</span> from <span className="text-emerald-400">'react'</span>;</div>
               <div className="text-purple-400 mt-1">export function <span className="text-yellow-300">Button</span>() {'{'}</div>
               <div className="ml-4 mt-0.5 text-purple-400">return (</div>
               <div className="ml-8 text-blue-400">{'<button'} <span className="text-emerald-400">className</span>=<span className="text-orange-300">"bg-primary"</span>{'>'}</div>
               <div className="ml-12 text-white">Click Me</div>
               <div className="ml-8 text-blue-400">{'</button>'}</div>
               <div className="ml-4 text-purple-400">);</div>
               <div>{'}'}</div>

               {/* AI Sparkle floating action */}
               <div className="absolute bottom-2 right-2 flex items-center gap-1 px-1.5 py-1 rounded bg-primary/20 text-primary border border-primary/30 shadow-lg">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span className="font-bold text-[4px]">AI Edit</span>
               </div>
            </div>

            {/* Terminal Area */}
            <div className={clsx("h-16 border-t flex flex-col", colorClass.border)}>
               <div className={clsx("h-5 flex items-center px-2 gap-3 text-[4px] opacity-70 uppercase tracking-widest border-b", colorClass.border)}>
                  <span>Problems</span>
                  <span>Output</span>
                  <span className="text-primary font-bold opacity-100 border-b border-primary h-full flex items-center">Terminal</span>
               </div>
               <div className="flex-1 p-1 font-mono opacity-80">
                  <div className="flex items-center gap-1">
                     <span className="text-emerald-500">➜</span>
                     <span className="text-blue-400">valtrex-ui</span>
                     <span>npm run dev</span>
                  </div>
                  <div className="mt-0.5">ready - started server on 0.0.0.0:3000, url: http://localhost:3000</div>
                  <div className="mt-0.5 text-emerald-400">event - compiled client and server successfully in 1240 ms</div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
