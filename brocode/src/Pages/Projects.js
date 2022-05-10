import React from "react";
import Hero2 from "../Components/Hero2";
import PricingCard from "../Components/PricingCard";
// import Work from "../Components/Work";

const Projects = () => {
  return (
    <div>
      <Hero2 heading='PROJECTS.' text='View our recent work.' />
      {/* <Work /> */}
      <PricingCard />
    </div>
  );
};

export default Projects;
