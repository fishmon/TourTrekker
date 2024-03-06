import React from 'react';
import ForecastLogic from './ForecastLogic';
import BottomButtons from './BottomButtons';

function formatDate(timestamp) {
  const date = new Date(timestamp * 1000); // Convert from Unix timestamp to milliseconds
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}



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
