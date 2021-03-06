import React from 'react';
import { Link } from 'react-router-dom';
import temperature from '../images/temperature.jpg';

const Home = () => {
  return (
    <div className="bg-white h-full flex flex-col items-center">
      <img src={temperature} alt="knit temperature swatch in shades of blue, geeen, and yellow"></img>
      <h1 className="lg:text-7xl md:text-5xl sm:text-3xl text-3xl font-black my-14">
        Temperature Blankets
      </h1>
      <Link to="City-Data" className="py-6 px-10 bg-teal-500 rounded-full text-xl hover:bg-teal-400 transition duration-300 ease-in-out">
        Search for Your City
      </Link>
    </div>
  );
};

export default Home;
