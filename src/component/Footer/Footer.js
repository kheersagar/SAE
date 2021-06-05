import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

import linkedln from "../../Image/linkedln.png";
import instagram from "../../Image/instagram.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="inner-div">
        <div className="links">
          <NavLink to="/SAE/benefits" >Benefits</NavLink>
          <NavLink to="/SAE/events" >Events</NavLink>
          <NavLink to="/SAE/" >Membership</NavLink>
          <NavLink to="/SAE/" >Team</NavLink>
        </div>
        <hr></hr>
        <div className="bottom-data">
          <div className="office">
            <h4>OPJU</h4>
            <p>
            OPJU is considered to be India's Steel University established under the JSPL flagship.
            </p>
          </div>
          <div className ="legal">
            <h4>Developed By</h4>
            <p>
              <ul>
                <li>Kheersagar Parja</li>
                <li>Swati Mishra</li>
                <li>Shikhar Lohiya</li>
                <li>Sarthak Suhas Bakre</li>
              </ul>
            </p>
          </div>
          <div className="socials">
            <h4>FOLLOW US</h4>
            <a href="https://www.linkedin.com/company/sae-opju" >
              <img src={linkedln} width="40px"/>
            </a>
            <a href="https://instagram.com/sae_opju?utm_medium=copy_link">
              <img src={instagram} width="40px" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
