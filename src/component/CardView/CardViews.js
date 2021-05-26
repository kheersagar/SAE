import React, { useEffect } from 'react';
import { Row, Col, Card,Button } from 'react-bootstrap';
import Aos from "aos";

import "aos/dist/aos.css";
import "./Cardview.css";


function  CardViews()  {
  var arr = [1,2,3];

  useEffect(()=>{
    Aos.init({
      offset: window.innerHeight > 1000 ?  500: 300,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 50,
    });
  },[]);
    return(

      <div>
      {arr.map((card)=>{
        return(
          <Card  className="Card_Box" data-aos="fade-left">
         <Row className="card_row" style={{flexDirection: (card%2) == 0 ? "row-reverse" : null}}>
          <Col className="Left-pic ">
          <div className="image_box">
            <img  src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" className="img-fluid" ></img>
          </div>
          </Col>
          <Col className="card_col2">
              <div className="Statement_name">Card title Some-More statement</div>
              <div className="card-text01">
              O.P. Jindal University is a private university located in Raigarh, Chhattisgarh, India. It was established by an Act of Legislature in the state assembly of Chhattisgarh in 2014. It was founded by the Jindal Education and Welfare Society.               </div>
          </Col>
          </Row>
        </Card>
        )
      })}
      </div>

    )
}
export default CardViews