import { useEffect, useState } from "react";

const useScreen = () => {
  const [screen, setScreen] = useState({});
  const [mounted, setMounted] = useState(false);
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    if (!mounted) {
      window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
        setScreen(window.screen);
      });
      setScreenWidth(window.innerWidth);
      setScreen(window.screen);
    }
    return () => setMounted(true);
  }, [mounted]);

  return { screen: screen, screenWidth: screenWidth };
};

export default useScreen;
