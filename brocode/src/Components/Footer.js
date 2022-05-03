import React from "react";
import "./Footer.css";
import { FaHome, FaPhone, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>69420 Your Mom's House</p>
              <p>USA</p>
            </div>
          </div>
        </div>
        <div className='phone'>
          <h4>
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            123-456-7890
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
        <div className='right'></div>
      </div>
    </div>
  );
};

export default Footer;
