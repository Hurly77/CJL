import { Metadata } from "next";

import ResumeButtons from "@/components/Pages/Resume/ResumeButtons";
import ResumeWebCV from "@/components/Pages/Resume/ResumeWebCV";

export const metadata: Metadata = {
  title: "Resume - Cameron Leverett",
  authors: [{ name: "Cameron Leverett", url: "https://cjleverett.me" }],
  applicationName: "CJ Leverett Portfolio",
  colorScheme: "dark",
  description:
    "Cameron John Leverett, Software engineer, Web Developer full-stack, front-end, back-end.",
};
export default function Resume() {
  return (
    <div className="flex flex-col items-center pb-32 space-y-2">
      <ResumeButtons />
      <ResumeWebCV />
    </div>
  );
}
