import React from 'react';
import ForecastLogic from './ForecastLogic';
import BottomButtons from './BottomButtons';
import './Forecast.scss';


function Forecast({ city }) {
  const { currentWeather, forecastWeather, formatDate } = ForecastLogic({ city });

  return (
    <div className="weather-app">
  
      {/* Current weather card */}
      <div className="row mt-5">
        <div className="col-md-10 mb-3 m-auto"> {/* Full width for the current weather card */}
          {currentWeather && (
            <div className="card"> {/* Apply glass effect */}
              <div className="card-body">
                <h2 className="card-title text-center">{currentWeather.name}</h2>
                <div className="row">
                <div className="card-text col-md-3 text-center">Temperature: {currentWeather.main.temp} °C</div>
                <div className="card-text col-md-3 text-center">Humidity: {currentWeather.main.humidity}%</div>
                <div className="card-text col-md-3 text-center">Wind Speed: {currentWeather.wind.speed} m/s</div>
                <div className="card-text col-md-3 text-center">UV Index: N/A</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Forecast cards */}
      <div className="row justify-content-center">
        {forecastWeather.length > 0 && (
          forecastWeather.map((entry, index) => (
            <div className="col-md-2 mb-3" key={index}> {/* Set column width to 2 (15% of 12-column grid) */}
              <div className="card"> {/* Apply glass effect */}
                <div className="card-body">
                  <h5 className="card-title text-center">{formatDate(entry.dt)}</h5>
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
