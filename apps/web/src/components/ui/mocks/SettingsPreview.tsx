"use client";

import React from "react";
import { User, Lock, CreditCard, Bell, Shield } from "lucide-react";

export function SettingsPreview() {
  return (
    <div className="flex gap-8 p-6 h-full overflow-auto text-text-primary">
      
      {/* Settings Sidebar */}
      <div className="w-64 shrink-0 space-y-1">
        <h2 className="text-xl font-bold mb-6 px-3">Settings</h2>
        {[
          { label: "Profile", icon: User, active: true },
          { label: "Security", icon: Lock, active: false },
          { label: "Billing", icon: CreditCard, active: false },
          { label: "Notifications", icon: Bell, active: false },
          { label: "API Keys", icon: Shield, active: false },
        ].map((item, i) => (
          <button 
            key={i} 
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${item.active ? 'bg-primary text-white shadow-[0_0_15px_rgba(var(--primary),0.3)]' : 'text-text-secondary hover:bg-white/5 hover:text-white'}`}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}
      </div>

      {/* Settings Content */}
      <div className="flex-1 max-w-3xl space-y-8">
        
        <div className="glass-card border border-border rounded-xl p-6 shadow-sm">
           <h3 className="text-lg font-bold mb-1">Public Profile</h3>
           <p className="text-sm text-text-muted mb-6">This will be displayed on your public profile.</p>

           <div className="flex items-center gap-6 mb-8">
             <div className="w-20 h-20 rounded-full bg-surface border border-border overflow-hidden">
                <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" className="w-full h-full object-cover" />
             </div>
             <div className="space-y-2">
               <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg shadow-sm">Change Avatar</button>
               <button className="px-4 py-2 bg-transparent text-text-secondary text-sm font-bold rounded-lg hover:text-white transition-colors">Remove</button>
             </div>
           </div>

           <div className="grid grid-cols-2 gap-6 mb-6">
             <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary">First Name</label>
                <input type="text" defaultValue="Arjun" className="w-full bg-background border border-border rounded-lg px-4 py-2 text-sm text-text-primary focus:border-primary focus:outline-none transition-colors" />
             </div>
             <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary">Last Name</label>
                <input type="text" defaultValue="Dev" className="w-full bg-background border border-border rounded-lg px-4 py-2 text-sm text-text-primary focus:border-primary focus:outline-none transition-colors" />
             </div>
           </div>

           <div className="space-y-2 mb-8">
              <label className="text-sm font-medium text-text-secondary">Email</label>
              <input type="email" defaultValue="arjun@valtrexui.com" className="w-full bg-background border border-border rounded-lg px-4 py-2 text-sm text-text-primary focus:border-primary focus:outline-none transition-colors" />
           </div>

           <div className="flex justify-end pt-4 border-t border-border">
              <button className="px-6 py-2 bg-primary text-white text-sm font-bold rounded-lg shadow-[0_0_15px_var(--glow-shadow)]">Save Changes</button>
           </div>
        </div>

        <div className="glass-card border border-border rounded-xl p-6 shadow-sm border-rose-500/30 bg-rose-500/5">
           <h3 className="text-lg font-bold text-rose-500 mb-1">Danger Zone</h3>
           <p className="text-sm text-text-muted mb-6">Irreversible and destructive actions.</p>
           
           <div className="flex items-center justify-between p-4 bg-background border border-rose-500/20 rounded-lg">
             <div>
               <div className="font-bold text-text-primary mb-1">Delete Account</div>
               <div className="text-sm text-text-muted">Once you delete your account, there is no going back.</div>
             </div>
             <button className="px-4 py-2 bg-rose-500 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-rose-600 transition-colors">
               Delete Account
             </button>
           </div>
        </div>

      </div>

    </div>
  );
}
