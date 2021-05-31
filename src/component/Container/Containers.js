import React, { createRef, useEffect, useRef } from 'react';
import { Container, Row, Col, Card,Button } from 'react-bootstrap';
import "./Container.css";
import image from "../../Image/card_background.jpg";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Aos from "aos";

import "aos/dist/aos.css";

import t1 from "../../Image/t1.jpeg";
import t2 from "../../Image/t2.jpeg";


function Containers ()  {
  var arr = [
    {
      id:1,
      profile:t1,
      name:"Arnav Mankar",
      designation:"Chairperson"
    },
    {
      id:2,
      profile:t2,
      name:"Ashish Gautam",
      designation:"Vice Chairperson"
    },
    {
      id:3,
      profile:t1,
      name:"",
      designation:""
    },
    {
      id:4,
      profile:t1,
      name:"",
      designation:""
    },
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
                        <Card.Title style={{marginTop:"18px", fontWeight:"700"}}>{e.name}</Card.Title>
                        <Card.Text  className="textarea">
                            Thre is noting important to read so  chill and enjoy your life.SomeThing Special in our life
                        </Card.Text>
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