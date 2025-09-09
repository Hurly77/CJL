import LandingHeroImage from "@/components/Pages/Landing/LandingHeroImage";
import LandingHeroTitle from "@/components/Pages/Landing/LandingHeroTitle";

export const metadata = {
  title: "Cameron Leverett",
  description: "Cameron John Leverett, Software engineer, web Developer full-stack",
};

export default function Page() {
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
}
