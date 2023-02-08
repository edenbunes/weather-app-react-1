import React, { useState, useEffect } from "react";
import axios from "axios";
import DailyWeatherForecast from "./DailyWeatherForecast";
import "./WeatherForecast.css";
export default function WeatherForecast(props) {
  const [forecastOn, setForecastOn] = useState(false);
  const [dailyForecastData, setDailyForecastApi] = useState(null);

  useEffect(() => {
    setForecastOn(false);
  }, [props.coordinates]);

  function showForecast(response) {
    setDailyForecastApi(response.data.daily);
    setForecastOn(true);
  }
  if (forecastOn) {
    return (
      <div className="row weatherForecast">
        {dailyForecastData.map(function (dailyData, index) {
          if (index !== 0 && index < 7) {
            return (
              <div className="col daily-info" key={index}>
                <DailyWeatherForecast dailyData={dailyData} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiKey = "f3887e262c88d1158f7e2ef4998e234c";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showForecast);

    return null;
  }
}
