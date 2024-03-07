import React from "react";
import LandingPage from "./components/landingPage";
import Forecast from "./components/Forecast";
import Info from "./components/Info";
import Places from "./components/Places";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const AppRoutes = ({ city }) => {
  // Component to manage routing
  return (
    <div>
      <Router>
        <Routes>
          {/* Route for landing page */}
          <Route path="/" element={<LandingPage city={city} />} />

          {/* Route for info page */}
          <Route path="/info" element={<Info />} />

          {/* Route for forecast page, passing city prop to Forecast */}
          <Route path="/forecast" element={<Forecast city={city} />} />

          {/* Route for places page */}
          <Route path="/Places" element={<Places />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
