import React from "react";
import clsx from "clsx";
import { Users, FileText, ChevronRight, MoreHorizontal, Plus, Search, Settings, Clock, Inbox, Hash, Grid } from "lucide-react";
import { DNAThemeConfig } from "@/themes/dna/types";
import { CARD_DNA_TOKENS, COLOR_DNA_TOKENS, TYPOGRAPHY_DNA_TOKENS } from "@/themes/dna/tokens";

interface Props {
  theme: DNAThemeConfig;
}

export function ArchetypeDocument({ theme }: Props) {
  const colorClass = COLOR_DNA_TOKENS[theme.dna.color] || COLOR_DNA_TOKENS['minimal-white'];
  const typoClass = TYPOGRAPHY_DNA_TOKENS[theme.dna.typography] || TYPOGRAPHY_DNA_TOKENS['startup'];

  return (
    <div className={clsx("w-full h-full flex pointer-events-none select-none text-[6px]", colorClass.background, typoClass.fontFamily, colorClass.text)}>
      {/* Sidebar */}
      <div className={clsx("w-32 h-full flex flex-col border-r bg-black/[0.02] dark:bg-white/[0.02]", colorClass.border)}>
        
        {/* Workspace Switcher */}
        <div className="h-6 flex items-center px-2 gap-1.5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer">
           <div className="w-3 h-3 rounded bg-primary/20 flex items-center justify-center text-[5px] font-bold">A</div>
           <span className="font-bold flex-1 truncate">Acme Corp</span>
           <div className="flex flex-col gap-[1px]">
              <div className="w-1.5 h-[1px] bg-current opacity-50" />
              <div className="w-1.5 h-[1px] bg-current opacity-50" />
           </div>
        </div>

        <div className="flex-1 overflow-hidden py-1 space-y-3">
           {/* Top Actions */}
           <div className="space-y-0.5 px-1">
              <div className="flex items-center gap-1.5 px-1 py-0.5 hover:bg-black/5 dark:hover:bg-white/5 rounded">
                 <Search className="w-2.5 h-2.5 opacity-50" /> Search
              </div>
              <div className="flex items-center gap-1.5 px-1 py-0.5 hover:bg-black/5 dark:hover:bg-white/5 rounded">
                 <Clock className="w-2.5 h-2.5 opacity-50" /> Updates
              </div>
              <div className="flex items-center gap-1.5 px-1 py-0.5 hover:bg-black/5 dark:hover:bg-white/5 rounded">
                 <Settings className="w-2.5 h-2.5 opacity-50" /> Settings & Members
              </div>
           </div>

           {/* Favorites */}
           <div>
              <div className="px-2 text-[5px] font-bold opacity-50 mb-0.5">Favorites</div>
              <div className="flex items-center gap-1 px-1 py-0.5 bg-black/5 dark:bg-white/5 rounded mx-1">
                 <FileText className="w-2.5 h-2.5 opacity-50" /> Product Roadmap
              </div>
           </div>

           {/* Private */}
           <div>
              <div className="px-2 text-[5px] font-bold opacity-50 mb-0.5">Private</div>
              {['Engineering', 'Design System', 'Meeting Notes'].map((item, i) => (
                 <div key={i} className="flex items-center gap-1 px-1 py-0.5 hover:bg-black/5 dark:hover:bg-white/5 rounded mx-1">
                   <ChevronRight className="w-2 h-2 opacity-50" />
                   <FileText className="w-2.5 h-2.5 opacity-50" /> {item}
                 </div>
              ))}
           </div>
        </div>
      </div>

      {/* Editor Content Area */}
      <div className="flex-1 flex flex-col relative overflow-hidden bg-white dark:bg-zinc-950">
         {/* Top Bar */}
         <div className="h-6 flex items-center justify-between px-2 shrink-0">
            <div className="flex items-center gap-1 opacity-60 text-[5px]">
               <span>Acme Corp</span> <span className="opacity-50">/</span> <span>Product Roadmap</span>
            </div>
            <div className="flex items-center gap-1">
               <span className="opacity-50 text-[5px]">Edited just now</span>
               <MoreHorizontal className="w-3 h-3 opacity-50" />
            </div>
         </div>

         {/* Document Scroll Area */}
         <div className="flex-1 px-6 py-4 flex flex-col items-center">
            <div className="w-full max-w-sm space-y-3">
               
               {/* Title & Cover */}
               <div className="w-full h-12 rounded-lg bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 mb-8 relative">
                  <div className="absolute -bottom-4 left-4 text-2xl">🚀</div>
               </div>

               <h1 className={clsx("text-xl font-bold tracking-tight", typoClass.headingClass)}>Product Roadmap</h1>
               
               <div className="flex items-center gap-2 text-[5px] opacity-60 border-b border-black/5 dark:border-white/5 pb-2">
                  <div className="flex items-center gap-1"><Users className="w-2 h-2" /> 5 Assignees</div>
                  <div className="flex items-center gap-1"><Clock className="w-2 h-2" /> Q3 2026</div>
               </div>

               {/* Blocks */}
               <div className="space-y-1.5 opacity-80 pt-2">
                  <div className="flex gap-1 group">
                     <div className="w-2 opacity-0 group-hover:opacity-100 flex items-center justify-center shrink-0"><Plus className="w-2 h-2" /></div>
                     <p className="leading-relaxed">Welcome to the Q3 planning document. Below is the high-level overview of our upcoming features.</p>
                  </div>
                  
                  <div className="flex gap-1 group mt-2">
                     <div className="w-2 opacity-0 group-hover:opacity-100 flex items-center justify-center shrink-0"><Plus className="w-2 h-2" /></div>
                     <div className="flex-1">
                        <h3 className={clsx("text-lg font-bold mt-2 mb-1", typoClass.headingClass)}>Epic 1: Design System Overhaul</h3>
                        <div className="flex items-center gap-1.5 border border-black/10 dark:border-white/10 rounded p-1.5">
                           <Grid className="w-3 h-3 text-primary" />
                           <div className="flex-1">
                              <div className="font-bold">Component Library</div>
                              <div className="text-[4px] opacity-60">Status: In Progress</div>
                           </div>
                           <div className="w-8 h-1 rounded-full bg-black/5 dark:bg-white/5"><div className="w-1/2 h-full rounded-full bg-primary" /></div>
                        </div>
                     </div>
                  </div>

                  <div className="flex gap-1 group mt-2">
                     <div className="w-2 opacity-0 group-hover:opacity-100 flex items-center justify-center shrink-0"><Plus className="w-2 h-2" /></div>
                     <ul className="list-disc pl-3 space-y-0.5">
                        <li>Implement 15 layout archetypes</li>
                        <li>Update the registry generator</li>
                        <li>Verify Typescript compilation</li>
                     </ul>
                  </div>
               </div>

            </div>
         </div>
      </div>
    </div>
  );
}
