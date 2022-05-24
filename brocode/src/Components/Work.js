import React from "react";
import "./WorkCard.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>PROJECTS</h1>
      <div className='project-container'>
        {WorkCardData.map((value, index) => {
          return (
            <WorkCard
              key={index}
              img={value.img}
              title={value.title}
              text={value.text}
              view={value.view}
              source={value.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
