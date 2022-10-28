import React from 'react'
import { Search, Forecast, Navbar, TimeLocation, TempDetails } from "./index"

const Home = () => {

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