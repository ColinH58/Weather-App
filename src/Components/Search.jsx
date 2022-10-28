import React from "react";
import {
  UilSearchAlt,
  UilLocationPinAlt,
  UilCelsius,
  UilFahrenheit,
} from "@iconscout/react-unicons";

const Search = () => {

  return (
    <div className="Search">
      <div className="SearchInput">
        <input type="text" placeholder="Search..." />
        <UilSearchAlt className="Icon" />
        <UilLocationPinAlt className="Icon" />
        <UilCelsius className="Unit"/>
        <h1>/</h1>
        <UilFahrenheit className="Unit"/>
      </div>
    </div>
  );
};

export default Search;
