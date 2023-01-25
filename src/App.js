import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function App() {
  const [weather, setWeather] = useState({});
  const [ready, setReady] = useState(false);
  function showWeather(response) {
    console.log(response.data);
    setWeather({
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="App">
        <div className="container">
          <form>
            <input type="text" placeholder="Type a city..." />
            <input type="submit" value="Search" />
          </form>
          <h1>Tel Aviv</h1>
          <div className="row">
            <div className="col">
              <img src={weather.icon} />
              <div>{weather.description}</div>
            </div>
            <div className="col">
              <div>{weather.temp} ℃ | ℉ </div>
              <div>Humidity: {weather.humidity}%</div>
              <div>Wind: {weather.wind} km/h</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "Tel Aviv";
    let apiKey = "f8e6a9e3d6fde87cb38868da460b1371";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);

    return "Loading...";
  }
}
