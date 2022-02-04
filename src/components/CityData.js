import React from 'react';
import Autocomplete from './Autocomplete';
import cities from '../data/Cities';

const CityData = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-100 h-screen py-20">
      <Autocomplete
        suggestions={cities} />
        
      <form className="flex flex-col">
        <label>
          City
          <input type="text" name="city" className="w-50 m-3" />
        </label>
        <label>
          Year
          <input type="text" name="year" className="w-20 m-3" />
        </label>
        <input type="submit" value="Search" className="py-2 px-4 mt-4 bg-slate-500 rounded-full hover:bg-slate-400" />
      </form>
    </div>
  );
};

export default CityData;

