import Image from "next/image";
import TeamMember from "./TeamMember";

const TeamMembers = () => {
  return (
    <div className="w-auto max-w-none m-14 flex justify-around flex-wrap">
      <TeamMember name={"Zia Khan"} img={"zia_khan"} desc={"Founder & CEO"} />
      <TeamMember
        name={"Daniyal nagori"}
        img={"daniyal_nagori"}
        desc={"Instructor"}
      />
      <TeamMember name={"Adil Altaf"} img={"adil_altaf"} desc={"Instructor"} />
      <TeamMember name={"Hira Khan"} img={"hira_khan"} desc={"Instructor"} />
    </div>
  );
};

export default TeamMembers;
