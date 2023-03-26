import QuarterItem from "@/components/QuarterItem";

const QuarterItems = () => {
  return (
    <div className="flex py-6 mb-10 px-6 flex-wrap">
      <QuarterItem
        heading={"Quarter 1"}
        desc={
          "JavaScript, Web3.0 Theory, Object-Oriented Programming using TypeScript"
        }
        url="about"
      />
      <QuarterItem
        heading={"Quarter 2"}
        desc={
          "Developing Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13"
        }
        url="about"
      />
      <QuarterItem
        heading={"Quarter 3"}
        desc={
          "Blocchain Theory, Developing Smart Contracts and Planet-Scale Web 3.0 Dapps"
        }
        url="about"
      />
      <QuarterItem
        heading={"Quarter 4"}
        desc={
          "Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences"
        }
        url="about"
      />
    </div>
  );
};

export default QuarterItems;
