import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CityData from './components/CityData';
import Home from './components/Home';
import Footer from './components/Footer';
import { ResponsiveNavBar } from './components/ResponsiveNavBar';

function App() {
  return (
    <>

     <ResponsiveNavBar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Home" element={<Home />} />
       <Route path="/City-Data" element={<CityData />} />
       <Route path="/Palette" element={<CityData />} />
       <Route path="/About" element={<CityData />} />
     </Routes>
    <Footer />
    </>
  );
}

export default App;
