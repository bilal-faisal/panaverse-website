import React from "react";
import QuarterItem from "./QuarterItem";
import { type } from "os";

type Specialization = {
  no: string;
  heading: string;
  desc: string;
  IV_desc: string;
  V_desc: string;
};
const Specialization = ({
  no,
  heading,
  desc,
  IV_desc,
  V_desc,
}: Specialization) => {
  return (
    <div className="px-6 mt-5 w-full md:w-2/3">
      <h2 className=" flex text-xl font-semibold mb-1 text-[#1F2937]">
        <div className="w-10">{no}</div> {heading}
      </h2>
      <p className="text-lg ml-10">{desc}</p>

      <div className="ml-10 px-6 text-lg mt-5 mb-1">
        <QuarterItem heading="Quarter IV" desc={IV_desc} />
        <QuarterItem heading="Quarter V" desc={V_desc} />
      </div>
    </div>
  );
};

export default Specialization;
