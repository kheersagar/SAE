import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./DOM.css";

function  DOM()  {
    return(
      <div>
        <Row>
          <Col className="Main_itembox">
            <div className="Pro_Photo">
              <img src="https://associationofsportingdirectors.com/app/uploads/2020/09/pexels-pixabay-262524-scaled-aspect-ratio-220-220.jpg"/>
            </div>
            <div className="Item_content">
              <div className="head-line">
              Dean Of Mechinical Engineering
              </div>
              <div className="Content_2">
              The ME is well known for its quality of teaching and supportive environment provided to the students.
              </div>
            </div>
          </Col>
        </Row>
      </div>

  )

}

export default DOM