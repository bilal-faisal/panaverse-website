import React from "react";

const Heading = ({ text }: { text: string }) => {
  return (
    <h2 className="px-6 text-xl font-semibold mt-5 mb-1 text-[#1F2937]">
      {text}
    </h2>
  );
};

export default Heading;
