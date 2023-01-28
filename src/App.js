import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div cllasName="App">
      <Weather defaultCity="Tel Aviv" />
    </div>
  );
}
