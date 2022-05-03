import React from "react";
import { Link } from "react-router-dom";
import "./AboutContent.css";

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
      <div className='right'></div>
    </div>
  );
};

export default AboutContent;
