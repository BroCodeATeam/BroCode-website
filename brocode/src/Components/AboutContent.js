import React from "react";
import { Link } from "react-router-dom";
import "./AboutContent.css";
import code4 from "../assets/code4.jpg";
import code5 from "../assets/code5.jpg";

const AboutContent = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>Who are we?</h1>
        <p>
          We are Full Stack Developers that create beautiful responsive and
          secure websites for our clients.
        </p>
        <Link to='/contact'>
          <button className='btn'>Contact</button>
        </Link>
      </div>
      <div className='right'>
        <div className='img-container'>
          <div className='img-stack top'>
            <img src={code4} className='img' alt='code' />
          </div>
          <div className='img-stack bottom'>
            <img src={code5} className='img' alt='code' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
