import React, { useState, useEffect } from "react";
import axios from "axios";

const BgPicture = ({ city }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // fetch random image from Unsplash API
    const fetchRandomImage = async () => {
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
        setImageUrl(response.data.urls.regular);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchRandomImage(); // Call the function when component 

    // Clean function
    return () => {
   
    };
  }, [city]); // Trigger the effect when the city prop changes

  return (
    <div className="landing-page ">
   
      {imageUrl && <img src={imageUrl} alt="Random" />}
    </div>
  );
};

export default BgPicture;
