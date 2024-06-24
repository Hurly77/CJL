import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function LandingHeroTitle() {
  return (
    <div className="h-fit overflow-hidden max-w-3xl ">
      <motion.h1
        className="font-semibold text-2xl sm:text-7xl inline-flex flex-col"
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <span>I&apos;m Cameron,</span>
        <span>Full Stack Developer</span>
      </motion.h1>
      <p className="my-4 text-foreground-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quaerat, explicabo debitis
        numquam quis expedita velit voluptate, accusamus esse exercitationem pariatur.
      </p>
      <div className="flex gap-4 my-4">
        <Button color="primary">Projects</Button>
        <Button color="secondary">Resume</Button>
      </div>
    </div>
  );
}
