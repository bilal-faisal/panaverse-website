import Image from "next/image";
import Link from "next/link";
import code from "../../public/code.png";

interface Quarter {
  heading: String;
  desc?: String;
  url: String;
}

const Quarter = ({ heading, desc, url }: Quarter) => {
  return (
    <div className="basis-full sm:basis-1/2 md:basis-1/4 p-2">
      <div className="bg-white shadow-xl flex flex-col items-center rounded-xl p-5 min-h-full">
        <Image src={code} alt="Logo" className="my-1" />
        <h2 className="text-xl font-semibold my-2">{heading}</h2>
        <p className="text-center my-1">{desc}</p>

        <div className="mt-auto py-5">
          <Link href={`./${url}`}>
            <button className="px-2 py-0.5 rounded-md text-white bg-[#1F2937] w-fit text-lg border-2 border-[#1F2937] hover:border-2 hover:border-[#1F2937] hover:bg-white hover:text-[#1F2937]">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Quarter;
