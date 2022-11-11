import React, { useState, useEffect } from "react";
import { Search, Forecast, Navbar, TimeLocation, TempDetails } from "./index";
import getFormattedWeatherData from "../API/WeatherServicesApi";

const Home = () => {
  const [query, setQuery] = useState({ q: "dallas" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className="HomeContainer">
      <Navbar />
      <Search />

      {weather && (
        <div className="HomeContainer">
          <TimeLocation />
          <TempDetails />
          <Forecast title="hourly forecast" />
          <Forecast title="daily forecast" />
        </div>
      )}
    </div>
  );
};

export default Home;
