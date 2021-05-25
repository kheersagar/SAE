import React from 'react';

import logo from "../../Image/baja.jpg";

import logos from "../../Image/vector.jpg";

function landing() {
  return (
    <>
     {/* <div  className="head1">
      SUPPORTING, CONNECTING &
      DEVELOPING SPORTING DIRECTORS 
      </div>
      <div  className="head2">
       <h1> Association of Sporting Directors</h1>
      </div>
      <div  className="head3">
        <h4> MEET THE TEAM</h4>
     </div> */}
     <div className="main__main">
    <div className="landing__main">
      <div className="left__main">
        <div>
          <div>
          SUPPORTING, CONNECTING &<br/>
          DEVELOPING SPORTING DIRECTORS 
          </div>
        </div>
        <div>
      <h1> Association of<br/> Sporting Directors</h1>
        </div>
        
      </div>
      <div className="right__main">
        <h5> MEET THE TEAM</h5>
      

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