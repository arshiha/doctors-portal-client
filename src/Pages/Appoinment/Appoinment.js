import React, { useState } from "react";
import Footer from "../Shared/Footer.js";
import AppointmentBanner from "./AppointmentBanner.js";
import AvailableAppoinments from "./AvailableAppoinments.js";

const Appoinment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvailableAppoinments date={date}></AvailableAppoinments>
      <Footer></Footer>
    </div>
  );
};

export default Appoinment;
