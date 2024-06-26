import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="border-2 rounded-full border-secondary"
    >
      <div className="overflow-hidden rounded-full w-fit h-fit">
        <Image
          className="object-contain translate-y-10 sm:translate-y-4 translate-x-7 sm:translate-x-10 aspect-square"
          src="/images/me.png"
          alt="hero"
          width={500}
          height={500}
        />
      </div>
    </motion.div>
  );
}
