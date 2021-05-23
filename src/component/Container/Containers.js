import React, { createRef, useRef } from 'react';
import { Container, Row, Col, Card,Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./Container.css";
import image from "../../Image/card_background.jpg";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



function Containers ()  {
  var arr = [1,2,3,4];
 const scrollRef = useRef();
  function scrollHandler(props){
    if(props =="right"){
      scrollRef.current.scrollLeft += 200;
      // alert();
    }else{
      scrollRef.current.scrollLeft += -200;

    }
  }
    return(
        <div>
            <Container className="container_box" fluid >
             <Row className="row1">
                 <Col lg={true}>
                  <div className="conatiner__text">
                 The Department organizes number of short term training programs, workshop and seminars from time to time for faculties and students for sharing and updating their technical knowledge in a regular and periodic manner. 
                  </div>
                  <Col className="scroll__btn">
                  <Button variant="secondary" className="btn_left arrow" onClick={()=>{scrollHandler("left")}}><ArrowBackIosIcon/></Button>
                  <Button variant="secondary" className="btn_right arrow" onClick={()=>{scrollHandler("right")}}><ArrowForwardIosIcon/></Button>
                  </Col>
                 </Col>
                 <Col lg={true} className="col2" ref={scrollRef}>
                  {
                    arr.map((e)=>{
                      return(
                        <Card className="First_card card__img">
                        <Card.Img variant="top"  src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" className="card__profile"/>
                        <Card.Title style={{marginTop:"18px", fontWeight:"700"}}>CARD TITLE</Card.Title>
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