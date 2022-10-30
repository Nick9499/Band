import React from "react";
import contact from "../images/contact.jpg";

const Contact = () => {
  return (
    <div
      className="hero relative w-full h-64 md:h-72    bg-cover bg-center "
      style={{
        backgroundImage: `url(${contact.src})`,
        backgroundRepeat: "no-repeat",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="absolute transition-all">
        <div className="flex  ">
          <div className="p-5 text-5xl hover:opacity-60 ">
            <a href="tel:914-255-7173">
              <span className="text-white ">
                <i className="fa-solid fa-phone  "></i>
              </span>
            </a>
          </div>
          <div className="p-5 text-5xl hover:opacity-60">
            <a href="mailto:eric@mrperdomo.com">
              <span className="text-white ">
                <i className="fa-solid fa-envelope"></i>
              </span>
            </a>
          </div>
          <div className="p-5 text-5xl hover:opacity-60">
            <span className="text-white ">
              <i className="fa-brands fa-instagram"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
