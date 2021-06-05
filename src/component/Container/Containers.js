import React, { createRef, useEffect, useRef } from 'react';
import { Container, Row, Col, Card,Button } from 'react-bootstrap';
import "./Container.css";
import image from "../../Image/card_background.jpg";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Aos from "aos";

import "aos/dist/aos.css";

import arnav from "../../Image/arnav.jpeg";
import alok from "../../Image/alok.jpeg";
import akshat from "../../Image/akshat.jpeg";
import amit from "../../Image/amit.jpeg";
import ayush from "../../Image/ayush.jpg";
import bindeswar from "../../Image/bindeswar.jpeg";
import chirag from "../../Image/chirag.jpg";
import yasharth from "../../Image/yasharth.jpg";
import manish from "../../Image/manish.jpeg";
import t2 from "../../Image/t2.jpeg";
import { YouTube } from '@material-ui/icons';


function Containers ()  {
  var arr = [
    {
      id:1,
      profile:arnav,
      name:"ARNAV MANKAR",
      designation:" Student Chairperson"
    },
    {
      id:2,
      profile:t2,
      name:"ASHISH GAUTAM",
      designation:"Student Vice Chairperson"
    },
    {
      id:3,
      profile:bindeswar,
      name:"DINDERSHWAR DASH",
      designation:"Student secretary"
    },
    {
      id:4,
      profile:yasharth,
      name:"YASHARTH MISHRA",
      designation:"Student Publicity Chairperson"
    },
    {
      id:5,
      profile:ayush,
      name:"AYUSH KUMAR PANDEY",
      designation:"Student Publicity Vice- Chairperson"
    },
    {
      id:6,
      profile:chirag,
      name:"CHIRAG MISHRA",
      designation:"Student Membership Chairperson"
    },
    {
      id:7,
      profile:alok,
      name:"ALOK KUMAR",
      designation:"Student Membership Vice Chairperson"
    },
    {
      id:8,
      profile:amit,
      name:"AMIT KUMAR SAIHI",
      designation:"Student Treasurer"
    },
    {
      id:9,
      profile:manish,
      name:"MANISH PATEL",
      designation:"Student Program Chairperson"
    },
    {
      id:10,
      profile:akshat,
      name:"AKSHAT PANDEY",
      designation:"Student Reception Chairperson"
    }
  ];
 const scrollRef = useRef();
  function scrollHandler(props){
    if(props =="right"){
      scrollRef.current.scrollLeft += 200;
      // alert();
    }else{
      scrollRef.current.scrollLeft += -200;

    }
  }

  useEffect(()=>{
    Aos.init({
      offset: window.innerHeight > 1000 ?  600: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 50,
    });
  },[]);
    return(
        <div>
            <Container className="container_box" fluid >
             <Row className="row1">
                 <Col lg={true} style={{marginBottom:"2rem"}} data-aos="fade-right">
                  <div className="conatiner__text">
                 The Department organizes number of short term training programs, workshop and seminars from time to time for faculties and students for sharing and updating their technical knowledge in a regular and periodic manner. 
                  </div>
                  <Col className="scroll__btn" >
                  <Button  variant="secondary" className="btn_left arrow" onClick={()=>{scrollHandler("left")}}><ArrowBackIosIcon/></Button>
                  <Button  variant="secondary" className="btn_right arrow" onClick={()=>{scrollHandler("right")}}><ArrowForwardIosIcon/></Button>
                  </Col>
                 </Col>
                 <Col lg={true} className="col2" ref={scrollRef}>
                  {
                    arr.map((e)=>{
                      return(
                        <Card className="First_card card__img" data-aos="fade-up-right">
                        <Card.Img variant="left"  src={e.profile} className="card__profile"/>
                        <Card.Title style={{marginTop:"18px",marginBottom:"0px", fontWeight:"700"}}>{e.name}</Card.Title>
                        <Card.Title style={{ fontWeight:"500",color: "dimgray",marginTop:"10px"}}>{e.designation}</Card.Title>
                      </Card>
                      )
                    })
                  }


                 </Col>
                 
             </Row>
              
            </Container>
        </div>
      
    )
}

export default Containers