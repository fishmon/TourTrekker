import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from "./components/landingPage";
import Forecast from "./components/Forecast";
import Info from "./components/Info";
import Places from "./components/Places";


const AppRoutes = ({ city }) => { 


  
  return (
    <Router>
    
      <Routes>
        {/* Route for landing page */}
        <Route path="/" element={<LandingPage city={city} />} />

        {/* Route for info page */}
        <Route path="/info" element={<Info city={city} />}  />

        {/* Route for forecast page, passing city prop to Forecast */}
        <Route path="/forecast" element={<Forecast city={city} />} />

        {/* Route for places page */}
        <Route path="/Places" element={<Places />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
