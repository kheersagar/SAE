import React from 'react';
import Aos from "aos";

import "aos/dist/aos.css";
import logo from "../../Image/baja.jpg";
import logos from "../../Image/vector.jpg";
import landingImage from "../../Image/landing.jpeg";

function landing() {
  Aos.init({
    offset: window.innerHeight > 1000 ?  600: 300,
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
          SUPPORTING, CONNECTING &<br/>
          DEVELOPING SPORTING DIRECTORS 
          </div>
        </div>
        <div className="cmp_name" data-aos="fade-right">
       Association of<br/> Sporting Directors
        </div>
        
      </div>
      <div className="right__main" data-aos="fade-left" data-aos-once="true">
        <h5> MEET THE TEAM</h5>
      

      </div>

    </div>
    <div className="image" data-aos="fade-right" data-aos-once="true">
      <img src={landingImage} alt="piv" className="img-fluid"/>
    </div>
    </div>
</>

  );
}

export default landing;