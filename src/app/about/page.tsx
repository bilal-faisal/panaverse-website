import Image from "next/image";
import PIAIC from "../../../public/piaic_logo.png";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col items-center text-justify">
      <div className="w-full md:w-2/3">
        <Image
          src={PIAIC}
          width={120}
          alt="PIAIC logo"
          className="mt-10 mx-auto"
        />
        <div className="text-center text-[#1F2937] my-4 px-6 space-y-1">
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
        </div>
        <p className="px-6 text-lg leading-7 my-3">
          Panaverse DAO is a movement to spread latest state of the art
          technolgies globally. It is community of Web 3 and Metaverse
          developers, designers, trainers, startup founders and service
          providers. Panaverse DAO's mission statement is to train Web 3.0 and
          Metaverse Developers and to create products using these cutting-edge
          technologies.
        </p>

        <p className="px-6 text-lg leading-7 my-3 indent-12">
          The internet is without a doubt the most important technological
          development in human history. Web3 and metaverse technologies expand
          the internet as we know it by introducing novel features and
          advancements. Metaverse will make use of all aspects of modern
          technology, including 3D, VR, AR, AI, blockchain, cloud computing,
          voice computing, ambient computing, and more. Citi is the latest Wall
          Street business to give a positive prognosis for Web 3.0 and the
          Metaverse, terms used to depict a future internet vision centred on
          decentralised technologies and virtual worlds. Citi stated in a March
          2022 research paper that the metaverse economy might have a total
          addressable market of up to $13 trillion and five billion people by
          2030.
        </p>
        <h2 className="px-6 text-xl leading-7 font-semibold mt-5 mb-1 text-[#1F2937]">
          The Program in a Nutshell: Earn While You Learn
        </h2>
        <p className="px-6 text-lg leading-7">
          In this brand-new type of curriculum, students will learn how to make
          money and boost exports in the classroom and will begin doing so
          within six months of the program&apos;s beginning. It resembles a
          cross between a corporate venture and an educational project.
        </p>
        <h2 className="px-6 text-xl leading-7 font-semibold mt-5 mb-1 text-[#1F2937]">
          Program of Studies
        </h2>
        <p className="px-6 text-lg leading-7">
          This curriculum is intended for beginners who want to learn software
          development from the ground up. The first three quarters are shared by
          all specialties and are dedicated to studying Object-Oriented
          Programming and cutting-edge Full-Stack Web 2.0 development. It is
          going to be a fifteen-month-long hybrid program that includes both
          onsite and online classes and is divided into five quarters of 13
          weeks each. The emphasis will be on hands-on learning by educating
          students to produce projects. To accommodate everyone, courses will be
          held primarily on weekends or after 6:00 p.m. (Pakistan Time) on
          weekdays. It employs a hybrid teaching format, with core onsite
          classes complemented by online Zoom laboratories and recorded videos.
        </p>
      </div>
    </div>
  );
};

export default page;
