import { projects } from "lib/static/projects";
import { Metadata } from "next";
import React from "react";

import ProjectCard from "@/components/Pages/Project/ProjectCard";

export const metadata: Metadata = {
  title: "Projects - Cameron Leverett",
  authors: [{ name: "Cameron Leverett", url: "https://cjleverett.me" }],
  applicationName: "CJ Leverett Portfolio",
  colorScheme: "dark",
  description:
    "Cameron John Leverett, Software Engineer Projects, Web Developer full-stack, front-end, back-end.",
};

export default function Projects() {
  return (
    <div className="flex flex-col items-center">
      {projects.map((project, idx) => (
        <ProjectCard {...project} key={idx} index={idx} />
      ))}
    </div>
  );
}
