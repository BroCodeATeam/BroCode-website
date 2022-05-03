import React from "react";
import "./Work.css";
import Work from "./Work";
import WorkCardData from "./WorkCardData";

const WorkData = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>PROJECTS</h1>
      <div className='project-container'>
        {WorkCardData.map((value, index) => {
          return (
            <Work
              key={index}
              img={value.imgsrc}
              title={value.title}
              text={value.text}
              view={value.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkData;
