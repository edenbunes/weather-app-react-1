import React, { useState } from "react";

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
      <div>
        {props.celsius} ℃ |
        <a href="/" onClick={showFahrenheit}>
          ℉
        </a>
      </div>
    );
  else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div>
        {fahrenheit}
        {""} {""}
        <a href="/" onClick={showCelsius}>
          ℃
        </a>
        | ℉
      </div>
    );
  }
}
