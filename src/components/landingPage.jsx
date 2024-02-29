import React, { useState, useEffect } from "react";
import axios from "axios";

const LandingPage = ({ city }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // Function to fetch random image from Unsplash API
    const fetchRandomImage = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos/random",
          {
            params: {
              query: city || "nature", // Use the city as the query if available, otherwise default to "nature"
              client_id: "fLMtdfoAfkrFdsN3nmAra8NmQkOTRuguv6uikh0Ktfw",
              w: 1920, // Specify width of the image
              h: 1080, // Specify height of the image
            },
          }
        );
        setImageUrl(response.data.urls.regular);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchRandomImage(); // Call the function when component mounts

    // Cleanup function
    return () => {
      // cleanup code here
    };
  }, [city]); // Trigger the effect whenever the city prop changes

  return (
    <div className="landing-page">
      <h1>welcome</h1>
      {imageUrl && <img src={imageUrl} alt="Random" />}
    </div>
  );
};

export default LandingPage;
