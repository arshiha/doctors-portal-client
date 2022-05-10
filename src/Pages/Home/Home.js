import React from "react";
import Banner from "./Banner.js";
import ContactUs from "./ContactUs.js";
import Dental from "./Dental.js";
import Footer from "../Shared/Footer.js";
import Info from "./Info.js";
import MakeAppoinment from "./MakeAppoinment.js";
import Services from "./Services.js";
import Testimonials from "./Testimonials.js";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Dental></Dental>
      <MakeAppoinment></MakeAppoinment>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
