import React from "react";
import doctor from "../../assets/images/doctor.png";
import appoinment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton.js";

const MakeAppoinment = () => {
  return (
    <section
      style={{
        background: `url(${appoinment})`,
      }}
      className="flex justify-center items-center mt-24"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-primary font-bold">Appoinment</h3>
        <h2 className="text-3xl text-white">Make an Appoinment Today</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          itaque veritatis libero ab incidunt velit mollitia illo eligendi
          consequuntur aliquam unde voluptatibus saepe, dolores magni illum
          neque voluptatem vel. Asperiores quis quidem architecto vel, nostrum
          non facilis omnis temporibus. Nulla.
        </p>
        <PrimaryButton>GET STARTED</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppoinment;
