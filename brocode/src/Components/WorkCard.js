import React, { Component } from "react";
import "./WorkCard.css";
import { Link } from "react-router-dom";

class WorkCard extends Component {
  render() {
    return (
      <div className='project-card'>
        <img src={this.props.img} alt='code' />
        <h2 className='project-title'>{this.props.title}</h2>
        <div className='pro-details'>
          <p>{this.props.text}</p>
          <div className='pro-btns'>
            <Link to={this.props.view} className='btn'>
              View
            </Link>
            <Link to={this.props.source} className='btn'>
              Source
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkCard;
