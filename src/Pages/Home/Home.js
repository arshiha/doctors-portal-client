import React from "react";
import Banner from "./Banner.js";
import Info from "./Info.js";
import Services from "./Services.js";

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
    </div>
  );
};

export default Home;
