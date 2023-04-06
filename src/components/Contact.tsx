"use client";

import React from "react";
import { useState } from "react";

const Contact = () => {
  function validateForm(e: any) {
    e.preventDefault();
    if (name == "" || email == "" || subject == "" || message == "") {
      alert("Incomplete Form");
      return false;
    } else {
      submitForm(e);
    }
  }

  async function submitForm(e: any) {
    e.preventDefault();
    let data_obj = { name, email, subject, message };

    // Will find a way to send mail later

    setname("");
    setemail("");
    setsubject("");
    setmessage("");

    alert("Your data has been sent.");
  }
  function handleChange(e: any) {
    if (e.target.name == "name") {
      setname(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "subject") {
      setsubject(e.target.value);
    } else if (e.target.name == "message") {
      setmessage(e.target.value);
    }
  }

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [subject, setsubject] = useState("");

  return (
    <div className="flex justify-center m-10">
      <form className="w-full max-w-xl" method="POST" onSubmit={validateForm}>
        <h1 className="text-3xl text-center font-medium mt-2 mb-10 pb-2 text-[#1F2937]">
          Send us your concern
        </h1>
        <div className="flex flex-wrap mb-3">
          <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Name..."
              name="name"
              value={name}
              onChange={handleChange}
            />
            {/* <p className="text-red-500 text-xs italic hidden">
                  Please fill out this field.
                </p> */}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              placeholder="Email..."
              onChange={handleChange}
              name="email"
              value={email}
            />
          </div>
          {/* <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
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
              </div> */}
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
              onChange={handleChange}
              name="subject"
              value={subject}
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
              id="textArea"
              placeholder="Type here..."
              cols={30}
              rows={10}
              value={message}
              name="message"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            {/* <button
                  className="self-end bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-md border-4 text-white py-1 px-3 rounded"
                  type="button"
                >
                  Send
                </button> */}

            {/* <button className="self-end text-lg py-1 px-4 rounded-md text-white bg-[#1F2937] w-fit border-2 border-[#1F2937] hover:border-2 hover:border-[#1F2937] hover:bg-slate-50 hover:text-black">
                  Send
                </button> */}
            <input
              type="submit"
              id="submit"
              name="Send"
              className="self-end text-lg py-1 px-4 rounded-md text-white bg-[#1F2937] w-fit border-2 border-[#1F2937] hover:border-2 hover:border-[#1F2937] hover:bg-slate-50 hover:text-black"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
