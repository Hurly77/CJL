import { motion } from "framer-motion";

import * as SkillIcons from "../SkillIcons";

const getSkillIcon = (skill = "React") => {
  switch (skill.toLowerCase()) {
    case "react":
      return SkillIcons.ReactIcon;
    case "javascript":
      return SkillIcons.JavaScriptIcon;
    case "html":
      return SkillIcons.HTMLIcon;
    case "css":
      return SkillIcons.CSSIcon;
    case "typescript":
      return SkillIcons.TypeScriptIcon;
    case "nextjs":
    case "next":
      return SkillIcons.NextJSIcon;
    case "tailwindcss":
    case "tailwind":
      return SkillIcons.TailwindIcon;
    case "docker":
      return SkillIcons.DockerIcon;
    case "nodejs":
    case "node":
      return SkillIcons.NodeJSIcon;
    case "aws":
      return SkillIcons.AWSIcon;
    case "postgresql":
      return SkillIcons.PostgreSQLIcon;
    case "mysql":
      return SkillIcons.MySQLIcon;
    case "supabase":
      return SkillIcons.SupabaseIcon;
    case "stripe":
      return SkillIcons.StripeIcon;
    case "nestjs":
      return SkillIcons.NestJSIcon;
    default:
      return SkillIcons.ReactIcon;
  }
};

export default function IconAnimateList({ skills }: { skills: string[] }) {
  const duration = 0.2;

  const Icons = skills.map((skill, idx) => {
    const Icon = getSkillIcon(skill);
    return { Icon, z: skills.length - idx };
  });

  return Icons.map(({ Icon, z }, i) => {
    const delay = duration * i + 0.5;
    const initial = { x: i === 0 ? 0 : -56, opacity: 0 };
    const animate = { x: 0, opacity: 1 };

    if (delay !== 0 && !delay) throw new Error(`Delay is not defined ${delay}`);

    return (
      <motion.div key={i} initial={initial} whileInView={animate} transition={{ delay, duration }}>
        <Icon
          key={i}
          style={{ zIndex: z }}
          className="h-10 w-10 fill-primary-50 p-1 hover:scale-125 transition-transform"
        />
      </motion.div>
    );
  });
}
