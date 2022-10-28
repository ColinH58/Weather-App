import React from 'react'
import { Search, Forecast, Loading, Error } from "./index"
import { getCurrentWeather } from "../API"

const Home = () => {
const currentWeather = getCurrentWeather()

  return (
    <div>
        <Search />
        <Forecast />
        <h1>currentWeather</h1>
        {/* {isLoading && <Loading />} */}
        {/* {isError && <Error />} */}
    </div>
  )
}

export default Home