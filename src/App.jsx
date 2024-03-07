import { useState } from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from "./Routes";
import './App.css'
import Footer from './components/Footer';


function App() {
  const [city, setCity] = useState('');

  const handleSearch = (city) => {
    console.log("City searched:", city); 
    setCity(city);
  };

  return (
    <div className="App overflow-hidden">
    
      <Header onSearch={handleSearch} />
      <AppRoutes city={city} />
      <Footer />
    
    </div>
  );
}

export default App;

