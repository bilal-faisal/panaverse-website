import Image from "next/image";
import code from "../../public/code.png";

interface Quarter {
  heading: String;
  desc: String;
}

const Quarter = ({ heading, desc }: Quarter) => {
  return (
    <div className="basis-full sm:basis-1/2 md:basis-1/4">
      <div className="bg-white shadow-xl flex flex-col items-center p-5 rounded-xl m-5 md:my-0 md:mx-5 ">
        <Image src={code} alt="Logo" className="my-1" />
        <h2 className="text-xl font-semibold my-2">{heading}</h2>
        <p className="text-center my-1">{desc}</p>

        <button className="px-3 py-1 my-3 md:mt-6 rounded-md text-white bg-[#1F2937] shadow w-fit text-lg">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Quarter;
