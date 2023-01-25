import React from "react";
import "./App.css";
import axios from "axios";

export default function App() {
  function showWeather() {}

  let apiKey = "33fd04d85cdb641fd1bc55ca0162ba48";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showWeather);
  return (
    <div className="App">
      <div className="container">
        <form>
          <input type="text" placeholder="Type a city..." />
          <input type="submit" value="Send" />
        </form>
        <h1 className="city-name">Tel Aviv</h1>
        <div className="row">
          <div className="col">
            <div>description</div>
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freeiconspng.com%2Fimages%2Fweather-icon-png&psig=AOvVaw0Uqnl-dSn_oiIR8Fonworf&ust=1674558718294000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOjw5r3H3fwCFQAAAAAdAAAAABAE" />
          </div>
          <div className="col">
            <div>21 ℃ | ℉ </div>
            <div>Humidity: 60%</div>
            <div>Wind: 12 km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
}
