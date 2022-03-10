import React, { useState } from 'react';
import axios from 'axios';
import Autocomplete from './Autocomplete';
import cities from '../data/Cities';
import cityIDs from '../data/CityIDs';
import "../css/search.css";

function CityData() {

  const [city, setCity] = useState("");
  const [year, setYear] = useState("");
  const [cityID, setCityID] = useState("");

    const getCityFromChild = (input) => {
    setCity(input);
    // getCityID
  }

  const getCityID = () => {
    // get city ID
    // setCityID
  }

  const handleYearChange = event => {
    event.preventDefault();
    setYear(event.target.value);
  }


  const handleSubmit = event => {
    event.preventDefault();
    let token = {'token':'oTpqrhNkWQBIbOWgrvJrCUeJdRKIhbac'};

    axios.get('https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&datacategoryid=TEMP&datatypeid=TMAX&locationid=CITY:US060018&startdate=2020-01-01&enddate=2020-12-31&limit=1000&units=metric', {headers: token})
      .then(response => {
        console.log(response);
        console.log(city);
        console.log(year);
    });
  }

  // convert temperature to farenheit
  // render data to screen (table)

  return (
    <div className="flex flex-col bg-slate-100 h-full py-20"> 
      <p className='ml-8'>Please note that data for all US cities may not be available. If you do not see your city, try a larger city close to you.</p>

      <form onSubmit={handleSubmit} className='search flex flex-row'>
        <div>
          <label>
            City
            <Autocomplete
              suggestions={cities} getCityFromChild={getCityFromChild}/>
          </label>
        </div>
        <div>
          <label>
            Year
            <input type="text" onChange={handleYearChange} value={year} className="w-20 h-6 m-3" />
          </label>
        </div>
        <div>
          <button className="h-6 px-4 m-3 text-xs bg-slate-500 rounded-full hover:bg-slate-400">Search</button>
        </div>
      </form>

    </div>
  );
};

export default CityData;

