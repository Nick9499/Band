import React from "react";

const WeddingServices = ({ image, service }) => {
  return (
    <div
      className="relative w-full h-64 md:h-96  lg:h-screen bg-cover bg-center lg:bg-fixed"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
      }}>
      <h2 className="absolute bottom-8 right-5  md:bottom-20  md:right-10 lg:right-40  text-2xl md:text-5xl text-white">
        <span className="font-bold ">{service}</span> <br />{" "}
      </h2>
    </div>
  );
};

export default WeddingServices;
