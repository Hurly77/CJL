import { Metadata } from "next";

import LandingHeroImage from "@/components/Pages/Landing/LandingHeroImage";
import LandingHeroTitle from "@/components/Pages/Landing/LandingHeroTitle";

export const metadata: Metadata = {
  title: "Cameron Leverett",
  authors: [{ name: "Cameron Leverett", url: "https://cjleverett.me" }],
  applicationName: "CJ Leverett Portfolio",
  colorScheme: "dark",
  description:
    "Cameron John Leverett, Software engineer, Web Developer full-stack, front-end, back-end.",
};

export default function Page() {
  return (
    <div className="relative flex-col w-full pb-24 bg-scroll bg-image-home">
      <div className="flex w-full gap-4 sm:items-center snap-end app-page">
        <div className="flex flex-col w-full gap-4 sm:justify-center sm:flex-row">
          <LandingHeroTitle />
          <LandingHeroImage />
        </div>
      </div>
    </div>
  );
}
