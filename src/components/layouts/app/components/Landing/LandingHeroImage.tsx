import { Card } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";

import useSizes from "../../hooks/useSizes";
import SocialsAnimatedList from "../Socials/SocialsAnimateList";

export default function LandingHeroImage() {
  const { isSmall, width } = useSizes();

  const wrapper = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: [1, 1, 1, 1], y: [100, 0, 0, 0] },
    initialSmall: { opacity: 0, scale: 0 },
    animateSmall: { opacity: 1, scale: [0, 1.1, 0.95] },
  };

  const image = {
    initial: { opacity: 1, scale: 1 },
    animate: { opacity: [0, 1], translateX: [0, 0, 0, "1vw"], translateY: [0, 0, 0, "1vw"] },
    initialSmall: { opacity: 0.4, scale: 0.5 },
    animateSmall: { opacity: 1, scale: [0, 0.5, 1.03] },
  };

  if (width === 0) return null;

  return (
    <div className="min-h-fit">
      <motion.div
        key={`wrapper-isSmall=${isSmall?.toString()}`}
        variants={wrapper}
        initial={isSmall ? "initialSmall" : "initial"}
        animate={isSmall ? "animateSmall" : "animate"}
        transition={{ duration: 1 }}
        className="border-2 rounded w-fit h-fit border-primary bg-opacity-10 bg-primary shadow-small"
      >
        <motion.div
          key={`image-isSmall=${isSmall?.toString()}`}
          variants={image}
          initial={isSmall ? "initialSmall" : "initial"}
          animate={isSmall ? "animateSmall" : "animate"}
          className="object-cover w-full h-full translate-x-0 rounded"
        >
          <Card>
            <Image
              src="/images/Head-Shot.png"
              height={500}
              width={500}
              className="bg-content1 -scale-x-100"
              alt="Picture of Cameron Leverett"
            />
          </Card>
        </motion.div>
      </motion.div>
      <div className="flex items-center justify-center gap-4 pt-2 sm:pt-0 sm:translate-y-10">
        <SocialsAnimatedList />
      </div>
    </div>
  );
}
