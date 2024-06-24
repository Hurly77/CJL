import { motion } from "framer-motion";

export default function ProjectDescription({ text }: { text: string }) {
  return (
    <motion.div
      key={"description"}
      initial={{ opacity: 0, y: -200 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: -200,
      }}
      className="text-base sm:text-lg text-foreground-400 p-2"
    >
      {text}
    </motion.div>
  );
}
