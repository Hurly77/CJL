"use client";

import { ToastProvider } from "@heroui/react";
import { HeroUIProvider } from "@heroui/system";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider } from "next-themes";
import React from "react";

import { useFont } from "@/components/Dropdowns/FontDropDown";
import { ThemeWrapper } from "@/components/Layout/ThemeWrapper";
import NavigationBar from "@/components/Navigation/NavigationBar";
import NavigationFooter from "@/components/Navigation/NavigationFooter";

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
    <HeroUIProvider
      navigate={(path, routerOptions) => {
        router.push(path, { ...routerOptions, scroll: true });
      }}
    >
      <ToastProvider
        placement="top-right"
        toastProps={{
          color: "default",
          variant: "bordered",
        }}
      />
      <ThemeProvider {...themeProps} attribute="class" defaultTheme="dark">
        <div id="APP" className={clsx("app test-scrollbar dark", font.font?.className)}>
          <AppContext.Provider value={appContextValue}>
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
          </AppContext.Provider>
        </div>
      </ThemeProvider>
    </HeroUIProvider>
  );
}
