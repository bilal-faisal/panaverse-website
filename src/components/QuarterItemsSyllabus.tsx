import QuarterItem from "@/components/QuarterItem";

const QuarterItems = () => {
  return (
    <div className="flex py-6 mb-5 flex-wrap">
      <QuarterItem
        heading={"Quarter 1"}
        desc={"Developing Web 1.0 Apps using JavaScript, OOP using TypeScript"}
        type="Core"
      />
      <QuarterItem
        heading={"Quarter 2"}
        desc={
          "Developing Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13"
        }
        type="Core"
      />
      <QuarterItem
        heading={"Quarter 3"}
        desc={
          "Blockchain Theory, Developing Smart Contracts and Planet-Scale Web 3.0 Dapps"
        }
        type="Selective"
      />
      <QuarterItem
        heading={"Quarter 4"}
        desc={
          "Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences"
        }
        type="Selective"
      />
    </div>
  );
};

export default QuarterItems;
