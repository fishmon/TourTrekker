import React, { useState } from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from "./Routes";
import BgPicture from './components/BgPicture'; // Import BgPicture component
import './App.css';

function App() {
  const [city, setCity] = useState('');

  // Function to handle search
  const handleSearch = (city) => {
    setCity(city);
  };

  return (
    <div>
  
      <div className='container-fluid'>
        <Header onSearch={handleSearch} />
        <AppRoutes city={city} />
      </div>
    </div>
  );
}

export default App;
