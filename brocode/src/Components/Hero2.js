import React, { Component } from "react";
import "./Hero2.css";

class Hero2 extends Component {
  render() {
    return (
      <div className='hero-img'>
        <div className='heading'>
          <h1>Heading</h1>
          <p>Check out some of our work.</p>
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Hero2;
