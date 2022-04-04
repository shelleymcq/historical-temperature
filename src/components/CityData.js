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

  // get state from Autocomplete https://www.freecodecamp.org/news/pass-data-between-components-in-react/
  const getCityFromChild = (input) => {
    setCity(input);
    getCityID(input);
  }

  const getCityID = (city) => {
      for (let i = 0; i < cityIDs.length; i++) {
        if (city === cityIDs[i].name) {
          setCityID(cityIDs[i].id);
        }
    }
  }

  const handleYearChange = event => {
    event.preventDefault();
    setYear(event.target.value);
  }


  const handleSubmit = event => {
    event.preventDefault();
    let noaaToken = {'token':'oTpqrhNkWQBIbOWgrvJrCUeJdRKIhbac'};

    console.log(city);
              
    axios.get('https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&datatypeid=TMAX&locationid=' +
      city +
      '&startdate=' +
      year +
      '-01-01&enddate=' +
      year +
      '-12-31&limit=1',
      {headers: noaaToken})
        .then(response => {
          console.log(response);
          console.log(response.results);
          return response.results;
        })
        .then(data => {
          console.log(data);
          console.log(data.station);
          return data[0].station;
        })
      //   .then(station => {
      //     axios.get('"https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&datacategoryid=TEMP&datatypeid=TMAX&stationid=' + station + '&startdate=' + year + '-01-01&enddate=' + year + '-12-31&limit=1000&units=metric', {headers: noaaToken})
      //     .then(response => {
      //       console.log("Waiting for NOAA........")
      //       console.log(response);
      //   });
      // }
    
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

