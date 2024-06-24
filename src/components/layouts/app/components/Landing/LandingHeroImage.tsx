import { Card, Image } from "@nextui-org/react";
import { motion } from "framer-motion";

import SocialsAnimatedList from "../Socials/SocialsAnimateList";

export default function LandingHeroImage() {
  const image = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: [1, 1, 1, 1],
      y: [100, 0, 0, 0],
    },
  };

  return (
    <div>
      <motion.div
        initial={image.initial}
        animate={image.animate}
        transition={{ duration: 1, times: [0, 0.5, 0.75, 0.75, 1] }}
        className="border-2 w-fit h-fit border-primary rounded"
      >
        <motion.div
          animate={{
            opacity: [0, 1],
            x: 0,
            transform: [
              "translate(0px, 0px)",
              "translate(0px, 0px)",
              "translate(0px, 0px)",
              "translate(calc(1vw), calc(1vw))",
            ],
          }}
          className="object-cover w-full h-full rounded translate-x-0"
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
      <div className="flex translate-y-10 gap-4 items-center justify-center">
        <SocialsAnimatedList />
      </div>
    </div>
  );
}
