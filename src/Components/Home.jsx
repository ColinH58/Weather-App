import React from 'react'
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import { Search, Forecast, Loading, Error, Navbar } from "./index"
// import { getCurrentWeather } from "../API"

const Home = () => {
// const currentWeather = getCurrentWeather()

  return (
    <div>
        <Navbar />
        <Search />
        <Forecast />
        <h1>currentWeather</h1>
        {/* {isLoading && <Loading />} */}
        {/* {isError && <Error />} */}
        <UilReact size={150}/>
    </div>
  )
}

export default Home