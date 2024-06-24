import { Link } from "@nextui-org/react";
import { motion } from "framer-motion";

import { NextPageWithLayout } from "../../_app";

export const TestTransition: NextPageWithLayout = () => {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-base sm:text-lg text-foreground-400 p-2"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae error vitae facilis?
        Eveniet soluta, enim placeat voluptatum iusto a sed quasi nisi provident, ipsum eaque quos
        recusandae similique dolore hic.
      </motion.p>
    </div>
  );
};

TestTransition.getLayout = function (page: React.ReactElement) {
  return (
    <div className="app-page2xl flex-col snap-normal">
      <nav className="flex gap-4">
        <Link href="/test/animation">Test Animation</Link>
        <Link href="/test/animation/transition">Test Transition</Link>
      </nav>
      {page}
    </div>
  );
};
TestTransition.title = "Test Transition";
export default TestTransition;
