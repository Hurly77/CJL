import { PlayIcon } from "@heroicons/react/24/solid";
import { Card, Image } from "@nextui-org/react";
import { motion, MotionConfig } from "framer-motion";
import React from "react";
import ReactPlayer from "react-player";

import { cls } from "../../helpers/twind-helpers";
import useSizes from "../../hooks/useSizes";

interface ProjectVideoCtx {
  isInView: boolean;
  setIsInView: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectVideoContext = React.createContext({} as ProjectVideoCtx);
const DotsSvg = ({ isSmall }: { isSmall: boolean }) => (
  <motion.svg
    initial={{ y: 400, x: -400, opacity: 0 }}
    whileInView={{ y: 0, x: 0, opacity: [0, 0, 0, isSmall ? 0 : 1] }}
    transition={{ delay: 0.2, duration: 1 }}
    className={cls(
      "scale-50 sm:scale-100 fill-primary absolute sm:-top-14 sm:-right-20 -top-14 -right-0",
      isSmall ? "h-16 w-20 " : "h-36 w-40",
    )}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="2.5 5 50 35"
  >
    <path d="M5 5A1 1 0 005 10 1 1 0 005 5M20 5A1 1 0 0020 10 1 1 0 0020 5M35 5A1 1 0 0035 10 1 1 0 0035 5M50 5A1 1 0 0050 10 1 1 0 0050 5M5 20A1 1 0 005 25 1 1 0 005 20M20 20A1 1 0 0020 25 1 1 0 0020 20M35 20A1 1 0 0035 25 1 1 0 0035 20M50 20A1 1 0 0050 25 1 1 0 0050 20M5 35A1 1 0 005 40 1 1 0 005 35M20 35A1 1 0 0020 40 1 1 0 0020 35M35 35A1 1 0 0035 40 1 1 0 0035 35M50 35A1 1 0 0050 40 1 1 0 0050 35" />
  </motion.svg>
);

function ProjectVideoWrapper({ children }: { children: React.ReactNode }) {
  const sizes = useSizes();
  const isSmall = sizes.width < 640;
  const { setIsInView } = React.useContext(ProjectVideoContext);

  return (
    <MotionConfig transition={{ duration: 0.8, delay: 0.1 }}>
      <motion.div
        initial={{ x: 0, scale: 0, opacity: 0 }}
        whileInView={{
          scale: [0, 1.1, isSmall ? 0.95 : 1],
          opacity: 1,
        }}
        className="relative z-10 w-full h-full border-2 rounded bg-opacity-5 shadow-small aspect-video bg-secondary border-secondary"
      >
        <DotsSvg isSmall={isSmall} />
        <motion.div
          initial={{
            opacity: isSmall ? 0.4 : 0,
            scale: isSmall ? 0.5 : 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            scale: isSmall ? [0, 0.5, 1.03] : 1,
            translateX: !isSmall ? [0, 0, 20] : [0, 0, 0],
            translateY: !isSmall ? [0, 0, 20] : [0, 0, 0],
          }}
          onViewportLeave={() => setIsInView(false)}
          onViewportEnter={() => setIsInView(true)}
          transition={{
            duration: 0.8,
            translateX: { delay: 0.3, duration: 1 },
            translateY: { delay: 0.3, duration: 1 },
          }}
          exit={{ x: 0, opacity: 0, scale: 0.1 }}
        >
          <Card className="rounded aspect-video">{children}</Card>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
}

export default function ProjectVideo(props: { url: string; thumbnail: string }) {
  const { url, thumbnail } = props;
  const [isInView, setIsInView] = React.useState(false);

  return (
    <ProjectVideoContext.Provider value={{ isInView, setIsInView }}>
      <ReactPlayer
        url={url}
        playing={isInView}
        controls={true}
        stopOnUnmount={true}
        light={
          <Image
            classNames={{
              img: "rounded object-contain h-full w-full sm:aspect-video aspect-square",
              wrapper: " w-full",
            }}
            src={thumbnail}
            alt={"project image"}
            className="object-contain rounded"
          />
        }
        wrapper={ProjectVideoWrapper}
        playIcon={
          <PlayIcon className="absolute z-10 w-12 h-12 bg-black rounded-full fill-primary bg-opacity-20" />
        }
      />
    </ProjectVideoContext.Provider>
  );
}
