"use client";

import React from "react";
import { Search, Zap, Bell, Moon } from "lucide-react";

export function TopNav() {
  return (
    <header className="h-16 sticky top-0 z-40 bg-transparent border-b border-border/10 flex items-center justify-between px-8 ml-[280px]">
      
      {/* Search Bar */}
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-text-muted group-focus-within:text-purple-400 transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-12 py-2 border border-border/30 rounded-full bg-white/5 backdrop-blur-md text-sm text-white placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
            placeholder="Search projects, systems, docs..."
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-[10px] font-semibold text-text-muted border border-border/30 rounded px-1.5 py-0.5 bg-black/20">
              ⌘K
            </span>
          </div>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        
        {/* Credits */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 shadow-[0_0_10px_rgba(139,92,246,0.2)]">
          <Zap className="w-4 h-4 text-purple-400 drop-shadow-[0_0_5px_rgba(139,92,246,0.8)]" fill="currentColor" />
          <span className="text-sm font-medium text-purple-200">Credits</span>
          <span className="text-sm font-bold text-white">12,450</span>
        </div>

        {/* Icons */}
        <button className="relative w-9 h-9 rounded-full border border-border/30 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white/10 transition-colors">
          <Bell className="w-4 h-4 text-text-secondary" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_8px_rgba(236,72,153,0.8)]"></span>
        </button>
        
        <button className="w-9 h-9 rounded-full border border-border/30 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white/10 text-purple-400 drop-shadow-[0_0_5px_rgba(139,92,246,0.5)] transition-colors">
          <Moon className="w-4 h-4" fill="currentColor" />
        </button>

        {/* Profile Circle */}
        <button className="w-9 h-9 rounded-full bg-surface border border-border/50 overflow-hidden ml-2 ring-2 ring-transparent hover:ring-purple-500/50 transition-all">
          <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
        </button>

      </div>
    </header>
  );
}
