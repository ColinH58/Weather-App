import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

const TempDetails = () => {
  return (
    <div className="TempDetails">
      <div className="CurrentConditionLabel">Snowy</div>

      <div className="CurrentConditionReadOut">
        <img
          className="ConditionIcon"
          src="https://image.shutterstock.com/image-vector/simple-black-snowflake-rounded-corners-600w-1500901745.jpg"
          alt="temp snowflake icon"
        />
        <p className="Temperature">25°</p>
        <div className="ReadOutBlock">
          <div>
            <UilTemperature />
            Feel's Like:
            <span className="ReadOutInfo">23°</span>
          </div>
          <div>
            <UilTear />
            Humidity:
            <span className="ReadOutInfo">23°</span>
          </div>
          <div>
            <UilWind />
            Wind:
            <span className="ReadOutInfo">12 km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempDetails;
