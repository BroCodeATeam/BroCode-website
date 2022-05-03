import React from "react";
import "./Work.css";
import code from "../assets/code.jpg";
import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <div className='project-card'>
      <img src={code} alt='code' />
      <h2 className='project-title'>Lorem Ipsum</h2>
      <div className='pro-details'>
        <p>This is a paragraph</p>
        <div className='pro-btns'>
          <NavLink to='url.com' className='btn'>
            View
          </NavLink>
          <NavLink to='github.com' className='btn'>
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Work;
