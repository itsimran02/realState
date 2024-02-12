import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Facilities from "../Components/Facilities/Facilities";
import AboutUs from "../Components/About/AboutUs";
import SwiperComp from "../Components/Testimonial/Testimonial";
import Map from "../Components/Map/Map";

const Home = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Facilities />
      <AboutUs />
      <SwiperComp />
      <Map />
    </>
  );
};

export default Home;
