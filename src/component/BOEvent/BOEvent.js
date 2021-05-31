import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Card,Button } from 'react-bootstrap';
import EventCard from '../EventCard/EventCard';
import Aos from "aos";

import "./BOEvent.css";

import image1 from "../../Image/group.png";
import image2 from "../../Image/attach.png";
import image3 from "../../Image/stats.png";
import eventImage1 from "../../Image/e.jpeg";
import eventLogo from "../../Image/eventLogo.png";

function BOEvent() {
  const event = [
    {
      eventImage:eventImage1,
      eventName:"AUTOMOTIVE TECHNOLOGY",
      logo:eventLogo

    },
    {
      eventImage:eventImage1,
      eventName:"solar bike",
      logo:eventLogo


    },
    {
      eventImage:eventImage1,
      eventName:"solar ",
      logo:eventLogo


    }

];
  var arr = [
{
  key:"2",
  img1:image1,
  img2:image2,
  img3:image3,
  className:"bottom_row3",
  card1_title:"Creating High Performance Environments",
  card2_title:"Creating High Performance Environments",
  card3_title:"Creating High Performance Environments",
  desc1:"Adapting to the introduction of regulations that affect the performance environment",
  desc2:"Adapting to the introduction of regulations that affect the performance environment",
  desc3:"Adapting to the introduction of regulations that affect the performance environment",

},
{
    key:"3",
    img1:image1,
    img2:image2,
    img3:image3,
    className:"bottom_row4",
    card1_title:"Leading Multi-Disciplinary Teams",
    card2_title:"Leading Multi-Disciplinary Teams",
    card3_title:"Leading Multi-Disciplinary Teams",
    desc1:"Strategies and practices to find the best talent on and off the pitch",
    desc2:"Strategies and practices to find the best talent on and off the pitch",
    desc3:"Strategies and practices to find the best talent on and off the pitch",

  }];

  useEffect(()=>{
    Aos.init({
      offset: window.innerHeight > 1000 ?  600: 300,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 50,
    });
  },[])
        return (
          
            event.map((evt)=>{
              return(
                <div className="Bottom_main">
                <Row className="Main-bottom-row">
                  <Row className="bottom_row1">
                      <Col className="bottom-img" data-aos="zoom-in-left" data-aos-once="true">
                      <img src={evt.eventImage} className="img-fluid"/>
                      </Col>
                  </Row>
                  <Row className="bottom_row2">
                      <Col>{evt.eventName}</Col>
                      <Col><img src={evt.logo} className="event__logo"/></Col>
                      <Col>Benefits</Col>
                  </Row>
                  {arr.map((e)=>{
                    return(
                      <Row className={e.className} key={e.key}>
                      <Col><EventCard title={e.card1_title} description={e.desc1} logo={e.img1}/></Col>
                      <Col><EventCard title={e.card2_title} description={e.desc2} logo={e.img2}/></Col>
                      <Col><EventCard title={e.card3_title} description={e.desc3} logo={e.img3}/></Col>
                      
                      
                  </Row>
                    )
                  })}
                  
                </Row>
              </div>
              )
            })

        )
    }

export default BOEvent
