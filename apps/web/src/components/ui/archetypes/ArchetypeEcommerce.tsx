import React from "react";
import clsx from "clsx";
import { ShoppingBag, TrendingUp, Package, Users, DollarSign, ArrowUpRight, Search, Plus } from "lucide-react";
import { DNAThemeConfig } from "@/themes/dna/types";
import { CARD_DNA_TOKENS, COLOR_DNA_TOKENS, TYPOGRAPHY_DNA_TOKENS } from "@/themes/dna/tokens";

interface Props {
  theme: DNAThemeConfig;
}

export function ArchetypeEcommerce({ theme }: Props) {
  const colorClass = COLOR_DNA_TOKENS[theme.dna.color] || COLOR_DNA_TOKENS['enterprise-blue'];
  const cardClass = CARD_DNA_TOKENS[theme.dna.card] || CARD_DNA_TOKENS['elevated'];
  const typoClass = TYPOGRAPHY_DNA_TOKENS[theme.dna.typography] || TYPOGRAPHY_DNA_TOKENS['corporate'];

  return (
    <div className={clsx("w-full h-full flex flex-col pointer-events-none select-none text-[5px] bg-[#f8fafc] dark:bg-[#0f172a]", typoClass.fontFamily, colorClass.text)}>
      
      {/* Top Navbar */}
      <div className={clsx("h-6 w-full flex items-center justify-between px-3 bg-white dark:bg-[#1e293b] shadow-sm z-10")}>
         <div className="flex items-center gap-1.5 font-bold">
            <div className="w-4 h-4 rounded bg-primary flex items-center justify-center text-white"><ShoppingBag className="w-2.5 h-2.5" /></div>
            <span>Store Admin</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-[4px]">
               <Search className="w-2.5 h-2.5 opacity-50" />
               <span className="opacity-50 pr-2">Search orders...</span>
            </div>
            <div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700" />
         </div>
      </div>

      <div className="flex-1 flex overflow-hidden p-2 gap-2">
         {/* Sidebar */}
         <div className="w-20 h-full flex flex-col gap-0.5">
            {[
               { i: <LayoutTemplate className="w-3 h-3" />, t: 'Overview', active: true },
               { i: <Package className="w-3 h-3" />, t: 'Products', active: false },
               { i: <ShoppingBag className="w-3 h-3" />, t: 'Orders', active: false },
               { i: <Users className="w-3 h-3" />, t: 'Customers', active: false },
               { i: <TrendingUp className="w-3 h-3" />, t: 'Analytics', active: false },
            ].map((n, i) => (
               <div key={i} className={clsx("flex items-center gap-1.5 px-1.5 py-1 rounded cursor-pointer", n.active ? "bg-primary text-white font-bold" : "hover:bg-slate-100 dark:hover:bg-slate-800 opacity-70")}>
                  {n.i}
                  <span>{n.t}</span>
               </div>
            ))}
         </div>

         {/* Main Content */}
         <div className="flex-1 flex flex-col gap-2 overflow-y-auto">
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-2 shrink-0">
               <div className={clsx("p-2 rounded-lg flex flex-col justify-between", cardClass)}>
                  <div className="flex justify-between items-start opacity-70">
                     <span>Total Sales</span>
                     <DollarSign className="w-3 h-3" />
                  </div>
                  <div className="mt-1">
                     <span className="font-bold text-[10px]">$24,592</span>
                     <span className="text-emerald-500 flex items-center gap-0.5 text-[4px] mt-0.5"><ArrowUpRight className="w-2 h-2" /> +12.5%</span>
                  </div>
               </div>
               <div className={clsx("p-2 rounded-lg flex flex-col justify-between", cardClass)}>
                  <div className="flex justify-between items-start opacity-70">
                     <span>Active Orders</span>
                     <ShoppingBag className="w-3 h-3" />
                  </div>
                  <div className="mt-1">
                     <span className="font-bold text-[10px]">142</span>
                     <span className="text-emerald-500 flex items-center gap-0.5 text-[4px] mt-0.5"><ArrowUpRight className="w-2 h-2" /> +5.2%</span>
                  </div>
               </div>
               <div className={clsx("p-2 rounded-lg flex flex-col justify-between", cardClass)}>
                  <div className="flex justify-between items-start opacity-70">
                     <span>Conversion</span>
                     <TrendingUp className="w-3 h-3" />
                  </div>
                  <div className="mt-1">
                     <span className="font-bold text-[10px]">3.42%</span>
                     <span className="text-rose-500 flex items-center gap-0.5 text-[4px] mt-0.5"><ArrowUpRight className="w-2 h-2 rotate-90" /> -1.1%</span>
                  </div>
               </div>
            </div>

            {/* Recent Orders Table */}
            <div className={clsx("flex-1 p-2 rounded-lg flex flex-col", cardClass)}>
               <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">Recent Orders</span>
                  <div className="px-1.5 py-0.5 rounded bg-primary text-white flex items-center gap-1 font-bold">
                     <Plus className="w-2.5 h-2.5" /> Create
                  </div>
               </div>
               <div className="flex-1 border rounded overflow-hidden flex flex-col border-slate-200 dark:border-slate-800">
                  <div className="flex bg-slate-50 dark:bg-slate-800/50 p-1 font-bold opacity-70 border-b border-slate-200 dark:border-slate-800">
                     <div className="flex-1">Order ID</div>
                     <div className="flex-1">Customer</div>
                     <div className="flex-[0.5] text-right">Amount</div>
                     <div className="flex-[0.5] text-center">Status</div>
                  </div>
                  {[
                     { id: '#ORD-001', c: 'Alice Johnson', a: '$120.00', s: 'Paid', sc: 'emerald' },
                     { id: '#ORD-002', c: 'Bob Smith', a: '$45.50', s: 'Pending', sc: 'amber' },
                     { id: '#ORD-003', c: 'Charlie Davis', a: '$299.99', s: 'Paid', sc: 'emerald' },
                  ].map((o, i) => (
                     <div key={i} className="flex p-1 border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800/30">
                        <div className="flex-1 font-mono text-primary">{o.id}</div>
                        <div className="flex-1 font-bold">{o.c}</div>
                        <div className="flex-[0.5] text-right">{o.a}</div>
                        <div className="flex-[0.5] flex justify-center">
                           <span className={clsx("px-1 py-0.5 rounded-full text-[4px] font-bold", `bg-${o.sc}-100 text-${o.sc}-700 dark:bg-${o.sc}-900/30 dark:text-${o.sc}-400`)}>
                              {o.s}
                           </span>
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
// Import missing LayoutTemplate
import { LayoutTemplate } from "lucide-react";
