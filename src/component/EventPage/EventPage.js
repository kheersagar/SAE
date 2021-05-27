import React, { useEffect } from 'react'
import Aos from "aos";
import { Container, Row, Col, Card,Button } from 'react-bootstrap';


import "aos/dist/aos.css";
import "./EventPage.css";

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
        Here at Association of Sporting Directors (ASD), we provide regular and high quality support, news and connections for sporting directors within professional football.
        </Col>
        <Col data-aos-once="true" data-aos="zoom-in-right">
        Our members create this pioneering environment for leaders to support, connect and develop. We help our members prepare for future challenges of the game, which we achieve with our commitment to being evidence-led and expertly informed in our practice.
        </Col>
    </Row>
    <Row>
      <Col className="event__image" data-aos-once="true" data-aos="zoom-in">  
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWYlRr3pfOYD4d-6SQmg8KwXOZckYN1qjfpQ&usqp=CAU" alt="piv" className="img-fluid"/>
      </Col>
    </Row>
    </div>
  )
}

export default EventPage
