import React, { useEffect } from 'react';
import { Row, Col, Card,Button } from 'react-bootstrap';
import Aos from "aos";

import "aos/dist/aos.css";
import "./Cardview.css";

import t1 from "../../Image/t1.jpeg";
import t2 from "../../Image/t2.jpeg";
import vc from "../../Image/vc.jpg";
import sc from "../../Image/sc.jpg";




function  CardViews()  {
  var arr = [
    {
      id:1,
      profile:vc,
      name:"Dr. R.D. Patidar",
      designation:"(Vice-Chancellor, OP Jindal University)",
      message:"No institution has the commitment, vision, or execution capabilities like OPJU to deliver on the vision of becoming India’s First and Only Private University catering to the needs of the Indian Steel and Power Industries. The University will consciously create resources that address problems unique to the Steel industry whether in the areas of engineering and technology or in the fields of Management practices.From our inception in 2014, it was clear to us that we are bestowed with an enormous opportunity to truly leverage our key strengths – location, industrial assets, and the supporting ecosystem to re-imagine the role of an institution of higher education can play to truly build a world-class institution with a specific focus.And now the Department of Mechanical Engineering has established a collegiate club of SAE (Society for Automotive Engineers) with an objective of benefiting the students in aligns with SAEINDIA in the field of the mobility industry. The club aims to create a learning platform for its members. Cementing a leadership position demonstrates their commitment and willingness to contribute to the club, Mechanical department, and University. The journey of a student-led club has started and the University wishes them a very all the best for the further conduction and operation of club activities."
    },
    {
      id:2,
      profile:sc,
      name:"Dr. Siddharth S Chakrabarti",
      desination:"(Head of Department-Mechanical Engineering)",
      message:"Since the establishment of OP Jindal University back in 2014,the university has achieved many awards & recognition on both national and international level in a very short period of time. It gives me immense pleasure while informing you all that now SAE-India has established it’s SAE Collegiate Chapter in OPJU which is now known as SAE-OPJU. It’s a student led club in which they are going to have various opportunities as well as will have an exposure towards mobility industry.The Department of Mechanical Engineering is geared up to meet the test by drawing on its student quality and commitment of members of faculty and staff.It has been our endeavour to ensure that we better ourselves every semester in our efforts. I look forward to building on the tradition of excellence in the areas of research, teaching and leadership in engineering: qualities that Institute of Engineering is counted upon."
    },
    {
      id:3,
      profile:t1,
      name:"Mr. Arnav Dinesh Mankar",
      designation:"(Chairperson of SAE Collegiate Chapter at OP Jindal University, SAE-OPJU)",
      message:"The SAE-India collegiate club of OP Jindal University was established in 14/03/2021. SAEINDIA is an affiliate society of SAE International registered in India as an Indian non-profit engineering and scientific society dedicated to the advancement of mobility industry in India.The SAE Collegiate Club is the frontrunner in this regard. It is administered by the Department of Mechanical Engineering. It comprises of a majority of students from Mechanical Engineering and also from Electrical, Electronics , Civil and Computer Science Engineering.The club is aimed in bringing out the blooming talents of students. It conducts activities in different aspects of automobile engineering. The main objective of this club is the overall & personal development of students by encouraging them to participate in international / national SAE Collegiate Design Series."
    },
    {
      id:4,
      profile:t2,
      name:"Mr. Ashish Gautam",
      designation:"(Vice- Chairperson of SAE Collegiate Chapter at OP Jindal University, SAE-OPJU)",
      message:"SAE is the global leader in technical learning for the mobility industry. SAE-India is  a strategic alliance partner of SAE International in India has a chapter for college/universities students in India which is known as SAE Collegiate Chapter.SAE-OPJU creates an opportunity for students to develop and enhance their technical skills along with many important skills required for career development in a relaxed and non-threatening environment.I welcome all the members in SAE-OPJU and wishing you lots of luck. I’m pretty confident that we’ll do well. "
    }
  ];

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
         <Row className="card_row" style={{flexDirection: (card.id%2) == 0 ? "row-reverse" : null}}>
          <Col className="Left-pic ">
          <div className="image_box">
            <img  src={ card.profile || "https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"} className="img-fluid" ></img>
          </div>
          </Col>
          <Col className="card_col2">
              <div className="Statement_name">{card.name}</div>
              <div className="designation">{card.designation}</div>
              <div className="card-text01">
              {card.message}
              </div>
          </Col>
          </Row>
        </Card>
        )
      })}
      </div>

    )
}
export default CardViews