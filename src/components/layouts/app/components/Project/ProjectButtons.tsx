import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

import { GithubIcon } from "../Socials";

export default function ProjectButtons({ demo, github }: { demo: string; github: string }) {
  return (
    <div className="flex gap-4 sm:mt-8 justify-between sm:p-2 py-2">
      <motion.a
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="cursor-pointer"
        href={github}
        target="_blank"
      >
        <Button
          variant="bordered"
          color="secondary"
          className="text-foreground"
          endContent={<GithubIcon className="h-6 w-6 fill-foreground" />}
        >
          Github
        </Button>
      </motion.a>
      <motion.a
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        href={demo}
        target="_blank"
      >
        <Button endContent={<ComputerDesktopIcon className="h-6 w-6" />} color="primary">
          Demo
        </Button>
      </motion.a>
    </div>
  );
}
