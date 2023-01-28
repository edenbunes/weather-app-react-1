import React, { useState } from "react";
import Date from "./Date";

import axios from "axios";

export default function Weather(props) {
  const [weather, setWeather] = useState({});
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setWeather({
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      cityName: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
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
      <div className="container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Type a city..."
            onChange={importCity}
          />
          <input type="submit" value="Search" />
        </form>
        <Date dateData={weather.date} />
        <h1>{weather.cityName}</h1>
        <div className="row">
          <div className="col">
            <img src={weather.icon} alt={weather.description} />
            <div>{weather.description}</div>
          </div>
          <div className="col">
            <div>{weather.temp} ℃ | ℉ </div>
            <div>Humidity: {weather.humidity}%</div>
            <div>Wind: {weather.wind} km/h</div>
          </div>
        </div>
      </div>
    );
  } else {
    Search();
    return "Loading...";
  }
}
