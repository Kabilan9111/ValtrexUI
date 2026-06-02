"use client";

import React from "react";
import { LineChart, BarChart2, PieChart, Activity, Download } from "lucide-react";

export function AnalyticsPreview() {
  return (
    <div className="flex flex-col gap-6 p-6 h-full overflow-auto text-text-primary">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <h2 className="text-2xl font-bold">Advanced Analytics</h2>
          <p className="text-sm text-text-muted">Deep dive into user metrics and conversion rates.</p>
        </div>
        <button className="px-4 py-2 bg-surface border border-border rounded-lg text-sm flex items-center gap-2 hover:bg-white/5 transition-colors">
          <Download className="w-4 h-4" /> Export CSV
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Main Chart */}
        <div className="md:col-span-2 glass-card border border-border rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold flex items-center gap-2">
              <LineChart className="w-5 h-5 text-primary" /> Traffic Overview
            </h3>
            <div className="flex gap-2">
              <span className="px-2 py-1 rounded bg-primary/20 text-primary text-xs font-bold border border-primary/30">Users</span>
              <span className="px-2 py-1 rounded bg-surface border border-border text-text-muted text-xs">Sessions</span>
            </div>
          </div>
          
          <div className="relative h-64 w-full flex items-end gap-1">
            {/* Mock Line Chart Using SVG path */}
            <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="absolute inset-0 w-full h-full stroke-primary opacity-50" fill="none" strokeWidth="1">
              <path d="M0,35 Q10,25 20,30 T40,15 T60,20 T80,5 T100,10" />
            </svg>
            <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="absolute inset-0 w-full h-full stroke-accent-pink opacity-80" fill="none" strokeWidth="2">
              <path d="M0,40 Q10,30 20,20 T40,25 T60,10 T80,15 T100,5" />
            </svg>
            
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none">
              <div className="w-full border-b border-text-primary"></div>
              <div className="w-full border-b border-text-primary"></div>
              <div className="w-full border-b border-text-primary"></div>
              <div className="w-full border-b border-text-primary"></div>
            </div>
          </div>
        </div>

        {/* Right column mini charts */}
        <div className="space-y-6 flex flex-col">
          <div className="glass-card border border-border rounded-xl p-5 shadow-sm flex-1">
            <h3 className="font-bold flex items-center gap-2 mb-4">
              <PieChart className="w-5 h-5 text-accent-pink" /> Traffic Sources
            </h3>
            <div className="flex items-center justify-center py-4">
               {/* CSS Donut Chart Mock */}
               <div className="w-32 h-32 rounded-full border-[16px] border-primary/20 relative">
                 <div className="absolute inset-[-16px] border-[16px] border-accent-pink rounded-full border-l-transparent border-b-transparent transform rotate-45"></div>
                 <div className="absolute inset-[-16px] border-[16px] border-accent-blue rounded-full border-r-transparent border-t-transparent border-b-transparent transform -rotate-12"></div>
               </div>
            </div>
            <div className="space-y-2 mt-4">
              <div className="flex justify-between text-sm"><span className="flex items-center gap-2"><div className="w-3 h-3 bg-accent-pink rounded-sm" /> Direct</span> <span>45%</span></div>
              <div className="flex justify-between text-sm"><span className="flex items-center gap-2"><div className="w-3 h-3 bg-accent-blue rounded-sm" /> Referral</span> <span>30%</span></div>
              <div className="flex justify-between text-sm"><span className="flex items-center gap-2"><div className="w-3 h-3 bg-primary/20 rounded-sm" /> Organic</span> <span>25%</span></div>
            </div>
          </div>
        </div>

      </div>
      
      {/* Table Section */}
      <div className="glass-card border border-border rounded-xl shadow-sm overflow-hidden">
        <div className="p-5 border-b border-border flex items-center justify-between">
          <h3 className="font-bold">Top Pages</h3>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface text-text-muted">
              <tr>
                <th className="p-4 font-medium">Page URL</th>
                <th className="p-4 font-medium">Views</th>
                <th className="p-4 font-medium">Unique Visitors</th>
                <th className="p-4 font-medium">Bounce Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { url: "/dashboard", v: "12,450", uv: "8,200", br: "24%" },
                { url: "/pricing", v: "8,300", uv: "5,100", br: "45%" },
                { url: "/blog/ai-trends", v: "5,200", uv: "4,900", br: "60%" },
                { url: "/contact", v: "2,100", uv: "1,800", br: "15%" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="p-4 text-primary font-medium">{row.url}</td>
                  <td className="p-4">{row.v}</td>
                  <td className="p-4">{row.uv}</td>
                  <td className="p-4">{row.br}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
