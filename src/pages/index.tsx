import React from "react";

import LandingHeroImage from "@/app/components/Landing/LandingHeroImage";
import LandingHeroTitle from "@/app/components/Landing/LandingHeroTitle";

import { NextPageWithLayout } from "./_app";

export const Home: NextPageWithLayout = () => {
  return (
    <div className="app-page relative bg-image-home snap-end">
      <div className="flex sm:items-center w-full gap-4">
        <div className="flex sm:justify-center gap-4 w-full flex-col sm:flex-row">
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
