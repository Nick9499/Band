import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ServiceComp from "../components/services";
import services from "../constants/services";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      {services.map((s) => (
        <ServiceComp image={s.img} service={s.service} />
      ))}
    </>
  );
};

export default Home;
