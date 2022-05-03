import "./Hero.css";
import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../assets/icycoast.jpg";

const Hero = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='hero-img' src={HeroImg} alt='HeroImg' />
      </div>
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
