import React from "react";
import Hero from "../Components/Hero";
import RatingMarquee from "../Components/RatingMarquee";
import AboutUs from "../Components/AboutUs";
import Services from "../Components/Services";
import Work from "../Components/Work";
import WhyChoose from "../Components/WhyChoose";

const HomePage = () => {
  return (
    <>
      <Hero />
      <RatingMarquee />
      <AboutUs />
      <Work />
      <Services />
      <WhyChoose />
    </>
  );
};

export default HomePage;
