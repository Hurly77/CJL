import { projects } from "lib/static/projects";

import React from "react";
import ProjectCard from "@/components/Pages/Project/ProjectCard";

export const metadata = {
  title: "Projects - Cameron Leverett",
  description: "A list of personal projects I've created over the years.",
};

export default function Projects() {
  return (
    <div>
      {projects.map((project, idx) => (
        <ProjectCard {...project} key={idx} index={idx} />
      ))}
    </div>
  );
}
