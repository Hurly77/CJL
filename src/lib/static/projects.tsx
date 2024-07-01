import { ProjectCardProps } from "@/app/components/Project/ProjectCard";

export const projects: ProjectCardProps[] = [
  {
    title: "E-Shop",
    description: `
   This minimalist e-commerce site, inspired by Target, uses React, NextJS,
   and TailwindCSS for the frontend, and NestJS and PostgreSQL for the backend.
   It features authentication, product browsing, Stripe checkout, and order management, deployed on AWS with Docker and Vercel.`,

    skills: [
      "React",
      "NextJS",
      "NestJS",
      "AWS",
      "Docker",
      "PostgreSQL",
      "TypeScript",
      "Tailwindcss",
      "NodeJS",
      "Stripe",
    ],
    demo: "https://eshop.cjleverett.me/",
    github: "https://github.com/Hurly77/e-comm",
    video: "https://youtu.be/KD7TLb1rVRE?si=dnK4YybjOZtsXWl_",
    thumbnail: "/images/projects/E-shop-thumbnail.jpg",
  },
  {
    title: "Toduit",
    description: `
    This a todos tracking site, inspired by Microsoft Todo, uses React, NextJS,
    and TailwindCSS for the frontend, and supabase for the backend.
    It features authentication, deployed on Vercel & Supabase.`,

    skills: ["React", "NextJS", "PostgreSQL", "TypeScript", "Tailwindcss", "supabase"],
    demo: "https://todos.cjleverett.me/",
    github: "https://github.com/Hurly77/e-comm",
    video: "https://youtu.be/7NRquv2la-Q",
    thumbnail: "/images/projects/toduit-thumbnail.jpg",
  },
  {
    title: "Blog-It",
    description: `
    This is a simple blog sit. built using css modules, React, Nextjs.
    This was the first project I built using Nextjs and I learned a lot from it.
    Project was build in late 2020.
    `,
    demo: "https://blog-it-hurly77.vercel.app/",
    github: "https://github.com/Hurly77/BlogIt",
    video: "https://youtu.be/rdG8EBFAMQM",
    thumbnail: "/images/projects/blog-it-thumbnail.jpg",
    skills: ["React", "NextJS", "JavaScript", "CSS"],
  },
  {
    title: "This Portfolio",
    description: `
    This is my personal portfolio site, built using React, NextJS, Framer Motion, and TailwindCSS.
    `,
    demo: "https://cjleverett.me/",
    github: "https://github.com/Hurly77/CJL",
    skills: ["React", "NextJS", "TypeScript", "Tailwindcss"],
    video: "https://youtu.be/CDN5Oo73jYA",
    thumbnail: "/images/projects/portfolio-thumbnail.png",
  },
];
