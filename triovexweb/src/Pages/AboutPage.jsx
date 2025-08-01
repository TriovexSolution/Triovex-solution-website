import React from "react";
import AboutHome from "../Components/AboutHome";
import MissionVision from "../Components/MissionVision";
import Team from "../Components/Team";
import WeAre from "../Components/WeAre";
import RatingMarquee from "../Components/RatingMarquee";
import WhyChoose from "../Components/WhyChoose";

const AboutPage = () => {
  return (
    <>
      <AboutHome />
      <WeAre />
      <MissionVision />
      <WhyChoose />
      
      <RatingMarquee />
    </>
  );
};

export default AboutPage;
