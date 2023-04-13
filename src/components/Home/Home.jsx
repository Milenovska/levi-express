import React, { useState } from "react";
import { JourneyPicker } from "../JourneyPicker/JourneyPicker";
import JourneyDetail from "../JourneyDetail/JourneyDetail";

export const Home = () => {
  const [busStops, setBusStops] = useState(null);

  const getBusStops = async (cityCodeFrom, cityCodeTo, date) => {
    const busStopUrl = `https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${cityCodeFrom}&toCity=${cityCodeTo}&date=${date}}`;

    try {
      const fetchedData = await fetch(busStopUrl);
      const dataJson = await fetchedData.json();

      console.log(fetchedData);

      setBusStops(dataJson.results);
    } catch (err) {
      setBusStops(null);
      throw new Error(err);
    }
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={getBusStops} />
      {Boolean(busStops) && <JourneyDetail journeyDetail={busStops} />}
    </main>
  );
};
