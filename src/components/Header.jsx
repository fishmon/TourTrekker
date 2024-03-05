import React, { useState } from 'react';
import './Header.css';

const Header = ({ onSearch }) => {
  // State variable to manage the input value
  const [city, setCity] = useState('');



  // Function to handle search button click
  const handleSearch = () => {
    // Check if the input value is not empty
    if (city.trim() !== '') {
      console.log(city);
      
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
    <div>
      <header className="p-4 border border-black">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-2 text-center">
              <img src="#" alt="Logo" className="mr-3" />
            </div>
            {/* Search input */}
            <div className="col text-center">
              <input
                type="text"
                placeholder="Search..."
                className="form-control mx-auto w-50"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={handleKeyPress} // Changed from onClick to onKeyPress
              />
            </div>
            {/* Search button */}
            <div className="col text-center">
              <button className="btn btn-primary" onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
