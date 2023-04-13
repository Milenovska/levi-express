import { useState } from "react";
import React from "react";

const CityOptions = ({ cities }) => {
  return (
    <>
      {cities.map((city) => (
        <option value={city.code} key={city.code}>
          {city.name}
        </option>
      ))}
    </>
  );
};
export default CityOptions;
