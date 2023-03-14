const page = () => {
  return (
    <div className="flex justify-center m-10">
      <form className="w-full max-w-xl">
        <h1 className="text-3xl text-center font-medium mt-2 mb-10 pb-2 text-[#1F2937]">Send us your concern</h1>
        <div className="flex flex-wrap mb-3">
      
          <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
            {/* <p className="text-red-500 text-xs italic hidden">
              Please fill out this field.
            </p> */}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="subject"
              type="text"
              placeholder="Subject..."
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="textArea"
            >
              Message
            </label>
            <textarea
              className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="textArea"
              id="textArea"
              placeholder="Type here..."
              cols={30}
              rows={10}
            ></textarea>
          </div>
        </div>

        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            <button
              className="self-end bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-md border-4 text-white py-1 px-3 rounded"
              type="button"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
