import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from "./Routes";
import './App.css'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [city, setCity] = useState('');

  const handleSearch = (city) => {
    console.log("City searched:", city); 
    setCity(city);
  };

  return (
    <div className="App overflow-hidden">
      <Router>
        <AppRoutes city={city} onSearch={handleSearch} />
      </Router>
      
    </div>
  );
}

export default App;


