import React, { useState } from "react";
import axios from "axios";
import DailyWeatherForecast from "./DailyWeatherForecast";

export default function WeatherForecast(props) {
  const [forecastOn, setForecastOn] = useState(false);
  const [dailyForecastData, setDailyForecastApi] = useState(null);

  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;

  function showForecast(response) {
    console.log(response.data);
    setDailyForecastApi(response.data.daily);

    setForecastOn(true);
  }
  if (forecastOn) {
    return (
      <div className="row">
        {dailyForecastData.map(function (dailyData, index) {
          if (index !== 0 && index < 7) {
            return (
              <div className="col" key={index}>
                <DailyWeatherForecast dailyData={dailyData} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    let apiKey = "f3887e262c88d1158f7e2ef4998e234c";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showForecast);

    return null;
  }
}