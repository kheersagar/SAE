import React from 'react';
import { Row, Col, Card,Button } from 'react-bootstrap';
import "./Cardview.css";


function  CardViews()  {
    return(

      <div>
        <Card  className="Card_Box">
         <Row className="card_row">
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
      </div>
      // <Card style={{ width: '50rem',height:"300px" }}>
      // <Row>
      // <Col>
      // <Card.Img variant="top" src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" className="img-fluid" height="50"/>
      // </Col>  
      // <Col>
      //   <Card.Body>
      //     <Card.Title>Card Title</Card.Title>
      //     <Card.Text>
      //       Some quick example text to build on the card title and make up the bulk of
      //       the card's content.
      //     </Card.Text>
      //     <Button variant="primary">Go somewhere</Button>
      //   </Card.Body>
      //   </Col>
      // </Row>

      // </Card>

    )
}
export default CardViews