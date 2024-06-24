import { motion } from "framer-motion";

import { SocialIcons } from "./index";

export default function SocialsAnimatedList() {
  const duration = 0.2;
  const initial = { x: -56, opacity: 0 };

  return SocialIcons.map(({ Icon, z }, i) => {
    const delay = duration * i;
    const animate = { x: 0, opacity: 1 };

    return (
      <motion.a
        key={i}
        initial={initial}
        animate={animate}
        transition={{ duration, delay }}
        style={{ zIndex: z }}
        className="cursor-pointer bg-content2 rounded-full transition-colors hover:bg-primary"
      >
        <Icon className="h-12 w-12 fill-foreground p-2 transition-colors hover:fill-white" />
      </motion.a>
    );
  });
}
