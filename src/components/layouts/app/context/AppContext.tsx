import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import React from "react";

import { useFont } from "@/components/drop-down/FontDropDown";

import { cls } from "../helpers/twind-helpers";

interface AppContextProps {
  fontStates: ReturnType<typeof useFont>;
}

const AppContext = React.createContext({} as AppContextProps);

export function AppContextProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const { font, setFont } = useFont();
  const value = { fontStates: { font, setFont } };

  return (
    <AppContext.Provider value={value}>
      <NextUIProvider navigate={router.push}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div id="APP" className={cls("flex flex-col h-screen", font.font?.className)}>
            {children}
          </div>
        </ThemeProvider>
      </NextUIProvider>
    </AppContext.Provider>
  );
}

export function useApp() {
  return React.useContext(AppContext);
}
