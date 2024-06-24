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
        navigate={(path) => {
          console.log("navigate", path);
          router.push(path, path, {
            scroll: false,
          });
        }}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div
            id="APP"
            className={cls(
              "flex flex-col h-screen  from-background bg-gradient-to-tl from-50% via-content2 to-content2",
              font.font?.className,
            )}
          >
            <ThemeWrapper>
              <div
                id="APP_OVERFLOW"
                className={cls(
                  "app-overflow overflow-x-hidden scroll-smooth",
                  ["/projects", "/"].includes(router.pathname) ? "snap-mandatory snap-y" : "",
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
