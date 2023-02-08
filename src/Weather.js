import React, { useState } from "react";
import ApiDate from "./ApiDate";
import axios from "axios";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weather, setWeather] = useState({});
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    console.log(response.data);
    setWeather({
      temp: Math.round(response.data.main.temp),
      tempMin: Math.round(response.data.main.temp_min),
      tempMax: Math.round(response.data.main.temp_max),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      cityName: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
    });
    setReady(true);
  }
  function importCity(event) {
    setCity(event.target.value);
  }
  function handleSearch(event) {
    event.preventDefault();
    Search();
  }

  function Search() {
    let apiKey = "f3887e262c88d1158f7e2ef4998e234c";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }
  if (ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSearch}>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                placeholder="Type a city..."
                onChange={importCity}
                autoFocus="on"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <div className="date">
          Last updated:&nbsp;
          <ApiDate dateData={weather.date} />
        </div>
        <div className="top-information">
          <h1>{weather.cityName}</h1>
          <div className="row today-forecast">
            <div className="col-3 main-info-left">
              <img
                className="main-icon"
                src={weather.icon}
                alt={weather.description}
              />
            </div>
            <div className="col-3 m-auto description text-capitalize">
              {weather.description}
            </div>
            <div className="col-2  m-auto  main-info-right">
              <div className="temperature">
                {weather.temp} <span className="unit">c°</span>
              </div>
            </div>
            <div className="col-2  m-auto">
              <div>Min temp: {weather.tempMin}°</div>
              <div>Max temp: {weather.tempMax}°</div>
            </div>
            <div className="col-2  m-auto">
              <div>Humidity: {weather.humidity}%</div>
              <div>Wind: {weather.wind} km/h</div>
            </div>
          </div>
        </div>
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    Search();
    return null;
  }
}
