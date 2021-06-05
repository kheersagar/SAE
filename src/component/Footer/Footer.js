import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="inner-div">
        <div className="links">
          <NavLink to="/benefits" >Benefits</NavLink>
          <NavLink to="/events" >Events</NavLink>
          <NavLink to="" >Membership</NavLink>
          <NavLink to="" >Team</NavLink>
        </div>
        <hr></hr>
        <div className="bottom-data">
          <div className="office">
            <h4>OFFICE</h4>
            <p>
              Suite 9, Rockfield House, 512 Darwen Road, Bromley Cross, Bolton,
              Lancashire, BL7 9DX
            </p>
          </div>
          <div className ="legal">
            <h4>LEGAL</h4>
            <p>
              This site is protected by Google reCAPTCHA. Privacy Policy. ©
              Association of Sporting Directors. 2005 – 2020. All Rights
              Reserved.
            </p>
          </div>
          <div className="socials">
            <h4>FOLLOW US</h4>
            <img src="/svg/twitter.svg" width="40px"/>
            <img src="/svg/linkedin.svg" width="40px" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
