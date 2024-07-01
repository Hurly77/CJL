import { Divider } from "@nextui-org/react";
import { motion, MotionConfig } from "framer-motion";

export default function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <MotionConfig transition={{ duration: 0.5, delay: 0.1 }}>
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
        className="text-2xl font-bold text-foreground"
      >
        {title}
      </motion.h1>
      <Divider className="mt-1 mb-2" />
      <div className="space-y-2">{children}</div>
    </MotionConfig>
  );
}
