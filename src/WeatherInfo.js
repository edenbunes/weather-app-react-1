import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="top-information">
        <h1>{props.weatherData.cityName}</h1>
        <div className="row today-forecast">
          <div className="col-6 col-lg">
            <img
              className="main-icon"
              src={props.weatherData.icon}
              alt={props.weatherData.description}
            />
          </div>
          <div className="col-6 col-lg m-auto description text-capitalize">
            {props.weatherData.description}
          </div>
          <div className="col-12 col-lg m-auto">
            <div className="temperature">
              {props.weatherData.temp} <span className="unit">c°</span>
            </div>
          </div>
          <div className="col-6 col-lg m-auto p-0">
            <div>
              <span className="extra-info">Min temp:</span>{" "}
              {props.weatherData.tempMin}°
            </div>
            <div>
              {" "}
              <span className="extra-info">Max temp:</span>{" "}
              {props.weatherData.tempMax}°
            </div>
          </div>
          <div className="col-6 col-lg m-auto p-0">
            <div>
              <span className="extra-info">Humidity:</span>{" "}
              {props.weatherData.humidity}%
            </div>
            <div>
              <span className="extra-info">Wind:</span> {props.weatherData.wind}{" "}
              km/h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
