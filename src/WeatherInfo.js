import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="top-information">
        <h1>{props.weatherData.cityName}</h1>
        <div className="row today-forecast">
          <div className="col-3 main-info-left">
            <img
              className="main-icon"
              src={props.weatherData.icon}
              alt={props.weatherData.description}
            />
          </div>
          <div className="col-3 m-auto description text-capitalize">
            {props.weatherData.description}
          </div>
          <div className="col-2  m-auto  main-info-right">
            <div className="temperature">
              {props.weatherData.temp} <span className="unit">c°</span>
            </div>
          </div>
          <div className="col-2  m-auto">
            <div>Min temp: {props.weatherData.tempMin}°</div>
            <div>Max temp: {props.weatherData.tempMax}°</div>
          </div>
          <div className="col-2  m-auto">
            <div>Humidity: {props.weatherData.humidity}%</div>
            <div>Wind: {props.weatherData.wind} km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
}
