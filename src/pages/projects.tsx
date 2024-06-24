import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

import ProjectCard, { ProjectCardProps } from "@/app/components/Project/ProjectCard";

import { NextPageWithLayout } from "./_app";

function BounceArrow() {}

export const Projects: NextPageWithLayout = () => {
  const defaults: ProjectCardProps = {
    title: "React Project UI",
    skills: ["NextJS", "React", "TypeScript", "TailwindCSS", "Docker", "AWS"],
    description: "",
    demo: "",
    github: "",
    video: "https://youtu.be/i6NXZF1CE5Y?si=ok1EugSL9gEmBVZu",
    thumbnail: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    index: 0,
  };

  function onClickMoveDown() {
    const element = document.getElementById("APP_OVERFLOW");
    if (element) {
      element.scrollBy({
        top: 100,
        behavior: "smooth",
      });
    }
  }

  return (
    <div>
      {Array.from({ length: 10 }).map((_, i) => (
        <ProjectCard {...defaults} key={i} index={i} />
      ))}
      <Button
        onClick={onClickMoveDown}
        isIconOnly
        color="primary"
        size="lg"
        className="absolute bottom-4 right-4 sm:bottom-0 sm:right-1/4 group rounded-full"
      >
        <motion.span
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          animate={{ y: [0, -6, 6, 1, 0] }}
          className="group-hover:rotate-180"
        >
          <ChevronDownIcon className="h-10 w-10 stroke-foreground" />
        </motion.span>
      </Button>
    </div>
  );
};
Projects.title = "C.J Leverett: Projects";

export default Projects;
