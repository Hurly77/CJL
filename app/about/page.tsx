import AboutInterests from "_src/components/layouts/app/components/About/AboutInterests";
import AboutIntro from "_src/components/layouts/app/components/About/AboutIntro";
import AboutMyStory from "_src/components/layouts/app/components/About/AboutMyStory";
import AboutProfessionalSummary from "_src/components/layouts/app/components/About/AboutProfessionalSummary";

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
