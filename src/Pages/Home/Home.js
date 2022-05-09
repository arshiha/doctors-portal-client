import React from "react";
import Banner from "./Banner.js";
import Dental from "./Dental.js";
import Info from "./Info.js";
import Services from "./Services.js";

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Dental></Dental>
    </div>
  );
};

export default Home;
