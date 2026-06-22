"use client";

import React from "react";
import { DNAThemeConfig } from "@/themes/dna/types";

// Import archetypes
import { ArchetypeMacOS } from "./archetypes/ArchetypeMacOS";
import { ArchetypeTerminal } from "./archetypes/ArchetypeTerminal";
import { ArchetypeChat } from "./archetypes/ArchetypeChat";
import { ArchetypeDocument } from "./archetypes/ArchetypeDocument";
import { ArchetypeTrading } from "./archetypes/ArchetypeTrading";
import { ArchetypeLuxury } from "./archetypes/ArchetypeLuxury";
import { ArchetypeIDE } from "./archetypes/ArchetypeIDE";
import { ArchetypeCanvas } from "./archetypes/ArchetypeCanvas";
import { ArchetypeAIChat } from "./archetypes/ArchetypeAIChat";
import { ArchetypeHealthcare } from "./archetypes/ArchetypeHealthcare";
import { ArchetypeEducation } from "./archetypes/ArchetypeEducation";
import { ArchetypeEcommerce } from "./archetypes/ArchetypeEcommerce";
import { ArchetypeEnterprise } from "./archetypes/ArchetypeEnterprise";
import { ArchetypeBanking } from "./archetypes/ArchetypeBanking";
import { ArchetypeGaming } from "./archetypes/ArchetypeGaming";
import { ArchetypeMinimal } from "./archetypes/ArchetypeMinimal";

interface ThemeMiniDashboardProps {
  theme?: DNAThemeConfig;
}

export function ThemeMiniDashboard({ theme }: ThemeMiniDashboardProps) {
  if (!theme) return null;

  const layout = theme.dna.layout;

  switch (layout) {
    case 'mac-os':
      return <ArchetypeMacOS theme={theme} />;
    case 'dense-terminal':
      return <ArchetypeTerminal theme={theme} />;
    case 'chat-workspace':
      return <ArchetypeChat theme={theme} />;
    case 'document-editor':
      return <ArchetypeDocument theme={theme} />;
    case 'trading-dashboard':
      return <ArchetypeTrading theme={theme} />;
    case 'luxury-kpi':
      return <ArchetypeLuxury theme={theme} />;
    case 'ide-workspace':
      return <ArchetypeIDE theme={theme} />;
    case 'design-canvas':
      return <ArchetypeCanvas theme={theme} />;
    case 'ai-chat':
      return <ArchetypeAIChat theme={theme} />;
    case 'healthcare-portal':
      return <ArchetypeHealthcare theme={theme} />;
    case 'education-hub':
      return <ArchetypeEducation theme={theme} />;
    case 'ecommerce-admin':
      return <ArchetypeEcommerce theme={theme} />;
    case 'enterprise-erp':
      return <ArchetypeEnterprise theme={theme} />;
    case 'banking-portal':
      return <ArchetypeBanking theme={theme} />;
    case 'gaming-hub':
      return <ArchetypeGaming theme={theme} />;
    case 'minimal-dashboard':
    default:
      return <ArchetypeMinimal theme={theme} />;
  }
}
