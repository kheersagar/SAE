import React from 'react';
import Aos from "aos";

import "aos/dist/aos.css";
import group from "../../Image/group.jpeg";
import group2 from "../../Image/group2.jpeg";
import group3 from "../../Image/group3.jpeg";
import { Carousel } from 'react-bootstrap';

function landing() {
  Aos.init({
    offset: window.innerHeight > 1000 ? 600 : 300,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 50,
  });
var carousel = [
  {
    id:1,
    Image:group,
    caption:"Team SAE"
  },
  {
    id:2,
    Image:group2,
    caption:"Electric Solaric Vehicle"
  },
  {
    id:3,
    Image:group3,
    caption:"OPJU"
  }
];
  return (
    <>
      <div className="main__main">
        <div className="landing__main">
          <div className="left__main">
            <div>
              <div className="moto" data-aos="fade-right">
                SUPPORTING, CONNECTING &<br />
          DEVELOPING SAE SOCIETY
          </div>
            </div>
            <div className="cmp_name" data-aos="fade-right">
            Society of <br /> Automotive Engineers
        </div>

          </div>
          <div className="right__main" data-aos="fade-left" data-aos-once="true">
            <div style={{position:"relative"}}> 
              <a id="next">
                <span class="arrows">&#10230;</span>
              </a> 
            </div>
            <div> 
              <p>
                 <a href="#" class="underline">MEET THE TEAM</a>
              </p>

            </div>

          </div>

        </div>
        <div className="image" data-aos="fade-right" data-aos-once="true">
          <Carousel>
          {carousel.map((e)=>{
            return(
              <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={e.Image}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{e.caption}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            )
          })}

          </Carousel>
        </div>
      </div>
    </>

  );
}

export default landing;