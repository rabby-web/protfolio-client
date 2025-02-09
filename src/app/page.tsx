import HomeBanner from "@/components/shared/HomeBanner";
import AboutPage from "./about/page";
import SkillPage from "./skill/page";

export default function Home() {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <AboutPage></AboutPage>
      <SkillPage></SkillPage>
    </div>
  );
}
