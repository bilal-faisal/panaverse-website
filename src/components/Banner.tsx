import Image from "next/image";
import ZiaKhanImg from "../../public/zia khan.jpeg";
import Quote from "../../public/quote.png";

const Banner = () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 px-8 pt-8 pb-10">
        <Image src={Quote} alt="Quote" className="self-start" />
        <h1 className="text-2xl font-light italic">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
          Panaverse DAO is a movement to spread these technolgies globally. It
          is community of Web 3.0 and Metaverse developers, designers, trainers,
          startup founders and service providers."
        </h1>
        <p className="self-end text-3xl font-light px-4 py-2">~ Zia Khan</p>
      </div>
      <div className="w-full md:w-1/2 px-10 pt-10 md:py-10 md:pl-0 order-first md:order-none">
        <Image src={ZiaKhanImg} alt="Image" className="rounded-xl shadow-2xl" />
      </div>
    </div>
  );
};

export default Banner;
