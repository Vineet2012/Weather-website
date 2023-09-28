import React from 'react';
import "./homePage.css";
import { HomePageHooks } from './homePageHooks';
import WeatherInfoUIPageCmp from './weatherInfoUIPage';

export default function HomePage() {

  const { search, weather, value, bkgImage, errorOccured, temp, setSearch, searchOnClick, tempUnitOnChange } = HomePageHooks();

  return (
    <div>
      <div style={{ backgroundImage: `url(${bkgImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100%" }}>
        <div className='search-box-weather-wrapper' >
          <div className='search-unit-wrapper'>
            <input className='input-field' type='text' placeholder='Search...' onChange={(e) => setSearch(e.target.value)} value={search}></input>
            <button className='search-button' onClick={searchOnClick}>Search</button>
            <select onChange={tempUnitOnChange}
              defaultValue="Celcius" className='select'>
              <option value="Ferhenit">Ferhenit</option>
              <option value="Celcius">Celcius</option>
            </select>
          </div>
          {errorOccured ?
            <div className='alert'>
              <p>Error 404. City Not Found...</p>
            </div>
            :
            <WeatherInfoUIPageCmp weather={weather} temp={temp} errorOccured={errorOccured} />
          }
        </div>
      </div>
    </div>
  )
}