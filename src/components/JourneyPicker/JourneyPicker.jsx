import React, { useEffect, useState } from "react";
import mapImage from "./img/map.svg";
import "./JourneyPicker.css";
import CityOptions from "../CityOptions/CityOptions";
import DatesOptions from "../DatesOptions/DatesOptions";

const initialUrl = "https://apps.kodim.cz/daweb/leviexpress/api/cities";
const Url = "https://apps.kodim.cz/daweb/leviexpress/api/dates";
const endUrl =
  "https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=…&toCity=…&date=…";

export const JourneyPicker = ({ onJourneyChange }) => {
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);
  const [end, setEnd] = useState([]);

  useEffect(() => {
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

    fetchCities();

    return () => {
      setCities([]);
    };
  }, []);

  useEffect(() => {
    const fetchDates = async () => {
      try {
        const fetchedData = await fetch(Url);
        const dataJson = await fetchedData.json();

        setEnd(dataJson.results);
      } catch (err) {
        setEnd([]);
        throw new Error(err);
      }
    };

    fetchDates();

    return () => {
      setDates([]);
    };
  }, []);

  useEffect(() => {
    const fetchEnd = async () => {
      try {
        const fetchedData = await fetch(endUrl);
        const dataJson = await fetchedData.json();

        setEnd(dataJson.results);
      } catch (err) {
        setEnd([]);
        throw new Error(err);
      }
    };

    fetchEnd();

    return () => {
      setEnd([]);
    };
  }, []);

  const handleSubmit = (event) => {
    console.log("There is no city with code '{cities}' ");
  };

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form">
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select>
              <option value="">Vyberte</option>
              <DatesOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button
              className="btn"
              type="submit"
              onClick={(event) => {
                handleSubmit;
              }}
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
