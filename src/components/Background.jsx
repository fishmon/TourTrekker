import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Background = ({ city }) => {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('');

  useEffect(() => {
    // fetch image based on user input
    const fetchImage = async () => {
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

    fetchImage(); // Call the function when component mounts or city prop changes

    // Clean function
    return () => {
      // Any cleanup code if needed
    };
  }, [city]); // Trigger the effect when the city prop changes

  return (
    <div className="landing-page ">
      {backgroundImageUrl && <img src={backgroundImageUrl} alt="Random" />}
    </div>
  );
};

export default Background;
