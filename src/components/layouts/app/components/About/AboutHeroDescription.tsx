import { Divider } from "@nextui-org/react";
import { motion } from "framer-motion";

const yearsOfExperience = new Date().getFullYear() - 2021;
const numOfProjects = 55;
const About = {
  title: "Nice to meet you,",
  subtitle: "I'm Cameron Leverett",
  description: `Hello! I'm Cameron Leverett, a software developer with  ${yearsOfExperience}+ years of experience. Dive in to learn more about my journey and work!`,
  button: "Get in touch",
};

function AboutHighlight({ metric, description }: { metric: number; description: string }) {
  return (
    <div className="inline-flex items-center gap-2 font-semibold">
      <div className="inline-flex justify-center text-4xl sm:text-7xl sm:-space-x-2">
        <span className="h-full">{metric}</span>
        <span className="-translate-y-1 text-primary h-fit">+</span>
      </div>

      <span className="text-lg sm:text-xl sm:max-w-32 text-nowrap">{description}</span>
    </div>
  );
}

export default function AboutHeroDescription() {
  return (
    <div className="max-w-2xl h-fit">
      <motion.h1
        className="inline-flex flex-col text-2xl font-bold sm:text-7xl"
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="mb-2">Nice to meet you,</span>
        <span>I&apos;m Cameron </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="my-4 text-foreground-600"
      >
        {About.description}
      </motion.p>

      <Divider className="my-8" />

      <motion.div
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-4 px-4 sm:flex-row sm:justify-between"
      >
        <AboutHighlight metric={yearsOfExperience} description="Years of Experience" />
        <AboutHighlight metric={numOfProjects} description="Completed Projects" />
      </motion.div>
    </div>
  );
}
