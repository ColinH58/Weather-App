import React from "react";

const TimeLocation = ({ weather, setWeather, query, setQuery }) => {
  return (
    <div className="TimeLocation">
      <div>
        <p>Saturday, 15 November 2022 | 6:30 AM</p>
      </div>
      <div>
        <h2>Calgary, AB</h2>
      </div>
    </div>
  );
};

export default TimeLocation;
