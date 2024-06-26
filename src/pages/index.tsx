import React from "react";

import LandingHeroImage from "@/app/components/Landing/LandingHeroImage";
import LandingHeroTitle from "@/app/components/Landing/LandingHeroTitle";

import { NextPageWithLayout } from "./_app";

export const Home: NextPageWithLayout = () => {
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
};

Home.title = "Cameron Leverett";
Home.description = "Cameron John Leverett, Software engineer, web Developer full-stack";
export default Home;
