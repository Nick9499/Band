import React from "react";

const Wedding = ({ image, service }) => {
  return (
    <div
      className="relative w-full h-64 md:h-96  lg:h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundRepeat: "no-repeat",
      }}>
      <h2 className="absolute bottom-8 right-5  md:bottom-20  md:right-10 lg:right-40  text-2xl md:text-5xl text-white">
        <span className="font-bold ">{service}</span> <br />{" "}
        <span className="mt-15">Services</span>
      </h2>
    </div>
  );
};

export default Wedding;
