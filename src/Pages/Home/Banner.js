import React from "react";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton.js";

const Banner = () => {
  const myStyle = {
    backgroundImage: "url('https://i.ibb.co/s2mVMkr/bg.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={myStyle}>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              The Doctor’s Portal provides health organizations that strive for
              excellence and quality care, with a tool that allows physicians to
              measure themselves against key performance indicators set by the
              organization. This tool helps optimize physician practices in
              compliance with the organization’s guidelines, offering valuable
              statistics. Health organizations can easily get creative with this
              tool by setting targets for practices, and even promoting healthy
              competition between physicians to increase engagement in providing
              useful metrics, and overall better quality of service.
            </p>
            <PrimaryButton>GET STARTED</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
