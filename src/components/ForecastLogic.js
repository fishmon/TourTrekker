import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ForecastLogic = ({ city }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState([]);
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('');

  useEffect(() => {
    if (city) {
      getWeatherData(city);
      fetchBackgroundImage(city);
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

  const fetchBackgroundImage = async (city) => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/photos/random",
        {
          params: {
            query: city || "nature",
            client_id: "fLMtdfoAfkrFdsN3nmAra8NmQkOTRuguv6uikh0Ktfw",
            w: 1920,
            h: 1080,
          },
        }
      );
      setBackgroundImageUrl(response.data.urls.regular);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return { currentWeather, forecastWeather, backgroundImageUrl, getWeatherData, formatDate };
};

export default ForecastLogic;
