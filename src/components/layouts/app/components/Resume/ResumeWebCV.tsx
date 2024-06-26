import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Card, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";

import { Education, Experience, Skills } from "@/lib/static/resume";

import { formatDate } from "../../helpers/formatter";
import ResumeSection from "./ResumeSection";

function ExpCard({ exp }: { exp: (typeof Experience)[0] }) {
  return (
    <Card
      isPressable
      shadow="none"
      onClick={() => window.open(exp.website, "_blank", "noopener,noreferrer")}
      className="bg-transparent p-2 cursor-pointer hover:bg-content1 hover:shadow-small group"
    >
      <div className="text-left">
        <ArrowTopRightOnSquareIcon className="w-5 h-5 sm:hidden group-hover:block absolute top-2 right-2" />
        <h2 className="font-medium">
          {exp.title}&nbsp;•&nbsp;{exp.company}
        </h2>
        <p className="text-foreground-500">
          {formatDate(exp.start)}&nbsp;―&nbsp;{formatDate(exp.end)}
        </p>
        <p className="text-foreground-600 text-sm ">{exp.description}</p>
        <div className="gap-2 flex my-2 flex-wrap">
          {exp.skills.map((skill, i) => (
            <Chip size="sm" key={skill + i}>
              {skill}
            </Chip>
          ))}
        </div>
      </div>
    </Card>
  );
}

// Just my resume, name is because of the page resume.tsx
export default function ResumeWebCV() {
  return (
    <div className="max-w-screen-lg py-12 sm:px-0 px-1">
      <ResumeSection title="Experience">
        {Experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <ExpCard exp={exp} />
          </motion.div>
        ))}
      </ResumeSection>

      <ResumeSection title="Education">
        {Education.map((edu, i) => (
          <motion.div
            key={i}
            className="p-2"
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="font-medium">
              {edu.school}&nbsp;•&nbsp;{edu.degree}
            </h3>
            <span className="text-foreground-500">
              {formatDate(edu.start)}&nbsp;―&nbsp; {formatDate(edu.end)}
            </span>
          </motion.div>
        ))}
      </ResumeSection>

      <ResumeSection title="Skills">
        <div className="flex flex-wrap gap-2 p-2">
          {Skills.map((skill, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: [0.1, 1.5, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: i * 0.1 }}
              key={skill + i}
            >
              <Chip>{skill}</Chip>
            </motion.div>
          ))}
        </div>
      </ResumeSection>
    </div>
  );
}
