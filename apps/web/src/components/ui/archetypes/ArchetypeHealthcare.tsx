import React from "react";
import clsx from "clsx";
import { User, Activity, Heart, Thermometer, Droplet, Search, Bell, Calendar } from "lucide-react";
import { DNAThemeConfig } from "@/themes/dna/types";
import { CARD_DNA_TOKENS, COLOR_DNA_TOKENS, TYPOGRAPHY_DNA_TOKENS } from "@/themes/dna/tokens";

interface Props {
  theme: DNAThemeConfig;
}

export function ArchetypeHealthcare({ theme }: Props) {
  const colorClass = COLOR_DNA_TOKENS[theme.dna.color] || COLOR_DNA_TOKENS['enterprise-blue'];
  const cardClass = CARD_DNA_TOKENS[theme.dna.card] || CARD_DNA_TOKENS['elevated'];
  const typoClass = TYPOGRAPHY_DNA_TOKENS[theme.dna.typography] || TYPOGRAPHY_DNA_TOKENS['corporate'];

  return (
    <div className={clsx("w-full h-full flex flex-col pointer-events-none select-none text-[5px] bg-[#f0f4f8] dark:bg-[#0f172a]", typoClass.fontFamily, colorClass.text)}>
      
      {/* Top Header */}
      <div className={clsx("h-6 w-full flex items-center justify-between px-3 bg-white dark:bg-[#1e293b] shadow-sm z-10")}>
         <div className="flex items-center gap-1 font-bold text-blue-600 dark:text-blue-400 text-[6px]">
            <Heart className="w-3 h-3 fill-current" />
            <span>HealthCare+</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded-full">
               <Search className="w-2.5 h-2.5 opacity-50" />
               <span className="opacity-50 pr-2">Search patient...</span>
            </div>
            <Bell className="w-3 h-3 opacity-50" />
            <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold border border-blue-200">
               Dr
            </div>
         </div>
      </div>

      <div className="flex-1 flex overflow-hidden p-2 gap-2">
         {/* Patient List Sidebar */}
         <div className={clsx("w-28 h-full flex flex-col gap-1 rounded-lg", cardClass)}>
            <div className="p-2 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
               <span className="font-bold opacity-80">My Patients</span>
               <div className="w-3 h-3 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 flex items-center justify-center text-[4px] font-bold">12</div>
            </div>
            <div className="flex-1 overflow-hidden p-1 space-y-1">
               {[
                 { n: 'Sarah Jenkins', s: 'Stable', r: 'Room 302', a: true },
                 { n: 'Robert Smith', s: 'Critical', r: 'ICU-1', a: false },
                 { n: 'Emily Davis', s: 'Observation', r: 'Room 105', a: false },
               ].map((p, i) => (
                 <div key={i} className={clsx("p-1.5 rounded-md flex flex-col gap-0.5 border", p.a ? "border-blue-200 bg-blue-50 dark:border-blue-800/50 dark:bg-blue-900/20" : "border-transparent hover:bg-slate-50 dark:hover:bg-slate-800")}>
                    <div className="flex justify-between items-center">
                       <span className={clsx("font-bold", p.a && "text-blue-600 dark:text-blue-400")}>{p.n}</span>
                       <span className="text-[4px] opacity-50">{p.r}</span>
                    </div>
                    <div className="flex items-center gap-1">
                       <div className={clsx("w-1.5 h-1.5 rounded-full", p.s === 'Critical' ? 'bg-red-500' : p.s === 'Stable' ? 'bg-emerald-500' : 'bg-amber-500')} />
                       <span className="opacity-70 text-[4px]">{p.s}</span>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* Patient Details Main */}
         <div className="flex-1 flex flex-col gap-2">
            
            {/* Patient Header Card */}
            <div className={clsx("p-2 rounded-lg flex justify-between items-start", cardClass)}>
               <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                     <User className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col justify-center">
                     <h2 className="text-[8px] font-bold">Sarah Jenkins</h2>
                     <div className="flex gap-2 opacity-60 text-[4px]">
                        <span>Female, 34 yrs</span>
                        <span>DOB: 12/04/1992</span>
                        <span>Blood: O+</span>
                     </div>
                  </div>
               </div>
               <div className="px-2 py-1 rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <Activity className="w-2.5 h-2.5" /> Stable
               </div>
            </div>

            {/* Vitals Grid */}
            <div className="grid grid-cols-3 gap-2">
               <div className={clsx("p-2 rounded-lg flex flex-col gap-1 border-l-2 border-rose-500", cardClass)}>
                  <div className="flex justify-between opacity-60">
                     <span>Heart Rate</span>
                     <Heart className="w-3 h-3 text-rose-500" />
                  </div>
                  <div className="text-[10px] font-bold">72 <span className="text-[4px] opacity-50">bpm</span></div>
               </div>
               <div className={clsx("p-2 rounded-lg flex flex-col gap-1 border-l-2 border-blue-500", cardClass)}>
                  <div className="flex justify-between opacity-60">
                     <span>Blood Pressure</span>
                     <Activity className="w-3 h-3 text-blue-500" />
                  </div>
                  <div className="text-[10px] font-bold">118/75 <span className="text-[4px] opacity-50">mmHg</span></div>
               </div>
               <div className={clsx("p-2 rounded-lg flex flex-col gap-1 border-l-2 border-amber-500", cardClass)}>
                  <div className="flex justify-between opacity-60">
                     <span>Temperature</span>
                     <Thermometer className="w-3 h-3 text-amber-500" />
                  </div>
                  <div className="text-[10px] font-bold">98.6 <span className="text-[4px] opacity-50">°F</span></div>
               </div>
            </div>

            {/* Lab Results / Notes */}
            <div className={clsx("flex-1 p-2 rounded-lg flex flex-col gap-1", cardClass)}>
               <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-1">
                  <span className="font-bold opacity-80">Recent Lab Results</span>
                  <Calendar className="w-2.5 h-2.5 opacity-50" />
               </div>
               <div className="flex-1 mt-1 space-y-1">
                  <div className="flex justify-between items-center py-1 border-b border-slate-50 dark:border-slate-800/50">
                     <span className="opacity-80">Complete Blood Count (CBC)</span>
                     <span className="text-emerald-500 font-bold">Normal</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-50 dark:border-slate-800/50">
                     <span className="opacity-80">Metabolic Panel</span>
                     <span className="text-amber-500 font-bold">Review</span>
                  </div>
               </div>
            </div>

         </div>
      </div>
    </div>
  );
}
