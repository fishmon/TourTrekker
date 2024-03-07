// Forecast.js
import React from 'react';
import ForecastLogic from './ForecastLogic';
import BottomButtons from './BottomButtons';

function Forecast({ city }) {
  const { currentWeather, forecastWeather, getWeatherData, formatDate, backgroundImageUrl } = ForecastLogic({ city });

  const weatherContainerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`, // Apply the background image dynamically
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh', // Adjust as needed
    padding: '20px', // Adjust as needed
  };

  return (
    <div className="weather-app" style={weatherContainerStyle}>
      <div className="row">
        <div className="col-md-12 mb-3">
          {currentWeather && (
            <div className="card glass">
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

      <div className="row">
        {forecastWeather.length > 0 && (
          forecastWeather.map((entry, index) => (
            <div className="col-md-2 mb-3" key={index}>
              <div className="card glass">
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
