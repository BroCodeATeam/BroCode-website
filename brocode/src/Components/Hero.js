import "./Hero.css";
import React from "react";
import { Link } from "react-router-dom";
// import code5 from "../assets/code5.jpg";

const Hero = () => {
  return (
    <div className='hero'>
      <div className='content'>
        <p>Hello, we are BroCode.</p>
        <h1>Developers at your service</h1>
        <div>
          <Link to='/projects' className='btn'>
            Projects
          </Link>
          <Link to='/contact' className='btn btn-light'>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
