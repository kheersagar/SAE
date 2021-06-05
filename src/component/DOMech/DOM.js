import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

import "./DOM.css";

import community from "../../Image/community.png";
import purpose from "../../Image/purpose.jpeg";
import benefits from "../../Image/benefits.png";
import contest from "../../Image/contest.jpg";


function DOM() {
  var arr1 = [
    {
      id: 1,
      title:"Purpose",
      image:purpose,
      about:
        "The purpose of an SAE INDIA Collegiate Club is to increase the benefits of SAEINDIA student membership through special activities that includes affiliation with the sections.",
    },
    {
      id: 2,
      title:"Contest",
      image:contest,
      about:
        "Our college OPJU also participated with a team of 11 student under the captaincy of Arnav Dinesh Mankar and Vice captain Ashish Gautam . The project drives towards the betterment and advancement in Electric solar vehicle.",
    },
    {
      id: 3,
      title:"Benefits",
      image:benefits,
      about:
        "SAE provides a forum for companies, government agencies, research institutions and consultants to devise technical standards and recommended practices for the design, construction, and characteristics of motor vehicle components.",
    },
    {
      id: 4,
      title:"Community",
      image:community,
      about:
        "SAE unites scientific and technical staff to perform free academic discussions, to dedicate themselves to the cause of prospering the science and technology for automotive vehicles and to make contributions to speed up the modernization of automotive industry.",
    },
  ];
  var arr2 = [1,2];
  return (
    <div>
      {arr2.map((card1) => {
        return (
          <div className={`maincontainer ${card1 == 1 ? 'first__row' : null}`}>
            {arr1.map((card) => {
              return (
                card1 ==1 ? card.id ==1 || card.id ==2 ? 
                <div className="subcontainer">
                  <div className="images">
                    <img
                      src={card.image}
                      className="card__profile__group"
                    />
                  </div>
                  <div className="paragraph">
                    <h3> {card.title}</h3>
                    <p className="para">
                    {card.about}
                    </p>
                  </div>
                </div>
                : null : 
                card.id ==3 || card.id ==4 ? 
                <div className="subcontainer">
                  <div className="images">
                    <img
                      src={card.image}
                      className="card__profile__group"
                    />
                  </div>
                  <div className="paragraph">
                    <h3> {card.title}</h3>
                    <p className="para">
                    {card.about}
                    </p>
                  </div>
                </div>
                : null
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default DOM;
