import React, { useEffect } from 'react'
import Aos from "aos";
import { Container, Row, Col, Card,Button } from 'react-bootstrap';


import "aos/dist/aos.css";
import "./EventPage.css";

import electro from "../../Image/electro.jpeg";

function EventPage() {
  useEffect(()=>{
    Aos.init({
      offset: window.innerHeight > 1000 ?  600: 300,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 50,
    });
  },[])
  return (
    <div className="event__main">
    <Row className="event__row" data-aos-once="true" data-aos="zoom-in-right">
      <Col className="col1_title" data-aos-once="true" data-aos="zoom-in-left">
        Events
      </Col>
      <Col className="col2_title" data-aos-once="true" data-aos="zoom-in-right">
        Support, Connect and Develop
        </Col>
        <Col data-aos-once="true" data-aos="zoom-in-left">
        Mission of SAE Collegiate Chapter at OP Jindal University is that members(learners) should be provided more technical knowledge through Industrial Oriented Lecture Sessions along with various extra-curricular skills like leadership, organizational, communication, project management, conflict resolution etc.
        </Col>
        <Col data-aos-once="true" data-aos="zoom-in-right">
        In a relaxed and non-threatening environment which glooms their personality personally as well as professionally
Making the student to learn and realize their talent.
        </Col>
    </Row>
    <Row>
      <Col className="event__image" data-aos-once="true" data-aos="zoom-in">  
        <img src={electro} alt="piv" className="img-fluid rounded"/>
      </Col>
    </Row>
    </div>
  )
}

export default EventPage
