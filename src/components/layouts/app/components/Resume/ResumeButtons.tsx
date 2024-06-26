import { ArrowDownTrayIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function ResumeButtons() {
  return (
    <motion.div
      initial={{ opacity: 0.1, y: -100, rotate: 3 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{
        delay: 1,
        type: "spring",
        stiffness: 200,
        rotate: { delay: 1, duration: 1 },
      }}
      className="gap-4 flex w-full px-2 sm:px-0 justify-between sm:justify-end max-w-screen-lg py-2 sticky top-16 z-10"
    >
      <Button
        as="a"
        color="primary"
        target="_blank"
        href="/images/cameron_leverett_resume.pdf"
        endContent={<ArrowTopRightOnSquareIcon className="h-5 w-5" />}
      >
        Full Resume
      </Button>

      <Button
        as="a"
        download
        variant="bordered"
        color="secondary"
        className="text-foreground bg-background bg-opacity-60"
        href="/images/cameron_leverett_resume.pdf"
        endContent={<ArrowDownTrayIcon className="w-5 h-5" />}
      >
        Download
      </Button>
    </motion.div>
  );
}
