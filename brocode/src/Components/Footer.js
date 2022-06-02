import React from "react";
import "./Footer.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>69420 Your Mom's House, USA</p>
            </div>
          </div>
          <div className='phone'>
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              666-867-5309
            </h4>
          </div>
          <div className='email'>
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              bro@code.com
            </h4>
          </div>
        </div>
        <div className='right'>
          <h4>About Us</h4>
          <p>
            We are a team of passionate web developers with a mission to make
            outstanding<br/>user-friendly websites for you or your business.
          </p>
          <div className='social'>
            <a href='https://www.facebook.com/broCode.Development' target='_blank' rel='noreferrer' >
            <FaFacebook
              size={30}
              style={{ color: "#15A3FA", marginRight: "1rem" }}
            />
            </a>
            <FaTwitter
              size={30}
              style={{ color: "#1A8CD8", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#0A66C2", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
