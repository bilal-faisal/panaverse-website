import QuoteBanner from "@/components/QuoteBanner";
import QuarterItems from "@/components/QuarterItems";
import GradientBanner from "@/components/GradientBanner";
import ExtraBanner from "@/components/extraBanner";

const Home = () => {
  return (
    <div className="flex flex-col">
      <QuoteBanner />
      <GradientBanner />
      <ExtraBanner />
      <h1 className="text-4xl text-center font-medium pt-5 pb-2 text-[#1F2937]">Course Outline</h1>
      <QuarterItems />

    </div>
  );
};

export default Home;
