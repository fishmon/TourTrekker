import React, { useState, useEffect } from 'react';
import BottomButtons from './BottomButtons';

function Forecast({ city }) {
  // State variables to store search history, current weather, and forecast weather
  const [searchHistory, setSearchHistory] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState([]);

  // useEffect hook to fetch weather data when the city changes
  useEffect(() => {
    if (city) {
      getWeatherData(city);
    }
  }, [city]);

  // Function to fetch weather data for a given city
  const getWeatherData = async (city) => {
    const apiKey = 'b0bd9b4eb2c0ab32b7e8bb3f59b60b76';
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
      // Fetch current weather data
      const currentResponse = await fetch(currentWeatherUrl);
      const currentData = await currentResponse.json();

      // Fetch forecast data
      const forecastResponse = await fetch(forecastUrl);
      const forecastData = await forecastResponse.json();

      // Check for city not found error
      if (currentData.cod === '404' || forecastData.cod === '404') {
        alert('City not found. Please try again.');
        return;
      }

      // Update current weather state
      setCurrentWeather(currentData);

      // Filter forecast entries for 12:00:00 time
      const filteredForecast = forecastData.list.filter(entry =>
        entry.dt_txt.includes('12:00:00')
      );

      // Update forecast weather state
      setForecastWeather(filteredForecast);

      // Add city to search history
      addToSearchHistory(city);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  // Function to add city to search history
  const addToSearchHistory = (city) => {
    if (!searchHistory.includes(city)) {
      const updatedHistory = [...searchHistory, city];
      setSearchHistory(updatedHistory);
      localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
    }
  };

  // Function to clear search history
  const clearSearchHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  // Function to format date in MM/DD/YYYY format
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <div className="weather-app">
      {/* Search history */}
      <div className="history">
        <button onClick={clearSearchHistory}>Clear History</button>
        <ul>
          {searchHistory.map((city, index) => (
            <li key={index} onClick={() => getWeatherData(city)}>
              {city}
            </li>
          ))}
        </ul>
      </div>
      {/* Current weather card and 5-day forecast */}
      <div className="row">
        {/* Current weather card */}
        <div className="col-md-2">
          {currentWeather && (
            <div className="card mb-3">
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
        {/* Forecast cards */}
        {forecastWeather.length > 0 && (
          forecastWeather.map((entry, index) => (
            <div className="col-md-2" key={index}>
              <div className="card mb-3">
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
      <BottomButtons/>
    </div>
  );
}

export default Forecast;
