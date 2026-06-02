"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Users, Database, LayoutDashboard, Settings } from "lucide-react";
import clsx from "clsx";

interface ComponentPreviewGridProps {
  pageName: string;
  components: string[];
}

export function ComponentPreviewGrid({ pageName, components }: ComponentPreviewGridProps) {
  
  const renderMockComponent = (name: string, idx: number) => {
    // Generate different visual representations based on the component type
    if (name.includes("Card")) {
      return (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          key={idx}
          className="glass-card rounded-xl p-5 flex items-center gap-4 border border-border hover:border-primary/50 transition-colors"
        >
          <div className="w-10 h-10 rounded-lg primary-gradient flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-sm font-bold text-text-primary">{name.replace(/([A-Z])/g, ' $1').trim()}</div>
            <div className="text-2xl font-black text-text-primary mt-1">84%</div>
          </div>
        </motion.div>
      );
    }

    if (name.includes("Chart") || name.includes("Feed")) {
      return (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          key={idx}
          className="col-span-1 md:col-span-2 glass-card rounded-xl p-6 border border-border"
        >
          <div className="h-4 w-32 bg-text-primary/10 rounded mb-6"></div>
          <div className="flex items-end gap-2 h-32 w-full">
            {[40, 70, 45, 90, 65, 85, 30].map((h, i) => (
              <div key={i} className="flex-1 bg-primary/40 rounded-t-sm" style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </motion.div>
      );
    }

    if (name.includes("Table") || name.includes("List")) {
      return (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          key={idx}
          className="col-span-1 md:col-span-2 lg:col-span-3 glass-card rounded-xl p-6 border border-border"
        >
          <div className="flex justify-between items-center mb-6">
            <div className="h-4 w-32 bg-text-primary/10 rounded"></div>
            <div className="h-8 w-24 bg-primary/20 rounded-md"></div>
          </div>
          <div className="space-y-3">
            {[1,2,3].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-background border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-text-primary/10"></div>
                  <div className="space-y-1.5">
                    <div className="h-2 w-24 bg-text-primary/20 rounded"></div>
                    <div className="h-1.5 w-16 bg-text-primary/10 rounded"></div>
                  </div>
                </div>
                <div className="h-6 w-16 rounded-full bg-emerald-500/20"></div>
              </div>
            ))}
          </div>
        </motion.div>
      );
    }

    // Generic Mock
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.1 }}
        key={idx}
        className="p-6 rounded-xl bg-surface border border-border shadow-lg"
      >
        <div className="h-4 w-32 bg-text-primary/10 rounded mb-4"></div>
        <div className="space-y-2">
          <div className="h-2 w-full bg-text-primary/5 rounded"></div>
          <div className="h-2 w-5/6 bg-text-primary/5 rounded"></div>
          <div className="h-2 w-4/6 bg-text-primary/5 rounded"></div>
        </div>
        <div className="mt-6 flex justify-end">
          <div className="h-8 w-24 bg-primary/20 rounded-md"></div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="w-full">
      <div className="mb-6 flex items-center gap-2 text-text-primary">
        <LayoutDashboard className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-bold">Previewing: {pageName}</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((name, idx) => renderMockComponent(name, idx))}
      </div>
    </div>
  );
}
