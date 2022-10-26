import React from 'react'
import { Search, Forecast, Loading, Error } from "./index"

const Home = () => {
  return (
    <div>
        <Search />
        <Forecast />
        {/* {isLoading && <Loading />} */}
        {/* {isError && <Error />} */}
    </div>
  )
}

export default Home