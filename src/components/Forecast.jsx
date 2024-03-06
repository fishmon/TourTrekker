import React from 'react';
import ForecastLogic from './ForecastLogic';
import BottomButtons from './BottomButtons';

function formatDate(timestamp) {
  const date = new Date(timestamp * 1000); // Convert from Unix timestamp to milliseconds
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

<<<<<<< HEAD
function Forecast({ city }) {
  const { currentWeather, forecastWeather, backgroundImageUrl } = ForecastLogic({ city });

  // Inline styles to set background image dynamically
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  // Style for the container that covers the entire viewport
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    margin: '0 auto',
  };

  const cardStyle = {
    background: 'white',
    opacity: '0.94',
  };

  return (
    <div className="weather-app" style={containerStyle}>
      {/* Background with background image */}
      <div style={backgroundStyle}>
        {/* Current weather card */}
        <div className="row justify-content-center">
          <div className="col-md-10 mb-3 mt-4">
            {currentWeather && (
              <div className="card glass" style={cardStyle}>
                <div className="card-body">
                  <h5 className="card-title">{currentWeather.name}</h5>
                  <p className="card-text">Temperature: {currentWeather.main.temp} °C</p>
                  <p className="card-text">Humidity: {currentWeather.main.humidity}%</p>
                  <p className="card-text">Wind Speed: {currentWeather.wind.speed} m/s</p>
                  <p className="card-text">UV Index: N/A</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Forecast cards */}
        <div className="row justify-content-center">
          {forecastWeather.length > 0 && (
            forecastWeather.map((entry, index) => (
              <div className="col-md-2 mb-3" key={index}>
                <div className="card glass" style={cardStyle}>
                  <div className="card-body">
                    <h5 className="card-title">Date: {formatDate(entry.dt)}</h5>
                    <p className="card-text">Temperature: {entry.main.temp} °C</p>
                    <p className="card-text">Humidity: {entry.main.humidity}%</p>
                    <p className="card-text">Wind Speed: {entry.wind.speed} m/s</p>
                  </div>
                </div>
              </div>
            ))
=======


function Forecast({ city }) {
  const { currentWeather, forecastWeather, formatDate } = ForecastLogic({ city });

  return (
    <div className="weather-app">
  
      {/* Current weather card */}
      <div className="row">
        <div className="col-md-12 mb-3"> {/* Full width for the current weather card */}
          {currentWeather && (
            <div className="card glass"> {/* Apply glass effect */}
              <div className="card-body">
                <h5 className="card-title">{currentWeather.name}</h5>
                <p className="card-text">Temperature: {currentWeather.main.temp} °C</p>
                <p className="card-text">Humidity: {currentWeather.main.humidity}%</p>
                <p className="card-text">Wind Speed: {currentWeather.wind.speed} m/s</p>
                <p className="card-text">UV Index: N/A</p>
              </div>
            </div>
>>>>>>> ebc2353958ac0d48cb0a77d5b780c36dcec2eb9e
          )}
        </div>
      </div>

      {/* Forecast cards */}
      <div className="row">
        {forecastWeather.length > 0 && (
          forecastWeather.map((entry, index) => (
            <div className="col-md-2 mb-3" key={index}> {/* Set column width to 2 (15% of 12-column grid) */}
              <div className="card glass"> {/* Apply glass effect */}
                <div className="card-body">
                  <h5 className="card-title">Date: {formatDate(entry.dt)}</h5>
                  <p className="card-text">Temperature: {entry.main.temp} °C</p>
                  <p className="card-text">Humidity: {entry.main.humidity}%</p>
                  <p className="card-text">Wind Speed: {entry.wind.speed} m/s</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <BottomButtons />
    </div>
  );
}

export default Forecast;
