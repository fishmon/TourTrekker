// ForecastLogic.js
import React, { useState, useEffect } from 'react';

function ForecastLogic({ city }) {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState([]);

  useEffect(() => {
    if (city) {
      getWeatherData(city);
    }
  }, [city]);

  const getWeatherData = async (city) => {
    const apiKey = 'b0bd9b4eb2c0ab32b7e8bb3f59b60b76';
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const currentResponse = await fetch(currentWeatherUrl);
      const currentData = await currentResponse.json();

      const forecastResponse = await fetch(forecastUrl);
      const forecastData = await forecastResponse.json();

      if (currentData.cod === '404' || forecastData.cod === '404') {
        alert('City not found. Please try again.');
        return;
      }

      setCurrentWeather(currentData);

      const filteredForecast = forecastData.list.filter(entry =>
        entry.dt_txt.includes('12:00:00')
      );

      setForecastWeather(filteredForecast);

    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  // Function to format date in "MMMM d, yyyy" format
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return { currentWeather, forecastWeather, getWeatherData, formatDate };
}

export default ForecastLogic;
