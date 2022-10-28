import React from "react";
import { UilSearchAlt, UilLocationPinAlt } from "@iconscout/react-unicons";

const Search = () => {
  return (
    <div className="Search">
      <div className="SearchInput">
        <input type="text" placeholder="Search..." />
        <UilSearchAlt className="Icon"/>
        <UilLocationPinAlt className="Icon"/>
      </div>
    </div>
  );
};

export default Search;
