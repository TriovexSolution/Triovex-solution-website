import React from "react";
import Contact from "../Components/Contact";
import ContactForm from "../Components/ContactForm";
import ContactHero from "../Components/contacthero";


const ContactPage = () => {
  return (
    <>
      <ContactHero/>
      <Contact  />
      <ContactForm/>
    </>
  );
};

export default ContactPage;
