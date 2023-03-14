import Banner from "@/components/Banner";
import QuarterItems from "@/components/QuarterItems";
import TopBanner from "@/components/TopBanner";

const Home = () => {
  return (
    <>
      <Banner />
      <TopBanner />
      <h1 className="text-4xl text-center font-medium py-3 text-[#1F2937]">Course Outline</h1>
      <QuarterItems />
    </>
  );
};

export default Home;
