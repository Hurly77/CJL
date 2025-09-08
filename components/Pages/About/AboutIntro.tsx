import AboutHeroDescription from "./AboutHeroDescription";
import AboutHeroImage from "./AboutHeroImage";

export default function AboutIntro() {
  return (
    <div className="app-page items-center justify-center">
      <section className="flex flex-col sm:flex-row items-end gap-2">
        <AboutHeroDescription />
        <AboutHeroImage />
      </section>
    </div>
  );
}
