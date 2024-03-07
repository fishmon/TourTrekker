import React, { useState, useEffect } from 'react';
import BottomButtons from './BottomButtons';
import axios from 'axios';
import './Info.css'

const Info = ({ city, onSearch }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (city) {
      getPlacesData(city);
    }
  }, [city]);

  const getPlacesData = async (city) => {
    try {
      const response = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${city}`);
      setData(response.data);
      setError('');
    } catch (error) {
      setError('Error fetching Wikipedia information');
      setData(null);
    }
  };

  return (
    <div className="container mt-4"> {/* Added margin top */}
      {/* No search bar here */}
      {error && <p className="alert alert-danger">{error}</p>}

      {data && (
        <div className="card" style={{maxHeight: '700px'}}>
          {/* {data.thumbnail && (
            // <img src={data.thumbnail.source} className="card-img-top img-fluid" alt={data.title} style={{ maxHeight: '400px' }} /> 
          )} */}
          <div className="card-body d-flex flex-column">
            {/* Smaller image with max height */}
            <h5 className="card-title info-title">{data.title}</h5>
            <p className="card-text">{data.extract}</p>
            <a href={data.content_urls.desktop.page} className="btn search-button read-more" target="_blank" rel="noopener noreferrer">Read More..</a>
          </div>
        </div>
      )}
      <BottomButtons />
    </div>
  );
};

export default Info;
