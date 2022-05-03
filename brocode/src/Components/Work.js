import React from "react";
import "./Work.css";
import code from "../assets/code.jpg";

const Work = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>PROJECTS</h1>
      <div className='project-container'>
        <div className='project-card'>
          <img src={code} alt='idk' />
        </div>
      </div>
    </div>
  );
};

export default Work;
