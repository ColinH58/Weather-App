import React from 'react'
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import { Search, Forecast, Navbar, TimeLocation, TempDetails } from "./index"
// import { getCurrentWeather } from "../API"

const Home = () => {
// const currentWeather = getCurrentWeather()

  return (
    <div className="HomeContainer">
        <Navbar />
        <Search />
        <TimeLocation />
        <TempDetails />
        <Forecast />
        <UilReact size={150}/>
    </div>
  )
}

export default Home