import React from 'react';
import axios from 'axios';
import Autocomplete from './Autocomplete';
import cities from '../data/Cities';
import "../css/search.css";

let token = {'token':'oTpqrhNkWQBIbOWgrvJrCUeJdRKIhbac'};


axios.get('https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&datacategoryid=TEMP&datatypeid=TMAX&locationid=CITY:US060018&startdate=2020-01-01&enddate=2020-12-31&limit=1000&units=metric', {headers: token})
  .then(response => {
    console.log(response);
});


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

