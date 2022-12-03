import React from "react";

const Forecast = ({ title, weather, setQuery }) => {
  return (
    <div className="Forecast">
      <div>
        <p>{ title }</p>
        <hr />
      </div>
      <div className="HourlyForecastContainer">
        <div className="HourlyForecast">
          <p>7:00 AM</p>
          <img
            src="https://smalltotall.info/wp-content/uploads/2017/04/google-favicon-vector-400x400.png"
            alt="test"
            width={"50px"}
          />
          <p>-12°</p>
        </div>
        <div className="HourlyForecast">
          <p>8:00 AM</p>
          <img
            src="https://smalltotall.info/wp-content/uploads/2017/04/google-favicon-vector-400x400.png"
            alt="test"
            width={"50px"}
          />
          <p>-10°</p>
        </div>
        <div className="HourlyForecast">
          <p>9:00 AM</p>
          <img
            src="https://smalltotall.info/wp-content/uploads/2017/04/google-favicon-vector-400x400.png"
            alt="test"
            width={"50px"}
          />
          <p>-8°</p>
        </div>
        <div className="HourlyForecast">
          <p>10:00 AM</p>
          <img
            src="https://smalltotall.info/wp-content/uploads/2017/04/google-favicon-vector-400x400.png"
            alt="test"
            width={"50px"}
          />
          <p>-5°</p>
        </div>
        <div className="HourlyForecast">
          <p>11:00 AM</p>
          <img
            src="https://smalltotall.info/wp-content/uploads/2017/04/google-favicon-vector-400x400.png"
            alt="test"
            width={"50px"}
          />
          <p>-2°</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
