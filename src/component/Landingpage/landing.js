import React from 'react';
import Aos from "aos";

import "aos/dist/aos.css";
import logo from "../../Image/baja.jpg";
import logos from "../../Image/vector.jpg";
import  landingImage1 from "../../Image/1.jpeg";
import  landingImage2 from "../../Image/2.jpeg";
import  landingImage4 from "../../Image/4.jpeg";
import  landingImage5 from "../../Image/5.jpeg";
import landingImage3 from "../../Image/landing.jpeg";
import { Carousel } from 'react-bootstrap';

function landing() {
  Aos.init({
    offset: window.innerHeight > 1000 ? 600 : 300,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 50,
  });

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
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={landingImage3}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Electric Solaric Vehicle</h3>
                {/* <p>Firs solaric Vehicle in the State</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={landingImage4}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>ESVC is Asia’s Biggest Solar Challenge</h3>
                {/* <p>Awarded Spirit of ESVC for our vehicle.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={landingImage5}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Innovative Engineer of OPJU </h3>
                {/* <p>First establishment of such unique vehicle in the state. </p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>

  );
}

export default landing;