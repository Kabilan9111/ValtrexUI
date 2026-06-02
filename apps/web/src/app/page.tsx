"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, FileText, Code2, Download, Mic, 
  ChevronDown, ArrowRight, Heart, MoreVertical, Plus, Trash2, Layout, LayoutTemplate, Users
} from "lucide-react";
import clsx from "clsx";
import { useAppStore } from "@/store";
import { analyzeAndRecommend, generateFrontendMock } from "@/lib/ai-engine";
import { BlueprintPanel } from "@/components/ui/BlueprintPanel";
import { ThemeRecommendationPanel } from "@/components/ui/ThemeRecommendationPanel";
import { ThemePreviewGallery } from "@/components/ui/ThemePreviewGallery";
import { FrontendPreviewWorkspace } from "@/components/ui/FrontendPreviewWorkspace";

export default function Dashboard() {
  const { 
    prompt, setPrompt, generationState, setGenerationState, 
    setDetectedIndustry, setRecommendedThemes, setSelectedTheme, 
    setBlueprint, setGeneratedFrontend, selectedTheme, blueprint 
  } = useAppStore();

  useEffect(() => {
    if (selectedTheme) {
      document.body.setAttribute('data-theme', selectedTheme);
    }
  }, [selectedTheme]);

  const handleGenerate = async () => {
    if (!prompt) return;
    
    const { blueprint, recommendedThemes } = await analyzeAndRecommend(prompt, (stage, data) => {
      setGenerationState(stage);
    });

    setBlueprint(blueprint);
    setRecommendedThemes(recommendedThemes);
    setSelectedTheme(recommendedThemes[0].theme); // auto-select highest confidence
  };

  const handleGenerateFrontend = async () => {
    if (!blueprint || !selectedTheme) return;
    
    const frontendMock = await generateFrontendMock(blueprint, selectedTheme, (stage, data) => {
      setGenerationState(stage);
    });

    setGeneratedFrontend(frontendMock);
  };

  return (
    <div className="max-w-[1600px] mx-auto w-full relative">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Column (Main Content) */}
        <div className="flex-1 space-y-10 min-w-0">
          
          {generationState === 'idle' && (
            <section className="relative flex justify-between items-center">
              <div className="flex-1 z-10">
                <h1 className="text-4xl font-bold text-text-primary mb-2 flex items-center gap-3 tracking-tight">
                  Welcome back, Arjun! <span className="text-3xl">👋</span>
                </h1>
                <p className="text-text-secondary text-sm mb-10">
                  Describe your idea. We'll build the frontend for you.
                </p>

                {/* 3-Step Process with connection line */}
                <div className="flex items-center gap-6 text-sm relative">
                  <div className="absolute top-6 left-12 right-12 h-px bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-transparent border-t border-dashed border-purple-500/30 -z-10"></div>
                  
                  <div className="flex flex-col items-center gap-3 group">
                    <div className="w-12 h-12 rounded-full bg-surface-light border border-purple-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:scale-110 transition-transform">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-text-primary">1. Describe</div>
                      <div className="text-text-muted text-[11px]">Tell us your product idea</div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-3 group">
                    <div className="w-12 h-12 rounded-full bg-surface-light border border-pink-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.3)] group-hover:scale-110 transition-transform">
                      <Sparkles className="w-5 h-5 text-accent-pink" />
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-text-primary">2. Generate</div>
                      <div className="text-text-muted text-[11px]">AI creates the blueprint</div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-3 group">
                    <div className="w-12 h-12 rounded-full bg-surface-light border border-blue-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform">
                      <Download className="w-5 h-5 text-accent-blue" />
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-text-primary">3. Export</div>
                      <div className="text-text-muted text-[11px]">Download & ship your code</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background 3D Graphic */}
              <div className="w-[300px] h-[200px] shrink-0 relative mr-12 hidden lg:block">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none z-0" />
                <img src="/hero-3d.png" alt="3D UI Elements" className="absolute inset-0 w-full h-full object-contain z-10 drop-shadow-[0_0_30px_rgba(236,72,153,0.4)]" />
              </div>
            </section>
          )}

          {/* Generator Card */}
          {generationState === 'idle' || generationState === 'analyzing' || generationState === 'generating_blueprint' ? (
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="neon-border-card p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full primary-gradient flex items-center justify-center shadow-[0_0_10px_var(--glow-shadow)]">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-xl font-bold text-text-primary">Generate a new project</h2>
              </div>

              <div className="bg-background/50 border border-border/50 rounded-xl p-5 mb-6 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all shadow-inner">
                <textarea 
                  className="w-full bg-transparent text-text-primary text-sm placeholder-text-muted resize-none focus:outline-none min-h-[100px] leading-relaxed"
                  placeholder="Build a modern SaaS project management application with teams, projects, tasks, kanban board, calendar, reports, time tracking, billing and user management."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
                <div className="flex items-center justify-between mt-2">
                  <button className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 hover:text-white text-text-muted transition-colors">
                    <Mic className="w-4 h-4" />
                  </button>
                  <span className="text-[11px] text-text-muted font-bold tracking-wider">{prompt.length}/3000</span>
                </div>
              </div>

              <div className="mt-8 flex justify-end items-center gap-4">
                {generationState !== 'idle' && (
                  <div className="text-sm font-bold text-primary animate-pulse flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    {generationState === 'analyzing' && "Analyzing Prompt..."}
                    {generationState === 'generating_blueprint' && "Generating Architecture..."}
                  </div>
                )}
                <button 
                  onClick={handleGenerate}
                  disabled={!prompt || generationState !== 'idle'}
                  className="px-8 py-3 gradient-button rounded-xl text-sm font-bold flex items-center gap-2 group disabled:opacity-50"
                >
                  Generate Blueprint
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.section>
          ) : null}

          {/* Dynamic Content */}
          {generationState === 'theme_recommendation' && (
            <ThemePreviewGallery onConfirm={handleGenerateFrontend} />
          )}

          {(generationState === 'generating_frontend' || generationState === 'frontend_preview') && (
            <FrontendPreviewWorkspace />
          )}

          {generationState === 'idle' && (
            <section className="pt-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-text-primary">My Projects</h3>
                <button className="text-xs font-bold text-primary hover:text-accent-pink transition-colors flex items-center gap-1">
                  View all <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                {/* Project Card 1 */}
                <motion.div whileHover={{ y: -6 }} className="bg-surface/80 backdrop-blur-xl rounded-xl p-4 flex flex-col group cursor-pointer border border-border hover:border-primary/30 transition-all shadow-lg hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)]">
                  <div className="aspect-[16/10] bg-background rounded-lg mb-4 border border-border overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                    <div className="w-full h-full p-2 flex flex-col gap-1.5 opacity-80">
                      <div className="w-full h-3 bg-primary/20 rounded-sm mb-1 flex items-center px-1"><div className="w-1/4 h-1.5 bg-primary/50 rounded-full"></div></div>
                      <div className="flex gap-1.5 flex-1">
                        <div className="w-1/3 h-full bg-accent-blue/20 rounded-sm flex flex-col gap-1 p-1">
                          <div className="w-full h-2 bg-accent-blue/30 rounded-sm"></div>
                          <div className="w-2/3 h-2 bg-accent-blue/30 rounded-sm"></div>
                        </div>
                        <div className="w-2/3 h-full bg-accent-pink/10 rounded-sm flex flex-col p-1 gap-1">
                           <div className="w-1/2 h-4 bg-accent-pink/30 rounded-sm"></div>
                           <div className="w-full flex-1 bg-white/5 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-[13px] font-bold text-text-primary mb-1">CRM Dashboard</h4>
                  <div className="flex items-center justify-between text-[11px] text-text-muted mb-4">
                    <span>Updated 2 mins ago</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">Completed</span>
                  </div>
                </motion.div>

                {/* Project Card 2 */}
                <motion.div whileHover={{ y: -6 }} className="bg-surface/80 backdrop-blur-xl rounded-xl p-4 flex flex-col group cursor-pointer border border-border hover:border-accent-pink/30 transition-all shadow-lg hover:shadow-[0_10px_30px_rgba(236,72,153,0.15)]">
                  <div className="aspect-[16/10] bg-background rounded-lg mb-4 border border-border overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/10 to-transparent"></div>
                    <div className="w-full h-full p-2 grid grid-cols-3 gap-1.5 opacity-80">
                       <div className="h-3 bg-accent-pink/20 rounded-sm col-span-3 mb-1"></div>
                       <div className="h-full bg-white/5 rounded-sm"></div>
                       <div className="h-full bg-white/5 rounded-sm"></div>
                       <div className="h-full bg-white/5 rounded-sm"></div>
                    </div>
                  </div>
                  <h4 className="text-[13px] font-bold text-text-primary mb-1">Project Management Tool</h4>
                  <div className="flex items-center justify-between text-[11px] text-text-muted mb-4">
                    <span>Updated 1 hour ago</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">Completed</span>
                  </div>
                </motion.div>

                {/* New Project Card */}
                <motion.div whileHover={{ y: -6 }} className="bg-transparent rounded-xl border-2 border-dashed border-border hover:border-primary/50 hover:bg-primary/5 flex flex-col items-center justify-center cursor-pointer group transition-all shadow-none">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:border-primary transition-colors">
                    <Plus className="w-6 h-6 text-text-primary" />
                  </div>
                  <div className="text-sm font-bold text-text-primary transition-colors">New Project</div>
                </motion.div>
              </div>
            </section>
          )}

        </div>

        {/* Right Column (Sidebars) */}
        <div className="w-[340px] shrink-0 space-y-8">
          
          {generationState === 'theme_recommendation' || generationState === 'generating_frontend' || generationState === 'frontend_preview' ? (
            <div className="space-y-8">
              <BlueprintPanel />
              <ThemeRecommendationPanel />
            </div>
          ) : (
            <div className="glass-card rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-sm font-bold text-text-primary">Popular Design Systems</h3>
                <button className="text-[11px] font-bold text-primary hover:text-accent-pink transition-colors">
                  View all
                </button>
              </div>
              <div className="space-y-5">
                {[
                  { name: "Enterprise Pro", cat: "Most popular", rating: "4.9", icon: "E", color: "bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.6)]" },
                  { name: "Tesla Luxury", cat: "Premium", rating: "4.8", icon: "T", color: "bg-purple-600 shadow-[0_0_10px_rgba(147,51,234,0.6)]" },
                  { name: "Apple Glass", cat: "Minimal", rating: "4.7", icon: "A", color: "bg-white text-black shadow-[0_0_10px_rgba(255,255,255,0.4)]" },
                ].map((sys, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className={clsx("w-10 h-10 rounded-xl flex items-center justify-center font-black text-[15px] text-white", sys.color)}>
                        {sys.icon}
                      </div>
                      <div>
                        <div className="text-[13px] font-bold text-text-primary group-hover:text-primary transition-colors">{sys.name}</div>
                        <div className="text-[11px] text-text-muted flex items-center gap-1.5 mt-0.5">
                          {sys.cat} <span className="text-[8px]">•</span> <span className="text-yellow-400 font-bold">{sys.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recent Activity */}
          <div className="glass-card rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-sm font-bold text-text-primary">Recent Activity</h3>
              <button className="text-[11px] font-bold text-primary hover:text-accent-pink transition-colors">
                View all
              </button>
            </div>
            <div className="space-y-5">
              {[
                { name: "CRM Dashboard", status: "Generated", time: "2 mins ago", icon: Code2, color: "text-white bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.6)]", dot: "bg-blue-400" },
                { name: "HRMS System", status: "Generated", time: "1 hour ago", icon: Users, color: "text-white bg-emerald-600 shadow-[0_0_10px_rgba(5,150,105,0.6)]", dot: "bg-emerald-400" },
                { name: "Analytics Platform", status: "Exported", time: "3 hours ago", icon: Download, color: "text-white bg-purple-600 shadow-[0_0_10px_rgba(147,51,234,0.6)]", dot: "bg-purple-400" },
              ].map((act, i) => {
                const Icon = act.icon;
                return (
                  <div key={i} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className={clsx("w-10 h-10 rounded-xl flex items-center justify-center", act.color)}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[13px] font-bold text-text-primary group-hover:text-primary transition-colors">{act.name}</div>
                        <div className="text-[11px] text-text-muted flex items-center gap-1.5 mt-0.5">
                          <span className={clsx("w-1.5 h-1.5 rounded-full shadow-[0_0_5px_currentColor]", act.dot)}></span>
                          {act.status} <span className="text-[8px]">•</span> {act.time}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Banner */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 ml-[140px] z-50">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-5 py-3 px-5 rounded-full bg-cosmic border border-primary/30 shadow-[0_20px_50px_rgba(139,92,246,0.3)] backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              <Sparkles className="w-3 h-3 text-primary" />
            </div>
            <span className="text-[13px] font-bold text-white tracking-wide">New: Theme Marketplace is now live.</span>
          </div>
          <button className="text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded-full gradient-button transition-all">
            Explore Now &rarr;
          </button>
        </motion.div>
      </div>

    </div>
  );
}
