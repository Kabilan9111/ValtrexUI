import React from "react";
import clsx from "clsx";
import { Sparkles, Send, User, Settings, Bot, Cpu } from "lucide-react";
import { DNAThemeConfig } from "@/themes/dna/types";
import { CARD_DNA_TOKENS, COLOR_DNA_TOKENS, TYPOGRAPHY_DNA_TOKENS } from "@/themes/dna/tokens";

interface Props {
  theme: DNAThemeConfig;
}

export function ArchetypeAIChat({ theme }: Props) {
  const colorClass = COLOR_DNA_TOKENS[theme.dna.color] || COLOR_DNA_TOKENS['cyberpunk'];
  const cardClass = CARD_DNA_TOKENS[theme.dna.card] || CARD_DNA_TOKENS['glass'];
  const typoClass = TYPOGRAPHY_DNA_TOKENS[theme.dna.typography] || TYPOGRAPHY_DNA_TOKENS['futuristic'];

  return (
    <div className={clsx("w-full h-full flex flex-col pointer-events-none select-none text-[6px]", colorClass.background, typoClass.fontFamily, colorClass.text)}>
      
      {/* Top Header */}
      <div className={clsx("h-6 w-full flex items-center justify-between px-3 border-b", colorClass.border)}>
         <div className="flex items-center gap-1 font-bold">
            <Sparkles className="w-3 h-3 text-primary" />
            <span>AI Workspace</span>
         </div>
         <div className="flex items-center gap-2">
            <div className={clsx("px-1.5 py-0.5 rounded border flex items-center gap-1", colorClass.border)}>
               <Cpu className="w-2.5 h-2.5 opacity-50" />
               <span className="opacity-70">GPT-4 Turbo</span>
            </div>
            <Settings className="w-3 h-3 opacity-50" />
         </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
         {/* Sidebar History */}
         <div className={clsx("w-24 h-full border-r flex flex-col p-1.5 gap-1", colorClass.border, colorClass.card)}>
            <div className="px-1 font-bold opacity-50 mb-1">Today</div>
            <div className="px-1 py-1 rounded bg-black/5 dark:bg-white/5 opacity-80 truncate">Refactor Design System</div>
            <div className="px-1 py-1 rounded hover:bg-black/5 dark:hover:bg-white/5 opacity-60 truncate">Write Tailwind config</div>
            
            <div className="px-1 font-bold opacity-50 mt-2 mb-1">Previous 7 Days</div>
            <div className="px-1 py-1 rounded hover:bg-black/5 dark:hover:bg-white/5 opacity-60 truncate">Fix next.js hydration</div>
            <div className="px-1 py-1 rounded hover:bg-black/5 dark:hover:bg-white/5 opacity-60 truncate">Explain quantum physics</div>
         </div>

         {/* Chat Area */}
         <div className="flex-1 flex flex-col relative bg-black/[0.02] dark:bg-white/[0.02]">
            {/* Messages */}
            <div className="flex-1 p-3 flex flex-col gap-3 overflow-hidden">
               {/* User Message */}
               <div className="flex gap-2 self-end max-w-[80%]">
                  <div className={clsx("p-2 rounded-xl rounded-tr-sm bg-primary/10 text-text-primary border border-primary/20", typoClass.bodyClass)}>
                     Can you explain how to implement 15 unique archetypes?
                  </div>
                  <div className="w-5 h-5 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center shrink-0">
                     <User className="w-3 h-3 opacity-50" />
                  </div>
               </div>

               {/* AI Message */}
               <div className="flex gap-2 max-w-[90%]">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                     <Bot className="w-3 h-3 text-primary" />
                  </div>
                  <div className={clsx("p-2 rounded-xl rounded-tl-sm border", cardClass, colorClass.border, typoClass.bodyClass)}>
                     <p className="mb-1">Certainly! Implementing 15 unique archetypes requires a shift from pure color-theming to structural variation.</p>
                     <p className="opacity-80">You should define a `LayoutDNA` property and map it to specific DOM structures.</p>
                     <div className="mt-2 p-1.5 rounded bg-black/20 dark:bg-black/50 font-mono text-[4px] border border-white/5 text-purple-300">
                        export type LayoutDNA = 'mac-os' | 'chat' | 'ide';
                     </div>
                  </div>
               </div>
            </div>

            {/* Input Area */}
            <div className="p-3 pt-0">
               <div className={clsx("w-full rounded-xl border flex flex-col p-1.5 shadow-lg", colorClass.border, colorClass.card)}>
                  <div className="h-6 px-1 opacity-50 flex items-center">Ask me anything...</div>
                  <div className="flex justify-between items-center px-1 mt-1">
                     <div className="flex gap-1">
                        <Sparkles className="w-3 h-3 opacity-50" />
                        <span className="opacity-50 text-[4px]">Ctrl+K to use commands</span>
                     </div>
                     <div className="w-5 h-5 rounded bg-primary text-white flex items-center justify-center">
                        <Send className="w-2.5 h-2.5" />
                     </div>
                  </div>
               </div>
               <div className="text-center mt-1 text-[4px] opacity-40">AI can make mistakes. Verify important information.</div>
            </div>
         </div>
      </div>
    </div>
  );
}
