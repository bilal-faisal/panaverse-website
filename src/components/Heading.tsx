interface Heading {
  name: String;
}

const Heading = ({ name }: Heading) => {
  return (
    <h1 className="text-4xl text-center font-medium pt-5 pb-2 text-[#1F2937]">
      {name}
    </h1>
  );
};

export default Heading;
