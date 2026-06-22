import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/store';
import { allThemes } from '@/themes';
import { X, Download, FileJson, LayoutTemplate, Layers, Info } from 'lucide-react';
import { exportProductionProject } from '@/lib/export-engine/generator';
export function DownloadCenter() {
  const { isDownloadCenterOpen, setIsDownloadCenterOpen, selectedThemeId, blueprint, generatedFrontend } = useAppStore();

  const theme = allThemes.find(t => t.id === selectedThemeId);

  if (!theme) return null;

  const handleFullProjectExport = () => {
    if (blueprint && theme && 'dna' in theme) {
      exportProductionProject(blueprint, theme, generatedFrontend || {});
    }
  };

  return (
    <AnimatePresence>
      {isDownloadCenterOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={() => setIsDownloadCenterOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-surface border border-border rounded-2xl shadow-2xl z-[101] overflow-hidden"
          >
            <div className="p-6 border-b border-border flex items-center justify-between bg-background/50">
              <div>
                <h2 className="text-xl font-bold text-text-primary">Download Center</h2>
                <p className="text-sm text-text-secondary mt-1">Export your assets for {theme.metadata.name}</p>
              </div>
              <button 
                onClick={() => setIsDownloadCenterOpen(false)}
                className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center hover:bg-surface hover:text-rose-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* Full Project Export */}
              <div className="p-4 rounded-xl border border-border bg-background hover:border-emerald-500/50 transition-colors flex items-center justify-between group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <Layers className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary flex items-center gap-2">
                      Full Next.js Project 
                      <span className="px-2 py-0.5 rounded text-[9px] font-black uppercase bg-emerald-500/20 text-emerald-500">Production Ready</span>
                    </h3>
                    <p className="text-xs text-text-secondary mt-1">A complete runnable project with Next.js, Tailwind, and your generated DNA UI.</p>
                  </div>
                </div>
                <button 
                  onClick={handleFullProjectExport}
                  disabled={!blueprint || !('dna' in theme)}
                  className="shrink-0 px-4 py-2 rounded-lg bg-emerald-600 text-white font-bold text-sm hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Download className="w-4 h-4" /> Export ZIP
                </button>
              </div>

            </div>

            <div className="p-4 bg-background/50 border-t border-border flex items-center gap-2 text-xs text-text-secondary">
              <Info className="w-4 h-4 text-primary" /> All exports are fully typed and strictly compatible with Tailwind CSS v4.
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
