import React from "react";
import InfoCard from "./InfoCard.js";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard
        cardTitle="Opening Hours"
        description="Lorem Ipsum is simply dummy text of the pri"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
      ></InfoCard>
      <InfoCard
        cardTitle="Our Locations"
        description="Brooklyn, NY 10036, United States"
        bgClass="bg-neutral"
        img={marker}
      ></InfoCard>
      <InfoCard
        cardTitle="Contact Us"
        description="+000 123 456789"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
