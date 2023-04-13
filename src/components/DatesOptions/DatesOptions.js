import React from "react";

const DatesOptions = ({ dates }) => {
  return (
    <>
      {dates.map((date) => (
        <option value={date.dateBasic} key={date.dateCs}>
          {date.dateBasic}
        </option>
      ))}
    </>
  );
};
export default DatesOptions;
