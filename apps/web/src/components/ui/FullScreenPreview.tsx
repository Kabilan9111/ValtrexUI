"use client";

import React from 'react';
import clsx from 'clsx';
import { useAppStore } from '@/store';
import { allThemes } from '@/themes';
import { Download, X } from 'lucide-react';
import { ThemeMiniDashboard } from './ThemeMiniDashboard';

export function FullScreenPreview() {
  const { selectedThemeId, setIsDownloadCenterOpen } = useAppStore();
  
  const theme = allThemes.find(t => t.id === selectedThemeId) || allThemes[0];

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col relative bg-black">
      {/* 
         Instead of recreating layouts, we simply leverage the highly detailed 
         Archetype components which natively support w-full h-full and look 
         great at both small (mini) and large (fullscreen) sizes. 
         We override the pointer-events-none by wrapping it in a div that allows pointer events, 
         or just let it be since it's a preview.
      */}
      <div className="w-full h-full relative [&>div]:pointer-events-auto">
         <ThemeMiniDashboard theme={theme} />
      </div>

      {/* Floating Action Controls for the Marketplace */}
      <div className="absolute bottom-8 right-8 flex items-center gap-4 z-50">
         <button 
           onClick={() => setIsDownloadCenterOpen(true)}
           className="px-6 py-3 rounded-full font-bold flex items-center gap-2 text-white shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-transform hover:scale-105 bg-gradient-to-r from-blue-600 to-indigo-600 border border-white/10"
         >
            <Download className="w-5 h-5" /> Export {theme.metadata.name}
         </button>
      </div>
    </div>
  );
}
