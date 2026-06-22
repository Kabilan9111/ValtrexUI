import React from "react";
import clsx from "clsx";
import { CreditCard, ArrowDownRight, ArrowUpRight, Plus, Menu, Search, Send, Bell } from "lucide-react";
import { DNAThemeConfig } from "@/themes/dna/types";
import { CARD_DNA_TOKENS, COLOR_DNA_TOKENS, TYPOGRAPHY_DNA_TOKENS } from "@/themes/dna/tokens";

interface Props {
  theme: DNAThemeConfig;
}

export function ArchetypeBanking({ theme }: Props) {
  const colorClass = COLOR_DNA_TOKENS[theme.dna.color] || COLOR_DNA_TOKENS['dark-premium'];
  const typoClass = TYPOGRAPHY_DNA_TOKENS[theme.dna.typography] || TYPOGRAPHY_DNA_TOKENS['corporate'];

  return (
    <div className={clsx("w-full h-full flex flex-col pointer-events-none select-none text-[6px]", colorClass.background, typoClass.fontFamily, colorClass.text)}>
      
      {/* Top Navbar */}
      <div className={clsx("h-7 border-b flex items-center justify-between px-3", colorClass.border)}>
         <div className="flex items-center gap-2">
            <Menu className="w-3.5 h-3.5" />
            <span className={clsx("text-[8px] font-bold tracking-widest", typoClass.headingClass, colorClass.primary)}>PRIME BANK</span>
         </div>
         <div className="flex items-center gap-2 opacity-80">
            <Search className="w-3 h-3" />
            <Bell className="w-3 h-3" />
            <div className="w-4 h-4 rounded-full border border-current flex justify-center items-center font-bold text-[4px]">JD</div>
         </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
         {/* Left Side: Cards & Actions */}
         <div className={clsx("flex-1 border-r flex flex-col p-2 gap-2 overflow-y-auto", colorClass.border)}>
            
            <div className="flex justify-between items-center px-1">
               <span className="font-bold opacity-80 text-[7px]">My Cards</span>
               <div className="w-4 h-4 rounded-full bg-primary/20 text-primary flex items-center justify-center border border-primary/30"><Plus className="w-2.5 h-2.5" /></div>
            </div>

            {/* Credit Card Graphic */}
            <div className="w-full aspect-[1.6] rounded-xl bg-gradient-to-br from-indigo-900 to-slate-900 relative p-3 flex flex-col justify-between shadow-2xl text-white overflow-hidden border border-white/10">
               {/* Abstract background shapes inside card */}
               <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/5 rounded-full blur-xl"></div>
               <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-indigo-500/20 rounded-full blur-xl"></div>
               
               <div className="flex justify-between items-start z-10">
                  <span className="font-bold tracking-widest text-[5px]">PLATINUM</span>
                  <div className="flex -space-x-1.5">
                     <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                     <div className="w-3 h-3 rounded-full bg-orange-500/80"></div>
                  </div>
               </div>
               
               <div className="z-10 mt-auto">
                  <div className="font-mono text-[7px] tracking-[0.2em] mb-1 opacity-90">**** **** **** 4289</div>
                  <div className="flex justify-between items-end">
                     <div>
                        <div className="text-[3px] opacity-60 uppercase mb-[1px]">Balance</div>
                        <div className="font-bold text-[9px]">$12,450.00</div>
                     </div>
                     <div className="text-[4px] opacity-80">12/28</div>
                  </div>
               </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-1 mt-1">
               <div className={clsx("aspect-square rounded-lg flex flex-col items-center justify-center gap-1 border hover:bg-white/5", colorClass.border, colorClass.card)}>
                  <Send className="w-3.5 h-3.5 text-primary" />
                  <span className="font-bold opacity-80 text-[4px]">Transfer</span>
               </div>
               <div className={clsx("aspect-square rounded-lg flex flex-col items-center justify-center gap-1 border hover:bg-white/5", colorClass.border, colorClass.card)}>
                  <ArrowDownRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="font-bold opacity-80 text-[4px]">Receive</span>
               </div>
               <div className={clsx("aspect-square rounded-lg flex flex-col items-center justify-center gap-1 border hover:bg-white/5", colorClass.border, colorClass.card)}>
                  <CreditCard className="w-3.5 h-3.5 text-blue-400" />
                  <span className="font-bold opacity-80 text-[4px]">Top Up</span>
               </div>
            </div>

         </div>

         {/* Right Side: Transactions */}
         <div className="flex-[1.5] flex flex-col p-2 gap-2 overflow-y-auto bg-black/5 dark:bg-white/[0.01]">
            <div className="flex justify-between items-center px-1 border-b border-white/5 pb-1 mb-1">
               <span className="font-bold opacity-80 text-[7px]">Transactions</span>
               <span className="text-[4px] opacity-50 uppercase tracking-widest cursor-pointer hover:text-primary">View All</span>
            </div>

            <div className="flex flex-col gap-1.5">
               <div className="text-[4px] opacity-50 font-bold px-1 uppercase tracking-widest">Today</div>
               
               {[
                 { t: 'Apple Store', d: 'Electronics', amt: '-$1,299.00', icon: <ArrowUpRight className="w-2.5 h-2.5 text-rose-500" /> },
                 { t: 'Uber', d: 'Transportation', amt: '-$24.50', icon: <ArrowUpRight className="w-2.5 h-2.5 text-rose-500" /> },
               ].map((tr, i) => (
                 <div key={i} className={clsx("p-1.5 rounded-lg flex justify-between items-center border bg-white/5", colorClass.border)}>
                    <div className="flex items-center gap-1.5">
                       <div className="w-5 h-5 rounded bg-black/10 dark:bg-white/10 flex items-center justify-center">{tr.icon}</div>
                       <div className="flex flex-col">
                          <span className="font-bold">{tr.t}</span>
                          <span className="text-[4px] opacity-50">{tr.d}</span>
                       </div>
                    </div>
                    <span className="font-bold text-[5px]">{tr.amt}</span>
                 </div>
               ))}

               <div className="text-[4px] opacity-50 font-bold px-1 uppercase tracking-widest mt-1">Yesterday</div>
               
               {[
                 { t: 'Salary Deposit', d: 'Acme Corp', amt: '+$4,500.00', icon: <ArrowDownRight className="w-2.5 h-2.5 text-emerald-500" /> },
                 { t: 'Starbucks', d: 'Food & Drink', amt: '-$6.40', icon: <ArrowUpRight className="w-2.5 h-2.5 text-rose-500" /> },
               ].map((tr, i) => (
                 <div key={i} className={clsx("p-1.5 rounded-lg flex justify-between items-center border bg-white/5", colorClass.border)}>
                    <div className="flex items-center gap-1.5">
                       <div className="w-5 h-5 rounded bg-black/10 dark:bg-white/10 flex items-center justify-center">{tr.icon}</div>
                       <div className="flex flex-col">
                          <span className="font-bold">{tr.t}</span>
                          <span className="text-[4px] opacity-50">{tr.d}</span>
                       </div>
                    </div>
                    <span className={clsx("font-bold text-[5px]", tr.amt.startsWith('+') && "text-emerald-500")}>{tr.amt}</span>
                 </div>
               ))}
            </div>

         </div>
      </div>
    </div>
  );
}
