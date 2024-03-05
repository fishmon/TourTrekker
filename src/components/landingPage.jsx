import  { useState, useEffect } from "react";
import axios from "axios";
 import './landingPage.css';

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
      <div className="container position-absolute text-black welcome-box rounded">
      <h2 className="bg fs-1">Welcome!</h2>
      <p>Embark on a journey of exploration and discovery with TourTrekker – your gateway to discovering the world's wonders. 
<br/><b> Start</b> your journey today <b>by typing in a city name</b> and uncovering a world of possibilities. <br/>Happy exploring!</p>
<div className="d-flex search-input">
        <input className="form-control me-2 " type="text" placeholder="Search" aria-label="Search"value={city}
              />
        <button className="btn search-button" >Search</button>
      </div>
    </div>
      {/* {imageUrl && <img src={imageUrl} alt="Random" className="img-fluid"/>} */}
    </div>
  );
};

export default LandingPage;
