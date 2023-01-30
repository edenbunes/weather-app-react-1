import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App container">
      <Weather defaultCity="Tel Aviv" />
      <p>
        This project was coded by{" "}
        <a href="https://github.com/edenbunes/weather-app-react-1">
          Eden Bunes
        </a>{" "}
        and is{" "}
        <a href="https://github.com/edenbunes/weather-app-react-1">
          open-sourced
        </a>{" "}
        on <a href="https://github.com/edenbunes/weather-app-react-1">GitHub</a>
      </p>
    </div>
  );
}
