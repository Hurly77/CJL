import DropDown from "common/drop-down/drop-down";
import Progress from "common/loaders/progress";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change/index.js";

import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { themes } from "./constants/arrays";
import { useProgressStore } from "./hooks/useProgressStore";

const AppLayout = ({ children }) => {
  const router = useRouter();
  const [setDoc] = useState(false);

  const setIsAnimating = useProgressStore((state) => state.setIsAnimating);
  const isAnimating = useProgressStore((state) => state.isAnimating);

  if (typeof document !== "undefined") {
    window.router = router;
  }

  useEffect(() => {
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

  useEffect(() => {
    themeChange(false);
    () => setDoc(true);
  }, [router.pathname, setDoc]);
  return router !== "undefined" && router.pathname === "/" ? (
    <div>{children}</div>
  ) : (
    <>
      <Head>
        <title>{router.pathname.split("/").join("").toUpperCase()}</title>
        <link rel="icon" type="image/svg+xml" href="images/favicon.svg" />
        <meta
          name="description"
          content="Cameron John Leverett, Software engineer, web Developer full-stack"
        />
      </Head>

      <div className="bg-base-100">
        <Navbar>
          <DropDown name="Themes">
            {themes.map(({ name, id }) => (
              <li key={id}>
                <a tabIndex="0" data-set-theme={name.toLowerCase()} data-act-class="active">
                  {name === "" ? "Default" : name}
                </a>
              </li>
            ))}
          </DropDown>
        </Navbar>
        {router.pathname !== "/" ? (
          <Progress isAnimating={isAnimating} animationDuration={800} />
        ) : null}

        <div className="max-w-5xl m-auto min-h-[91.5vh]">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
