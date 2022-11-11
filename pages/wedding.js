import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Wedding/Banner";
import Mission from "../components/Wedding/Mission";
import weddingServices from "../constants/weddingServices";
import WeddingServices from "../components/WeddingService";

const Wedding = () => {
  return (
    <>
      <Header />
      <Banner />
      <Mission />
      {weddingServices.map((ws, index) => (
        <WeddingServices key={index} image={ws.img} service={ws.service} />
      ))}
      <Footer />
    </>
  );
};

export default Wedding;
