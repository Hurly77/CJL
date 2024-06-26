import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";

import { AboutMyStorySection } from "@/lib/static/about";

import { cls } from "../../helpers/twind-helpers";

function AboutStory(props: {
  title: string;
  description: string;
  image: string;
  placement: "top" | "bottom";
}) {
  const { title, description, image, placement } = props;
  const placementTop = placement === "top";
  const variants = {
    hide: { opacity: 0, y: 250 },
    show: { opacity: 1, y: 0 },
  };

  const ImageItem = () => (
    <motion.div
      key={placement}
      variants={variants}
      initial="hide"
      whileInView="show"
      viewport={{ once: true }}
      className={cls(
        "border-2 border-primary p-1 rounded-lg h-fit w-fit",
        placementTop ? "border-primary" : "border-secondary",
      )}
    >
      <Image
        className={"rounded-lg object-cover w-full aspect-auto"}
        src={image}
        alt="story"
        height={720}
        width={560}
      />
    </motion.div>
  );

  return (
    <MotionConfig transition={{ duration: 1 }}>
      <section
        className={cls(
          "self-start max-w-xl w-full sm:gap-14 gap-8 sm:px-6 px-1",
          placementTop ? "flex flex-col-reverse sm:grid" : "grid",
          !placementTop ? "sm:mt-32 justify-items-end" : "",
        )}
      >
        {placement === "top" && <ImageItem />}
        <motion.div
          transition={{
            delay: 0.1,
            duration: 1,
          }}
          variants={variants}
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          className="px-2"
        >
          <h2 className="w-full my-2 text-4xl font-bold">{title}</h2>
          <div className="text-sm break-words text-foreground-500 sm:text-lg">{description}</div>
        </motion.div>
        {placement === "bottom" && <ImageItem />}
      </section>
    </MotionConfig>
  );
}

export default function AboutMyStory() {
  const { myStart, myFirstProject } = AboutMyStorySection;
  return (
    <div className="items-center justify-center app-page ">
      <div>
        <div className="grid w-full max-w-screen-xl gap-10 sm:grid-flow-col">
          <AboutStory {...myFirstProject} placement="top" />
          <AboutStory {...myStart} placement="bottom" />
        </div>
      </div>
    </div>
  );
}
