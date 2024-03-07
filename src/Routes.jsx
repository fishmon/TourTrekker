import React from "react";
import LandingPage from "./components/landingPage";
import Forecast from "./components/Forecast";
import Info from "./components/Info";
import Places from "./components/Places";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from './components/Header';

const AppRoutes = ({ city, onSearch }) => {
  const location = useLocation();
  const showHeader = location.pathname !== '/'; // Check if current path is not the landing page

  return (
    <div>
      {showHeader && <Header onSearch={onSearch} />} {/* Render the header only if it's not the landing page */}
      <Routes>
        {/* Route for landing page */}
        <Route path="/" element={<LandingPage city={city} onSearch={onSearch} />} />

        {/* Route for info page */}
        <Route path="/info" element={<Info />} />

        {/* Route for forecast page, passing city prop to Forecast */}
        <Route path="/forecast" element={<Forecast city={city} />} />

        {/* Route for places page, passing city prop to Places */}
        <Route path="/places" element={<Places city={city} />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
