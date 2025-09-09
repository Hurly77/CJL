import { Metadata } from "next";

import AboutInterests from "@/components/Pages/About/AboutInterests";
import AboutIntro from "@/components/Pages/About/AboutIntro";
import AboutMyStory from "@/components/Pages/About/AboutMyStory";
import AboutProfessionalSummary from "@/components/Pages/About/AboutProfessionalSummary";

export const metadata: Metadata = {
  title: "About - Cameron Leverett",
  authors: [{ name: "Cameron Leverett", url: "https://cjleverett.me" }],
  applicationName: "CJ Leverett Portfolio",
  colorScheme: "dark",
  description:
    "About Cameron John Leverett, Software Engineer Projects, Web Developer full-stack, front-end, back-end.",
};

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center pb-32">
      <div className="px-5">
        <AboutIntro />
        <AboutMyStory />
      </div>
      <AboutProfessionalSummary />
      <AboutInterests />
    </div>
  );
}
