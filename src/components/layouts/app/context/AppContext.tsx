import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import React from "react";

import { useFont } from "@/components/Dropdowns/FontDropDown";

import NavigationBar from "../components/Navigation/NavigationBar";
import NavigationFooter from "../components/Navigation/NavigationFooter";
import { ThemeWrapper } from "../components/ThemeWrapper";
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
      <NextUIProvider
        navigate={async (path) => {
          await router.push(path, path, { scroll: true });
          const overflowElm = document.getElementById("APP_OVERFLOW");
          if (overflowElm) overflowElm.scrollTop = 0;
        }}
      >
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
        {/* @ts-ignore */}
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div id="APP" className={cls("app", font.font?.className)}>
            <ThemeWrapper>
              <div
                id="APP_OVERFLOW"
                className={cls(
                  "app-overflow",
                  ["/projects"].includes(router.pathname) ? "snap-mandatory snap-y" : "",
                )}
              >
                <NavigationBar />
                <div id="APP_CONTENT" className="app-content">
                  {children}
                </div>
                <NavigationFooter />
              </div>
            </ThemeWrapper>
          </div>
        </ThemeProvider>
      </NextUIProvider>
    </AppContext.Provider>
  );
}

export function useApp() {
  return React.useContext(AppContext);
}
