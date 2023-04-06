import Image from "next/image";
import PIAIC from "../../../public/metaverse.jpg";
import QuarterItems from "@/components/QuarterItems";
import Heading from "./Heading";
import Description from "./Description";
import QuarterItem from "./QuarterItem";
import Specialization from "./Specialization";

const Syllabus = () => {
  return (
    <div className="flex flex-col items-center text-justify">
      <div className="w-full md:w-4/5">
        <div className="m-7">
          <Image
            src={PIAIC}
            alt="PIAIC logo"
            className="rounded-xl shadow-2xl mx-auto "
          />
        </div>
        <h1 className="px-6 text-2xl font-semibold mt-5 mb-2 text-center">
          "Certified Web 3.0 and Metaverse Developer" Program
        </h1>
        <h2 className="px-6 text-2xl text-center mt-2">Course Outline</h2>
        <QuarterItems redirectTo="" />
        <Heading text="Core Courses (Common in All Specializations):" />
        <Description
          text="Every participant of the program will start by completing the
          following three core courses:"
        />
        <div className="ml-10 px-6 text-lg mt-5 mb-1 text-[#1F2937]">
          <QuarterItem
            heading="Quarter I (Core)"
            desc="CS-101: Object-Oriented Programming using TypeScript"
          />
          <QuarterItem
            heading="Quarter II (Core)"
            desc="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps
            and APIs using Next.js 13 and Cloud Development Kit (CDK) for
            Terraform"
          />
          <QuarterItem
            heading="Quarter III (Core)"
            desc="$-101: Dollar Making Bootcamp - Full-Stack Template and API Product
            Development"
          />
        </div>
        <Heading text="Specialized Tracks:" />
        <Description
          text="After completing the first three quarters the participants will select
          one or more specializations consisting of two courses each:"
        />
        <Specialization
          no="I-"
          heading="Web 3.0 (Blockchain) and Metaverse Specialization"
          desc="This Web 3.0 and Metaverse specialization focuses on developing
          full-stack Web 3.0 and Metaverse experiences for the next generation
          of the internet by specializing in building worlds that merge the
          best of cutting-edge decentralized distributed blockchains with 3D
          metaverse client experiences."
          IV_desc="W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps"
          V_desc="MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences"
        />
        <Specialization
          no="II-"
          heading="Artificial Intelligence (AI) and Deep Learning Specialization"
          desc="The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models."
          IV_desc="AI-351: Developing Planet-Scale Intelligent APIs and Python Programming"
          V_desc="AI-361: Deep Learning and MLOps"
        />
        <Specialization
          no="III-"
          heading="Cloud-Native Computing Specialization"
          desc="The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes."
          IV_desc="CN-351: Certified Kubernetes Application Developer (CKAD)"
          V_desc="CN-361: Developing Multi-Cloud APIs using CDK for Terraform"
        />
        <Specialization
          no="IV-"
          heading="Ambient Computing and IoT Specialization"
          desc="The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices."
          IV_desc="Quarter IV AC-351: Ambient Computing with Voice Assistants and Matter"
          V_desc="Protocol Devices Quarter V AC-361: Embedded Programming using C and Rust"
        />
        <Specialization
          no="V-"
          heading="Genomics and Bioinformatics Specialization"
          desc="Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications."
          IV_desc="Bio-351: Python for Biologists"
          V_desc="Bio-361: Bioinformatics with Python"
        />
        <Specialization
          no="VI-"
          heading="Network Programmability and Automation Specialization"
          desc="More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git."
          IV_desc="NPA-351: CCNA 200-301 Certification"
          V_desc="NPA-361: Network Programmability and Automation"
        />
      </div>
    </div>
  );
};

export default Syllabus;
