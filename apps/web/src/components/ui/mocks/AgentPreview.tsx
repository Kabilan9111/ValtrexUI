"use client";

import React from "react";
import { Bot, Play, Settings2, Activity, MoreVertical, Plus } from "lucide-react";
import clsx from "clsx";

export function AgentPreview() {
  const agents = [
    { name: "Support Bot X", role: "Customer Service", status: "Active", runs: 1205, color: "emerald" },
    { name: "Lead Gen Auto", role: "Sales", status: "Paused", runs: 840, color: "amber" },
    { name: "Code Reviewer", role: "Engineering", status: "Active", runs: 3402, color: "emerald" },
    { name: "Data Scraper", role: "Operations", status: "Failed", runs: 12, color: "rose" },
  ];

  return (
    <div className="flex flex-col gap-6 p-6 h-full overflow-auto text-text-primary">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Bot className="w-6 h-6 text-primary" /> AI Agents
          </h2>
          <p className="text-sm text-text-muted mt-1">Manage and deploy your autonomous workers.</p>
        </div>
        <button className="px-4 py-2 bg-primary text-white font-bold rounded-lg text-sm shadow-[0_0_15px_var(--glow-shadow)] flex items-center gap-2">
          <Plus className="w-4 h-4" /> Create Agent
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {agents.map((agent, i) => (
          <div key={i} className="glass-card border border-border rounded-xl p-5 shadow-sm group hover:border-primary/50 transition-colors flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center">
                <Bot className="w-5 h-5 text-text-primary" />
              </div>
              <button className="text-text-muted hover:text-text-primary transition-colors">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
            
            <h3 className="font-bold text-lg mb-1">{agent.name}</h3>
            <p className="text-xs text-text-muted mb-4">{agent.role}</p>
            
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
               <div className="flex items-center gap-1.5 text-xs">
                 <span className={clsx(
                   "w-2 h-2 rounded-full",
                   agent.color === "emerald" ? "bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]" : 
                   agent.color === "amber" ? "bg-amber-500" : "bg-rose-500 shadow-[0_0_5px_rgba(244,63,94,0.8)]"
                 )}></span>
                 <span className="text-text-secondary">{agent.status}</span>
               </div>
               <div className="text-xs font-medium text-text-primary flex items-center gap-1">
                 <Activity className="w-3 h-3 text-text-muted" /> {agent.runs.toLocaleString()} runs
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card border border-border rounded-xl shadow-sm overflow-hidden mt-2">
        <div className="p-5 border-b border-border flex items-center justify-between bg-surface/50">
          <h3 className="font-bold">Recent Executions</h3>
          <button className="text-sm font-medium text-primary flex items-center gap-1 hover:underline">
            <Settings2 className="w-4 h-4" /> Execution Logs
          </button>
        </div>
        <div className="p-0">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 border-b border-border last:border-0 hover:bg-white/5 transition-colors">
               <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <CheckCircle2Icon />
                  </div>
                  <div>
                    <div className="font-bold text-sm">Support ticket #8402 resolved</div>
                    <div className="text-xs text-text-muted flex items-center gap-2">
                      <span className="text-primary font-medium">Support Bot X</span> • 2 mins ago
                    </div>
                  </div>
               </div>
               <button className="px-3 py-1.5 rounded bg-surface border border-border text-xs font-medium hover:bg-white/10 transition-colors flex items-center gap-1">
                 <Play className="w-3 h-3" /> Replay
               </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CheckCircle2Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
    </svg>
  )
}
