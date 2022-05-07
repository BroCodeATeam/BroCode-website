import React, { Component } from "react";
import "./Hero2.css";

class Hero2 extends Component {
  render() {
    return (
<<<<<<< Updated upstream
      <div className='hero-img'>
        <div className='heading'>
          <h1>Heading</h1>
          <p>Check out some of our work.</p>
=======
        <div className='hero2'>
              <div className='content'>
                <div className='heading'>
                  <h1>{this.props.heading}</h1>
                  <p>{this.props.text}</p>
                </div>
            </div>
>>>>>>> Stashed changes
        </div>
    );
  }
}

export default Hero2;
