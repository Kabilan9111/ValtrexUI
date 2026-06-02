"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAppStore } from "@/store";
import { LayoutDashboard, Users, FolderKanban, Settings, BarChart3, Database } from "lucide-react";
import clsx from "clsx";

export function GeneratedView() {
  const { blueprint } = useAppStore();
  const [activeTab, setActiveTab] = useState(blueprint?.pages[0] || "Dashboard");

  if (!blueprint) return null;

  const renderMockComponent = (name: string, idx: number) => (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      className="p-6 rounded-xl bg-surface border border-border shadow-lg"
    >
      <div className="h-4 w-32 bg-white/10 rounded mb-4"></div>
      <div className="space-y-2">
        <div className="h-2 w-full bg-white/5 rounded"></div>
        <div className="h-2 w-5/6 bg-white/5 rounded"></div>
        <div className="h-2 w-4/6 bg-white/5 rounded"></div>
      </div>
      <div className="mt-6 flex justify-end">
        <div className="h-8 w-24 bg-primary/20 rounded"></div>
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-text-primary tracking-tight">{blueprint.projectName}</h2>
        <div className="px-3 py-1 rounded bg-primary/10 border border-primary/30 text-primary text-xs font-bold">
          Deployed
        </div>
      </div>

      {/* Generated Navigation */}
      <div className="flex items-center gap-2 border-b border-border overflow-x-auto pb-px">
        {blueprint.pages.map((page) => (
          <button
            key={page}
            onClick={() => setActiveTab(page)}
            className={clsx(
              "px-4 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
              activeTab === page 
                ? "border-primary text-primary"
                : "border-transparent text-text-secondary hover:text-text-primary hover:border-white/20"
            )}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Generated Components Layout */}
      <div className="bg-surface-light rounded-2xl p-6 border border-border/50 min-h-[400px]">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="glass-card rounded-xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-bold text-text-primary">Total Revenue</div>
              <div className="text-2xl font-black text-text-primary mt-1">$45,231</div>
            </div>
          </div>
          <div className="glass-card rounded-xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent-pink/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-accent-pink" />
            </div>
            <div>
              <div className="text-sm font-bold text-text-primary">Active Users</div>
              <div className="text-2xl font-black text-text-primary mt-1">1,204</div>
            </div>
          </div>
          <div className="glass-card rounded-xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent-blue/20 flex items-center justify-center">
              <Database className="w-5 h-5 text-accent-blue" />
            </div>
            <div>
              <div className="text-sm font-bold text-text-primary">Storage</div>
              <div className="text-2xl font-black text-text-primary mt-1">45%</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {renderMockComponent("Main Module", 1)}
          {renderMockComponent("Secondary Module", 2)}
          {renderMockComponent("Settings List", 3)}
          {renderMockComponent("Data Table", 4)}
        </div>

      </div>
    </div>
  );
}
