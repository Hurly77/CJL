import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { motion } from "framer-motion";

import * as Skills from "../SkillIcons/index";

export default function AboutProfessionalSummary() {
  const variants = {
    hidden: { opacity: 0, y: 250 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex-col justify-center max-w-screen-lg px-5 my-6 app-page">
      <motion.h1
        variants={variants}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="py-4 text-4xl font-bold"
      >
        Tools & Skills
      </motion.h1>
      <motion.div
        variants={variants}
        initial={"hidden"}
        whileInView={"show"}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="tools-skills-wrapper"
      >
        {Object.keys(Skills).map((skill: string) => {
          const Skill = Skills[skill as keyof typeof Skills];
          return (
            <div key={skill} className="h-full sm:w-full ">
              <Card className="h-full tool-skill-card">
                <CardHeader>
                  <div className="p-4 rounded-full bg-primary">
                    <Skill key={skill} className="w-16 h-16 fill-foreground" />
                  </div>
                </CardHeader>
                <CardBody>
                  <h3 className="text-2xl font-semibold">{skill?.replace("Icon", "")}</h3>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
