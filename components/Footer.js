import React from "react";

const Footer = () => {
  return (
    <footer className=" body-font">
      <div className="container mx-auto  px-10 pt-10 pb-2 text-black">
        <div className="text-center">
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-between sm:justify-start">
            <a
              className="text-gray-800 hover:opacity-70"
              href="#"
              target="_blank">
              <i class="fa-brands fa-facebook-f fa-2x"></i>
            </a>

            <a
              className="ml-3 text-gray-800 hover:opacity-70"
              href="#"
              target="_blank">
              <i class="fa-brands fa-instagram fa-2x"></i>
            </a>
          </span>
        </div>
        <p className="text-gray-400 text-sm text-center mt-5">
          © 2022 Eric Perdomo Jr. Music
        </p>
      </div>
    </footer>
  );
};

export default Footer;
