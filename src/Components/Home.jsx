import React from 'react'
import { Search, Forecast, Navbar, TimeLocation, TempDetails } from "./index"
import getFormattedWeatherData from '../API/WeatherServicesApi'

const Home = () => {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: "calgary" });
    console.log(data);
  }

  fetchWeather();

  return (
    <div className="HomeContainer">
        <Navbar />
        <Search />
        <TimeLocation />
        <TempDetails />
        <Forecast title="hourly forecast" />
        <Forecast title="daily forecast" />
    </div>
  )
}

export default Home