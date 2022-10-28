import React from "react";
import { UilSnowflake } from "@iconscout/react-unicons";

const TempDetails = () => {
  return (
    <div className="TempDetails">
      <div className="CurrentConditionLabel">Snowy</div>
      <div className="CurrentConditionReadOut">
        <UilSnowflake />
        <p>25°</p>
        <p>READ OUT IMAGES</p>
      </div>
    </div>
  );
};

export default TempDetails;
