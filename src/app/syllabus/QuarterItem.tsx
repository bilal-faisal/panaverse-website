import React from "react";

type QuarterItem = {
  heading: string;
  desc: string;
};
const QuarterItem = ({ heading, desc }: QuarterItem) => {
  return (
    <>
      <h3 className="text-xl font-semibold">{heading}</h3>
      <p className="pb-3">{desc}</p>
    </>
  );
};

export default QuarterItem;
