import React from 'react'
import { Search, Forecast, Navbar, TimeLocation, TempDetails } from "./index"

const Home = () => {

  return (
    <div className="HomeContainer">
        <Navbar />
        <Search />
        <TimeLocation />
        <TempDetails />
        <Forecast />
    </div>
  )
}

export default Home