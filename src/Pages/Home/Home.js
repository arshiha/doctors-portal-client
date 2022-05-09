import React from "react";
import Banner from "./Banner.js";
import ContactUs from "./ContactUs.js";
import Dental from "./Dental.js";
import Info from "./Info.js";
import MakeAppoinment from "./MakeAppoinment.js";
import Services from "./Services.js";
import Testimonials from "./Testimonials.js";

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Dental></Dental>
      <MakeAppoinment></MakeAppoinment>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
