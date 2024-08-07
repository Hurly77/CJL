import { useTheme } from "next-themes";
import React from "react";

import { useApp } from "../context/AppContext";
import { cls } from "../helpers/twind-helpers";

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
      className={cls("flex flex-col h-full", theme ?? "dark", font?.font.className)}
    >
      {children}
    </div>
  );
}
