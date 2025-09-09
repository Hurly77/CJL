import React from "react";

export default function useSizes() {
  const [sizes, setSizes] = React.useState({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setSizes({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const isSmall = sizes.width <= 640 && sizes.width !== 0;

  return { ...sizes, isSmall };
}
