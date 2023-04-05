import QuoteBanner from "@/components/QuoteBanner";
import QuarterItems from "@/components/QuarterItems";
import GradientBanner from "@/components/GradientBanner";
import Heading from "@/components/Heading";
import TeamMembers from "@/components/TeamMembers";
import ExtraBanner from "@/components/LocationsBanner";

const Home = () => {
  return (
    <div className="flex flex-col">
      <QuoteBanner />
      <GradientBanner />
      <ExtraBanner />
      <Heading name={"Instructors"} />
      <TeamMembers />
      <Heading name={"Course Outline"} />
      <div className="px-8">
        <QuarterItems />
      </div>
    </div>
  );
};

export default Home;
