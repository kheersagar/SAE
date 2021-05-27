import React from 'react';

import logo from "../../Image/baja.jpg";

import logos from "../../Image/vector.jpg";

function landing() {
  return (
    <>
     <div className="main__main">
    <div className="landing__main">
      <div className="left__main">
        <div>
          <div className="moto">
          SUPPORTING, CONNECTING &<br/>
          DEVELOPING SPORTING DIRECTORS 
          </div>
        </div>
        <div className="cmp_name">
       Association of<br/> Sporting Directors
        </div>
        
      </div>
      <div className="right__main">
   <div>   <a  id="next"><span class="arrows">&#10230;</span></a> </div>
   <div>    <p> <a href="#" class="underline">MEET THE TEAM</a></p>
      
               </div>
      </div>

    </div>
    <div className="image">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWYlRr3pfOYD4d-6SQmg8KwXOZckYN1qjfpQ&usqp=CAU" alt="piv" className="img-fluid"/>
    </div>
    </div>
</>

  );
}

export default landing;