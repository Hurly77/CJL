import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import NestedNavHead from "./components/ProjectsNav";

export default function ProjectsLayout({ children }) {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState();

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

  const tabs = [
    { id: 0, title: "Vanilla", href: "/projects/vanilla" },
    { id: 1, title: "React", href: "/projects/react-and-next" },
    { id: 2, title: "Python", href: "/projects/python" },
    { id: 3, title: "C", href: "/projects/c-programming" },
    { id: 4, title: "APIs", href: "/projects/node-and-apis" },
  ];

  return (
    <div className="flex justify-center w-full mb-10">
      <NestedNavHead tabs={tabs}>
        <div className="w-full lg:px-6 lg:overflow-y-auto lg:h-[68vh]  bg-base-100">{children}</div>
      </NestedNavHead>
    </div>
  );
}
