import Image from "next/image";
import PIAIC from "../../../public/metaverse.jpg";
import Link from "next/link";
import QuarterItems from "@/components/QuarterItems";

const page = () => {
  return (
    <div className="flex flex-col items-center text-justify">
      <div className="w-full md:w-3/4">
        <Image
          src={PIAIC}
          alt="PIAIC logo"
          className="rounded-xl shadow-2xl mx-auto mt-7"
        />
        {/*<div className="text-center text-[#1F2937] my-4 px-6 space-y-1">
          <h2 className="text-xl font-semibold">
            Presidential Initiative for Artificial Intelligence and Computing
            (PIAIC)
          </h2>
          <p>
            <Link
              href={"https://www.piaic.org "}
              target="_blank"
              className="font-medium text-lg"
            >
              https://www.piaic.org
            </Link>
          </p>
          <h1 className="text-2xl font-semibold">
            Certified Web 3.0 and Metaverse Developer
          </h1>
        </div> */}
        <h1 className="px-6 text-2xl font-semibold mt-5 mb-2 text-center">
          Certified Web 3.0 and Metaverse Developer
        </h1>

        <h2 className="px-6 text-2xl text-center mt-2">Course Outline</h2>

        <QuarterItems />

        <h2 className="px-6 text-xl leading-7 font-semibold mt-5 mb-1 text-[#1F2937]">
          Core Courses (Common in All Specializations):
        </h2>
        <p className="px-6 text-lg leading-7">
          Every participant of the program will start by completing the
          following three core courses:
        </p>

        <div className="ml-10 px-6 text-lg leading-7 font-normal mt-5 mb-1 text-[#1F2937]">
          <h3 className="text-xl font-semibold">Quarter I (Core)</h3>
          <p className="pb-3">
            CS-101: Object-Oriented Programming using TypeScript
          </p>

          <h3 className="text-xl font-semibold">Quarter II (Core)</h3>
          <p className="pb-3">
            W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps
            and APIs using Next.js 13 and Cloud Development Kit (CDK) for
            Terraform
          </p>

          <h3 className="text-xl font-semibold">Quarter III (Core)</h3>
          <p className="pb-3">
            $-101: Dollar Making Bootcamp - Full-Stack Template and API Product
            Development
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;