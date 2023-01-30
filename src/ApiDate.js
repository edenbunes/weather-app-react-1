import React from "react";

export default function ApiDate(props) {
  console.log(props.dateData);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.dateData.getDay()];
  let hours = props.dateData.getHours();
  let minutes = props.dateData.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return (
    <span>
      {day} {hours}:{minutes}
    </span>
  );
}
