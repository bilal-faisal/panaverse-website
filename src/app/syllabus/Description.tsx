import React from "react";

const Description = ({ text }: { text: string }) => {
  return (
    <p className="px-6 text-lg">
      {text}
    </p>
  );
};

export default Description;
