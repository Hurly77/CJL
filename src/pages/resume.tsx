import ResumeButtons from "@/app/components/Resume/ResumeButtons";
import ResumeWebCV from "@/app/components/Resume/ResumeWebCV";

import { NextPageWithLayout } from "./_app";

export const Resume: NextPageWithLayout = () => {
  return (
    <div className="app-page items-center flex-col space-y-2 pb-32">
      <ResumeButtons />
      <ResumeWebCV />
    </div>
  );
};

Resume.title = "Cameron L. - Resume";
Resume.description = "Cameron John Leverett, Software engineer, web Developer full-stack resume";
export default Resume;
