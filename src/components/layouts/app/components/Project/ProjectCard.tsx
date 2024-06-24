import { motion, MotionConfig } from "framer-motion";
import React from "react";

import AnimatedSkillIcons from "../SkillIcons/AnimatedSkillIcons";
import ProjectButtons from "./ProjectButtons";
import ProjectDescription from "./ProjectDescription";
import ProjectVideo from "./ProjectVideo";

export interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  skills: string[];
  demo: string;
  github: string;
  video: string;
  thumbnail: string;
}

const defaults: ProjectCardProps = {
  title: "React Project UI",
  skills: ["NextJS", "React", "TypeScript", "TailwindCSS", "Docker", "AWS"],
  description:
    " A simple web app built to quickly find jobs in Ireland. Users enter the search term and desired county, and are offered job listings from 3 of the most popular job sites in Ireland",
  demo: "",
  github: "",
  video: "https://youtu.be/i6NXZF1CE5Y?si=ok1EugSL9gEmBVZu",
  thumbnail: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
  index: 0,
};

export default function ProjectCard(props?: ProjectCardProps) {
  const { title, skills, thumbnail, video } = { ...defaults, ...props };
  const [didMount, setDidMount] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setDidMount(true);
    }
  }, []);

  return (
    <section className="project-section">
      <div className="flex flex-col sm:space-y-0 space-y-2 justify-between w-full">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="pl-2 text-2xl sm:text-3xl whitespace-nowrap font-medium"
        >
          {title}
        </motion.h1>
        {didMount && <ProjectVideo url={video} thumbnail={thumbnail} />}
      </div>
      <MotionConfig
        transition={{
          duration: 0.4,
          delay: 0.8,
        }}
      >
        <div className="flex flex-col gap-6 justify-between p-2">
          <ProjectButtons demo={defaults.demo} github={defaults.github} />

          <ProjectDescription
            text=" A simple web app built to quickly find jobs in Ireland. Users enter the search term and
          desired county, and are offered job listings from 3 of the most popular job sites in
          Ireland"
          />
        </div>
      </MotionConfig>
      <div className="flex flex-wrap justify-start gap-4 w-full p-2">
        <AnimatedSkillIcons skills={skills} />
      </div>
    </section>
  );
}
