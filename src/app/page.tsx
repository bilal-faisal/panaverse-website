import QuoteBanner from "@/components/QuoteBanner";
import QuarterItems from "@/components/QuarterItems";
import GradientBanner from "@/components/GradientBanner";
import ExtraBanner from "@/components/extraBanner";
import Heading from "@/components/Heading";
import TeamMembers from "@/components/TeamMembers";

const Home = () => {
  return (
    <div className="flex flex-col">
      <QuoteBanner />
      <GradientBanner />
      <ExtraBanner />
      <Heading name={"Instructors"} />
      <TeamMembers/>
      <Heading name={"Course Outline"} />
      <QuarterItems />
    </div>
  );
};

export default Home;
