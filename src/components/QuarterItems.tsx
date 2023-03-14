import QuarterItem from "@/components/QuarterItem";

const QuarterItems = () => {
  return (
    <div className="flex py-6 mb-10 px-6 flex-wrap">
      <QuarterItem
        heading={"Quarter 1"}
        desc={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, atque!"
        }
      />
      <QuarterItem
        heading={"Quarter 2"}
        desc={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, atque!"
        }
      />
      <QuarterItem
        heading={"Quarter 3"}
        desc={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, atque!"
        }
      />
      <QuarterItem
        heading={"Quarter 4"}
        desc={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, atque!"
        }
      />
    </div>
  );
};

export default QuarterItems;
