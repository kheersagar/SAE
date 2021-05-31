import React from 'react';

import { Row, Col, Card, Button } from 'react-bootstrap';


import "./DOM.css";

function DOM() {


  var arr = [1, 2];







  return (

    <div>
      {arr.map((card1) => {
        return (
        <div className="maincontainer">
          {arr.map((card) => {
            return (


              <div  className="subcontainer"  >
                <div className="images">
                  <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" className="card__profile"/>
              </div>
                <div className="paragraph">
                  <h3>this is op jindal univeristy hello in opju</h3>
                  <p> The Department organizes number of short term training programs, workshop and seminars from time to time for faculties and students for sharing and updating their technical knowledge in a regular and periodic manner.
              
                  </p>
           </div>
              </div>




            )
          })}
        </div>
        )
  })}
  </div>
  )
}


export default DOM