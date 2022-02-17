import React from 'react';
import Autocomplete from './Autocomplete';
import cities from '../data/Cities';
import "../css/search.css";

const CityData = () => {

  return (
    <div className="flex flex-col bg-slate-100 h-full py-20"> 
      <p className='ml-8'>Please note that data for all US cities may not be available. If you do not see your city, try a larger city close to you.</p>

      <form className='search flex flex-row'>
        <label>
          City
          <Autocomplete
            suggestions={cities} />
        </label>
        <label>
          Year
          <input type="text" name="year" className="w-20 h-6 m-3" />
        </label>
        <input type="submit" value="Search" className="h-6 px-4 m-3 text-xs bg-slate-500 rounded-full hover:bg-slate-400" />
      </form>
    </div>
  );
};

export default CityData;

