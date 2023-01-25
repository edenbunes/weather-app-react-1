import React from "react";
import axios from "axios";

export default function Weather() {
  let apiKey = "33fd04d85cdb641fd1bc55ca0162ba48";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showWeather);
  return;
}
