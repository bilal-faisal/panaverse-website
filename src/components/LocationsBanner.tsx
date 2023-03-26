import Image from "next/image";
import Isb from "../../public/islamabad.webp";
import Karachi from "../../public/karachi.webp";
import Lahore from "../../public/lahore.webp";
import Peshawar from "../../public/peshawar.webp";

const LocationsBanner = () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col justify-center w-full md:w-1/2 px-8 py-10">
        <h1 className="text-2xl px-5 py-2 font-semibold">
          Classes in Karachi, Lahore, Islamabad, and Peshawar
        </h1>
        <h2 className="text-lg px-5">
          The internet is without a doubt the most important technological
          development in human history. Web3 and metaverse technologies expand
          the internet as we know it by introducing novel features and
          advancements. Metaverse will make use of all aspects of modern
          technology, including 3D, VR, AR, AI, blockchain, cloud computing,
          voice computing, ambient computing, and more. Citi stated in a March
          2022 research paper that the metaverse economy might have a total
          addressable market of up to $13 trillion and five billion people by
          2030.
        </h2>
      </div>
      <div className="w-full md:w-1/2 px-10 pt-10 md:py-10 md:pl-0 flex items-center order-first md:order-none">
        <div className="basis-1/2 flex flex-col gap-4 mx-4">
          <Image src={Karachi} alt="Image" className="rounded-lg shadow-xl shadow-gray-400" />
          <Image src={Lahore} alt="Image" className="rounded-lg shadow-xl shadow-gray-400" />
        </div>
        <div className="basis-1/2 flex flex-col gap-4">
          <Image src={Peshawar} alt="Image" className="rounded-lg shadow-xl shadow-gray-400" />
          <Image src={Isb} alt="Image" className="rounded-lg shadow-xl shadow-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default LocationsBanner;
