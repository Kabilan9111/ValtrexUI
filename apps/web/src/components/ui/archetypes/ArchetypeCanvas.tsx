import React from "react";
import clsx from "clsx";
import { MousePointer2, Type, Square, LayoutTemplate, Play, Layers, AlignLeft, Frame, Box } from "lucide-react";
import { DNAThemeConfig } from "@/themes/dna/types";
import { CARD_DNA_TOKENS, COLOR_DNA_TOKENS, TYPOGRAPHY_DNA_TOKENS } from "@/themes/dna/tokens";

interface Props {
  theme: DNAThemeConfig;
}

export function ArchetypeCanvas({ theme }: Props) {
  const colorClass = COLOR_DNA_TOKENS[theme.dna.color] || COLOR_DNA_TOKENS['minimal-white'];
  const typoClass = TYPOGRAPHY_DNA_TOKENS[theme.dna.typography] || TYPOGRAPHY_DNA_TOKENS['startup'];

  return (
    <div className={clsx("w-full h-full flex flex-col pointer-events-none select-none text-[5px]", colorClass.background, typoClass.fontFamily, colorClass.text)}>
      
      {/* Top Toolbar */}
      <div className={clsx("h-6 w-full flex items-center justify-between px-2 border-b bg-background z-20 shadow-sm", colorClass.border)}>
         <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-primary rounded-sm flex items-center justify-center text-white font-black text-[8px]">F</div>
            <span className="font-bold">Landing Page v2</span>
         </div>
         <div className="flex items-center gap-1.5 opacity-60 bg-black/5 dark:bg-white/5 px-2 py-0.5 rounded-lg">
            <MousePointer2 className="w-2.5 h-2.5 text-primary" />
            <Frame className="w-2.5 h-2.5" />
            <Type className="w-2.5 h-2.5" />
            <Square className="w-2.5 h-2.5" />
            <LayoutTemplate className="w-2.5 h-2.5" />
         </div>
         <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
               <Play className="w-2 h-2 ml-0.5" />
            </div>
            <div className="px-1.5 py-0.5 rounded bg-primary text-white font-bold">Publish</div>
         </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
         {/* Left Layer Panel */}
         <div className={clsx("w-20 h-full border-r bg-background flex flex-col z-10", colorClass.border)}>
            <div className="h-5 flex items-center px-1.5 opacity-50 font-bold border-b gap-1">
               <Layers className="w-2.5 h-2.5" /> Layers
            </div>
            <div className="p-1 flex flex-col gap-0.5 overflow-hidden">
               <div className="flex items-center gap-1 px-0.5 py-0.5 hover:bg-black/5 dark:hover:bg-white/5 rounded">
                  <Frame className="w-2 h-2 opacity-50" /> Desktop
               </div>
               <div className="flex flex-col ml-2 border-l border-black/10 dark:border-white/10 pl-1 gap-0.5">
                  <div className="flex items-center gap-1 px-0.5 py-0.5 bg-primary/10 text-primary rounded">
                     <Box className="w-2 h-2" /> Hero Section
                  </div>
                  <div className="flex flex-col ml-2 border-l border-black/10 dark:border-white/10 pl-1 gap-0.5 opacity-70">
                     <div className="flex items-center gap-1 px-0.5 py-0.5">
                        <Type className="w-2 h-2" /> H1 Title
                     </div>
                     <div className="flex items-center gap-1 px-0.5 py-0.5">
                        <Type className="w-2 h-2" /> Subtitle
                     </div>
                     <div className="flex items-center gap-1 px-0.5 py-0.5">
                        <Square className="w-2 h-2" /> CTA Button
                     </div>
                  </div>
                  <div className="flex items-center gap-1 px-0.5 py-0.5 hover:bg-black/5 dark:hover:bg-white/5 rounded">
                     <Box className="w-2 h-2 opacity-50" /> Features
                  </div>
               </div>
            </div>
         </div>

         {/* Center Canvas */}
         <div className="flex-1 relative bg-black/5 dark:bg-white/5 overflow-hidden flex items-center justify-center p-4">
            {/* Infinite dots background */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
            
            {/* The Artboard */}
            <div className={clsx("w-full max-w-[120px] aspect-[9/16] bg-background shadow-2xl relative border", colorClass.border)}>
               {/* Selection Box */}
               <div className="absolute top-4 left-2 right-2 h-16 border-2 border-primary rounded-sm flex flex-col justify-center items-center text-center px-2">
                  <div className="absolute -top-1.5 -left-1.5 w-2 h-2 bg-white border border-primary rounded-sm"></div>
                  <div className="absolute -top-1.5 -right-1.5 w-2 h-2 bg-white border border-primary rounded-sm"></div>
                  <div className="absolute -bottom-1.5 -left-1.5 w-2 h-2 bg-white border border-primary rounded-sm"></div>
                  <div className="absolute -bottom-1.5 -right-1.5 w-2 h-2 bg-white border border-primary rounded-sm"></div>
                  
                  <div className={clsx("font-black text-[6px]", typoClass.headingClass)}>DESIGN</div>
                  <div className="text-[3px] opacity-50 mt-1">Create stunning visuals instantly</div>
               </div>
               
               {/* Abstract content below */}
               <div className="absolute top-24 left-2 right-2 h-8 bg-black/5 dark:bg-white/5 rounded-md"></div>
               <div className="absolute top-34 left-2 right-2 h-12 bg-black/5 dark:bg-white/5 rounded-md"></div>
            </div>
         </div>

         {/* Right Properties Panel */}
         <div className={clsx("w-28 h-full border-l bg-background flex flex-col z-10", colorClass.border)}>
            <div className="h-5 flex items-center px-1.5 opacity-50 font-bold border-b gap-1">
               <AlignLeft className="w-2.5 h-2.5" /> Properties
            </div>
            <div className="flex-1 p-2 space-y-2 overflow-y-auto">
               
               <div className="space-y-1">
                  <div className="font-bold opacity-60">Layout</div>
                  <div className="grid grid-cols-2 gap-1">
                     <div className="flex flex-col gap-0.5">
                        <span className="opacity-50 text-[4px]">W</span>
                        <div className={clsx("px-1 py-0.5 rounded border bg-black/5 dark:bg-white/5", colorClass.border)}>100%</div>
                     </div>
                     <div className="flex flex-col gap-0.5">
                        <span className="opacity-50 text-[4px]">H</span>
                        <div className={clsx("px-1 py-0.5 rounded border bg-black/5 dark:bg-white/5", colorClass.border)}>Auto</div>
                     </div>
                  </div>
               </div>

               <div className="space-y-1">
                  <div className="font-bold opacity-60">Color</div>
                  <div className={clsx("px-1 py-0.5 rounded border flex items-center gap-1", colorClass.border)}>
                     <div className="w-2.5 h-2.5 rounded-[1px] bg-primary"></div>
                     <span>var(--primary)</span>
                  </div>
               </div>

               <div className="space-y-1">
                  <div className="font-bold opacity-60">Typography</div>
                  <div className={clsx("px-1 py-0.5 rounded border bg-black/5 dark:bg-white/5", colorClass.border)}>Inter</div>
                  <div className="grid grid-cols-2 gap-1">
                     <div className={clsx("px-1 py-0.5 rounded border bg-black/5 dark:bg-white/5", colorClass.border)}>Medium</div>
                     <div className={clsx("px-1 py-0.5 rounded border bg-black/5 dark:bg-white/5", colorClass.border)}>16px</div>
                  </div>
               </div>

               <div className="space-y-1 border-t pt-1 border-black/10 dark:border-white/10 mt-2">
                  <div className="font-bold opacity-60 text-primary">Effects</div>
                  <div className="flex justify-between items-center opacity-70">
                     <span>Drop Shadow</span>
                     <div className="w-4 h-2 rounded-full bg-primary/50 relative">
                        <div className="absolute right-0 top-0 bottom-0 w-2 rounded-full bg-primary"></div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>
    </div>
  );
}
