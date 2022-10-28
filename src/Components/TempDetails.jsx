import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
} from "@iconscout/react-unicons";

const TempDetails = () => {
  return (
    <div className="TempDetails">
      {/* Condition Readout, In Accent Color */}
      <div className="CurrentConditionLabel">Snowy</div>
      {/* Weather Icon on the Left */}
      <div className="CurrentConditionReadOut">
        <img
          className="ConditionIcon"
          src="https://image.shutterstock.com/image-vector/simple-black-snowflake-rounded-corners-600w-1500901745.jpg"
          alt="temp snowflake icon"
        />
        {/* Large Temperature Read Out with High and Low in the Middle */}
        <div>
          <p className="Temperature">25°</p>
          <div className="HighLow">
            <div className="ReadOutLine">
              <UilArrowUp className="ReadOutIcon" />
              High:
              <span className="ReadOutInfo">28°</span>
            </div>
            <div className="ReadOutLine">
              <UilArrowDown className="ReadOutIcon" />
              Low:
              <span className="ReadOutInfo">19°</span>
            </div>
          </div>
        </div>
        {/* Small Weather Information Block on the Right */}
        <div className="ReadOutBlock">
          <div className="ReadOutLine">
            <UilTemperature className="ReadOutIcon" />
            Feel's Like:
            <span className="ReadOutInfo">23°</span>
          </div>
          <div className="ReadOutLine">
            <UilTear className="ReadOutIcon" />
            Humidity:
            <span className="ReadOutInfo">23°</span>
          </div>
          <div className="ReadOutLine">
            <UilWind className="ReadOutIcon" />
            Wind:
            <span className="ReadOutInfo">12 km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempDetails;
