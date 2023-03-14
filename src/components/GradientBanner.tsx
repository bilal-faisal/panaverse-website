import React from "react";

const TopBanner = () => {
  return (
    <div className="flex flex-col items-center px-10  py-20 md:py-24 m-10 rounded-3xl text-white bg-gradient-to-r from-[#222222] to-[#455666] order-first md:order-none">
      <h1 className="text-3xl md:text-3xl text-center font-bold">
        Certified Web 3.0 and Metaverse Developer
      </h1>
      <h2 className="text-xl md:text-2xl text-center pt-2 font-semibold">
        A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
      </h2>
      <h2 className="hidden md:block md:text-xl text-center pt-2 font-normal">
        Getting Ready for the Next Generation and Future of the Internet - Join
        a 13 Trillion Dollar Industry with 5 Billion Users
      </h2>
      <button className="px-5 py-2 mt-6 md:mt-10 rounded-md bg-white text-black shadow w-fit text-xl">
        Details
      </button>
    </div>
  );
};

export default TopBanner;
