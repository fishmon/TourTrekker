import React, { useState } from 'react';
import logo from '/assets/logo.svg';
import './Header.scss';
const Header = ({ onSearch }) => {
  // State variable to manage the input value
  const [city, setCity] = useState("");
  // Function to handle search button click
  const handleSearch = () => {
    // Check if the input value is not empty
    if (city.trim() !== "") {
      // Call the onSearch function with the city value
      onSearch(city);
      // Clear the input value after search
      setCity("");
    }
  };
  // Function to handle key press event
  const handleKeyPress = (e) => {
    // Check if the key pressed is Enter
    if (e.key === "Enter") {
      // Call the handleSearch function
      handleSearch();
    }
  };
  return (
    <header className="p-2 header-nav">
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <img src={logo} alt="Logo" className="mr-3 logo" />
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="d-flex" role="search">
        <input className="form-control me-4" type="text" placeholder="Search" aria-label="Search" value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={handleKeyPress} // Added event listener for key press 
              />
        <button className="btn search-button" type="submit" onClick={handleSearch}>Search</button>
      </div>
    </div>
  </div>
</nav>
    </header>
  );
};
export default Header;
