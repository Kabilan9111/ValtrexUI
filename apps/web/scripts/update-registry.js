const fs = require('fs');
const content = fs.readFileSync('src/themes/dna/registry.ts', 'utf8');

// The archetypes we want to map categories to:
/*
  1. mac-os
  2. dense-terminal 
  3. chat-workspace 
  4. document-editor 
  5. trading-dashboard 
  6. luxury-kpi 
  7. ide-workspace 
  8. design-canvas 
  9. ai-chat 
  10. healthcare-portal 
  11. education-hub 
  12. ecommerce-admin 
  13. enterprise-erp 
  14. banking-portal 
  15. gaming-hub
  16. minimal-dashboard
*/

// Example category logic
const mapThemeToArchetype = (themeId, category) => {
  if (category === 'Basic') return 'minimal-dashboard';
  if (category === 'AI & Futuristic' || category === 'AI') {
    if (themeId.includes('workspace') || themeId.includes('agent')) return 'ai-chat';
    if (themeId.includes('cursor') || themeId.includes('ide')) return 'ide-workspace';
    return 'ai-chat';
  }
  if (category === 'SaaS') {
    if (themeId.includes('apple') || themeId.includes('glass')) return 'mac-os';
    if (themeId.includes('notion') || themeId.includes('doc')) return 'document-editor';
    return 'mac-os';
  }
  if (category === 'Finance') {
    if (themeId.includes('trading') || themeId.includes('bloomberg') || themeId.includes('terminal')) return 'dense-terminal';
    return 'banking-portal';
  }
  if (category === 'Luxury') return 'luxury-kpi';
  if (category === 'Gaming') return 'gaming-hub';
  if (category === 'Enterprise') return 'enterprise-erp';
  if (category === 'Healthcare') return 'healthcare-portal';
  if (category === 'Education') return 'education-hub';
  if (category === 'Ecommerce') return 'ecommerce-admin';
  if (category === 'Creative') {
    if (themeId.includes('framer') || themeId.includes('studio') || themeId.includes('canvas')) return 'design-canvas';
    return 'design-canvas';
  }
  return 'minimal-dashboard';
};

let modifiedContent = content;
let match;
const regex = /id:\s*"([^"]+)"[\s\S]*?category:\s*"([^"]+)"[\s\S]*?"layout":\s*"([^"]+)"/g;

const replacements = [];
while ((match = regex.exec(content)) !== null) {
  const [fullMatch, id, category, layout] = match;
  const newLayout = mapThemeToArchetype(id.toLowerCase(), category);
  
  // Create replacement string
  const newFullMatch = fullMatch.replace(`"layout": "${layout}"`, `"layout": "${newLayout}"`);
  replacements.push({ old: fullMatch, new: newFullMatch });
}

// Special overrides based on user examples
const specificOverrides = {
  'apple-glass': 'mac-os',
  'bloomberg-pro': 'dense-terminal',
  'discord-x': 'chat-workspace',
  'notion-os': 'document-editor',
  'tradingview-pro': 'trading-dashboard',
  'tesla-luxury': 'luxury-kpi',
  'cursor-ai': 'ide-workspace',
  'framer-studio': 'design-canvas',
  'openai-workspace': 'ai-chat',
  'healthcare-plus': 'healthcare-portal',
  'learning-hub': 'education-hub',
  'ecommerce-pro': 'ecommerce-admin',
  'enterprise-elite': 'enterprise-erp',
  'banking-prime': 'banking-portal',
  'gaming-arena': 'gaming-hub'
};

for (const [id, newLayout] of Object.entries(specificOverrides)) {
  const r = replacements.find(r => r.old.includes(`id: "${id}"`));
  if (r) {
    r.new = r.new.replace(/"layout": "[^"]+"/, `"layout": "${newLayout}"`);
  }
}

for (const r of replacements) {
  modifiedContent = modifiedContent.replace(r.old, r.new);
}

fs.writeFileSync('src/themes/dna/registry.ts', modifiedContent, 'utf8');
console.log('Successfully updated registry layouts!');
