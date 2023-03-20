import Image from "next/image";
interface Team {
  name: String;
  img: String;
  desc: String;
}
const TeamMember = ({ name, img, desc }: Team) => {
  return (
    <div className=" flex flex-col items-center text-center px-6">
      <Image
        src={`/${img}.jpg`}
        alt="zia_khan"
        className="object-cover rounded-full object-top shadow-2xl shadow-slate-500"
        width={130}
        height={130}
      />
      <h3 className="font-bold text-xl mt-3">{name}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
};

export default TeamMember;
