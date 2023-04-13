import React, { useEffect, useRef, useState } from "react";
import mapImage from "./img/map.svg";
import "./JourneyPicker.css";
import CityOptions from "../CityOptions/CityOptions";
import DatesOptions from "../DatesOptions/DatesOptions";

const initialUrl = "https://apps.kodim.cz/daweb/leviexpress/api/cities";
const Url = "https://apps.kodim.cz/daweb/leviexpress/api/dates";

export const JourneyPicker = ({ onJourneyChange }) => {
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);
  const [end, setEnd] = useState([]);

  const cityFrom = useRef();
  const cityTo = useRef();
  const date = useRef();

  const fetchDates = async () => {
    try {
      const fetchedData = await fetch(Url);
      const dataJson = await fetchedData.json();

      setDates(dataJson.results);
    } catch (err) {
      setDates([]);
      throw new Error(err);
    }
  };

  const fetchCities = async () => {
    try {
      const fetchedData = await fetch(initialUrl);
      const dataJson = await fetchedData.json();

      setCities(dataJson.results);
    } catch (err) {
      setCities([]);
      throw new Error(err);
    }
  };

  useEffect(() => {
    fetchCities();
    fetchDates();

    return () => {
      setCities([]);
      setDates([]);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !cityFrom.current.value ||
      !cityTo.current.value ||
      !date.current.value ||
      cityFrom.current.value === cityTo.current.value
    ) {
      alert("Vyplňte prosím všechny údaje");
      return;
    }

    onJourneyChange(
      cityFrom.current.value,
      cityTo.current.value,
      date.current.value,
    );
  };

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form">
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select ref={cityFrom}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select ref={cityTo}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select ref={date}>
              <option value="">Vyberte</option>
              <DatesOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button
              className="btn"
              type="submit"
              onClick={handleSubmit}
              disabled={!setCities && !setDates}
            >
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src={mapImage} />
      </div>
    </div>
  );
};
