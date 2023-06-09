import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex w-full mt-10 p-10 flex-wrap gap-5 bg-gradient-to-br from-[#222222] to-[#455666] ">
      <div className="mb-5"> 
        <div className="flex items-center">
          <Image src="/logo.png" alt="logo" width={60} height={60} />
          <h2 className="text-2xl text-white pl-1">Panaverse</h2>
        </div>
        <p className="text-base mt-1 text-gray-200">Earn While You Learn</p>
      </div>
      <div className="md:ml-auto flex  w-full md:w-auto gap-10 md:gap-20 text-gray-200">
        <div className="space-y-1.5">
          <h2 className="font-bold pb-2 text-lg text-white">Locations</h2>
          <p>Lahore</p>
          <p>Karachi</p>
          <p>Peshawar</p>
          <p>Rawalpindi</p>
        </div>
        <div className="space-y-1.5">
          <h2 className="font-bold pb-2 text-lg text-white">Contact Us</h2>
          <p><Link href={"https://www.panaverse.co/"} target="_blank">panaverse.co</Link></p>
          
        </div>
        <div className="space-y-1.5">
          <h2 className="font-bold pb-2 text-lg text-white">Social</h2>
          <p><Link href={"https://twitter.com/Panaverse_edu"} target="_blank">Twitter</Link></p>
          <p><Link href={"https://www.youtube.com/@panaverse"} target="_blank">Youtube</Link></p>
          <p><Link href={"https://www.facebook.com/panaverse.dao"} target="_blank">Facebook</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
