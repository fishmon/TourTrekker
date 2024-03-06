import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './landingPage.css';

const LandingPage = () => {

  const Navigate = useNavigate();
 
    Navigate('./info')
 
  return (
    <div className="landing-page">
     
     <div className="container position-absolute text-black welcome-box rounded">
      <h2 className="bg fs-1">Welcome!</h2>
      <p>Embark on a journey of exploration and discovery with TourTrekker – your gateway to discovering the world's wonders. 
<br/><b> Start</b> your journey today <b>by typing in a city name</b> and uncovering a world of possibilities. <br/>Happy exploring!</p>
<div className="d-flex search-input">
       
      </div>
    </div>
     
    </div>
  );
};

export default LandingPage;
