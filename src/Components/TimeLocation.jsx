import React from "react";
import { formatToLocalTime } from "../API/WeatherServicesApi";

const TimeLocation = ({ weather, query, setQuery }) => {
  const formattedTime = formatToLocalTime(weather.timezone)

  return (
    <div className="TimeLocation">
      <div>
        {/* <p>Saturday, 15 November 2022 | 6:30 AM</p> */}
        <p>{formattedTime}</p>
      </div>
      <div>
        <h2>{weather.name}, {weather.sys.country}</h2>
      </div>
    </div>
  );
};

export default TimeLocation;
