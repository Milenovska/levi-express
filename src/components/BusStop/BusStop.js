import React from "react";
import "./BusStop.css";

const BusStop = ({ name, station, time }) => {
  return (
    <div classname=" bus-stop ">
      <h1> {name} </h1>
      <h1> {station} </h1>
      <h1> {time} </h1>
    </div>
  );
};

export default BusStop;
