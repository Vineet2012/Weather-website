import React from 'react';
import { BounceLoader } from 'react-spinners';
import "./homePage.css";


export default function WeatherInfoUIPageCmp(props) {

  return (
    <div>

      {props.weather ?
        <div className='weather-wrapper'>
          <div className='temp-info-wrapper' >
            <span className='celcius-text'>{props.temp}</span>
            <span className='place-text'>{props.weather.name}</span>
            {/* <span>10:44 | H:28  L</span> */}
          </div>
          <div className='weather-main-info' >
            <div className='info-div'>
              <span style={{ fontSize: "18px", fontWeight: "400" }}>Temprature</span>
              <span>{props.temp}</span>
            </div>
            <div className='info-div'>
              <span style={{ fontSize: "18px", fontWeight: "400" }}>Humidity</span>
              <span>{props.weather.main.humidity}</span>
            </div>
            <div className='info-div'>
              <span style={{ fontSize: "18px", fontWeight: "400" }}>Wind Speed</span>
              <span>{props.weather.wind.speed} km/hr</span>
            </div>
            <div className='info-div'>
              <span style={{ fontSize: "18px", fontWeight: "400" }}>Weather Description</span>
              <span>{props.weather.weather[0].main}</span>
            </div>
            <div className='info-div'>
              <span style={{ fontSize: "18px", fontWeight: "400" }}>Pressure</span>
              <span>{props.weather.main.pressure}</span>
            </div>
          </div>
        </div>
        :
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh" }}>
          <BounceLoader>
            This is the original content of the App.js page. When the page is not
            loading, this text will be seen on the page.
          </BounceLoader>
        </div>
      }
    </div>
  )
}