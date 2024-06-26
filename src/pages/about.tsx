import AboutInterests from "@/app/components/About/AboutInterests";
import AboutIntro from "@/app/components/About/AboutIntro";
import AboutMyStory from "@/app/components/About/AboutMyStory";
import AboutProfessionalSummary from "@/app/components/About/AboutProfessionalSummary";

export default function About() {
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
}
