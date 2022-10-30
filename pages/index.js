import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ServiceComp from "../components/services";
import services from "../constants/services";
import Contact from "../components/Contact";
import Script from "next/script";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Script src="https://kit.fontawesome.com/954fbfa8c1.js"></Script>
      <Header />
      <Banner />
      {services.map((s) => (
        <ServiceComp image={s.img} service={s.service} key={Math.random()} />
      ))}
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
