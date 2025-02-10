import HomeBanner from "@/components/shared/HomeBanner";
import SkillPage from "./skill/page";
import FeaturedProject from "@/components/Featured/FeaturedProject";

export default function Home() {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <FeaturedProject></FeaturedProject>
      <SkillPage></SkillPage>
    </div>
  );
}
