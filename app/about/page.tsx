import AboutInterests from "@/components/Pages/About/AboutInterests";
import AboutIntro from "@/components/Pages/About/AboutIntro";
import AboutMyStory from "@/components/Pages/About/AboutMyStory";
import AboutProfessionalSummary from "@/components/Pages/About/AboutProfessionalSummary";

export default function About() {
  return (
    <div className="flex-col items-center justify-center pb-32 flex">
      <div className="px-5">
        <AboutIntro />
        <AboutMyStory />
      </div>
      <AboutProfessionalSummary />
      <AboutInterests />
    </div>
  );
}
