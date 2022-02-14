import React from 'react';
import { useState } from 'react';
import cities from '../data/Cities';

const CityData = () => {

  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-col bg-slate-100 h-screen py-20"> 
    <p>Please note that data for all US cities may not be available. If you do not see your city, try a larger city close to you.</p>
    Begin typing city name with a capital letter (Ex: Atlan...) 
      <form className='flex flex-row'>
        <label>
          City
          <input       
            id='cityName'
            name='cityName'
            className='w-50 h-6 m-3'
            type='text'
            value={search}
            onChange={event => setSearch(event.target.value)} 
          />
          {/* TODO: get city to autofill */}
           {cities.filter(city => city.startsWith(search) || search === '')
              .map(city => (
              <li key={city}>
                {city}
              </li>
            ))}
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

