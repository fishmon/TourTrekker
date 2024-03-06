import React, { useState, useEffect } from 'react';
import BottomButtons from './BottomButtons';

const TimeZone= ({city}) => {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    // Fetch time when component mounts or city changes
    fetchTime();
  }, [city]);
  console.log(city)

  const fetchTime = () => {
    // Make API call to fetch time
    const apiKey = 'E3l8gfw0gK1N2Bk7HjNE8w==qaxdhyCRdspMTo7j'; // Replace with your API key
    fetch(`https://api.api-ninjas.com/v1/worldtime?city=${city}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey
      }
    })
    .then(response => response.json())
    .then(data => {
      // Extract time from API response and set it to state
      setCurrentTime(data.time);
    })
    .catch(error => {
      console.error('Error fetching time: ', error);
    });
  };

  return (
    <div style={{textAlign: 'center'}}>
      <h2>Current Time in {city}</h2>
      {currentTime ? (
        <p>{currentTime}</p>
      ) : (
        <p>Loading...</p>
      )}
      <BottomButtons />
    </div>
  );
};

export default TimeZone;
