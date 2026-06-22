import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { Blueprint } from '@/store';
import { DNAThemeConfig } from '@/themes/dna/types';
import { 
  packageJsonTemplate, 
  tailwindConfigTemplate, 
  nextConfigTemplate, 
  tsConfigTemplate, 
  globalsCssTemplate, 
  layoutTsxTemplate, 
  readmeTemplate 
} from './templates';

export const exportProductionProject = async (blueprint: Blueprint, theme: DNAThemeConfig, frontendData: Record<string, any>) => {
  const zip = new JSZip();

  // Root Files
  zip.file("package.json", packageJsonTemplate(blueprint.projectName));
  zip.file("tailwind.config.ts", tailwindConfigTemplate());
  zip.file("next.config.mjs", nextConfigTemplate());
  zip.file("tsconfig.json", tsConfigTemplate());
  zip.file("README.md", readmeTemplate(blueprint.projectName));

  // Src Folder
  const src = zip.folder("src");
  if (!src) return;

  const app = src.folder("app");
  if (!app) return;

  // Global styles (injecting DNA classes if needed)
  app.file("globals.css", globalsCssTemplate(theme.dna.color)); // this is just a placeholder mapping
  app.file("layout.tsx", layoutTsxTemplate());

  // App router pages
  blueprint.pages.forEach((page, index) => {
    const isHome = index === 0; // First page is the root page
    const routeFolder = isHome ? app : app.folder(page.toLowerCase());
    if (!routeFolder) return;

    routeFolder.file("page.tsx", `
import React from 'react';

export default function ${page.replace(/\\s+/g, '')}Page() {
  return (
    <div className="min-h-screen p-8 w-full">
      <h1 className="text-3xl font-bold mb-6">${page}</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder for generated components */}
        ${(frontendData[page] || []).map((comp: string) => 
          `<div className="p-6 rounded-xl border bg-white/5 border-white/10 shadow-lg">${comp}</div>`
        ).join('\\n        ')}
      </div>
    </div>
  );
}
`);
  });

  // Theme DNA Export (so the user has the raw tokens)
  const themeFolder = src.folder("theme");
  themeFolder?.file("dna.json", JSON.stringify(theme.dna, null, 2));

  // Generate ZIP and trigger download
  const content = await zip.generateAsync({ type: "blob" });
  saveAs(content, `${blueprint.projectName.toLowerCase().replace(/\\s+/g, '-')}-production-export.zip`);
};
