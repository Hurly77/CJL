// import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
// import { Button } from "@nextui-org/react";
// import { motion } from "framer-motion";
import React from "react";

import ProjectCard from "@/app/components/Project/ProjectCard";
import { projects } from "@/lib/static/projects";

import { NextPageWithLayout } from "./_app";

// TODO: Add a bounce arrow to move between projects
// function BounceArrow({ direction }: { direction: number }) {
//   const Icon = direction === 1 ? ChevronDownIcon : ChevronUpIcon;
//   const bounceDown = { y: [0, -6, 6, 1, 0] };
//   const bounceUp = { y: [0, 6, -6, -1, 0] };
//   const transition = { duration: 2, repeat: Infinity, ease: "easeInOut" };

//   return (
//     <motion.span
//       transition={{ y: transition }}
//       animate={{ y: direction === 1 ? bounceDown.y : bounceUp.y }}
//       className="group-hover:rotate-180"
//     >
//       <Icon className="h-10 w-10 stroke-foreground" />
//     </motion.span>
//   );
// }

export const Projects: NextPageWithLayout = () => {
  // const [projectItem, setProjectItem] = React.useState(0);
  // const [scrollHeight, setScrollHeight] = React.useState(0);

  // function onClickMoveDown(direction: number) {
  //   const isUp = direction === 1;

  //   const element = document.getElementById("APP_OVERFLOW");
  //   if (element) {
  //     element.scrollBy({
  //       top: isUp ? 100 : -100,
  //       behavior: "smooth",
  //     });

  //     setProjectItem((prev) => prev + (isUp ? 1 : -1));
  //   }
  // }

  return (
    <div>
      {projects.map((project, i) => (
        <ProjectCard {...project} key={i} index={i} />
      ))}
      {/* <div className="absolute bottom-4 right-4 sm:right-1/4 flex flex-col gap-2">
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
        {projectItem !== 4 && (
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
      </div> */}
    </div>
  );
};
Projects.title = "C.J Leverett: Projects";

export default Projects;
