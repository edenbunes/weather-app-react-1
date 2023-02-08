import React from "react";
import "./DailyWeatherForecast.css";

export default function DailyWeatherForecast(props) {
  let minTemp = Math.round(props.dailyData.temp.min);
  let maxTemp = Math.round(props.dailyData.temp.max);
  let icon = `http://openweathermap.org/img/wn/${props.dailyData.weather[0].icon}@2x.png`;
  let description = props.dailyData.weather[0].description;
  let dt = props.dailyData.dt;

  function dayName() {
    let date = new Date(dt * 1000);
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
  return (
    <div className="DailyWeatherForecast ">
      <div className="day-name">{dayName()}</div>
      <img src={icon} alt={description} />
      <div>
        <span className="max-temp">{maxTemp}°</span>{" "}
        <span className="min-temp">{minTemp}°</span>
      </div>
    </div>
  );
}
