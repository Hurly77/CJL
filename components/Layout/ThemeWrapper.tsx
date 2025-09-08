import { useTheme } from "next-themes";
import React from "react";

import { useApp } from "@/app/providers";
import clsx from "clsx";

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const app = useApp();
  const { theme, setTheme } = useTheme();
  const { font, setFont } = app.fontStates;

  React.useEffect(() => {
    if (!theme) setTheme("dark");
  }, [theme, setTheme, font, setFont]);

  return (
    <div
      id="APP_THEME_WRAPPER"
      className={clsx("flex flex-col h-full", theme ?? "dark", font?.font.className)}
    >
      {children}
    </div>
  );
}
