import React from "react";
import clsx from "clsx";
import { Building2, LayoutGrid, Database, Shield, FileText, ChevronDown, Filter, Download, MoreVertical } from "lucide-react";
import { DNAThemeConfig } from "@/themes/dna/types";
import { CARD_DNA_TOKENS, COLOR_DNA_TOKENS, TYPOGRAPHY_DNA_TOKENS } from "@/themes/dna/tokens";

interface Props {
  theme: DNAThemeConfig;
}

export function ArchetypeEnterprise({ theme }: Props) {
  const colorClass = COLOR_DNA_TOKENS[theme.dna.color] || COLOR_DNA_TOKENS['enterprise-blue'];
  const cardClass = CARD_DNA_TOKENS[theme.dna.card] || CARD_DNA_TOKENS['flat'];
  const typoClass = TYPOGRAPHY_DNA_TOKENS[theme.dna.typography] || TYPOGRAPHY_DNA_TOKENS['corporate'];

  return (
    <div className={clsx("w-full h-full flex flex-col pointer-events-none select-none text-[5px] bg-[#f8fafc] dark:bg-[#0f172a]", typoClass.fontFamily, colorClass.text)}>
      
      {/* Heavy Top Nav */}
      <div className={clsx("h-7 w-full flex items-center justify-between px-3 bg-[#1e293b] text-white shadow-md z-20 shrink-0")}>
         <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 font-bold text-[6px]">
               <Building2 className="w-3.5 h-3.5 text-blue-400" />
               <span>Acme Enterprise ERP</span>
            </div>
            <div className="flex gap-2 text-slate-300 opacity-90 font-medium">
               <span className="hover:text-white px-1 py-0.5 bg-white/10 rounded">Dashboard</span>
               <span className="hover:text-white px-1 py-0.5">Financials</span>
               <span className="hover:text-white px-1 py-0.5">Human Resources</span>
               <span className="hover:text-white px-1 py-0.5">Supply Chain</span>
            </div>
         </div>
         <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 opacity-80">
               <span>Org: Global Corp</span> <ChevronDown className="w-2 h-2" />
            </div>
            <div className="w-px h-3 bg-white/20" />
            <div className="flex items-center gap-1">
               <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center font-bold text-[4px]">AD</div>
            </div>
         </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
         {/* Secondary Module Sidebar */}
         <div className="w-24 h-full border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] flex flex-col z-10 shrink-0">
            <div className="p-1.5 font-bold text-[4px] uppercase tracking-widest text-slate-500 border-b border-slate-200 dark:border-slate-800">Module Menu</div>
            <div className="p-1 flex flex-col gap-0.5">
               {[
                 { i: <LayoutGrid className="w-2.5 h-2.5" />, t: 'Overview', a: true },
                 { i: <Database className="w-2.5 h-2.5" />, t: 'Data Hub', a: false },
                 { i: <FileText className="w-2.5 h-2.5" />, t: 'Reports', a: false },
                 { i: <Shield className="w-2.5 h-2.5" />, t: 'Compliance', a: false },
               ].map((item, i) => (
                  <div key={i} className={clsx("flex items-center gap-1.5 px-1.5 py-1 rounded cursor-pointer", item.a ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 font-bold" : "hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400")}>
                     {item.i} <span>{item.t}</span>
                  </div>
               ))}
            </div>
         </div>

         {/* Main Content Workspace */}
         <div className="flex-1 p-2 flex flex-col gap-2 overflow-auto">
            
            <div className="flex justify-between items-center bg-white dark:bg-[#1e293b] p-1.5 rounded border border-slate-200 dark:border-slate-800 shrink-0">
               <div>
                  <h1 className="font-bold text-[8px]">Q3 Compliance Report</h1>
                  <p className="text-slate-500 text-[4px]">Generated on Oct 14, 2026. Data classification: Confidential.</p>
               </div>
               <div className="flex gap-1">
                  <div className="px-1.5 py-0.5 border border-slate-300 dark:border-slate-700 rounded flex items-center gap-1 bg-white dark:bg-slate-800 shadow-sm">
                     <Filter className="w-2.5 h-2.5" /> Filter
                  </div>
                  <div className="px-1.5 py-0.5 rounded bg-blue-600 text-white font-bold flex items-center gap-1 shadow-sm">
                     <Download className="w-2.5 h-2.5" /> Export PDF
                  </div>
               </div>
            </div>

            {/* Dense Data Table Container */}
            <div className={clsx("flex-1 rounded border border-slate-200 dark:border-slate-800 flex flex-col bg-white dark:bg-[#1e293b] overflow-hidden", cardClass)}>
               {/* Table Header Row */}
               <div className="flex bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 font-bold text-slate-600 dark:text-slate-300 p-1">
                  <div className="w-4 flex justify-center"><div className="w-2 h-2 border border-slate-300 rounded-sm"></div></div>
                  <div className="flex-1">ID</div>
                  <div className="flex-[2]">Department</div>
                  <div className="flex-[2]">Audit Status</div>
                  <div className="flex-[1.5] text-right">Risk Score</div>
                  <div className="w-4"></div>
               </div>
               {/* Table Body Rows */}
               <div className="flex-1 overflow-auto flex flex-col">
                  {[
                    { id: 'AUD-2026-01', d: 'Finance EMEA', s: 'Passed', c: 'emerald', r: '12' },
                    { id: 'AUD-2026-02', d: 'HR APAC', s: 'Pending Review', c: 'amber', r: '45' },
                    { id: 'AUD-2026-03', d: 'IT Infrastructure', s: 'Failed', c: 'rose', r: '88' },
                    { id: 'AUD-2026-04', d: 'Legal NAMER', s: 'Passed', c: 'emerald', r: '5' },
                    { id: 'AUD-2026-05', d: 'R&D Labs', s: 'In Progress', c: 'blue', r: '23' },
                  ].map((row, i) => (
                    <div key={i} className="flex border-b border-slate-100 dark:border-slate-800 p-1 items-center hover:bg-slate-50 dark:hover:bg-slate-800/50">
                       <div className="w-4 flex justify-center"><div className="w-2 h-2 border border-slate-300 rounded-sm"></div></div>
                       <div className="flex-1 font-mono text-blue-600 dark:text-blue-400">{row.id}</div>
                       <div className="flex-[2] font-medium">{row.d}</div>
                       <div className="flex-[2]">
                          <span className={clsx("px-1 py-0.5 rounded-sm border", `bg-${row.c}-50 border-${row.c}-200 text-${row.c}-700 dark:bg-${row.c}-900/20 dark:border-${row.c}-800 dark:text-${row.c}-400`)}>
                            {row.s}
                          </span>
                       </div>
                       <div className="flex-[1.5] text-right font-mono">{row.r}/100</div>
                       <div className="w-4 flex justify-center text-slate-400 hover:text-slate-600 cursor-pointer"><MoreVertical className="w-2.5 h-2.5" /></div>
                    </div>
                  ))}
               </div>
               {/* Table Footer Pagination */}
               <div className="p-1 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 flex justify-between items-center text-[4px] text-slate-500 shrink-0">
                  <span>Showing 1 to 5 of 248 entries</span>
                  <div className="flex gap-1">
                     <div className="px-1 py-0.5 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 rounded cursor-pointer">Previous</div>
                     <div className="px-1 py-0.5 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 rounded cursor-pointer">Next</div>
                  </div>
               </div>
            </div>

         </div>
      </div>
    </div>
  );
}
