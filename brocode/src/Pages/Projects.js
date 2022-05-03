import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero2 from "../Components/Hero2";
import PricingCard from "../Components/PricingCard";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading='PROJECTS.' text='Check out some of our work.' />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Projects;
