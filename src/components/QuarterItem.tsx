import Image from "next/image";
import Link from "next/link";
import code from "../../public/code.png";

interface Quarter {
  heading: String;
  desc: String;
  type: String;
  href: String;
}

const Quarter = ({ heading, desc, type, href }: Quarter) => {
  return (
    <div className="basis-full sm:basis-1/2 md:basis-1/4 p-3">
      <div className="bg-white shadow-xl flex flex-col items-center rounded-xl py-5 px-4 min-h-full">
        <Image src={code} alt="Logo" />
        <h2 className="text-xl font-semibold mt-2">{heading}</h2>
        <p className="mb-2 text-gray-600">({type})</p>
        <p className="text-center mt-1 mb-2">{desc}</p>

        {href && (
          <div className="mt-auto py-4">
            <Link href={`/${href}`}>
              <button className="px-2 py-0.5 rounded-md text-white bg-[#1F2937] w-fit text-lg border-2 border-[#1F2937] hover:border-2 hover:border-[#1F2937] hover:bg-white hover:text-[#1F2937]">
                Read More
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quarter;
