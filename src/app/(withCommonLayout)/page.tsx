import HomeBanner from "@/components/shared/HomeBanner";
import SkillPage from "./skill/page";
import FeaturedProject from "@/components/Featured/FeaturedProject";

export default function Home() {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <FeaturedProject></FeaturedProject>

      <div className="min-h-screen mt-32">
        <div className="text-2xl font-semibold text-dark-01 dark:text-dark-03 flex items-baseline gap-1 p-3 md:mt-12 container mx-auto ">
          <div className="text-[#3CD1B8]">Skills</div>
          <div className="w-48 border border-[#3CD1B8]"></div>
        </div>
        <SkillPage></SkillPage>
      </div>
    </div>
  );
}
