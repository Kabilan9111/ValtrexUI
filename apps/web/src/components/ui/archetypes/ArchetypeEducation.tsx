import React from "react";
import clsx from "clsx";
import { BookOpen, PlayCircle, Trophy, CheckCircle, Clock, Star } from "lucide-react";
import { DNAThemeConfig } from "@/themes/dna/types";
import { CARD_DNA_TOKENS, COLOR_DNA_TOKENS, TYPOGRAPHY_DNA_TOKENS } from "@/themes/dna/tokens";

interface Props {
  theme: DNAThemeConfig;
}

export function ArchetypeEducation({ theme }: Props) {
  const colorClass = COLOR_DNA_TOKENS[theme.dna.color] || COLOR_DNA_TOKENS['minimal-white'];
  const cardClass = CARD_DNA_TOKENS[theme.dna.card] || CARD_DNA_TOKENS['elevated'];
  const typoClass = TYPOGRAPHY_DNA_TOKENS[theme.dna.typography] || TYPOGRAPHY_DNA_TOKENS['startup'];

  return (
    <div className={clsx("w-full h-full flex flex-col pointer-events-none select-none text-[5px] p-2 gap-2", colorClass.background, typoClass.fontFamily, colorClass.text)}>
      
      {/* Top Header & Greeting */}
      <div className="flex justify-between items-center px-1">
         <div>
            <h1 className={clsx("text-[10px] font-bold", typoClass.headingClass)}>Welcome back, Alex!</h1>
            <p className="opacity-60 text-[5px]">You've learned for 12 hours this week.</p>
         </div>
         <div className="flex gap-2">
            <div className={clsx("px-2 py-1 rounded-full border flex items-center gap-1 font-bold", colorClass.border, colorClass.card)}>
               <Trophy className="w-2.5 h-2.5 text-amber-500" />
               <span>1,250 XP</span>
            </div>
         </div>
      </div>

      <div className="flex-1 flex gap-2 overflow-hidden">
         {/* Main Content Area */}
         <div className="flex-[2] flex flex-col gap-2">
            
            {/* Continue Learning Video Card */}
            <div className={clsx("h-24 rounded-xl flex overflow-hidden relative group", cardClass)}>
               {/* Thumbnail placeholder */}
               <div className="w-1/2 h-full relative bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(45deg, var(--color-primary) 0%, transparent 100%)'}} />
                  <PlayCircle className="w-6 h-6 text-white drop-shadow-md z-10" />
                  <div className="absolute bottom-1 right-1 bg-black/60 text-white px-1 py-0.5 rounded text-[4px]">12:45</div>
               </div>
               {/* Details */}
               <div className="flex-1 p-2 flex flex-col justify-between">
                  <div>
                     <span className="text-[4px] font-bold text-primary tracking-widest uppercase">UX Design Masters</span>
                     <h2 className="font-bold text-[7px] leading-tight mt-0.5">Advanced Prototyping & Interactions</h2>
                     <p className="text-[4px] opacity-60 mt-0.5 line-clamp-2">Learn how to create high fidelity prototypes using Framer and Figma variables.</p>
                  </div>
                  <div>
                     <div className="flex justify-between text-[4px] opacity-60 mb-0.5">
                        <span>Progress</span>
                        <span>65%</span>
                     </div>
                     <div className="w-full h-1 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: '65%' }}></div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Course Grid */}
            <div className="flex-1 flex flex-col gap-1">
               <h3 className="font-bold opacity-80 px-1">Recommended for you</h3>
               <div className="grid grid-cols-2 gap-2">
                  {[
                     { t: 'Intro to React', icon: <BookOpen className="w-3 h-3 text-blue-500"/>, time: '2.5h' },
                     { t: 'Color Theory', icon: <Star className="w-3 h-3 text-purple-500"/>, time: '45m' }
                  ].map((c, i) => (
                     <div key={i} className={clsx("p-2 rounded-lg flex flex-col gap-1.5", cardClass)}>
                        <div className="w-6 h-6 rounded-md bg-black/5 dark:bg-white/5 flex items-center justify-center">
                           {c.icon}
                        </div>
                        <div className="font-bold">{c.t}</div>
                        <div className="flex items-center gap-1 text-[4px] opacity-50">
                           <Clock className="w-2 h-2" /> {c.time}
                        </div>
                     </div>
                  ))}
               </div>
            </div>

         </div>

         {/* Right Sidebar - Weekly Goals */}
         <div className={clsx("flex-1 rounded-xl p-2 flex flex-col", cardClass)}>
            <h3 className="font-bold opacity-80 mb-2">Weekly Goal</h3>
            <div className="relative w-16 h-16 mx-auto mb-2 flex items-center justify-center">
               <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <path className="text-black/5 dark:text-white/5" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-primary" strokeDasharray="80, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
               </svg>
               <div className="absolute text-center flex flex-col items-center">
                  <span className="font-bold text-[7px]">4/5</span>
                  <span className="text-[4px] opacity-50">Days</span>
               </div>
            </div>
            
            <h3 className="font-bold opacity-80 mb-1">Today's Tasks</h3>
            <div className="flex flex-col gap-1 overflow-hidden">
               <div className="flex items-start gap-1 p-1 rounded hover:bg-black/5 dark:hover:bg-white/5">
                  <CheckCircle className="w-2.5 h-2.5 text-emerald-500 shrink-0 mt-px" />
                  <span className="opacity-60 line-through">Complete Quiz 2</span>
               </div>
               <div className="flex items-start gap-1 p-1 rounded hover:bg-black/5 dark:hover:bg-white/5">
                  <div className="w-2.5 h-2.5 rounded-full border border-black/20 dark:border-white/20 shrink-0 mt-px" />
                  <span className="font-bold">Watch Lecture 5</span>
               </div>
               <div className="flex items-start gap-1 p-1 rounded hover:bg-black/5 dark:hover:bg-white/5">
                  <div className="w-2.5 h-2.5 rounded-full border border-black/20 dark:border-white/20 shrink-0 mt-px" />
                  <span className="font-bold">Submit Project</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
