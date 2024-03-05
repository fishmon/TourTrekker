import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './landingPage.css';



const LandingPage = () => {

  const Navigate = useNavigate();
 
    Navigate('./info')
 
  return (
    <div className="landing-page">
     
      <h1>Welcome!</h1>
     
    </div>
  );
};

export default LandingPage;
