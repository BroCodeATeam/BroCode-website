import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero2 from "../Components/Hero2";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero2
        heading='ABOUT.'
        text='We are a team of Full Stack Web Developers.'
      />
      <Footer />
    </div>
  );
};

export default About;
