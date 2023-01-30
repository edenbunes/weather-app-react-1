import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius")
    return (
      <div className="Temperature">
        <span className="temp">{props.celsius}</span> ℃ |{""} {""}
        <a href="/" onClick={showFahrenheit}>
          ℉
        </a>
      </div>
    );
  else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div className="Temperature">
        <span className="temp">{fahrenheit}</span>
        <a href="/" onClick={showCelsius}>
          {""} {""} ℃
        </a>
        {""} {""}| ℉
      </div>
    );
  }
}
