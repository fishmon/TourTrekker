import React, { useState, useEffect } from 'react';


function ForecastLogic({ city }) {
  // State variables to store search history, current weather, and forecast weather
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

    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };



  // Function to format date in MM/DD/YYYY format
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return {  currentWeather, forecastWeather, getWeatherData, formatDate };
}

export default ForecastLogic;
