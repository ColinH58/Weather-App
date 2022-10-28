import React from 'react'
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import { Search, Forecast, Navbar, TimeLocation } from "./index"
// import { getCurrentWeather } from "../API"

const Home = () => {
// const currentWeather = getCurrentWeather()

  return (
    <div className="HomeContainer">
        <Navbar />
        <Search />
        <TimeLocation />
        <Forecast />
        <UilReact size={150}/>
    </div>
  )
}

export default Home