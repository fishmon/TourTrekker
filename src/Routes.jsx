import React from "react";
import LandingPage from "./components/landingPage";
import Forecast from "./components/Forecast"
import Info from "./components/Info";
import Places from "./components/Places";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


const AppRoutes = () => {
    return(

        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />}></Route>
                <Route path="/info" element={<Info />}></Route>
                <Route path="/forecast" element={<Forecast />}></Route>
                <Route path="/Places" element={<Places />}></Route>

            </Routes>
        </Router>
    )
}

export default AppRoutes;