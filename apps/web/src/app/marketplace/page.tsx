"use client";

import React, { useEffect } from "react";
import { ThemeMarketplace } from "@/components/ui/ThemeMarketplace";
import { useAppStore } from "@/store";

export default function Marketplace() {
  const { selectedThemeId } = useAppStore();

  useEffect(() => {
    if (selectedThemeId) {
      document.body.setAttribute('data-theme', selectedThemeId);
    }
  }, [selectedThemeId]);

  return (
    <div className="max-w-[1600px] mx-auto w-full relative pt-4">
      <ThemeMarketplace />
    </div>
  );
}
