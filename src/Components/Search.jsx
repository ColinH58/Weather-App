import React, { useState } from "react";
import {
  UilSearchAlt,
  // UilLocationPinAlt,
  // UilCelsius,
  // UilFahrenheit,
} from "@iconscout/react-unicons";

const Search = ({ setQuery }) => {
  const [queryString, setQueryString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(queryString);
  };

  return (
    <div className="Search">
      <div className="SearchInput">
        <input
          value={queryString}
          onChange={(e) => setQueryString(e.currentTarget.value)}
          type="text"
          placeholder="Search..."
        />
        <UilSearchAlt
          className="Icon"
          input="submit"
          type="submit"
          onClick={handleSubmit}
        />
      </div>
      {/* <UilLocationPinAlt className="Icon" />
        <UilCelsius className="Unit"/>
        <p className="Pipe">|</p>
        <UilFahrenheit className="Unit"/> */}
    </div>
  );
};

export default Search;
