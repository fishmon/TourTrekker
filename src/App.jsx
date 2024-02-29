import React, { useState } from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from "./Routes";
import './App.css'
import BottomButtons from './components/BottomButtons';

function App() {
  const [city, setCity] = useState('');

  const handleSearch = (city) => {
    console.log("City searched:", city); 
    setCity(city);
  };

  return (
    <div className='container-fluid'>
      <Header onSearch={handleSearch} />
      <AppRoutes city={city} />
    </div>
  );
}

export default App;

