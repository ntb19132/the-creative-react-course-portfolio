import React from "react";
//Page Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";

const AboutUs = () => {
  return (
    <React.Fragment>
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </React.Fragment>
  );
};

export default AboutUs;
