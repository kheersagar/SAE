import React, { useEffect } from 'react';
import { Container, Row, Col, Card,Button } from 'react-bootstrap';
import EventCard from '../EventCard/EventCard';
import Aos from "aos";

import "./BOEvent.css";

function BOEvent() {
  var arr = [
{
  key:"2",
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
            <div className="Bottom_main">
              <Row className="Main-bottom-row">
                <Row className="bottom_row1">
                    <Col className="bottom-img" data-aos="zoom-in-left" data-aos-once="true">
                    <img src="https://image.freepik.com/free-photo/blue-jeep-parking-public-zone_114579-4042.jpg" className="img-fluid"/>
                    </Col>
                </Row>
                <Row className="bottom_row2">
                    <Col>Challenges</Col>
                    <Col>Logo</Col>
                    <Col>Solar car</Col>
                </Row>
                {arr.map((e)=>{
                  return(
                    <Row className={e.className} key={e.key}>
                    <Col><EventCard title={e.card1_title} description={e.desc1}/></Col>
                    <Col><EventCard title={e.card2_title} description={e.desc2}/></Col>
                    <Col><EventCard title={e.card3_title} description={e.desc3}/></Col>
                    
                    
                </Row>
                  )
                })}
                
              </Row>
            </div>
        )
    }

export default BOEvent
