"use client";

import React from "react";
import { 
  Home, PlusCircle, Sparkles, Folder, Users, Trash2, 
  Grid, Heart, CreditCard, Settings, HelpCircle, 
  ChevronDown, Crown
} from "lucide-react";
import clsx from "clsx";

type NavItem = {
  name: string;
  icon: any;
  active?: boolean;
};

type NavGroup = {
  title?: string;
  items: NavItem[];
};

const navGroups: NavGroup[] = [
  {
    items: [
      { name: "Dashboard", icon: Home, active: true },
    ]
  },
  {
    title: "GENERATE",
    items: [
      { name: "New Project", icon: PlusCircle },
      { name: "AI Playground", icon: Sparkles },
    ]
  },
  {
    title: "PROJECTS",
    items: [
      { name: "My Projects", icon: Folder },
      { name: "Shared with me", icon: Users },
      { name: "Trash", icon: Trash2 },
    ]
  },
  {
    title: "DESIGN SYSTEMS",
    items: [
      { name: "All Systems", icon: Grid },
      { name: "My Favorites", icon: Heart },
    ]
  },
  {
    title: "ACCOUNT",
    items: [
      { name: "Billing & Credits", icon: CreditCard },
      { name: "Settings", icon: Settings },
      { name: "Help & Docs", icon: HelpCircle },
    ]
  }
];

export function Sidebar() {
  return (
    <aside className="w-[280px] h-screen fixed left-0 top-0 flex flex-col border-r border-border/20 bg-[#070B1A]/80 backdrop-blur-2xl z-50">
      
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-border/20">
        <div className="flex items-center gap-3">
          {/* Custom SVG Logo to match the vibrant polygon in the image */}
          <div className="w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="url(#logo-grad)" className="w-8 h-8 drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]">
              <defs>
                <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
              <path d="M12 2L2 7L12 12L22 7L12 2Z" />
              <path d="M2 17L12 22L22 17V7L12 12L2 7V17Z" opacity="0.7" />
            </svg>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">ValtrexUI</span>
        </div>
      </div>

      {/* Nav Links */}
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-6">
        {navGroups.map((group, i) => (
          <div key={i}>
            {group.title && (
              <h4 className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-2 px-2">
                {group.title}
              </h4>
            )}
            <ul className="space-y-0.5">
              {group.items.map((item, j) => {
                const Icon = item.icon;
                return (
                  <li key={j}>
                    <button 
                      className={clsx(
                        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                        item.active 
                          ? "bg-gradient-to-r from-[#6b21a8] to-[#9d174d] text-white shadow-[0_0_15px_rgba(236,72,153,0.3)]"
                          : "text-text-secondary hover:text-white hover:bg-white/5"
                      )}
                    >
                      <Icon className={clsx("w-4 h-4", item.active ? "text-white" : "text-text-muted")} />
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t border-border/20 space-y-4">
        {/* Upgrade Card */}
        <div className="p-4 rounded-xl border border-pink-500/30 bg-gradient-to-b from-[#1e0b3c]/50 to-transparent relative overflow-hidden group shadow-[0_0_20px_rgba(236,72,153,0.1)]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Crown className="w-4 h-4 text-pink-400" fill="currentColor" />
              <span className="text-sm font-bold text-white">Upgrade to Pro</span>
            </div>
            <p className="text-[11px] text-text-muted mb-3 leading-relaxed">Unlock unlimited projects, premium systems and advanced AI features.</p>
            <button className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-xs font-bold text-white shadow-[0_0_15px_rgba(236,72,153,0.4)] hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] transition-all">
              Upgrade Now &rarr;
            </button>
          </div>
        </div>

        {/* User Profile */}
        <button className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-surface border border-border/50 overflow-hidden">
              <img src="https://i.pravatar.cc/150?img=11" alt="Arjun Dev" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <div className="text-sm font-medium text-white">Arjun Dev</div>
              <div className="text-[11px] text-text-muted">arjun@valtrexui.com</div>
            </div>
          </div>
          <ChevronDown className="w-4 h-4 text-text-muted" />
        </button>
      </div>
    </aside>
  );
}
