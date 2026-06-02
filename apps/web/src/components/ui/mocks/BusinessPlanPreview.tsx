"use client";

import React from "react";
import { FileText, Download, Share2, Sparkles, Layers } from "lucide-react";

export function BusinessPlanPreview() {
  return (
    <div className="flex gap-6 p-6 h-full overflow-hidden text-text-primary">
      
      {/* Sidebar: Documents */}
      <div className="w-72 shrink-0 glass-card border border-border rounded-xl flex flex-col h-full overflow-hidden shadow-sm">
        <div className="p-4 border-b border-border flex items-center justify-between">
           <h3 className="font-bold">Documents</h3>
           <button className="w-6 h-6 rounded bg-primary/20 text-primary flex items-center justify-center hover:bg-primary/30 transition-colors">
             +
           </button>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
           {[
             { name: "Q3 Strategy Plan", date: "Oct 12", active: true },
             { name: "Marketing Budget", date: "Oct 10", active: false },
             { name: "Competitor Analysis", date: "Sep 28", active: false },
             { name: "Product Roadmap 2027", date: "Sep 15", active: false },
           ].map((doc, i) => (
             <div 
               key={i} 
               className={`p-3 rounded-lg cursor-pointer transition-colors flex flex-col gap-1 ${doc.active ? 'bg-primary/10 border border-primary/30' : 'hover:bg-white/5 border border-transparent'}`}
             >
                <div className={`text-sm font-medium truncate ${doc.active ? 'text-primary' : 'text-text-primary'}`}>{doc.name}</div>
                <div className="text-xs text-text-muted">{doc.date}</div>
             </div>
           ))}
        </div>
      </div>

      {/* Main Editor */}
      <div className="flex-1 glass-card border border-border rounded-xl flex flex-col h-full shadow-sm overflow-hidden bg-surface">
        
        {/* Editor Toolbar */}
        <div className="h-14 border-b border-border flex items-center justify-between px-4 bg-background">
           <div className="flex items-center gap-4">
             <div className="font-bold">Q3 Strategy Plan</div>
             <div className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-500 text-xs font-bold border border-emerald-500/30">Saved</div>
           </div>
           <div className="flex items-center gap-2">
             <button className="p-2 rounded hover:bg-white/10 text-text-muted transition-colors"><Share2 className="w-4 h-4" /></button>
             <button className="p-2 rounded hover:bg-white/10 text-text-muted transition-colors"><Download className="w-4 h-4" /></button>
             <button className="px-3 py-1.5 ml-2 bg-primary text-white rounded shadow-sm text-sm font-bold flex items-center gap-2">
               <Sparkles className="w-3 h-3" /> AI Enhance
             </button>
           </div>
        </div>

        {/* Editor Content Area */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold mb-8">Q3 2026 Go-To-Market Strategy</h1>
            
            <div className="p-4 rounded-xl border border-primary/30 bg-primary/5 flex gap-4">
              <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-primary mb-1 text-sm">AI Suggestion</div>
                <div className="text-sm text-text-secondary leading-relaxed">
                  Based on recent competitor moves, consider emphasizing the "Enterprise Security" features in the executive summary. Want me to draft this section?
                </div>
                <div className="mt-3 flex gap-2">
                  <button className="px-3 py-1 text-xs font-bold bg-primary text-white rounded">Accept & Generate</button>
                  <button className="px-3 py-1 text-xs font-bold bg-transparent border border-border text-text-muted rounded">Dismiss</button>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-border pb-2">1. Executive Summary</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Our core objective for Q3 is to expand our footprint in the enterprise SaaS market by leveraging our new AI-driven analytics capabilities. This document outlines the strategic initiatives, budget allocations, and key performance indicators required to achieve a 25% growth in Enterprise MRR.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-border pb-2">2. Target Demographics</h2>
            <ul className="list-disc list-inside space-y-2 text-text-secondary leading-relaxed ml-2">
              <li>CTOs and VP Engineering at mid-market tech companies ($50M-$200M ARR)</li>
              <li>Operations Directors seeking automation solutions</li>
              <li>Agencies looking for white-label platform capabilities</li>
            </ul>

            <div className="my-10 p-6 border-l-4 border-accent-pink bg-surface rounded-r-xl">
               <div className="italic text-text-secondary text-lg">
                 "To win the enterprise, we must move beyond toolsets and offer transformative workflows."
               </div>
               <div className="mt-2 text-sm font-bold text-text-primary">— Sarah Jenkins, VP Product</div>
            </div>

            <div className="h-32"></div> {/* Bottom padding */}
          </div>
        </div>

      </div>
    </div>
  );
}
