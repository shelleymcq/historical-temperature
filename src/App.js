import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CityData from './components/CityData';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  return (
    <>
     <Navbar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/city-data" element={<CityData />} />
       <Route path="/palette" element={<CityData />} />
       <Route path="/about" element={<CityData />} />
     </Routes>
    <Footer />
    </>
  );
}

export default App;
