import { motion } from "framer-motion";

import { cls } from "../../helpers/twind-helpers";
import { SocialIcons } from "./index";

export default function SocialsAnimatedList(props: { size?: "sm" | "md" | "lg" }): JSX.Element {
  const { size } = props;
  const duration = 0.2;
  const initial = { x: -56, opacity: 0 };

  return (
    <>
      {SocialIcons.map(({ Icon, z, link }, i) => {
        const delay = duration * i;
        const animate = { x: 0, opacity: 1 };

        return (
          <motion.a
            key={i}
            href={link}
            target="_blank"
            initial={initial}
            animate={animate}
            transition={{ duration, delay }}
            style={{ zIndex: z }}
            className="transition-colors rounded-full cursor-pointer bg-content2 hover:bg-primary"
          >
            <Icon
              className={cls(
                "transition-colors fill-foreground hover:fill-white",
                size === "sm"
                  ? "w-8 h-8 p-1.5"
                  : size == "md"
                  ? "w-10 h-10 p-1.5"
                  : "w-12 h-12 p-2",
              )}
            />
          </motion.a>
        );
      })}
    </>
  );
}
