"use client";

import React from "react";
import { DollarSign, Users, ArrowUpRight, ArrowDownRight, Activity, Calendar } from "lucide-react";

export function DashboardPreview() {
  return (
    <div className="flex flex-col gap-6 p-6 h-full overflow-auto text-text-primary">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Dashboard Overview</h2>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-surface border border-border rounded-lg text-sm flex items-center gap-2">
            <Calendar className="w-4 h-4 text-text-muted" /> Last 30 Days
          </button>
          <button className="px-4 py-2 bg-primary text-white font-bold rounded-lg text-sm shadow-[0_0_15px_var(--glow-shadow)]">
            Download Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          { label: "Total Revenue", val: "$124,563.00", icon: DollarSign, trend: "+14.5%", up: true },
          { label: "Active Users", val: "45,231", icon: Users, trend: "+5.2%", up: true },
          { label: "Bounce Rate", val: "42.3%", icon: Activity, trend: "-2.1%", up: false },
          { label: "Active Sessions", val: "1,204", icon: Users, trend: "+1.2%", up: true },
        ].map((stat, i) => (
          <div key={i} className="glass-card border border-border rounded-xl p-5 shadow-sm flex flex-col gap-3">
             <div className="flex items-center justify-between text-text-muted text-sm">
                {stat.label}
                <stat.icon className="w-5 h-5 text-primary" />
             </div>
             <div className="text-3xl font-bold">{stat.val}</div>
             <div className={`flex items-center gap-1 text-sm font-medium ${stat.up ? 'text-emerald-500' : 'text-rose-500'}`}>
                {stat.up ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {stat.trend} from last month
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-[300px]">
        <div className="lg:col-span-2 glass-card border border-border rounded-xl p-5 shadow-sm flex flex-col">
           <h3 className="font-bold mb-4">Revenue Analytics</h3>
           <div className="flex-1 flex items-end gap-2 pt-4">
              {[40, 60, 45, 80, 55, 90, 75, 100, 85, 60, 40, 70].map((h, i) => (
                <div key={i} className="flex-1 bg-primary/20 hover:bg-primary/40 rounded-t-sm transition-colors relative group cursor-pointer" style={{ height: `${h}%` }}>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-t-sm"></div>
                </div>
              ))}
           </div>
           <div className="flex justify-between mt-3 text-xs text-text-muted border-t border-border pt-3">
             <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
           </div>
        </div>
        
        <div className="glass-card border border-border rounded-xl p-5 shadow-sm flex flex-col">
          <h3 className="font-bold mb-4">Recent Activity</h3>
          <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium">New user registered</div>
                  <div className="text-xs text-text-muted">2 minutes ago</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
