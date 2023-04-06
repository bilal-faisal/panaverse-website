import QuarterItem from "@/components/QuarterItem";

const QuarterItems = ({ redirectTo }: { redirectTo: String }) => {
  return (
    <div className="flex p-5 md:px-0 mb-10 flex-wrap">
      <QuarterItem
        heading={"Quarter 1"}
        desc={"Developing Web 1.0 Applications using JavaScript, OOP using TypeScript"}
        type="Core"
        href={redirectTo}
      />
      <QuarterItem
        heading={"Quarter 2"}
        desc={
          "Developing Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js13"
        }
        type="Core"
        href={redirectTo}
      />
      <QuarterItem
        heading={"Quarter 3"}
        desc={
          "Dollar Making Bootcamp, Full-Stack Template and API Product Development"
        }
        type="Core"
        href={redirectTo}
      />
      <QuarterItem
        heading={"Quarter 4"}
        desc={
          "Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences"
        }
        type="Selective"
        href={redirectTo}
      />
    </div>
  );
};

export default QuarterItems;
