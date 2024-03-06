import React, { useState, useEffect } from 'react';
import BottomButtons from './BottomButtons';

const Info = ({ city }) => {
  const [cityInfo, setCityInfo] = useState('');

  useEffect(() => {
    const fetchCityInfo = async () => {
      try {
     
        const url = `https://api.teleport.org/api/urban_areas/slug:${city}/`;
        const response = await fetch(url);
        const data = await response.json();

        // Extract relevant city information from the response
        const cityDescription = `${data.full_name}, Population: ${data.population}`;

        // Set city information to state
        setCityInfo(cityDescription);
      } catch (error) {
        console.error('Error fetching city information:', error);
      }
    };

    fetchCityInfo();
  }, [city]);

  return (
    <div>
      <h2>{city}</h2>
      <p>{cityInfo}</p>
      <BottomButtons />
    </div>
  );
};

export default Info;
