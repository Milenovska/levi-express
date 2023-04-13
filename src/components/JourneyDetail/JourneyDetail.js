import React from "react";
import "./JourneyDetail.css";
import BusStop from "../BusStop/BusStop";

const filteredSeats = (seats) => {
  const filteredSeats = seats.filter((seat) =>
    seat.filter((seatTwo) => !!seatTwo.reserved),
  );
  return filteredSeats.flat();
};

const handleBuy = (event) => {
  event.preventDefault();

  console.log("Rezervováno");
};

const JourneyDetail = ({ journeyDetail }) => (
  <div className="journey-detail">
    <h1>
      {" "}
      Od: {journeyDetail.stops[0].name} do:{" "}
      {journeyDetail.stops[journeyDetail.stops.length - 1].name}{" "}
    </h1>

    <ul>
      {journeyDetail.stops.map(({ code, name, station, time }) => (
        <li key={code}>
          <BusStop name={name} station={station} time={time} />
        </li>
      ))}
    </ul>
    {filteredSeats(journeyDetail.seats).length > 0 ? (
      <h1>
        Volné místa: {filteredSeats(journeyDetail.seats).length}
        {filteredSeats(journeyDetail.seats).map((seat) => (
          <h5> {seat.number} </h5>
        ))}
      </h1>
    ) : (
      <h1> Všechna místa jsou obsazená </h1>
    )}
    <button onClick={handleBuy}>Rezervovat</button>
  </div>
);

export default JourneyDetail;
