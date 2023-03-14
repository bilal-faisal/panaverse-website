import Image from "next/image";
import ZiaKhanImg from "../../public/zia khan.jpeg";

const Banner = () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 px-8 py-10">
        <h1 className="text-3xl text-center">
          Certified Web 3.0 and Metaverse Developer
        </h1>
        <h2 className="text-2xl text-center px-5">
          A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
        </h2>
        <button className="px-5 py-2 mt-5 rounded-md bg-blue-200 shadow w-fit text-xl">
          Details
        </button>
      </div>
      <div className="w-full md:w-1/2 px-10 pt-10 md:py-10 md:pl-0 order-first md:order-none">
        <Image src={ZiaKhanImg} alt="Image" className="rounded-xl shadow-2xl" />
      </div>
    </div>
  );
};

export default Banner;
