import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

import AppFooter from "./components/AppFooter";
import AppNavbar from "./components/AppNavbar";
import { ThemeWrapper } from "./components/ThemeWrapper";
import { AppContextProvider } from "./context/AppContext";
import { useProgressStore } from "./hooks/useProgressStore";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const setIsAnimating = useProgressStore((state) => state.setIsAnimating);
  const isAnimating = useProgressStore((state) => state.isAnimating);

  React.useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true);
    };
    const handleStop = () => {
      setIsAnimating(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router, isAnimating, setIsAnimating]);

  return (
    <>
      {/* <CJL /> */}
      <Head>
        <title>{router.pathname.split("/").join("").toUpperCase()}</title>
        <link rel="icon" type="image/svg+xml" href="images/favicon.svg" />
        <meta
          name="description"
          content="Cameron John Leverett, Software engineer, web Developer full-stack"
        />
      </Head>

      <AppContextProvider>
        <ThemeWrapper>
          <AppNavbar />
          <div
            id="APP_OVERFLOW"
            className="flex flex-col w-full max-h-full overflow-y-auto grow border-4 border-blue-500"
          >
            <div
              id="APP_CHILDREN_CONTAINER_H_FULL"
              className="flex flex-col justify-center w-full border-4 border-yellow-500 p-1"
            >
              {children}
            </div>
            <AppFooter />
          </div>
        </ThemeWrapper>
      </AppContextProvider>
    </>
  );
}

export default AppLayout;
