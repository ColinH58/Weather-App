import React, { useState, useEffect } from "react";
import { Search, Forecast, Navbar, TimeLocation, TempDetails } from "./index";
// import getFormattedWeatherData from "../API/WeatherServicesApi";
import getWeatherData from "../API/WeatherServicesApi";

const Home = () => {
  const [query, setQuery] = useState({ q: "calgary" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getWeatherData("weather", query).then((data) => {
        setWeather(data)
      });
    }
    fetchWeather()
  }, [query, units])

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
      <Navbar />
      <Search />
      {weather && (
        <div className="HomeContainer">
          <TimeLocation weather={weather} setWeather={setWeather} />
          <TempDetails weather={weather} setWeather={setWeather} />
          <Forecast title="hourly forecast" weather={weather} setWeather={setWeather} />
          <Forecast title="daily forecast" weather={weather} setWeather={setWeather} />
        </div>
      )}
    </div>
  );
};

export default Home;
