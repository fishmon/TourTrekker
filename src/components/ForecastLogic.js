import React, { useState, useEffect } from 'react';

function ForecastLogic({ city }) {
  // State variables to store current weather, forecast weather, and background image URL
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState([]);
  const [backgroundImageUrl, setBackgroundImageUrl] = useState(null);

  // useEffect hook to fetch weather data and background image when the city changes
  useEffect(() => {
    if (city) {
      getWeatherData(city);
      fetchBackgroundImage(city);
    }
  }, [city]);

  // Function to fetch weather data for a given city from OpenWeatherMap API
  const getWeatherData = async (city) => {
    const openWeatherMapApiKey = 'b0bd9b4eb2c0ab32b7e8bb3f59b60b76'; // OpenWeatherMap API key
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherMapApiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${openWeatherMapApiKey}&units=metric`;

    try {
      // Fetch current weather data
      const currentResponse = await fetch(currentWeatherUrl);
      const currentData = await currentResponse.json();

      // Fetch forecast data
      const forecastResponse = await fetch(forecastUrl);
      const forecastData = await forecastResponse.json();

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

  // Function to fetch background image from Unsplash API
  const fetchBackgroundImage = async (query) => {
    const unsplashApiKey = 'fLMtdfoAfkrFdsN3nmAra8NmQkOTRuguv6uikh0Ktfw'; // Unsplash API key
    const unsplashUrl = `https://api.unsplash.com/photos/random?query=${query}&client_id=${unsplashApiKey}`;

    try {
      const response = await fetch(unsplashUrl);
      const data = await response.json();
      console.log('Unsplash data:', data);
      setBackgroundImageUrl(data.urls.regular);
    } catch (error) {
      console.error('Error fetching image from Unsplash:', error);
    }
  };

  return { currentWeather, forecastWeather, backgroundImageUrl };
}

export default ForecastLogic;

