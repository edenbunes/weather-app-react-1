import React, { useState } from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  const [forecastOn, setForecastOn] = useState(false);
  const [dailyForecast, setDailyForecast] = useState(null);
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  function dayName() {
    let date = new Date(dailyForecast.dt * 1000);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    return day;
  }

  function showForecast(response) {
    console.log(response.data);
    setDailyForecast({
      minTemp: Math.round(response.data.daily[0].temp.min),
      maxTemp: Math.round(response.data.daily[0].temp.max),
      icon: `http://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`,
      description: response.data.daily[0].weather[0].description,
      dt: response.data.daily[0].dt,
    });
    setForecastOn(true);
  }
  if (forecastOn) {
    return (
      <div className="row">
        <div className="col">
          <div>{dayName()}</div>
          <img src={dailyForecast.icon} alt={dailyForecast.description} />
          <div>
            <span>{dailyForecast.maxTemp}°</span>{" "}
            <span>{dailyForecast.minTemp}°</span>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "f3887e262c88d1158f7e2ef4998e234c";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showForecast);

    return null;
  }
}
