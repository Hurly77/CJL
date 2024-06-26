import ResumeButtons from "@/app/components/Resume/ResumeButtons";
import ResumeWebCV from "@/app/components/Resume/ResumeWebCV";

import { NextPageWithLayout } from "./_app";
// <embed
//   className="w-full h-full max-w-screen-xl overflow-hidden rounded custom-scrollbar"
//   type="application/pdf"
//   src="https://mgqajzspdkingrdcdwwl.supabase.co/storage/v1/object/public/pub-files/01_17_2024.pdf?t=2024-01-17T20%3A21%3A41.813Z"
// />;

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
