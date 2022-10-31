import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ServiceComp from "../components/services";
import services from "../constants/services";
import Contact from "../components/Contact";
import Script from "next/script";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const Home = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css"></link>
      </Head>
      <Script src="https://kit.fontawesome.com/954fbfa8c1.js"></Script>

      <Header />

      <Banner />
      {services.map((s) => (
        <ServiceComp image={s.img} service={s.service} key={Math.random()} />
      ))}
      <Contact />
      <Clients />
      <Footer />
    </>
  );
};

export default Home;
