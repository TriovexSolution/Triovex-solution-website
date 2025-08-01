import React from "react";
import CareersHero from "../Components/CareersHero";
import CareersSection from "../Components/CareersCart";
import CareersForm from "../Components/CareersForm";

const Careers = () => {
  return <div className="bg-white">
    <CareersHero></CareersHero>
    <CareersSection></CareersSection>
    <CareersForm></CareersForm>
  </div>;
};

export default Careers;