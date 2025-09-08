import {
  BeakerIcon,
  CloudIcon,
  CommandLineIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  VariableIcon,
} from "@heroicons/react/24/outline";
import { AcademicCapIcon, BookOpenIcon, MusicalNoteIcon, TvIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { ChessIcon, CookingIcon, GamePadIcon, RobotIcon, UserIcon } from "./InterestIcons";

export default function AboutInterests() {
  const industryRelatedInterests = [
    {
      title: "Web Development",
      description: "I love building websites and web applications.",
      Icon: GlobeAltIcon,
    },
    {
      title: "Mobile Development",
      description: "I love building mobile apps for iOS and Android.",
      Icon: DevicePhoneMobileIcon,
    },
    {
      title: "Machine Learning",
      description: "I love working on machine learning projects.",
      Icon: VariableIcon,
    },
    {
      title: "Data Science",
      description: "I love working with data and analyzing data.",
      Icon: BeakerIcon,
    },
    {
      title: "Cybersecurity",
      description: "I love working on cybersecurity projects.",
      Icon: ShieldCheckIcon,
    },
    {
      title: "Cloud Computing",
      description: "I love working on cloud computing projects.",
      Icon: CloudIcon,
    },
    {
      title: "Artificial Intelligence",
      description: "I love working on artificial intelligence projects.",
      Icon: CpuChipIcon,
    },
  ];

  const interests = [
    {
      title: "Chess",
      description: "I love playing chess and I am a member of the chess club.",
      Icon: ChessIcon,
    },
    {
      title: "Movies & TV Shows",
      description: "I love watching movies and TV shows.",
      Icon: TvIcon,
    },

    { title: "Music", description: "I love music and I play the guitar.", Icon: MusicalNoteIcon },
    {
      title: "Robotics",
      description: "I love building robots and I am a member of the robotics club.",
      Icon: RobotIcon,
    },
    {
      title: "Reading",
      description: "I love reading books and I am a member of the book club.",
      Icon: BookOpenIcon,
    },
    {
      title: "Learning",
      description:
        "I love learning new things and I am always looking for new opportunities to learn.",
      Icon: AcademicCapIcon,
    },
    {
      title: "Video Games",
      description: "I love playing video games and I am a member of the video game club.",
      Icon: GamePadIcon,
    },
    {
      title: "Cooking",
      description: "I love cooking and I am a member of the cooking club.",
      Icon: CookingIcon,
    },
  ];

  return (
    <div className="flex-col justify-center max-w-screen-lg px-5 space-y-16 app-page">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 250 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-4 py-4 text-4xl font-bold"
        >
          <CommandLineIcon className="w-8 h-8 stroke-foreground" />
          Industry Interests
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 250 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid-cols-2 sm:grid"
        >
          {industryRelatedInterests.map(({ title, description, Icon }) => (
            <div key={title} className="flex items-center gap-4 py-2">
              <Icon className="w-8 h-8 stroke-foreground" />
              <div>
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-sm text-foreground-500">{description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 250 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-4 py-4 text-4xl font-bold"
        >
          <UserIcon className="w-8 h-8 fill-foreground" />
          Interests
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 250 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid-cols-2 sm:grid"
        >
          {interests.map(({ title, description, Icon }) => (
            <div key={title} className="flex items-center gap-4 py-2">
              <Icon className="w-8 h-8 fill-foreground" />
              <div>
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-sm text-foreground-500">{description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
