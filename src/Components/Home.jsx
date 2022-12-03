import React, { useState, useEffect } from "react";
import { Search, Forecast, Navbar, TimeLocation, TempDetails } from "./index";
// import getFormattedWeatherData from "../API/WeatherServicesApi";
import getWeatherData from "../API/WeatherServicesApi";

const Home = () => {
  const [query, setQuery] = useState({ q: "calgary" });
  // const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getWeatherData("weather", query).then((data) => {
        setWeather(data)
      });
    }
    fetchWeather()
  }, [query])

  // useEffect(() => {
  //   const fetchWeather = async () => {
  //     await getFormattedWeatherData({ ...query, units }).then((data) => {
  //       setWeather(data);
  //       console.log(data)
  //     });
  //   };
  //   fetchWeather();
  // }, [query, units]);

  return (
    <div className="HomeContainer">
      <Navbar setQuery={setQuery} />
      <Search setQuery={setQuery} />
      {weather && (
        <div className="HomeContainer">
          <TimeLocation weather={weather} setWeather={setWeather} query={query} setQuery={setQuery} />
          <TempDetails weather={weather} setWeather={setWeather} query={query} setQuery={setQuery} />
          <Forecast title="hourly forecast" weather={weather} setWeather={setWeather} query={query} setQuery={setQuery} />
          <Forecast title="daily forecast" weather={weather} setWeather={setWeather} query={query} setQuery={setQuery} />
        </div>
      )}
    </div>
  );
};

export default Home;
