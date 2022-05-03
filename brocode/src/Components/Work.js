import React from "react";
import "./Work.css";
import { NavLink } from "react-router-dom";
// import WorkCardData from "./WorkData";

const Work = (props) => {
  return (
    <div className='project-card'>
      <img src={props.imgsrc} alt='code' />
      <h2 className='project-title'>{props.title}</h2>
      <div className='pro-details'>
        <p>{props.text}</p>
        <div className='pro-btns'>
          <NavLink to={props.view} className='btn'>
            View
          </NavLink>
          <NavLink to={props.source} className='btn'>
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Work;