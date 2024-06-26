import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function LandingHeroTitle() {
  const router = useRouter();

  return (
    <div className="max-w-3xl p-2 overflow-hidden h-fit">
      <motion.h1
        className="inline-flex flex-col text-2xl font-semibold sm:text-7xl"
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <span>I&apos;m Cameron,</span>
        <span>Full Stack Developer</span>
      </motion.h1>
      <p className="my-4 text-foreground-500">
        Welcome! I’m a passionate Full-Stack Developer dedicated to crafting dynamic websites and
        applications using React, NodeJS, and TypeScript—explore my hands-on projects.
      </p>
      <div className="flex gap-4 my-4">
        <Button onClick={() => router.push("/projects")} color="primary">
          Projects
        </Button>
        <Button onClick={() => router.push("/resume")} href="/resume" color="secondary">
          Resume
        </Button>
      </div>
    </div>
  );
}
