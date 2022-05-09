import React from "react";
import PrimaryButton from "../Shared/PrimaryButton.js";
import appoinment from "../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div
      style={{
        background: `url(${appoinment})`,
      }}
      className=" m-0 min-h-[100vh]"
    >
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-center text-[#19D3AE] text-3xl font-bold mt-24 mb-7">
          Contact Us
        </h1>
        <div className="bg-[#9acaeb] w-2/5 p-2 rounded-lg shadow-md">
          <form className="mx-auto">
            <div className="my-3 mx-auto">
              <input
                type="text"
                className="w-full mt-0 p-1 rounded-md outline-none border-none"
                placeholder="Email Address"
              />
            </div>
            <div className="my-3 mx-auto">
              <input
                type="text"
                className="w-full mt-2 p-1 rounded-md outline-none border-none"
                placeholder="Subject"
              />
            </div>

            <div className="my-3 mx-auto">
              <input
                type="text"
                className="w-full mt-2 p-5 rounded-md outline-none border-none"
                placeholder="Your message"
              />
            </div>
            <PrimaryButton>Submit</PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
