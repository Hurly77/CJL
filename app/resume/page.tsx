import ResumeButtons from "@/components/Pages/Resume/ResumeButtons";
import ResumeWebCV from "@/components/Pages/Resume/ResumeWebCV";

export const metadata = {
  title: "Cameron L. - Resume",
  description: "Cameron John Leverett, Software engineer, web Developer full-stack resume",
};

export default function Resume() {
  return (
    <div className="app-page items-center flex-col space-y-2 pb-32">
      <ResumeButtons />
      <ResumeWebCV />
    </div>
  );
}
