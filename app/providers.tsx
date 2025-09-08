"use client";

import type { ThemeProviderProps } from "next-themes";
import { useFont } from "@/components/Dropdowns/FontDropDown";
import { ThemeWrapper } from "@/components/Layout/ThemeWrapper";

import NavigationBar from "@/components/Navigation/NavigationBar";
import NavigationFooter from "@/components/Navigation/NavigationFooter";

import React from "react";
import { HeroUIProvider } from "@heroui/system";
import { usePathname, useRouter } from "next/navigation";
import { ThemeProvider } from "next-themes";
import clsx from "clsx";

export interface AppContextProps {
  fontStates: ReturnType<typeof useFont>;
}

export interface ProviderProps extends ThemeProviderProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>["push"]>[1]>;
  }
}

const AppContext = React.createContext({} as AppContextProps);
export function useApp() {
  return React.useContext(AppContext);
}

export function Providers({ children, themeProps }: ProviderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { font, setFont } = useFont();
  const appContextValue = { fontStates: { font, setFont } };

  return (
    <AppContext.Provider value={appContextValue}>
      <HeroUIProvider
        navigate={(path, routerOptions) => {
          router.push(path, { ...routerOptions, scroll: true });
        }}
      >
        <ThemeProvider {...themeProps}>
          <div id="APP" className={clsx("app", font.font?.className)}>
            <ThemeWrapper>
              <div
                id="APP_OVERFLOW"
                className={clsx(
                  "app-overflow",
                  ["/projects"].includes(pathname) ? "snap-mandatory snap-y" : "",
                )}
              >
                <NavigationBar />
                {children}
                <NavigationFooter />
              </div>
            </ThemeWrapper>
          </div>
        </ThemeProvider>
      </HeroUIProvider>
    </AppContext.Provider>
  );
}
