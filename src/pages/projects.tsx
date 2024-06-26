import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import React from "react";

import ProjectCard, { ProjectCardProps } from "@/app/components/Project/ProjectCard";

import { NextPageWithLayout } from "./_app";

function BounceArrow({ direction }: { direction: number }) {
  const Icon = direction === 1 ? ChevronDownIcon : ChevronUpIcon;
  const bounceDown = { y: [0, -6, 6, 1, 0] };
  const bounceUp = { y: [0, 6, -6, -1, 0] };
  const transition = { duration: 2, repeat: Infinity, ease: "easeInOut" };

  return (
    <motion.span
      transition={{ y: transition }}
      animate={{ y: direction === 1 ? bounceDown.y : bounceUp.y }}
      className="group-hover:rotate-180"
    >
      <Icon className="h-10 w-10 stroke-foreground" />
    </motion.span>
  );
}

export const Projects: NextPageWithLayout = () => {
  const [projectItem, setProjectItem] = React.useState(0);
  const [scrollHeight, setScrollHeight] = React.useState(0);

  React.useEffect(() => {
    const element = document.getElementById("APP_OVERFLOW");
    if (element) {
      setScrollHeight(element.scrollHeight);
    }
  }, []);

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

  function onClickMoveDown(direction: number) {
    const isUp = direction === 1;

    const element = document.getElementById("APP_OVERFLOW");
    if (element) {
      element.scrollBy({
        top: isUp ? 100 : -100,
        behavior: "smooth",
      });

      setProjectItem((prev) => prev + (isUp ? 1 : -1));
    }
  }

  return (
    <div>
      {Array.from({ length: 10 }).map((_, i) => (
        <ProjectCard {...defaults} key={i} index={i} />
      ))}
      <div className="absolute bottom-4 right-4 sm:right-1/4 flex flex-col gap-2">
        {projectItem !== 0 && (
          <Button
            aria-label="Move up"
            onClick={() => onClickMoveDown(0)}
            isIconOnly
            color="primary"
            size="lg"
            className=" group rounded-full"
          >
            <BounceArrow direction={0} />
          </Button>
        )}
        {projectItem !== 8 && (
          <Button
            aria-label="Move down"
            onClick={() => onClickMoveDown(1)}
            isIconOnly
            color="primary"
            size="lg"
            className="group rounded-full"
          >
            <BounceArrow direction={1} />
          </Button>
        )}
      </div>
    </div>
  );
};
Projects.title = "C.J Leverett: Projects";

export default Projects;
