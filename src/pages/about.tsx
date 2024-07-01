import AboutInterests from "@/app/components/About/AboutInterests";
import AboutIntro from "@/app/components/About/AboutIntro";
import AboutMyStory from "@/app/components/About/AboutMyStory";
import AboutProfessionalSummary from "@/app/components/About/AboutProfessionalSummary";

import { NextPageWithLayout } from "./_app";

export const About: NextPageWithLayout = () => {
  return (
    <div className="flex-col items-center justify-center pb-32 app-page">
      <div className="px-5">
        <AboutIntro />
        <AboutMyStory />
      </div>
      <AboutProfessionalSummary />
      <AboutInterests />
    </div>
  );
};

About.title = "Cameron L. - About";
export default About;
