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
            <img src="/svg/twitter.svg" width="40px"/>
            <img src="/svg/linkedin.svg" width="40px" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
