import React, { useState } from 'react';
import './Header.css';
const Header = ({ onSearch }) => {
  // State variable to manage the input value
  const [city, setCity] = useState('');

  // Function to handle search button click
  const handleSearch = () => {
    // Check if the input value is not empty
    if (city.trim() !== '') {
      // Call the onSearch function with the city value
      onSearch(city);
      // Clear the input value after search
      setCity('');
    }
  };

  // Function to handle key press event
  const handleKeyPress = (e) => {
    // Check if the key pressed is Enter
    if (e.key === 'Enter') {
      // Call the handleSearch function
      handleSearch();
    }
  };

  return (
      <nav className="navbar navbar-expand-lg w-100 top-0 z-1">
  <div className="container-fluid">
    <a className="navbar-brand " href="#">TourTrekker</a>
    <div className="collapse navbar-collapse justify-content-center me-5" id="navbarSupportedContent">
    <div className="d-flex">
        <input className="form-control me-2 " type="text" placeholder="Search" aria-label="Search"value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={handleKeyPress}/>
        <button className="btn search-button" onClick={handleSearch}>Search</button>
      </div>
    </div>
  </div>
</nav>
  );
};

export default Header;
