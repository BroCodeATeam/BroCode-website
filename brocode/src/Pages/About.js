import React from "react";
import Hero2 from "../Components/Hero2";
import AboutContent from "../Components/AboutContent";

import './About.css'

const About = () => {
  return (
    <div>
    <div className='about'>
      <Hero2 heading='ABOUT.' text='Who we are.' />
      <AboutContent />
    </div>
  );
};

export default About;
